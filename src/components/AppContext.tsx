import { createContext, useContext, useState, useEffect, useMemo, useCallback, type ReactNode } from "react";
import { translations, type TranslationKey } from "@/i18n/translations";
import * as api from "@/services/api";

export type Language = { code: string; label: string };
export const languages: Language[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
  { code: "zh", label: "中文" },
];

type DonateTarget = { title: string; org: string; goal: number; raised: number } | null;

type WalletInfo = {
  connected: boolean;
  address: string | null;
  provider: string | null;
  detected: boolean;
};

type Ctx = {
  collapsed: boolean;
  toggleCollapsed: () => void;
  mobileOpen: boolean;
  openMobileNav: () => void;
  closeMobileNav: () => void;
  lang: string;
  setLang: (c: string) => void;
  t: (key: string, fallback?: string) => string;
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
  toggleTheme: () => void;
  wallet: WalletInfo;
  connectWallet: (provider: string) => Promise<void>;
  connectManual: (address: string, memo?: string) => Promise<void>;
  disconnectWallet: () => void;
  walletModalOpen: boolean;
  openWalletModal: () => void;
  closeWalletModal: () => void;
  donateTarget: DonateTarget;
  openDonate: (t: NonNullable<DonateTarget>) => void;
  closeDonate: () => void;
  xlmBalance: number | null;
  refreshBalance: () => Promise<void>;
  user: any | null;
  setUser: (u: any | null) => void;
  isAuthenticated: boolean;
};

const AppCtx = createContext<Ctx | null>(null);

export function useApp() {
  const v = useContext(AppCtx);
  if (!v) throw new Error("useApp must be used inside AppProvider");
  return v;
}

// Wallet detection lives in @/lib/walletDetection so the modal and any other
// caller share one implementation. The previous copy here was unused dead code
// that had already drifted out of sync with the modal's version (it checked
// "xBull" where the modal checked "xbull"), which is exactly the kind of bug
// #1 was masking.

async function connectFreighter(): Promise<string> {
  // #1: use the official @stellar/freighter-api package rather than poking at
  // window.freighterApi directly. Freighter talks to the page over
  // window.postMessage, so the raw global can be undefined even when the
  // extension is installed, enabled and working.
  //
  // Imported dynamically because the package is CommonJS-only: a static ESM
  // named import of it breaks this app's SSR prerender step at build time.
  // It's only ever needed in the browser, in response to a user click, so
  // deferring the load costs nothing.
  const { isConnected, requestAccess, getAddress } = await import("@stellar/freighter-api");

  const connected = await isConnected();
  if (connected.error || !connected.isConnected) {
    throw new Error("Freighter extension not found. Install it from freighter.app and reload the page.");
  }

  // requestAccess() prompts the user if the app isn't already authorised,
  // and returns the address once they approve.
  const access = await requestAccess();
  if (access.error) throw new Error(access.error);
  if (access.address) return access.address;

  const addr = await getAddress();
  if (addr.error) throw new Error(addr.error);
  if (addr.address) return addr.address;

  throw new Error("Freighter did not return an address.");
}

async function connectAlbedo(): Promise<string> {
  const albedo = (window as any).albedo;
  if (!albedo) throw new Error("Albedo not found.");
  const resp = await albedo.publicKey({});
  if (!resp?.pubkey) throw new Error("Albedo did not return an address.");
  return resp.pubkey;
}

async function connectXBull(): Promise<string> {
  const xbull = (window as any).xBull || (window as any).xbull;
  if (!xbull) throw new Error("xBull extension not found.");
  if (xbull.connect) {
    const res = await xbull.connect();
    if (typeof res === "string") return res;
    if (res?.publicKey) return res.publicKey;
  }
  if (xbull.getPublicKey) {
    return await xbull.getPublicKey();
  }
  throw new Error("Unsupported xBull API version.");
}

