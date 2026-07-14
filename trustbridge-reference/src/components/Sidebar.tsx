import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Megaphone,
  ArrowLeftRight,
  BarChart3,
  PlusCircle,
  Settings,
  ChevronLeft,
  Wallet,
  Globe,
  Shield,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { languages, useApp } from "./AppContext";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/dashboard" },
  { icon: Megaphone, label: "Campaigns", to: "/campaigns" },
  { icon: ArrowLeftRight, label: "Transactions", to: "/transactions" },
  { icon: BarChart3, label: "Analytics", to: "/analytics" },
  { icon: PlusCircle, label: "Create Campaign", to: "/create-campaign" },
  { icon: Settings, label: "Settings", to: "/settings" },
] as const;

export default function Sidebar() {
  const { collapsed, toggleCollapsed, lang, setLang, wallet, openWalletModal, disconnectWallet } =
    useApp();
  const [langOpen, setLangOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex flex-col bg-sidebar border-r border-sidebar-border transition-[width] duration-300 ${
        collapsed ? "w-[72px]" : "w-[260px]"
      }`}
    >
      <div className="h-16 flex items-center px-4 border-b border-sidebar-border shrink-0">
        <Link to="/" className="flex items-center gap-3 overflow-hidden">
          <div className="w-9 h-9 rounded-lg bg-gradient-brand grid place-items-center shrink-0 shadow-glow">
            <Shield className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <div className="font-display font-semibold text-sidebar-foreground leading-tight">
                TrustBridge
              </div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                On Stellar
              </div>
            </div>
          )}
        </Link>
        <button
          onClick={toggleCollapsed}
          className="ml-auto w-8 h-8 grid place-items-center rounded-md hover:bg-sidebar-accent text-muted-foreground hover:text-sidebar-foreground transition"
          aria-label="Toggle sidebar"
        >
          <ChevronLeft
            className={`w-4 h-4 transition-transform ${collapsed ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.to;
          return (
            <Link
              key={item.label}
              to={item.to}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition relative ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
              }`}
              title={collapsed ? item.label : undefined}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r bg-gradient-brand" />
              )}
              <Icon className="w-[18px] h-[18px] shrink-0" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-sidebar-border p-3 space-y-2 shrink-0">
        <div className="relative">
          <button
            onClick={() => setLangOpen((v) => !v)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition"
            title={collapsed ? "Language" : undefined}
          >
            <Globe className="w-[18px] h-[18px] shrink-0" />
            {!collapsed && (
              <>
                <span className="flex-1 text-left">
                  {languages.find((l) => l.code === lang)?.label}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition ${langOpen ? "rotate-180" : ""}`}
                />
              </>
            )}
          </button>
          {langOpen && !collapsed && (
            <div className="absolute bottom-full left-0 right-0 mb-2 glass-strong rounded-lg p-1 shadow-elegant z-50">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setLangOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition ${
                    lang === l.code
                      ? "bg-primary/15 text-primary"
                      : "text-foreground hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {wallet.connected ? (
          <button
            onClick={disconnectWallet}
            className={`w-full flex items-center justify-center gap-2 rounded-lg glass-strong hover:border-white/25 text-foreground font-medium text-sm transition h-10 ${
              collapsed ? "px-0" : "px-3"
            }`}
            title={collapsed ? wallet.address ?? "" : undefined}
          >
            <span className="w-2 h-2 rounded-full bg-emerald shadow-glow" />
            {!collapsed && (
              <span className="truncate font-mono text-xs">
                {wallet.address?.slice(0, 6)}…{wallet.address?.slice(-4)}
              </span>
            )}
          </button>
        ) : (
          <button
            onClick={openWalletModal}
            className={`w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-brand text-primary-foreground font-medium text-sm transition hover:shadow-glow h-10 ${
              collapsed ? "px-0" : "px-4"
            }`}
            title={collapsed ? "Connect Wallet" : undefined}
          >
            <Wallet className="w-[18px] h-[18px]" />
            {!collapsed && <span>Connect Wallet</span>}
          </button>
        )}
      </div>
    </aside>
  );
}
