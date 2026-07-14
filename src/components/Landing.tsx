import { useEffect, useRef, useState } from "react";
import {
  Megaphone,
  ArrowLeftRight,
  Wallet,
  Github,
  MessageCircle,
  Send,
  Shield,
  Lock,
  Zap,
  Eye,
  Users,
  Heart,
  Coins,
  Network,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import Sidebar from "./Sidebar";
import { useApp } from "./AppContext";
import ConnectWalletModal from "./modals/ConnectWalletModal";
import DonateModal from "./modals/DonateModal";

/* ============================================================
   COUNTER
============================================================ */
function useCountUp(target: number, duration = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.floor(eased * target));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { value, ref };
}

function StatCard({
  label,
  target,
  prefix = "",
  suffix = "",
  icon: Icon,
}: {
  label: string;
  target: number;
  prefix?: string;
  suffix?: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const { value, ref } = useCountUp(target);
  const formatted = value.toLocaleString();
  return (
    <div
      ref={ref}
      className="glass rounded-2xl p-6 hover:border-white/20 transition group"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 grid place-items-center mb-4 group-hover:bg-primary/20 transition">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
        {prefix}
        {formatted}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

/* ============================================================
   FEATURE CARD
============================================================ */
function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="glass rounded-2xl p-6 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
      <div className="w-11 h-11 rounded-xl bg-gradient-brand grid place-items-center mb-5 shadow-glow">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

/* ============================================================
   FAQ
============================================================ */
function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="glass rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/[0.03] transition"
      >
        <span className="font-medium text-base">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE
============================================================ */
export default function Landing() {
  const { collapsed, openWalletModal } = useApp();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const features = [
    { icon: Eye, title: "Full Transparency", desc: "Every transaction is publicly verifiable on the Stellar ledger in real time." },
    { icon: Lock, title: "Secure by Design", desc: "Multi-signature escrow and audited smart contracts protect every donation." },
    { icon: Zap, title: "Instant Settlement", desc: "Funds reach beneficiaries in 3–5 seconds, not days. No middlemen." },
    { icon: Coins, title: "Near-Zero Fees", desc: "Stellar fees are fractions of a cent, so 99.9% of every dollar reaches aid." },
    { icon: Network, title: "Global Reach", desc: "Send aid to 180+ countries with built-in fiat on/off-ramps via anchors." },
    { icon: Users, title: "Community Governed", desc: "Campaign milestones validated by independent verifiers and local partners." },
    { icon: Heart, title: "Impact Tracking", desc: "Beneficiaries confirm receipt on-chain. See your dollar's full journey." },
    { icon: Shield, title: "KYC Compliant", desc: "Built-in compliance tooling meets FATF guidance and regional regulations." },
  ];

  const faqs = [
    {
      q: "What is TrustBridge?",
      a: "TrustBridge is a humanitarian aid platform built on the Stellar blockchain that brings end-to-end transparency to charitable giving. Every donation, disbursement, and beneficiary receipt is recorded on-chain and publicly verifiable.",
    },
    {
      q: "Which wallets are supported?",
      a: "TrustBridge supports Freighter, Lobstr, Albedo, xBull, and any WalletConnect-compatible Stellar wallet. Hardware wallets are supported through Freighter.",
    },
    {
      q: "How are campaigns verified?",
      a: "Each campaign goes through a multi-step verification: organization KYB, local partner attestation, and milestone-based escrow release validated by independent reviewers.",
    },
    {
      q: "What are the fees?",
      a: "TrustBridge charges 0% platform fees during beta. Stellar network fees are roughly $0.00001 per transaction, meaning effectively 100% of your donation reaches its destination.",
    },
    {
      q: "Is TrustBridge open source?",
      a: "Yes. All smart contracts, the web client, and verification tooling are open source under the Apache 2.0 license. Audits and code are public on GitHub.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <ConnectWalletModal />
      <DonateModal />

      <div
        className={`transition-[padding] duration-300 ${
          collapsed ? "pl-[72px]" : "pl-[260px]"
        }`}
      >
        <main>
          {/* HERO */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
            <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(oklch(1_0_0/0.04)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

            <div className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-24 pb-28 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-8 animate-fade-in-up">
                <Sparkles className="w-3.5 h-3.5 text-emerald" />
                Live on Stellar Mainnet
              </div>

              <div className="flex justify-center mb-8 animate-fade-in-up">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-brand blur-3xl opacity-40" />
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-brand grid place-items-center shadow-glow animate-float">
                    <Shield className="w-10 h-10 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              <h1
                className="font-display text-5xl md:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Transparent Humanitarian
                <br />
                Aid on <span className="text-gradient">Stellar</span>
              </h1>

              <p
                className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Every donation tracked on-chain. Every beneficiary verified. Every dollar accounted
                for. The future of giving is open, instant, and trustless.
              </p>

              <div
                className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <button onClick={openWalletModal} className="h-12 px-6 rounded-xl bg-gradient-brand text-primary-foreground font-medium inline-flex items-center gap-2 hover:shadow-glow transition">
                  <Wallet className="w-4 h-4" />
                  Connect Wallet
                </button>
                <Link to="/campaigns" className="h-12 px-6 rounded-xl glass hover:border-white/25 text-foreground font-medium inline-flex items-center gap-2 transition">
                  Explore Campaigns
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="px-6 lg:px-10 pb-24">
            <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <StatCard label="Aid Distributed" target={12480000} prefix="$" icon={Heart} />
              <StatCard label="Active Campaigns" target={342} icon={Megaphone} />
              <StatCard label="Beneficiaries" target={89240} icon={Users} />
              <StatCard label="Transactions" target={1284900} icon={ArrowLeftRight} />
            </div>
          </section>

          {/* FEATURES */}
          <section className="px-6 lg:px-10 py-24 border-t border-border">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Platform</div>
                <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                  Built for trust at global scale
                </h2>
                <p className="text-muted-foreground text-lg">
                  Eight foundations that make TrustBridge the most accountable aid network on the
                  blockchain.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {features.map((f) => (
                  <FeatureCard key={f.title} {...f} />
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="px-6 lg:px-10 py-24 border-t border-border">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <div className="text-xs uppercase tracking-[0.2em] text-emerald mb-3">FAQ</div>
                <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
                  Questions, answered
                </h2>
              </div>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <FaqItem
                    key={i}
                    q={f.q}
                    a={f.a}
                    open={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="px-6 lg:px-10 py-24">
            <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl glass-strong p-12 md:p-16 text-center">
              <div className="absolute inset-0 bg-gradient-hero opacity-60 pointer-events-none" />
              <div className="relative">
                <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                  Ready to make a difference?
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                  Connect your wallet to launch a campaign or contribute to verified humanitarian
                  efforts worldwide.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button onClick={openWalletModal} className="h-12 px-6 rounded-xl bg-gradient-brand text-primary-foreground font-medium inline-flex items-center gap-2 hover:shadow-glow transition">
                    <Wallet className="w-4 h-4" />
                    Connect Wallet
                  </button>
                  <Link to="/create-campaign" className="h-12 px-6 rounded-xl glass hover:border-white/25 text-foreground font-medium inline-flex items-center gap-2 transition">
                    <Sparkles className="w-4 h-4" />
                    Start a Campaign
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="px-6 lg:px-10 py-12 border-t border-border">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-brand grid place-items-center">
                  <Shield className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
                </div>
                <span className="font-display font-semibold">TrustBridge</span>
                <span className="text-xs text-muted-foreground hidden sm:inline">
                  © 2026 · Built on Stellar
                </span>
              </div>

              <nav className="flex flex-wrap items-center gap-1 text-sm">
                <a href="#" className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition inline-flex items-center gap-2">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href="#" className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition inline-flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> Discord
                </a>
                <a href="#" className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition inline-flex items-center gap-2">
                  <Send className="w-4 h-4" /> Feedback
                </a>
                <a href="#" className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition">
                  Terms
                </a>
                <a href="#" className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition">
                  Privacy
                </a>
              </nav>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
