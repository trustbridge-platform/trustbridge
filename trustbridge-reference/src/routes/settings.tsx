import { createFileRoute } from "@tanstack/react-router";
import AppShell from "@/components/AppShell";
import { useApp, languages } from "@/components/AppContext";
import { useState } from "react";
import { User, Wallet, Bell, Globe, Shield, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — TrustBridge" }] }),
  component: SettingsPage,
});

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "wallet", label: "Wallet", icon: Wallet },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "language", label: "Language", icon: Globe },
  { id: "security", label: "Security", icon: Shield },
] as const;

function SettingsPage() {
  const { lang, setLang, wallet, openWalletModal, disconnectWallet } = useApp();
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("profile");
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState({ name: "Alex Carter", email: "alex@trustbridge.app" });
  const [prefs, setPrefs] = useState({
    donations: true,
    campaignUpdates: true,
    weeklyDigest: false,
    securityAlerts: true,
  });
  const [security, setSecurity] = useState({ twoFA: true, sessionAlerts: true });

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <AppShell title="Settings" subtitle="Manage your account, wallet and preferences.">
      <div className="grid lg:grid-cols-[220px,1fr] gap-6">
        <nav className="glass rounded-2xl p-2 h-fit">
          {tabs.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  active ? "bg-sidebar-accent text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                {t.label}
              </button>
            );
          })}
        </nav>

        <div className="glass rounded-2xl p-6">
          {tab === "profile" && (
            <Section title="Profile" desc="How you appear to other users and organizations.">
              <Field label="Full name">
                <input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className={input} />
              </Field>
              <Field label="Email">
                <input type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} className={input} />
              </Field>
              <SaveBar onSave={save} saved={saved} />
            </Section>
          )}

          {tab === "wallet" && (
            <Section title="Wallet" desc="Manage your connected Stellar wallet.">
              {wallet.connected ? (
                <>
                  <div className="glass-strong rounded-xl p-4">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Connected via {wallet.provider}</div>
                    <div className="mt-2 font-mono text-sm break-all">{wallet.address}</div>
                  </div>
                  <button onClick={disconnectWallet} className="h-10 px-4 rounded-lg glass hover:border-white/25 text-sm">
                    Disconnect wallet
                  </button>
                </>
              ) : (
                <button onClick={openWalletModal} className="h-10 px-4 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium inline-flex items-center gap-2 hover:shadow-glow transition">
                  <Wallet className="w-4 h-4" /> Connect wallet
                </button>
              )}
            </Section>
          )}

          {tab === "notifications" && (
            <Section title="Notifications" desc="Choose what you want to be notified about.">
              {([
                ["donations", "New donations to your campaigns"],
                ["campaignUpdates", "Updates from campaigns you donated to"],
                ["weeklyDigest", "Weekly impact digest"],
                ["securityAlerts", "Security & login alerts"],
              ] as const).map(([k, label]) => (
                <Toggle key={k} label={label} value={prefs[k]} onChange={(v) => setPrefs({ ...prefs, [k]: v })} />
              ))}
              <SaveBar onSave={save} saved={saved} />
            </Section>
          )}

          {tab === "language" && (
            <Section title="Language" desc="Choose your preferred interface language.">
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
            <Section title="Security" desc="Protect your account with additional safeguards.">
              <Toggle label="Two-factor authentication" value={security.twoFA} onChange={(v) => setSecurity({ ...security, twoFA: v })} />
              <Toggle label="Alert on new device login" value={security.sessionAlerts} onChange={(v) => setSecurity({ ...security, sessionAlerts: v })} />
              <button className="h-10 px-4 rounded-lg glass hover:border-white/25 text-sm">Change password</button>
              <SaveBar onSave={save} saved={saved} />
            </Section>
          )}
        </div>
      </div>
    </AppShell>
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
