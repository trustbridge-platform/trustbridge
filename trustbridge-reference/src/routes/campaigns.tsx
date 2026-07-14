import { createFileRoute } from "@tanstack/react-router";
import AppShell from "@/components/AppShell";
import { Progress, Badge } from "@/components/ui-bits";
import { useApp } from "@/components/AppContext";
import { Search, Users, Clock, Flame, Filter, Heart } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/campaigns")({
  head: () => ({ meta: [{ title: "Campaigns — TrustBridge" }] }),
  component: Campaigns,
});

const categories = ["All", "Food & Water", "Disaster Relief", "Medical", "Education"];
const sorts = ["Trending", "Urgent", "Nearly Funded"];

const allCampaigns = [
  { id: 1, title: "Clean Water for Yemen", org: "Mercy Wells", cat: "Food & Water", raised: 84200, goal: 120000, donors: 1284, days: 12, urgent: true, gradient: "from-blue-500 to-emerald-400" },
  { id: 2, title: "Earthquake Relief Türkiye", org: "Global Aid Network", cat: "Disaster Relief", raised: 198400, goal: 250000, donors: 4820, days: 4, urgent: true, gradient: "from-rose-500 to-amber-400" },
  { id: 3, title: "Mobile Clinics Sudan", org: "MedBridge", cat: "Medical", raised: 42100, goal: 90000, donors: 612, days: 28, urgent: false, gradient: "from-emerald-500 to-cyan-400" },
  { id: 4, title: "Books for Rural Kenya", org: "EduFuture", cat: "Education", raised: 28900, goal: 45000, donors: 408, days: 19, urgent: false, gradient: "from-violet-500 to-blue-500" },
  { id: 5, title: "Food Aid Gaza", org: "Hope Kitchen", cat: "Food & Water", raised: 312000, goal: 350000, donors: 9201, days: 7, urgent: true, gradient: "from-amber-500 to-rose-500" },
  { id: 6, title: "Flood Recovery Pakistan", org: "RiverCare", cat: "Disaster Relief", raised: 56200, goal: 200000, donors: 982, days: 45, urgent: false, gradient: "from-cyan-500 to-blue-600" },
  { id: 7, title: "Vaccines for Children DRC", org: "MedBridge", cat: "Medical", raised: 73400, goal: 80000, donors: 1140, days: 9, urgent: false, gradient: "from-emerald-400 to-teal-500" },
  { id: 8, title: "Solar Schools Bangladesh", org: "EduFuture", cat: "Education", raised: 12800, goal: 60000, donors: 220, days: 60, urgent: false, gradient: "from-yellow-400 to-orange-500" },
];

function Campaigns() {
  const { openDonate } = useApp();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("Trending");

  const list = useMemo(() => {
    let l = allCampaigns.filter((c) =>
      (cat === "All" || c.cat === cat) &&
      (c.title.toLowerCase().includes(q.toLowerCase()) || c.org.toLowerCase().includes(q.toLowerCase())),
    );
    if (sort === "Urgent") l = [...l].sort((a, b) => a.days - b.days);
    if (sort === "Nearly Funded") l = [...l].sort((a, b) => b.raised / b.goal - a.raised / a.goal);
    if (sort === "Trending") l = [...l].sort((a, b) => b.donors - a.donors);
    return l;
  }, [q, cat, sort]);

  return (
    <AppShell title="Campaigns" subtitle="Verified humanitarian campaigns. 100% on-chain.">
      <div className="glass rounded-2xl p-4 mb-6 flex flex-col md:flex-row gap-3 md:items-center">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search campaigns or organizations…"
            className="w-full h-10 pl-9 pr-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`h-9 px-3 rounded-lg text-xs font-medium whitespace-nowrap border transition ${
                cat === c ? "bg-primary/15 border-primary text-primary" : "border-white/10 text-muted-foreground hover:text-foreground hover:border-white/25"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-9 px-3 rounded-lg bg-white/5 border border-white/10 text-xs outline-none"
          >
            {sorts.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((c) => {
          const pct = Math.round((c.raised / c.goal) * 100);
          return (
            <div key={c.id} className="glass rounded-2xl overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className={`h-36 bg-gradient-to-br ${c.gradient} relative`}>
                {c.urgent && (
                  <span className="absolute top-3 left-3"><Badge tone="danger"><Flame className="w-3 h-3" /> Urgent</Badge></span>
                )}
                <span className="absolute top-3 right-3"><Badge tone="info">{c.cat}</Badge></span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-display font-semibold text-base leading-snug mb-1">{c.title}</h3>
                <div className="text-xs text-muted-foreground mb-4">by {c.org}</div>
                <div className="mt-auto space-y-3">
                  <Progress value={pct} />
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium">${c.raised.toLocaleString()} <span className="text-muted-foreground">of ${c.goal.toLocaleString()}</span></span>
                    <span className="text-primary font-semibold">{pct}%</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Users className="w-3 h-3" /> {c.donors.toLocaleString()} donors</span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {c.days}d left</span>
                  </div>
                  <button
                    onClick={() => openDonate({ title: c.title, org: c.org, goal: c.goal, raised: c.raised })}
                    className="w-full h-10 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium inline-flex items-center justify-center gap-2 hover:shadow-glow transition"
                  >
                    <Heart className="w-4 h-4" /> Donate
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
