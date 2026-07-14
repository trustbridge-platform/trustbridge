import { createFileRoute } from "@tanstack/react-router";
import AppShell from "@/components/AppShell";
import { Badge } from "@/components/ui-bits";
import { Search, ExternalLink, ChevronDown, ArrowDownLeft, ArrowUpRight, Heart } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/transactions")({
  head: () => ({ meta: [{ title: "Transactions — TrustBridge" }] }),
  component: Transactions,
});

type Tx = {
  id: string;
  hash: string;
  type: "donation" | "send" | "receive";
  campaign: string;
  amount: number;
  asset: string;
  status: "confirmed" | "pending" | "failed";
  date: string;
  memo?: string;
  fee: number;
};

const all: Tx[] = [
  { id: "TX-94821", hash: "a1f9c7…d3e2", type: "donation", campaign: "Clean Water Yemen", amount: -125, asset: "XLM", status: "confirmed", date: "2026-06-21 14:32", fee: 0.00001, memo: "Campaign #CW-2026" },
  { id: "TX-94820", hash: "b2c8d4…91f0", type: "receive", campaign: "Direct transfer", amount: 500, asset: "XLM", status: "confirmed", date: "2026-06-21 13:15", fee: 0.00001 },
  { id: "TX-94819", hash: "f7e3b1…ac20", type: "send", campaign: "Vendor payout", amount: -1200, asset: "XLM", status: "pending", date: "2026-06-21 11:48", fee: 0.00001 },
  { id: "TX-94818", hash: "9d2a55…7be4", type: "donation", campaign: "Earthquake Relief Türkiye", amount: -300, asset: "USDC", status: "confirmed", date: "2026-06-20 21:02", fee: 0.00001 },
  { id: "TX-94817", hash: "1c44a0…0091", type: "receive", campaign: "Mobile Clinics Sudan", amount: 75, asset: "XLM", status: "failed", date: "2026-06-20 18:50", fee: 0 },
  { id: "TX-94816", hash: "33fa12…ee59", type: "donation", campaign: "Books for Rural Kenya", amount: -50, asset: "XLM", status: "confirmed", date: "2026-06-20 09:11", fee: 0.00001 },
];

const tabs = ["All", "Sent", "Received"] as const;

function Transactions() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  const list = useMemo(() => {
    return all.filter((t) => {
      if (tab === "Sent" && t.amount >= 0) return false;
      if (tab === "Received" && t.amount < 0) return false;
      if (!q) return true;
      const s = q.toLowerCase();
      return t.id.toLowerCase().includes(s) || t.hash.toLowerCase().includes(s) || t.campaign.toLowerCase().includes(s);
    });
  }, [tab, q]);

  return (
    <AppShell title="Transactions" subtitle="Every transfer is verifiable on the Stellar ledger.">
      <div className="glass rounded-2xl p-4 mb-6 flex flex-col md:flex-row gap-3 md:items-center">
        <div className="flex items-center gap-1 p-1 rounded-lg bg-white/5 border border-white/10">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`h-8 px-3 rounded-md text-xs font-medium transition ${
                tab === t ? "bg-gradient-brand text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by ID, hash, or campaign…"
            className="w-full h-10 pl-9 pr-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm"
          />
        </div>
      </div>

      <div className="glass rounded-2xl overflow-hidden divide-y divide-white/5">
        {list.map((t) => {
          const isOpen = open === t.id;
          const Icon = t.type === "donation" ? Heart : t.amount >= 0 ? ArrowDownLeft : ArrowUpRight;
          return (
            <div key={t.id}>
              <button
                onClick={() => setOpen(isOpen ? null : t.id)}
                className="w-full flex items-center gap-4 p-4 hover:bg-white/[0.02] transition text-left"
              >
                <div className={`w-9 h-9 rounded-lg grid place-items-center shrink-0 ${t.amount >= 0 ? "bg-emerald/10 text-emerald" : "bg-primary/10 text-primary"}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium capitalize truncate">{t.type} · {t.campaign}</div>
                  <div className="text-xs text-muted-foreground font-mono truncate">{t.hash} · {t.id}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className={`text-sm font-mono ${t.amount >= 0 ? "text-emerald" : ""}`}>
                    {t.amount >= 0 ? "+" : ""}
                    {t.amount} {t.asset}
                  </div>
                  <div className="text-[11px] text-muted-foreground">{t.date}</div>
                </div>
                <Badge tone={t.status === "confirmed" ? "success" : t.status === "pending" ? "warning" : "danger"}>
                  {t.status}
                </Badge>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="bg-white/[0.02] px-4 pb-4 grid sm:grid-cols-2 gap-3 text-xs">
                  <Detail label="Transaction ID" value={t.id} />
                  <Detail label="Hash" value={t.hash} mono />
                  <Detail label="Network fee" value={`${t.fee} XLM`} />
                  <Detail label="Memo" value={t.memo ?? "—"} />
                  <a
                    href="#"
                    className="sm:col-span-2 inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    View on Stellar Expert <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
        {list.length === 0 && (
          <div className="p-8 text-center text-sm text-muted-foreground">No transactions match your filters.</div>
        )}
      </div>
    </AppShell>
  );
}

function Detail({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="glass rounded-lg p-3">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={`mt-1 ${mono ? "font-mono" : ""}`}>{value}</div>
    </div>
  );
}
