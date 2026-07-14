import { createFileRoute } from "@tanstack/react-router";
import AppShell from "@/components/AppShell";
import { useState } from "react";
import { CheckCircle2, Upload, Sparkles } from "lucide-react";

export const Route = createFileRoute("/create-campaign")({
  head: () => ({ meta: [{ title: "Create Campaign — TrustBridge" }] }),
  component: CreateCampaign,
});

const cats = ["Food & Water", "Disaster Relief", "Medical", "Education", "Shelter", "Other"];

function CreateCampaign() {
  const [form, setForm] = useState({
    title: "",
    org: "",
    desc: "",
    goal: "",
    cat: "Food & Water",
    location: "",
    end: "",
    image: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (form.title.trim().length < 6) errs.title = "At least 6 characters.";
    if (form.org.trim().length < 2) errs.org = "Required.";
    if (form.desc.trim().length < 30) errs.desc = "Describe in at least 30 characters.";
    const g = Number(form.goal);
    if (!g || g < 100) errs.goal = "Minimum 100 XLM.";
    if (!form.location.trim()) errs.location = "Required.";
    if (!form.end) errs.end = "Pick an end date.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
      setForm({ title: "", org: "", desc: "", goal: "", cat: "Food & Water", location: "", end: "", image: "" });
    }
  };

  return (
    <AppShell title="Create Campaign" subtitle="Launch a verified humanitarian campaign on Stellar.">
      {success && (
        <div className="mb-6 glass-strong rounded-xl p-4 flex items-center gap-3 border-emerald/30">
          <div className="w-9 h-9 rounded-lg bg-emerald/20 grid place-items-center">
            <CheckCircle2 className="w-5 h-5 text-emerald" />
          </div>
          <div>
            <div className="font-medium">Campaign submitted</div>
            <div className="text-xs text-muted-foreground">We'll notify you once verification is complete.</div>
          </div>
        </div>
      )}

      <form onSubmit={submit} className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass rounded-2xl p-6 space-y-5">
          <Field label="Campaign title" error={errors.title}>
            <input value={form.title} onChange={(e) => update("title", e.target.value)} placeholder="e.g. Clean Water for Yemen" className={input} />
          </Field>
          <Field label="Organization name" error={errors.org}>
            <input value={form.org} onChange={(e) => update("org", e.target.value)} placeholder="e.g. Mercy Wells Foundation" className={input} />
          </Field>
          <Field label="Description" error={errors.desc}>
            <textarea value={form.desc} onChange={(e) => update("desc", e.target.value)} rows={5} placeholder="Tell donors about the impact, beneficiaries, and timeline…" className={input + " resize-none"} />
          </Field>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Goal amount (XLM)" error={errors.goal}>
              <input type="number" value={form.goal} onChange={(e) => update("goal", e.target.value)} placeholder="50000" className={input} />
            </Field>
            <Field label="Category">
              <select value={form.cat} onChange={(e) => update("cat", e.target.value)} className={input}>
                {cats.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="Location" error={errors.location}>
              <input value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="Country / region" className={input} />
            </Field>
            <Field label="End date" error={errors.end}>
              <input type="date" value={form.end} onChange={(e) => update("end", e.target.value)} className={input} />
            </Field>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Cover image</div>
            <label className="block aspect-video rounded-xl border-2 border-dashed border-white/15 hover:border-primary/50 transition grid place-items-center cursor-pointer bg-white/[0.02]">
              <div className="text-center px-4">
                <Upload className="w-6 h-6 mx-auto text-muted-foreground mb-2" />
                <div className="text-sm font-medium">Drop or browse</div>
                <div className="text-xs text-muted-foreground">PNG, JPG up to 5 MB</div>
              </div>
              <input type="file" accept="image/*" className="hidden" onChange={(e) => update("image", e.target.files?.[0]?.name ?? "")} />
            </label>
            {form.image && <div className="mt-2 text-xs text-emerald">Selected: {form.image}</div>}
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="font-display font-semibold mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald" /> Verification
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Campaigns go through KYB, local partner attestation, and milestone-based escrow on Stellar before going live.
            </p>
          </div>

          <button type="submit" className="w-full h-12 rounded-xl bg-gradient-brand text-primary-foreground font-medium hover:shadow-glow transition">
            Submit for verification
          </button>
        </div>
      </form>
    </AppShell>
  );
}

const input =
  "w-full h-11 px-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="text-xs font-medium text-muted-foreground mb-1.5">{label}</div>
      {children}
      {error && <div className="text-xs text-red-400 mt-1">{error}</div>}
    </label>
  );
}
