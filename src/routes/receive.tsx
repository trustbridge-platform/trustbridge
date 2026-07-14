import { createFileRoute } from "@tanstack/react-router";
import AppShell from "@/components/AppShell";
import { useApp } from "@/components/AppContext";
import { useState, useEffect } from "react";
import QRCode from "qrcode";
import { Copy, Share2, Wallet, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/receive")({
  head: () => ({ meta: [{ title: "Receive — TrustBridge" }] }),
  component: ReceivePage,
});

function ReceivePage() {
  const { wallet, openWalletModal, t } = useApp();
  const [copied, setCopied] = useState(false);
  const [qrSvg, setQrSvg] = useState<string>("");
  const address = wallet.address ?? "GA…CONNECT_WALLET_TO_VIEW";

  useEffect(() => {
    if (!wallet.address) {
      setQrSvg("");
      return;
    }
    QRCode.toString(`stellar:${wallet.address}?amount=`, {
      type: "svg",
      margin: 1,
      width: 400,
      color: { dark: "#0b1220", light: "#ffffff" },
    })
      .then(setQrSvg)
      .catch(() => setQrSvg(""));
  }, [wallet.address]);

  const copy = () => {
    navigator.clipboard?.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <AppShell title={t("receive")} subtitle={t("overview")}>
      <div className="max-w-md mx-auto">
        {!wallet.connected ? (
          <div className="glass rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-brand grid place-items-center mx-auto mb-4 shadow-glow">
              <Wallet className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="font-display text-xl font-semibold">{t("connectWallet")}</div>
            <p className="text-sm text-muted-foreground mt-2 mb-6">
              Connect your wallet to receive funds
            </p>
            <button onClick={openWalletModal} className="h-11 px-6 rounded-xl bg-gradient-brand text-primary-foreground font-medium hover:shadow-glow transition inline-flex items-center gap-2">
              <Wallet className="w-4 h-4" /> Connect Wallet
            </button>
          </div>
        ) : (
          <div className="glass rounded-2xl p-6 text-center">
            {/* QR Code - centered, properly sized */}
            <div className="flex justify-center mb-5">
              <div className="bg-white p-3 rounded-xl shadow-lg">
                {qrSvg ? (
                  <div
                    className="rounded-lg"
                    style={{ width: 200, height: 200 }}
                    dangerouslySetInnerHTML={{ __html: qrSvg }}
                  />
                ) : (
                  <div className="w-[200px] h-[200px] rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                    Loading...
                  </div>
                )}
              </div>
            </div>

            {/* Label */}
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">
              Your Wallet Address
            </div>

            {/* Address with copy */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono mb-5">
              <span className="truncate flex-1">{address}</span>
              <button onClick={copy} className="shrink-0 px-3 py-1.5 rounded-lg bg-gradient-brand text-primary-foreground text-[11px] font-medium inline-flex items-center gap-1 hover:shadow-glow transition">
                <Copy className="w-3 h-3" /> {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button onClick={copy} className="h-11 rounded-xl bg-gradient-brand text-primary-foreground text-sm font-medium inline-flex items-center justify-center gap-2 hover:shadow-glow transition">
                <Copy className="w-4 h-4" /> {copied ? t("copied") : t("copy")}
              </button>
              <button className="h-11 rounded-xl glass hover:border-white/25 text-sm font-medium inline-flex items-center justify-center gap-2 transition">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>

            <p className="text-[11px] text-muted-foreground mt-4">
              {t("scanToSend")}
            </p>
          </div>
        )}
      </div>
    </AppShell>
  );
}