async function connectLobstr(): Promise<string> {
  // #33: use the official @lobstrco/signer-extension-api package rather than
  // poking at window.lobstr directly, for the same reason as Freighter (#1) —
  // Lobstr talks to the page over window.postMessage, so the raw global can
  // be undefined even when the extension is installed, enabled and working.
  //
  // Imported dynamically because the package is CommonJS-only: a static ESM
  // named import of it breaks this app's SSR prerender step at build time.
  // It's only ever needed in the browser, in response to a user click, so
  // deferring the load costs nothing.
  const { isConnected, getPublicKey } = await import("@lobstrco/signer-extension-api");

  const connected = await isConnected();
  if (!connected) {
    throw new Error("Lobstr extension not found. Install it from lobstr.co or use manual address entry instead.");
  }

  const publicKey = await getPublicKey();
  if (!publicKey) throw new Error("Lobstr did not return an address.");
  return publicKey;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [user, setUser] = useState<any | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [wallet, setWallet] = useState<WalletInfo>({
    connected: false,
    address: null,
    provider: null,
    detected: false,
  });
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [donateTarget, setDonateTarget] = useState<DonateTarget>(null);
  const [xlmBalance, setXlmBalance] = useState<number | null>(null);

  const isAuthenticated = !!user;

  const openMobileNav = useCallback(() => setMobileOpen(true), []);
  const closeMobileNav = useCallback(() => setMobileOpen(false), []);

  // Restore session and theme
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("trustbridge_wallet");
        if (stored) {
          const data = JSON.parse(stored);
          setWallet({ ...data, detected: true });
          if (data.address) refreshBalanceExternal(data.address);
        }
        const token = localStorage.getItem("trustbridge_token");
        if (token) {
          api.getMe().then((me) => setUser(me.user)).catch(() => localStorage.removeItem("trustbridge_token"));
        }
        const savedTheme = localStorage.getItem("trustbridge_theme") as "light" | "dark" | null;
        if (savedTheme === "light" || savedTheme === "dark") {
          setTheme(savedTheme);
        }
      } catch {}
    }
  }, []);

  const refreshBalanceExternal = async (address: string) => {
    try {
      const bal = await api.getBalance(address);
      setXlmBalance(bal.balance);
    } catch {}
  };

  const refreshBalance = async () => {
    if (wallet.address) await refreshBalanceExternal(wallet.address);
  };

  const t = (key: string, fallback?: string) => (translations[lang as keyof typeof translations] as Record<string, string>)?.[key] ?? fallback ?? key;

  // Sync theme with DOM
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
    localStorage.setItem("trustbridge_theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((v) => (v === "light" ? "dark" : "light"));
  }, []);

  const connectWallet = async (provider: string) => {
    try {
      let pubkey: string;
      if (provider === "freighter") pubkey = await connectFreighter();
      else if (provider === "albedo") pubkey = await connectAlbedo();
      else if (provider === "xbull") pubkey = await connectXBull();
      else if (provider === "lobstr") pubkey = await connectLobstr();
      else throw new Error("WalletConnect is not configured yet.");

      setWallet({ connected: true, address: pubkey, provider, detected: true });
      setWalletModalOpen(false);
      localStorage.setItem("trustbridge_wallet", JSON.stringify({ connected: true, address: pubkey, provider, detected: true }));
      refreshBalanceExternal(pubkey);
    } catch (err) {
      console.error("Wallet connection error:", err);
      setWalletModalOpen(false);
    }
  };

  const connectManual = async (address: string, memo?: string) => {
    if (!address.startsWith('G') || address.length !== 56) {
      throw new Error("Invalid Stellar address. Must start with 'G' and be 56 characters.");
    }
    try {
      const resp = await fetch(`https://horizon.stellar.org/accounts/${address}`);
      if (!resp.ok) {
        throw new Error("Account not found on Stellar network. Please check the address.");
      }
      const accountData = await resp.json();
      const bal = accountData.balances?.find((b: any) => b.asset_type === 'native')?.balance || '0';
      setWallet({ connected: true, address, provider: 'manual', detected: true });
      setWalletModalOpen(false);
      localStorage.setItem("trustbridge_wallet", JSON.stringify({ connected: true, address, provider: 'manual', detected: true }));
      setXlmBalance(parseFloat(bal));
      try { await api.updateProfile({ walletAddress: address, walletProvider: 'manual' }); } catch {}
    } catch (err: any) {
      throw new Error(err.message || "Failed to verify Stellar address");
    }
  };

  const disconnectWallet = () => {
    setWallet({ connected: false, address: null, provider: null, detected: false });
    localStorage.removeItem("trustbridge_wallet");
    setXlmBalance(null);
  };

  return (
    <AppCtx.Provider
      value={{
        collapsed,
        toggleCollapsed: () => setCollapsed((v) => !v),
        mobileOpen,
        openMobileNav,
        closeMobileNav,
        lang,
        setLang,
        t,
        theme,
        setTheme,
        toggleTheme,
        wallet,
        connectWallet,
        connectManual,
        disconnectWallet,
        walletModalOpen,
        openWalletModal: () => setWalletModalOpen(true),
        closeWalletModal: () => setWalletModalOpen(false),
        donateTarget,
        openDonate: (t) => setDonateTarget(t),
        closeDonate: () => setDonateTarget(null),
        xlmBalance,
        refreshBalance,
        user,
        setUser,
        isAuthenticated,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
}
