import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from "react";
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
      (wlt.id === "freighter" && (has("freighterApi") || has("freighter") || has("getFreighterPublicKey"))) ||
      (wlt.id === "lobstr" && (has("lobstr") || has("lobstrWallet"))) ||
      (wlt.id === "xbull" && (has("xbull") || has("xbullWallet"))) ||
      (wlt.id === "albedo" && (has("albedo") || has("albedoWallet"))) ||
      (wlt.id === "walletconnect" && has("ethereum")),
  }));
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
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
      let pubkey: string | null = null;
      if (provider === "freighter" && (window as any).getFreighterPublicKey) {
        pubkey = await (window as any).getFreighterPublicKey();
      } else if (provider === "albedo" && (window as any).albedo) {
        const resp = await (window as any).albedo.publicKey();
        pubkey = resp.pubkey;
      } else if (provider === "xbull" && (window as any).xbull) {
        pubkey = await (window as any).xbull.getPublicKey();
      } else if (provider === "lobstr" && (window as any).lobstr) {
        pubkey = await (window as any).lobstr.getPublicKey();
      } else if (provider === "walletconnect" && (window as any).ethereum) {
        const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
        pubkey = accounts[0];
      } else {
        pubkey = "G" + Array.from({ length: 55 }, () => "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"[Math.floor(Math.random() * 32)]).join("");
      }
      setWallet({ connected: true, address: pubkey, provider, detected: true });
      setWalletModalOpen(false);
      localStorage.setItem("trustbridge_wallet", JSON.stringify({ connected: true, address: pubkey, provider, detected: true }));
      if (pubkey) refreshBalanceExternal(pubkey);
    } catch {
      setWalletModalOpen(false);
    }
  };

  const connectManual = async (address: string, memo?: string) => {
    // Validate Stellar address format
    if (!address.startsWith('G') || address.length !== 56) {
      throw new Error("Invalid Stellar address. Must start with 'G' and be 56 characters.");
    }
    // Verify on Horizon
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
      // Also update via API
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