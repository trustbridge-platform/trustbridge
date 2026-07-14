import { X, Wallet as WalletIcon, ExternalLink, CheckCircle2 } from "lucide-react";
import { useApp } from "../AppContext";

const wallets = [
  { id: "freighter", name: "Freighter", desc: "Browser extension for Stellar", detected: true, url: "https://freighter.app" },
  { id: "lobstr", name: "Lobstr", desc: "Mobile + web Stellar wallet", detected: true, url: "https://lobstr.co" },
  { id: "metamask", name: "MetaMask", desc: "Via Stellar Snap", detected: false, url: "https://metamask.io" },
  { id: "walletconnect", name: "WalletConnect", desc: "Scan with any mobile wallet", detected: true, url: "https://walletconnect.com" },
  { id: "albedo", name: "Albedo", desc: "Web-based Stellar signer", detected: true, url: "https://albedo.link" },
  { id: "phantom", name: "Phantom", desc: "Multi-chain wallet", detected: false, url: "https://phantom.app" },
];

export default function ConnectWalletModal() {
  const { walletModalOpen, closeWalletModal, connectWallet } = useApp();
  if (!walletModalOpen) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/60 backdrop-blur-sm" onClick={closeWalletModal}>
      <div className="glass-strong rounded-2xl w-full max-w-lg shadow-elegant" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-brand grid place-items-center shadow-glow">
              <WalletIcon className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display font-semibold">Connect Wallet</div>
              <div className="text-xs text-muted-foreground">Choose a Stellar-compatible wallet</div>
            </div>
          </div>
          <button onClick={closeWalletModal} className="w-8 h-8 grid place-items-center rounded-md hover:bg-white/5 text-muted-foreground">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-3 max-h-[60vh] overflow-y-auto space-y-1.5">
          {wallets.map((w) => (
            <button
              key={w.id}
              onClick={() => (w.detected ? connectWallet(w.name) : window.open(w.url, "_blank"))}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 border border-white/5 hover:border-white/15 transition text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-brand/30 grid place-items-center font-display font-semibold text-sm">
                {w.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm flex items-center gap-2">
                  {w.name}
                  {w.detected && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald">
                      <CheckCircle2 className="w-3 h-3" /> Detected
                    </span>
                  )}
                </div>
                <div className="text-xs text-muted-foreground truncate">{w.desc}</div>
              </div>
              {w.detected ? (
                <span className="text-xs text-primary">Connect</span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  Install <ExternalLink className="w-3 h-3" />
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="p-4 text-[11px] text-muted-foreground text-center border-t border-white/10">
          By connecting, you agree to TrustBridge's Terms and Privacy Policy.
        </div>
      </div>
    </div>
  );
}
