import { createFileRoute } from "@tanstack/react-router";
import AppShell from "@/components/AppShell";
import { RequireAuth } from "@/components/RequireAuth";
import { useApp, languages } from "@/components/AppContext";
import { useState } from "react";
import { User, Wallet, Bell, Globe, Shield, CheckCircle2, Lock, Smartphone, History, Fingerprint, LogOut, Rocket, Eye, EyeOff } from "lucide-react";
import * as api from "@/services/api";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — TrustBridge" }] }),
  component: SettingsPage,
});

const tabs = [
  { id: "profile", labelKey: "profile", icon: User },
  { id: "wallet", labelKey: "wallet", icon: Wallet },
  { id: "notifications", labelKey: "notifications", icon: Bell },
  { id: "language", labelKey: "language", icon: Globe },
  { id: "security", labelKey: "security", icon: Shield },
  { id: "comingSoon", labelKey: "Coming Soon", icon: Rocket },
] as const;

function SettingsPage() {
  const { lang, setLang, wallet, openWalletModal, disconnectWallet, t, user, setUser } = useApp();
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("profile");
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState({ name: user?.firstName + " " + user?.lastName || "User", email: user?.email || "" });
  const [prefs, setPrefs] = useState({
    donations: true,
    campaignUpdates: true,
    weeklyDigest: false,
    securityAlerts: true,
  });
  const [security, setSecurity] = useState({ twoFA: true, sessionAlerts: true });
  const [pwForm, setPwForm] = useState({ oldPassword: "", newPassword: "", confirmPassword: "" });
  const [showOldPw, setShowOldPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [pwLoading, setPwLoading] = useState(false);
  const [pwError, setPwError] = useState("");
  const [pwSuccess, setPwSuccess] = useState("");

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwError("");
    setPwSuccess("");
    setPwLoading(true);
    try {
      await api.changePassword(pwForm);
      setPwSuccess("Password changed successfully!");
      setPwForm({ oldPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err: any) {
      setPwError(err.message || "Failed to change password");
    } finally {
      setPwLoading(false);
    }
  };

  return (
    <RequireAuth>
      <AppShell title={t("settings")} subtitle={t("overview")}>
      <div className="grid lg:grid-cols-[220px,1fr] gap-6">
        <nav className="glass rounded-2xl p-2 h-fit">
          {tabs.map((tabItem) => {
            const Icon = tabItem.icon;
            const active = tab === tabItem.id;
            return (
              <button
                key={tabItem.id}
                onClick={() => setTab(tabItem.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  active ? "bg-sidebar-accent text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                {t(tabItem.labelKey)}
              </button>
            );
          })}
        </nav>

        <div className="glass rounded-2xl p-6">
          {tab === "profile" && (
            <Section title={t("profile")} desc={t("overview")}>
              <Field label={t("fullName", "Full name")}>
                <input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className={input} />
              </Field>
              <Field label={t("email", "Email")}>
                <input type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} className={input} />
              </Field>
              <SaveBar onSave={save} saved={saved} />
            </Section>
          )}

          {tab === "wallet" && (
            <Section title={t("wallet")} desc={t("overview")}>
              {wallet.connected ? (
                <>
                  <div className="glass-strong rounded-xl p-4">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{t("connected")} via {wallet.provider}</div>
                    <div className="mt-2 font-mono text-sm break-all">{wallet.address}</div>
                  </div>
                  <button onClick={disconnectWallet} className="h-10 px-4 rounded-lg glass hover:border-white/25 text-sm">
                    {t("disconnectWallet")}
                  </button>
                </>
              ) : (
                <button onClick={openWalletModal} className="h-10 px-4 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium inline-flex items-center gap-2 hover:shadow-glow transition">
                  <Wallet className="w-4 h-4" /> {t("connectWallet")}
                </button>
              )}
            </Section>
          )}

          {tab === "notifications" && (
            <Section title={t("notifications")} desc={t("overview")}>
              {([
                ["donations", t("newDonations", "New donations to your campaigns")],
                ["campaignUpdates", t("campaignUpdates", "Updates from campaigns you donated to")],
                ["weeklyDigest", t("weeklyDigest", "Weekly impact digest")],
                ["securityAlerts", t("securityAlerts", "Security & login alerts")],
              ] as const).map(([k, label]) => (
                <Toggle key={k} label={label} value={prefs[k]} onChange={(v) => setPrefs({ ...prefs, [k]: v })} />
              ))}
              <SaveBar onSave={save} saved={saved} />
            </Section>
          )}

          {tab === "language" && (
            <Section title={t("language")} desc={t("overview")}>
              <div className="grid sm:grid-cols-2 gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`h-11 px-4 rounded-lg border text-sm font-medium transition text-left ${
                      lang === l.code ? "bg-primary/15 border-primary text-primary" : "border-white/10 hover:border-white/25"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </Section>
          )}

          {tab === "security" && (
            <Section title={t("security")} desc={t("overview")}>
              <Toggle label={t("twoFactor", "Two-factor authentication")} value={security.twoFA} onChange={(v) => setSecurity({ ...security, twoFA: v })} />
              <Toggle label={t("loginAlerts", "Alert on new device login")} value={security.sessionAlerts} onChange={(v) => setSecurity({ ...security, sessionAlerts: v })} />

              {/* Change Password */}
              <div className="border-t border-white/10 pt-4 mt-4">
                <div className="font-display font-semibold mb-4">Change Password</div>
                <form onSubmit={handleChangePassword} className="space-y-3">
                  <Field label="Current Password">
                    <div className="relative">
                      <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input type={showOldPw ? "text" : "password"} value={pwForm.oldPassword} onChange={(e) => setPwForm({ ...pwForm, oldPassword: e.target.value })} placeholder="Current password" className="w-full h-11 pl-9 pr-10 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm" required />
                      <button type="button" onClick={() => setShowOldPw(!showOldPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                        {showOldPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </Field>
                  <Field label="New Password">
                    <div className="relative">
                      <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input type={showNewPw ? "text" : "password"} value={pwForm.newPassword} onChange={(e) => setPwForm({ ...pwForm, newPassword: e.target.value })} placeholder="Min 8 characters" className="w-full h-11 pl-9 pr-10 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm" required minLength={8} />
                      <button type="button" onClick={() => setShowNewPw(!showNewPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                        {showNewPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </Field>
                  <Field label="Confirm New Password">
                    <input type="password" value={pwForm.confirmPassword} onChange={(e) => setPwForm({ ...pwForm, confirmPassword: e.target.value })} placeholder="Repeat new password" className="w-full h-11 px-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm" required />
                  </Field>
                  {pwError && <div className="text-xs text-red-500 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20">{pwError}</div>}
                  {pwSuccess && <div className="text-xs text-emerald px-3 py-2 rounded-lg bg-emerald/10 border border-emerald/20">{pwSuccess}</div>}
                  <button type="submit" disabled={pwLoading} className="h-10 px-4 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium hover:shadow-glow transition disabled:opacity-60">
                    {pwLoading ? "Updating..." : "Change Password"}
                  </button>
                </form>
              </div>
            </Section>
          )}

          {tab === "comingSoon" && (
            <Section title="Coming Soon" desc="Features we're working on">
              <div className="space-y-4">
                <ComingSoonItem
                  icon={Shield}
                  title="Two-Factor Authentication (2FA)"
                  description="We're working on adding 2FA to make your account even more secure."
                />
                <ComingSoonItem
                  icon={Smartphone}
                  title="Device Management"
                  description="View and remove devices that have accessed your account."
                />
                <ComingSoonItem
                  icon={History}
                  title="Login History"
                  description="See where and when you've logged in from."
                />
                <ComingSoonItem
                  icon={Fingerprint}
                  title="Biometric Authentication"
                  description="Use Face ID or fingerprint to log in."
                />
                <ComingSoonItem
                  icon={LogOut}
                  title="Session Management"
                  description="Log out from all devices with one click."
                />
              </div>
            </Section>
          )}
        </div>
      </div>
      </AppShell>
    </RequireAuth>
  );
}

function ComingSoonItem({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-gradient-brand/20 grid place-items-center shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <div className="font-medium text-sm">{title}</div>
        <div className="text-xs text-muted-foreground mt-1">{description}</div>
        <span className="inline-flex items-center gap-1 text-[10px] text-emerald font-semibold mt-2">
          🚀 Coming Soon
        </span>
      </div>
    </div>
  );
}

const input = "w-full h-11 px-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm";

function Section({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div>
        <div className="font-display text-lg font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
      {children}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-xs font-medium text-muted-foreground mb-1.5">{label}</div>
      {children}
    </label>
  );
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg border border-white/10">
      <span className="text-sm">{label}</span>
      <button
        onClick={() => onChange(!value)}
        className={`relative w-10 h-6 rounded-full transition ${value ? "bg-gradient-brand" : "bg-white/10"}`}
        aria-pressed={value}
      >
        <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${value ? "translate-x-4" : ""}`} />
      </button>
    </div>
  );
}

function SaveBar({ onSave, saved }: { onSave: () => void; saved: boolean }) {
  return (
    <div className="flex items-center gap-3 pt-2">
      <button onClick={onSave} className="h-10 px-4 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium hover:shadow-glow transition">
        Save changes
      </button>
      {saved && (
        <span className="inline-flex items-center gap-1 text-xs text-emerald">
          <CheckCircle2 className="w-4 h-4" /> Saved
        </span>
      )}
    </div>
  );
}