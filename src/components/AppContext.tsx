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

const DETECTED_WALLETS = [
  { id: "freighter", name: "Freighter", icon: "🔐", installUrl: "https://www.freighter.app" },
  { id: "lobstr", name: "Lobstr", icon: "🐙", installUrl: "https://lobstr.co" },
  { id: "xbull", name: "xBull", icon: "🦬", installUrl: "https://xbull.app" },
  { id: "albedo", name: "Albedo", icon: "🌐", installUrl: "https://albedo.link" },
  { id: "walletconnect", name: "WalletConnect", icon: "🔗", installUrl: "https://walletconnect.com" },
];

export function detectWallets(): typeof DETECTED_WALLETS {
  const w = typeof window !== "undefined" ? window : {};
  const has = (prop: string) => !!(w as any)[prop];
  return DETECTED_WALLETS.map((wlt) => ({
    ...wlt,
    detected:
      (wlt.id === "freighter" && (has("freighterApi") || has("freighter"))) ||
      (wlt.id === "lobstr" && (has("lobstr") || has("lobstrWallet"))) ||
      (wlt.id === "xbull" && (has("xBull") || has("xbull"))) ||
      (wlt.id === "albedo" && has("albedo")) ||
      (wlt.id === "walletconnect" && false),
  }));
}

async function connectFreighter(): Promise<string> {
  const fApi = (window as any).freighterApi;
  if (!fApi) throw new Error("Freighter extension not found.");
  if (fApi.requestAccess) {
    const res = await fApi.requestAccess();
    if (res?.error) throw new Error(res.error);
    if (res?.address) return res.address;
  }
  if (fApi.getAddress) {
    const res = await fApi.getAddress();
    if (res?.error) throw new Error(res.error);
    if (res?.address) return res.address;
  }
  if (fApi.getPublicKey) {
    return await fApi.getPublicKey();
  }
  throw new Error("Unsupported Freighter API version.");
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
  const lobstr = (window as any).lobstr || (window as any).lobstrWallet;
  if (!lobstr) throw new Error("Lobstr not found. Use manual address entry or the Lobstr mobile app instead.");
  if (lobstr.getPublicKey) return await lobstr.getPublicKey();
  throw new Error("Unsupported Lobstr API.");
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [user, setUser] = useState<any | null>(null);
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

  // Restore session
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
