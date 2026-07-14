import { createFileRoute } from "@tanstack/react-router";
import AppShell from "@/components/AppShell";
import { useApp } from "@/components/AppContext";
import { FakeQR } from "@/components/ui-bits";
import { Copy, Share2, Wallet } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/receive")({
  head: () => ({ meta: [{ title: "Receive — TrustBridge" }] }),
  component: ReceivePage,
});

function ReceivePage() {
  const { wallet, openWalletModal } = useApp();
  const [copied, setCopied] = useState(false);
  const address = wallet.address ?? "GA…CONNECT_WALLET_TO_VIEW";
  const copy = () => {
    navigator.clipboard?.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <AppShell title="Receive" subtitle="Share your Stellar address to receive donations.">
      <div className="glass rounded-2xl p-8 max-w-md mx-auto text-center">
        {!wallet.connected ? (
          <>
            <div className="w-14 h-14 rounded-2xl bg-gradient-brand grid place-items-center mx-auto mb-4 shadow-glow">
              <Wallet className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="font-display text-lg font-semibold">Connect a wallet</div>
            <p className="text-sm text-muted-foreground mt-1 mb-5">
              Connect your Stellar wallet to view your receive address and QR code.
            </p>
            <button onClick={openWalletModal} className="h-11 px-5 rounded-xl bg-gradient-brand text-primary-foreground font-medium hover:shadow-glow transition">
              Connect Wallet
            </button>
          </>
        ) : (
          <>
            <div className="flex justify-center mb-5"><FakeQR value={address} size={220} /></div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Your Stellar address
            </div>
            <div className="font-mono text-sm break-all p-3 rounded-lg bg-white/5 border border-white/10">
              {address}
            </div>
            <div className="grid grid-cols-2 gap-2 mt-5">
              <button onClick={copy} className="h-10 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium inline-flex items-center justify-center gap-2 hover:shadow-glow transition">
                <Copy className="w-4 h-4" /> {copied ? "Copied" : "Copy"}
              </button>
              <button className="h-10 rounded-lg glass hover:border-white/25 text-sm font-medium inline-flex items-center justify-center gap-2 transition">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
            <p className="text-[11px] text-muted-foreground mt-4">
              Only send Stellar-network assets to this address. Other networks may result in loss of funds.
            </p>
          </>
        )}
      </div>
    </AppShell>
  );
}
