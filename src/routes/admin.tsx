import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useApp } from "@/components/AppContext";
import * as api from "@/services/api";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin Dashboard — TrustBridge" }] }),
  component: AdminDashboard,
});

function AdminDashboard() {
  const nav = useNavigate();
  const { user } = useApp();
  const [stats, setStats] = useState<{ users: number; campaigns: number; donations: number; transactions: number } | null>(null);
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user || user.role !== "admin") {
      nav({ to: "/dashboard" });
      return;
    }
    Promise.all([api.getAdminStats(), api.getAdminCampaigns()])
      .then(([statsRes, campaignsRes]) => {
        setStats(statsRes);
        setCampaigns(campaignsRes.campaigns || []);
      })
      .catch((e) => setError(e.message || "Failed to load admin data"))
      .finally(() => setLoading(false));
  }, [user, nav]);

  const handleDeactivate = async (id: number) => {
    try {
      await api.deactivateCampaign(id);
      setCampaigns((prev) => prev.map((c) => (c.id === id ? { ...c, status: "expired" } : c)));
    } catch (e: any) {
      setError(e.message || "Failed to deactivate campaign");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0e1a]">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
          <p className="text-sm text-muted-foreground mt-4">Loading dashboard…</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0e1a]">
        <div className="text-center text-red-400 text-sm">{error}</div>
      </div>
    );
  }

  const statsCards = [
    { label: "Total Users", value: stats?.users ?? 0 },
    { label: "Campaigns", value: stats?.campaigns ?? 0 },
    { label: "Donations", value: stats?.donations ?? 0 },
    { label: "Transactions", value: stats?.transactions ?? 0 },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display text-2xl font-bold text-white mb-1">Admin Dashboard</h1>
        <p className="text-sm text-muted-foreground mb-6">Platform overview and campaign management</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {statsCards.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-4">
              <div className="text-xs text-muted-foreground mb-1">{s.label}</div>
              <div className="text-xl font-semibold">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-white/10">
            <h2 className="font-display font-semibold text-base">Campaigns</h2>
          </div>
          {campaigns.length === 0 && (
            <div className="p-8 text-center text-sm text-muted-foreground">No campaigns found.</div>
          )}
          {campaigns.map((c) => (
            <div key={c.id} className="flex items-center justify-between p-4 border-b border-white/5 last:border-b-0">
              <div className="min-w-0">
                <div className="text-sm font-medium truncate">{c.title}</div>
                <div className="text-xs text-muted-foreground truncate">{c.organization} · {c.category}</div>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-4">
                <span className={`text-xs px-2 py-1 rounded-lg border ${c.status === "active" ? "border-emerald/40 text-emerald" : "border-white/10 text-muted-foreground"}`}>{c.status}</span>
                {c.status === "active" && (
                  <button onClick={() => handleDeactivate(c.id)} className="text-xs px-3 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition">Deactivate</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
