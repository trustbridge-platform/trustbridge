import { createFileRoute, useParams } from "@tanstack/react-router";
import AppShell from "@/components/AppShell";
import { useApp } from "@/components/AppContext";
import { RequireAuth } from "@/components/RequireAuth";
import { useState, useEffect } from "react";
import { Heart, MessageSquare, Send, Trash2, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { getCampaign, createComment as apiCreateComment, deleteComment as apiDeleteComment } from "@/services/api";
import { ProgressRing } from "@/components/ui-bits";

export const Route = createFileRoute("/campaigns/$id")({
  head: () => ({ meta: [{ title: "Campaign — TrustBridge" }] }),
  component: CampaignDetail,
});

function CampaignDetail() {
  const params = useParams({ from: "/campaigns/$id" });
  const id = String(params.id);
  const { user } = useApp();
  const [campaign, setCampaign] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    load();
  }, [id]);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCampaign(id);
      setCampaign(data.campaign);
      setComments(data.comments || []);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const submitComment = async () => {
    if (!text.trim() || !user) return;
    setSubmitting(true);
    try {
      const { comment } = await apiCreateComment(id, text.trim());
      setComments((c) => [...c, comment]);
      setText("");
    } catch (e: any) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  const removeComment = async (commentId: string) => {
    try {
      await apiDeleteComment(id, commentId);
      setComments((c) => c.filter((x) => String(x.id) !== commentId));
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return (
      <RequireAuth>
        <AppShell>
          <div className="text-center text-sm text-muted-foreground py-10">Loading…</div>
        </AppShell>
      </RequireAuth>
    );
  }

  if (error || !campaign) {
    return (
      <RequireAuth>
        <AppShell>
          <div className="text-center text-sm text-red-400 py-10">{error || "Campaign not found"}</div>
        </AppShell>
      </RequireAuth>
    );
  }

  const raised = Number(campaign.raised || 0);
  const goal = Number(campaign.goal || 1);
  const pct = Math.min(Math.round((raised / goal) * 100), 100);
  const isCreator = user && campaign.creator_id === user.id;

  return (
    <RequireAuth>
      <AppShell title={campaign.title} subtitle={campaign.organization} actions={
        <Link to="/campaigns" className="h-9 px-3 rounded-lg glass hover:border-white/25 text-foreground text-sm inline-flex items-center gap-2 transition">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
      }>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-semibold">{campaign.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{campaign.description}</p>
                </div>
                {campaign.urgent && <span className="px-2 py-1 rounded-md bg-red-500/10 text-red-400 text-xs font-medium border border-red-500/20">Urgent</span>}
              </div>
              <div className="mt-6 flex items-center gap-4">
                <ProgressRing value={pct} size={64} strokeWidth={6} />
                <div className="flex-1">
                  <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-brand" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="font-medium">${raised.toLocaleString()} <span className="text-muted-foreground">of ${goal.toLocaleString()}</span></span>
                    <span className="text-primary font-semibold">{pct}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-lg mb-4 inline-flex items-center gap-2"><MessageSquare className="w-5 h-5" /> Comments</h3>
              <div className="space-y-4">
                {comments.length === 0 && <p className="text-sm text-muted-foreground">No comments yet. Be the first to share your thoughts.</p>}
                {comments.map((c) => (
                  <div key={c.id} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="w-8 h-8 rounded-full bg-gradient-brand grid place-items-center text-primary-foreground text-xs font-semibold shrink-0">
                      {(c.firstName?.[0] || "?").toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{c.firstName} {c.lastName}</span>
                        <span className="text-[11px] text-muted-foreground">{new Date(c.created_at).toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{c.text}</p>
                    </div>
                    {(user && (String(c.user_id) === String(user.id) || isCreator)) && (
                      <button onClick={() => removeComment(String(c.id))} className="w-8 h-8 grid place-items-center rounded-md hover:bg-red-500/10 text-red-400 transition" aria-label="Delete comment">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {user && (
                <div className="mt-4 flex items-center gap-2">
                  <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write a comment…"
                    className="flex-1 h-10 px-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm"
                  />
                  <button onClick={submitComment} disabled={submitting || !text.trim()} className="h-10 px-4 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium inline-flex items-center gap-2 disabled:opacity-50">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold mb-3">Campaign Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Status</span><span className="capitalize">{campaign.status}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Donors</span><span>{campaign.donors || 0}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Category</span><span className="capitalize">{campaign.category}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Ends</span><span>{new Date(campaign.end_date).toLocaleDateString()}</span></div>
              </div>
            </div>
          </div>
        </div>
      </AppShell>
    </RequireAuth>
  );
}