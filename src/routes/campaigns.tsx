import { createFileRoute, Link } from "@tanstack/react-router";
import AppShell from "@/components/AppShell";
import { Progress, Badge, ProgressRing } from "@/components/ui-bits";
import { useApp } from "@/components/AppContext";
import { RequireAuth } from "@/components/RequireAuth";
import { Search, Users, Clock, Flame, Filter, Heart } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { getCampaigns } from "@/services/api";

export const Route = createFileRoute("/campaigns")({
  head: () => ({ meta: [{ title: "Campaigns — TrustBridge" }] }),
  component: Campaigns,
});

const categoriesKey = ["all", "foodWater", "disasterRelief", "medical", "education"] as const;
const sortKeys = ["trending", "urgent", "nearlyFunded"] as const;

const categoryMap: Record<string, string | undefined> = {
  all: undefined,
  foodWater: "Food & Water",
  disasterRelief: "Disaster Relief",
  medical: "Medical",
  education: "Education",
};

function mapApiCampaign(c: any) {
  const raised = Number(c.raised || 0);
  const goal = Number(c.goal || 1);
  const donors = Number(c.donors || 0);
  const pct = Math.round((raised / goal) * 100);
  const urgent = !!c.urgent;
  const gradientMap: Record<string, string> = {
    "Food & Water": "from-blue-500 to-emerald-400",
    "Disaster Relief": "from-rose-500 to-amber-400",
    "Medical": "from-emerald-500 to-cyan-400",
    "Education": "from-violet-500 to-blue-500",
  };
  return {
    id: c.id,
    title: c.title,
    org: c.organization,
    cat: c.category,
    raised,
    goal,
    donors,
    days: Math.max(0, Math.ceil((new Date(c.end_date).getTime() - Date.now()) / (1000 * 60 * 60 * 24))),
    urgent,
    gradient: gradientMap[c.category] || "from-gray-500 to-gray-600",
  } as const;
}

const allCampaigns = [
  { id: 1, title: "Clean Water for Yemen", org: "Mercy Wells", cat: "Food & Water", raised: 84200, goal: 120000, donors: 1284, days: 12, urgent: true, gradient: "from-blue-500 to-emerald-400", image: "" },
  { id: 2, title: "Earthquake Relief Türkiye", org: "Global Aid Network", cat: "Disaster Relief", raised: 198400, goal: 250000, donors: 4820, days: 4, urgent: true, gradient: "from-rose-500 to-amber-400", image: "" },
  { id: 3, title: "Mobile Clinics Sudan", org: "MedBridge", cat: "Medical", raised: 42100, goal: 90000, donors: 612, days: 28, urgent: false, gradient: "from-emerald-500 to-cyan-400", image: "" },
  { id: 4, title: "Books for Rural Kenya", org: "EduFuture", cat: "Education", raised: 28900, goal: 45000, donors: 408, days: 19, urgent: false, gradient: "from-violet-500 to-blue-500", image: "" },
  { id: 5, title: "Food Aid Gaza", org: "Hope Kitchen", cat: "Food & Water", raised: 312000, goal: 350000, donors: 9201, days: 7, urgent: true, gradient: "from-amber-500 to-rose-500", image: "" },
  { id: 6, title: "Flood Recovery Pakistan", org: "RiverCare", cat: "Disaster Relief", raised: 56200, goal: 200000, donors: 982, days: 45, urgent: false, gradient: "from-cyan-500 to-blue-600", image: "" },
  { id: 7, title: "Vaccines for Children DRC", org: "MedBridge", cat: "Medical", raised: 73400, goal: 80000, donors: 1140, days: 9, urgent: false, gradient: "from-emerald-400 to-teal-500", image: "" },
  { id: 8, title: "Solar Schools Bangladesh", org: "EduFuture", cat: "Education", raised: 12800, goal: 60000, donors: 220, days: 60, urgent: false, gradient: "from-yellow-400 to-orange-500", image: "" },
];
 feat/progress-ring

 main
