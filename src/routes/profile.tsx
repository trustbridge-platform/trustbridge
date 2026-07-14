import { createFileRoute, Link } from "@tanstack/react-router";
import AppShell from "@/components/AppShell";
import { useApp } from "@/components/AppContext";
import { useEffect, useState } from "react";
import { Calendar, Wallet, Heart, ArrowLeftRight, Shield, Globe, Facebook, Instagram, Youtube, User } from "lucide-react";
import * as api from "@/services/api";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — TrustBridge" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  const { isAuthenticated } = useApp();
  const [profile, setProfile] = useState<any>(null);
  const [stats, setStats] = useState({ campaignsCreated: 0, donationsMade: 0, totalDonated: 0 });
  const [recentActivity, setRecentActivity] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) return;
    const load = async () => {
      try {
        const me = await api.getMe();
        setProfile(me.user);

        // Get real stats from the server
        try {
          const meData = await api.getMe();
          const txsData = await api.getMyTransactions({ type: 'donation' });
          setStats({
            campaignsCreated: 0,
            donationsMade: txsData.transactions?.length || 0,
            totalDonated: txsData.transactions?.reduce((sum: number, tx: any) => sum + Math.abs(tx.amount || 0), 0) || 0,
          });
          setRecentActivity(txsData.transactions?.slice(0, 5) || []);
        } catch {
          setStats({ campaignsCreated: 0, donationsMade: 0, totalDonated: 0 });
          setRecentActivity([]);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <AppShell title="Profile">
        <div className="glass rounded-2xl p-12 text-center">
          <Shield className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Please log in</h3>
          <p className="text-sm text-muted-foreground mb-6">You need to be logged in to view your profile.</p>
          <Link to="/login" className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-gradient-brand text-primary-foreground font-medium hover:shadow-glow transition">
            Sign In
          </Link>
        </div>
      </AppShell>
    );
  }

  if (loading) {
    return (
      <AppShell title="Profile">
        <div className="flex items-center justify-center py-20">
          <span className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell title="Profile">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* User Card */}
        <div className="glass rounded-2xl p-6">
          <div className="flex flex-col items-center text-center mb-6">
            {profile?.avatar ? (
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 shadow-glow mb-3">
                <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-20 h-20 rounded-full bg-gradient-brand grid place-items-center text-2xl font-bold text-primary-foreground shadow-glow mb-3">
                {profile?.firstName?.[0]}{profile?.lastName?.[0]}
              </div>
            )}
            <div className="font-display text-xl font-semibold">{profile?.firstName} {profile?.lastName}</div>
            <div className="text-sm text-muted-foreground">{profile?.email}</div>
            {profile?.gender && <div className="text-xs text-muted-foreground mt-1 capitalize">{profile.gender}</div>}
            {profile?.country && (
              <div className="inline-flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <Globe className="w-3 h-3" /> {profile.country}
              </div>
            )}
          </div>

          <div className="space-y-3 border-t border-white/10 pt-4">
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Joined:</span>
              <span className="font-medium">{profile?.joined ? new Date(profile.joined).toLocaleDateString() : "N/A"}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Wallet className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Wallet:</span>
              <span className="font-mono text-xs truncate">{profile?.walletAddress || "Not connected"}</span>
            </div>
          </div>

          {/* Bio */}
          {profile?.bio && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-xs text-muted-foreground mb-2">Bio</div>
              <p className="text-sm">{profile.bio}</p>
            </div>
          )}

          {/* Social Links */}
          {(profile?.facebook || profile?.instagram || profile?.youtube) && (
            <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
              <div className="text-xs text-muted-foreground mb-2">Social Media</div>
              {profile?.facebook && (
                <a href={profile.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition">
                  <Facebook className="w-3 h-3" /> Facebook
                </a>
              )}
              {profile?.instagram && (
                <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition">
                  <Instagram className="w-3 h-3" /> Instagram
                </a>
              )}
              {profile?.youtube && (
                <a href={profile.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition">
                  <Youtube className="w-3 h-3" /> YouTube
                </a>
              )}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="glass rounded-2xl p-6">
          <h3 className="font-display font-semibold mb-4">Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <Stat icon={Heart} label="Campaigns Created" value={stats.campaignsCreated} />
            <Stat icon={ArrowLeftRight} label="Donations Made" value={stats.donationsMade} />
            <Stat icon={Wallet} label="Total Donated (XLM)" value={stats.totalDonated.toFixed(2)} />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass rounded-2xl p-6">
          <h3 className="font-display font-semibold mb-4">Recent Activity</h3>
          {recentActivity.length === 0 ? (
            <p className="text-sm text-muted-foreground">No activity yet.</p>
          ) : (
            <div className="divide-y divide-white/5">
              {recentActivity.map((tx: any) => (
                <div key={tx.id} className="flex items-center gap-3 py-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 grid place-items-center shrink-0">
                    <ArrowLeftRight className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate capitalize">{tx.type}</div>
                    <div className="text-xs text-muted-foreground">{new Date(tx.created_at).toLocaleString()}</div>
                  </div>
                  <div className={`text-sm font-mono ${tx.type === 'receive' || tx.type === 'donation' ? 'text-emerald' : ''}`}>
                    {tx.amount} XLM
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}

function Stat({ icon: Icon, label, value }: { icon: any; label: string; value: string | number }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
      <Icon className="w-5 h-5 mb-2 text-muted-foreground" />
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-xl font-semibold mt-1">{value}</div>
    </div>
  );
}