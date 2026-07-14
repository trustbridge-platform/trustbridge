import { createContext, useContext, useState, type ReactNode } from "react";

export type Language = { code: string; label: string };
export const languages: Language[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
  { code: "zh", label: "中文" },
];

type DonateTarget = { title: string; org: string; goal: number; raised: number } | null;

type Ctx = {
  collapsed: boolean;
  toggleCollapsed: () => void;
  lang: string;
  setLang: (c: string) => void;
  wallet: { connected: boolean; address: string | null; provider: string | null };
  connectWallet: (provider: string) => void;
  disconnectWallet: () => void;
  walletModalOpen: boolean;
  openWalletModal: () => void;
  closeWalletModal: () => void;
  donateTarget: DonateTarget;
  openDonate: (t: NonNullable<DonateTarget>) => void;
  closeDonate: () => void;
};

const AppCtx = createContext<Ctx | null>(null);

export function useApp() {
  const v = useContext(AppCtx);
  if (!v) throw new Error("useApp must be used inside AppProvider");
  return v;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [lang, setLang] = useState("en");
  const [wallet, setWallet] = useState<Ctx["wallet"]>({
    connected: false,
    address: null,
    provider: null,
  });
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [donateTarget, setDonateTarget] = useState<DonateTarget>(null);

  const connectWallet = (provider: string) => {
    const address =
      "G" +
      Array.from({ length: 55 }, () =>
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"[Math.floor(Math.random() * 32)],
      ).join("");
    setWallet({ connected: true, address, provider });
    setWalletModalOpen(false);
  };

  return (
    <AppCtx.Provider
      value={{
        collapsed,
        toggleCollapsed: () => setCollapsed((v) => !v),
        lang,
        setLang,
        wallet,
        connectWallet,
        disconnectWallet: () =>
          setWallet({ connected: false, address: null, provider: null }),
        walletModalOpen,
        openWalletModal: () => setWalletModalOpen(true),
        closeWalletModal: () => setWalletModalOpen(false),
        donateTarget,
        openDonate: (t) => setDonateTarget(t),
        closeDonate: () => setDonateTarget(null),
      }}
    >
      {children}
    </AppCtx.Provider>
  );
}