function Campaigns() {
  const { openDonate, t } = useApp();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("Trending");
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const labels = {
    all: t("all"),
    foodWater: t("foodWater"),
    disasterRelief: t("disasterRelief"),
    medical: t("medical"),
    education: t("education"),
  } as const;
  const tSort = {
    trending: t("trending"),
    urgent: t("urgent"),
    nearlyFunded: t("nearlyFunded"),
  } as const;

  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const category = categoryMap[cat];
    getCampaigns({ category, q: q || undefined })
      .then((data) => setCampaigns((data.campaigns || []).map(mapApiCampaign)))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [q, cat]);

  const list = useMemo(() => {
    let l = campaigns;
    if (sort === t("urgent")) l = [...l].sort((a, b) => a.days - b.days);
    if (sort === t("nearlyFunded")) l = [...l].sort((a, b) => b.raised / b.goal - a.raised / a.goal);
    if (sort === t("trending")) l = [...l].sort((a, b) => b.donors - a.donors);
    return l;
  }, [campaigns, sort]);

  const handleSearch = (value: string) => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setQ(value), 250);
  };

  return (
    <RequireAuth>
      <AppShell title={t("campaigns")} subtitle={t("overview")}>
      <div className="glass rounded-2xl p-4 mb-6 flex flex-col md:flex-row gap-3 md:items-center">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full h-10 pl-9 pr-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto">
          {categoriesKey.map((key) => (
            <button
              key={key}
              onClick={() => setCat(labels[key])}
              className={`h-9 px-3 rounded-lg text-xs font-medium whitespace-nowrap border transition ${
                cat === labels[key] ? "bg-primary/15 border-primary text-primary" : "border-white/10 text-muted-foreground hover:text-foreground hover:border-white/25"
              }`}
            >
              {labels[key]}
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
            {sortKeys.map((s) => <option key={s}>{t(s)}</option>)}
          </select>
        </div>
      </div>

      {loading && (
        <div className="col-span-full text-center text-sm text-muted-foreground">Loading…</div>
      )}
      {error && (
        <div className="col-span-full text-center text-sm text-red-400">{error}</div>
      )}
      {!loading && !error && list.length === 0 && (
        <div className="col-span-full text-center text-sm text-muted-foreground">No campaigns match your search.</div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((c) => {
          const pct = Math.round((c.raised / c.goal) * 100);
          return (
            <div key={c.id} className="glass rounded-2xl overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className={`h-36 relative ${c.image ? '' : `bg-gradient-to-br ${c.gradient}`}`}>
                {c.image && (
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                )}
                {c.urgent && (
                  <span className="absolute top-3 left-3"><Badge tone="danger"><Flame className="w-3 h-3" /> {t("urgent")}</Badge></span>
                )}
                <span className="absolute top-3 right-3"><Badge tone="info">{c.cat}</Badge></span>
              </div>
                <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-display font-semibold text-base leading-snug mb-1">{c.title}</h3>
                <div className="text-xs text-muted-foreground mb-4">{t("by")} {c.org}</div>
                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-4">
                    <ProgressRing value={pct} size={56} strokeWidth={5} />
                    <div className="flex-1">
                      <Progress value={pct} />
                      <div className="flex items-center justify-between text-xs mt-1">
                        <span className="font-medium">${c.raised.toLocaleString()} <span className="text-muted-foreground">of ${c.goal.toLocaleString()}</span></span>
                        <span className="text-primary font-semibold">{pct}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Users className="w-3 h-3" /> {c.donors.toLocaleString()} {t("donors")}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {c.days}{t("daysLeft")}</span>
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/campaigns/${c.id}`} className="flex-1 h-10 rounded-lg glass hover:border-white/25 text-foreground text-sm font-medium inline-flex items-center justify-center gap-2 transition">
                      View
                    </Link>
                    <button
                      onClick={() => openDonate({ title: c.title, org: c.org, goal: c.goal, raised: c.raised })}
                      className="flex-1 h-10 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium inline-flex items-center justify-center gap-2 hover:shadow-glow transition"
                    >
                      <Heart className="w-4 h-4" /> Donate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AppShell>
    </RequireAuth>
  );
}
