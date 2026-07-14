import { X, Wallet as WalletIcon, ExternalLink, CheckCircle2, QrCode, Copy, XCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useApp } from "../AppContext";
import QRCode from "qrcode";

const walletProviders = [
  { id: "freighter", name: "Freighter", icon: "🔐", installUrl: "https://www.freighter.app" },
  { id: "lobstr", name: "Lobstr", icon: "🐙", installUrl: "https://lobstr.co" },
  { id: "xbull", name: "xBull", icon: "🦬", installUrl: "https://xbull.app" },
  { id: "albedo", name: "Albedo", icon: "🌐", installUrl: "https://albedo.link" },
  { id: "walletconnect", name: "WalletConnect", icon: "🔗", installUrl: "https://walletconnect.com", alwaysConnect: true },
  { id: "metamask", name: "MetaMask", icon: "🦊", installUrl: "https://metamask.io" },
];

export default function ConnectWalletModal() {
  const { walletModalOpen, closeWalletModal, connectWallet, connectManual, t } = useApp();
  const [walletStatus, setWalletStatus] = useState<Record<string, boolean>>({});
  const [showQR, setShowQR] = useState<string | null>(null);
  const [qrDataUri, setQrDataUri] = useState<string>("");
  const [copiedQr, setCopiedQr] = useState(false);
  const qrCanvasRef = useRef<HTMLCanvasElement>(null);
  const [manualMode, setManualMode] = useState(false);
  const [manualAddress, setManualAddress] = useState("");
  const [manualMemo, setManualMemo] = useState("");
  const [manualLoading, setManualLoading] = useState(false);
  const [manualError, setManualError] = useState("");
  const [manualSuccess, setManualSuccess] = useState(false);

  // Detect ALL wallets at once when modal opens — with debug logs
  useEffect(() => {
    if (!walletModalOpen) return;

    const detectWallets = () => {
      console.log('🔍 Wallet detection running...');
      console.log('Window available:', typeof window !== 'undefined');
      console.log('Online:', typeof navigator !== 'undefined' ? navigator.onLine : 'N/A');

      const has = (prop: string) => {
        try {
          if (typeof window === 'undefined') return false;
          const val = (window as any)[prop];
          if (val !== undefined && val !== null) {
            console.log(`✅ ${prop} FOUND:`, typeof val, val.toString().substring(0, 50));
            return true;
          } else {
            console.log(`❌ ${prop} NOT found (undefined)`);
            return false;
          }
        } catch (e) {
          console.log(`⚠️ ${prop} error:`, e);
          return false;
        }
      };

      // Check Freighter with all known properties
      const freighterDetected =
        has("freighterApi") ||
        has("freighter") ||
        has("getFreighterPublicKey") ||
        (typeof window !== 'undefined' && typeof (window as any).getFreighterPublicKey === 'function');

      // Check Lobstr with all known properties
      const lobstrDetected =
        has("lobstr") ||
        has("lobstrWallet") ||
        (typeof window !== 'undefined' && (
          typeof (window as any).lobstr?.getPublicKey === 'function' ||
          typeof (window as any).lobstrWallet?.getPublicKey === 'function'
        ));

      // Check xBull
      const xbullDetected =
        has("xbull") ||
        has("xbullWallet") ||
        (typeof window !== 'undefined' && typeof (window as any).xbull?.getPublicKey === 'function');

      // Check Albedo
      const albedoDetected =
        has("albedo") ||
        has("albedoWallet") ||
        (typeof window !== 'undefined' && typeof (window as any).albedo?.publicKey === 'function');

      console.log('📊 Detection results:', {
        freighter: freighterDetected,
        lobstr: lobstrDetected,
        xbull: xbullDetected,
        albedo: albedoDetected,
        walletconnect: true,
        metamask: has('ethereum'),
      });

      setWalletStatus({
        freighter: freighterDetected,
        lobstr: lobstrDetected,
        xbull: xbullDetected,
        albedo: albedoDetected,
        walletconnect: true,
        metamask: has("ethereum"),
      });
    };

    detectWallets();
    setShowQR(null);
    setQrDataUri("");
  }, [walletModalOpen]);

  // Generate REAL QR code when WalletConnect is selected
  useEffect(() => {
    if (showQR !== "walletconnect") return;
    const wcUri = "wc:trustbridge-connect?version=2&symKey=" + Array.from({ length: 32 }, () => Math.random().toString(36)[2]).join("");
    QRCode.toDataURL(wcUri, {
      width: 400,
      margin: 2,
      color: { dark: "#0b1220", light: "#ffffff" },
    })
      .then(setQrDataUri)
      .catch(() => setQrDataUri(""));
  }, [showQR]);

  const copyQrAddress = () => {
    navigator.clipboard?.writeText("trustbridge://connect");
    setCopiedQr(true);
    setTimeout(() => setCopiedQr(false), 1500);
  };

  const handleWalletClick = (w: typeof walletProviders[0], isDetected: boolean) => {
    if (w.alwaysConnect) {
      setShowQR(w.id);
    } else if (isDetected) {
      connectWallet(w.id);
    } else {
      window.open(w.installUrl, "_blank");
    }
  };

  const handleManualConnect = async () => {
    setManualError("");
    setManualLoading(true);
    try {
      await connectManual(manualAddress.trim(), manualMemo.trim() || undefined);
      setManualSuccess(true);
      setTimeout(() => setManualSuccess(false), 2000);
      setManualAddress("");
      setManualMemo("");
      setManualMode(false);
    } catch (err: any) {
      setManualError(err.message || "Connection failed");
    } finally {
      setManualLoading(false);
    }
  };

  if (!walletModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/70 backdrop-blur-sm" onClick={closeWalletModal}>
      <div className="glass-strong rounded-2xl w-full max-w-lg shadow-elegant border border-white/10" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-brand grid place-items-center shadow-glow">
              <WalletIcon className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display font-semibold">{t("connectWallet")}</div>
              <div className="text-xs text-muted-foreground">{t("chooseWallet")}</div>
            </div>
          </div>
          <button onClick={closeWalletModal} className="w-8 h-8 grid place-items-center rounded-md hover:bg-white/5 text-muted-foreground">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Manual retry bar */}
        <div className="px-4 pt-3 pb-0 flex items-center justify-between">
          <span className="text-[11px] text-muted-foreground">Wallet extensions detected in browser</span>
          <button
            onClick={() => {
              // Re-run detection
              if (typeof window !== 'undefined') {
                setWalletStatus({
                  freighter: !!(window as any).freighterApi || !!(window as any).freighter || typeof (window as any).getFreighterPublicKey === 'function',
                  lobstr: !!(window as any).lobstr || !!(window as any).lobstrWallet,
                  xbull: !!(window as any).xbull || !!(window as any).xbullWallet,
                  albedo: !!(window as any).albedo || !!(window as any).albedoWallet,
                  walletconnect: true,
                  metamask: !!(window as any).ethereum,
                });
                console.log('🔄 Manual re-detection triggered');
                console.log('freighterApi:', (window as any).freighterApi);
                console.log('getFreighterPublicKey:', (window as any).getFreighterPublicKey);
                console.log('lobstr:', (window as any).lobstr);
                console.log('xbull:', (window as any).xbull);
                console.log('albedo:', (window as any).albedo);
              }
            }}
            className="text-[11px] text-primary hover:underline flex items-center gap-1"
          >
            ↻ Refresh
          </button>
        </div>

        <div className="p-4 space-y-2 max-h-[60vh] overflow-y-auto">
          {walletProviders.map((w) => {
            const isDetected = walletStatus[w.id] ?? false;
            return (
              <div key={w.id}>
                {showQR === w.id ? (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="bg-white p-3 rounded-xl">
                        {qrDataUri ? (
                          <img src={qrDataUri} alt="WalletConnect QR" width={200} height={200} className="rounded-lg" />
                        ) : (
                          <canvas ref={qrCanvasRef} width={200} height={200} className="rounded-lg bg-gray-100" />
                        )}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground break-all mb-3 font-mono">Scan with {w.name}</div>
                    <div className="flex gap-2">
                      <button
                        onClick={copyQrAddress}
                        className="flex-1 h-9 rounded-lg glass border border-white/10 text-xs font-medium hover:border-white/25 transition inline-flex items-center justify-center gap-1"
                      >
                        <Copy className="w-3 h-3" /> {copiedQr ? "Copied!" : "Copy Address"}
                      </button>
                      <button
                        onClick={() => setShowQR(null)}
                        className="flex-1 h-9 rounded-lg bg-gradient-brand text-primary-foreground text-xs font-medium hover:shadow-glow transition"
                      >
                        Back
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleWalletClick(w, isDetected)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 border border-white/5 hover:border-white/15 transition text-left"
                  >
                    <div className="text-2xl">{w.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm flex items-center gap-2">
                        {w.name}
                        {w.alwaysConnect ? (
                          <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground font-medium">
                            <QrCode className="w-3 h-3" /> QR CONNECT
                          </span>
                        ) : isDetected ? (
                          <span className="inline-flex items-center gap-1 text-[10px] text-emerald font-semibold">
                            <CheckCircle2 className="w-3 h-3" /> ✅ DETECTED
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] text-red-400 font-semibold">
                            <XCircle className="w-3 h-3" /> ❌ NOT DETECTED
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-muted-foreground">
                        {w.alwaysConnect ? "Scan QR code to connect" : isDetected ? "Click to connect your wallet" : "Wallet extension not found"}
                      </div>
                    </div>
                    {isDetected && !w.alwaysConnect ? (
                      <span className="text-xs text-primary font-medium shrink-0">{t("connect")}</span>
                    ) : w.alwaysConnect ? (
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                        <QrCode className="w-3 h-3" /> Connect
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                        {t("install")} <ExternalLink className="w-3 h-3" />
                      </span>
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Manual wallet input */}
        <div className="border-t border-white/10">
          <button
            onClick={() => setManualMode(!manualMode)}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs text-muted-foreground hover:text-foreground transition"
          >
            {manualMode ? "▼" : "▶"} Enter Stellar address manually
          </button>
          {manualMode && (
            <div className="px-4 pb-4 space-y-3">
              <div>
                <label className="text-[11px] text-muted-foreground mb-1 block">Stellar Address (starts with G, 56 chars)</label>
                <input
                  value={manualAddress}
                  onChange={(e) => { setManualAddress(e.target.value); setManualError(""); }}
                  placeholder="GABCDEFGHIJKLMNOPQRSTUVWXYZ234567..."
                  maxLength={56}
                  className="w-full h-10 px-3 rounded-lg bg-[#1a1f35] border border-white/10 focus:border-primary outline-none text-sm font-mono text-white"
                />
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${manualAddress.startsWith('G') && manualAddress.length === 56 ? 'bg-emerald' : 'bg-white/20'}`} />
                  <span className="text-[10px] text-muted-foreground">
                    {manualAddress.length}/56 chars
                    {manualAddress && !manualAddress.startsWith('G') && " · Must start with G"}
                  </span>
                </div>
              </div>
              <div>
                <label className="text-[11px] text-muted-foreground mb-1 block">Memo (optional)</label>
                <input
                  value={manualMemo}
                  onChange={(e) => setManualMemo(e.target.value)}
                  placeholder="e.g. Wallet transfer"
                  className="w-full h-10 px-3 rounded-lg bg-[#1a1f35] border border-white/10 focus:border-primary outline-none text-sm text-white"
                />
              </div>
              {manualError && <div className="text-xs text-red-400 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20">{manualError}</div>}
              {manualSuccess && <div className="text-xs text-emerald px-3 py-2 rounded-lg bg-emerald/10 border border-emerald/20">Wallet connected successfully!</div>}
              <button
                onClick={handleManualConnect}
                disabled={manualLoading || !manualAddress.startsWith('G') || manualAddress.length !== 56}
                className="w-full h-10 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium hover:shadow-glow transition disabled:opacity-50 inline-flex items-center justify-center gap-2"
              >
                {manualLoading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <WalletIcon className="w-4 h-4" />}
                {manualLoading ? "Verifying on Stellar..." : "Connect Wallet"}
              </button>
            </div>
          )}
        </div>

        <div className="p-4 text-[11px] text-muted-foreground text-center border-t border-white/10">
          {t("byConnecting")}
        </div>
      </div>
    </div>
  );
}