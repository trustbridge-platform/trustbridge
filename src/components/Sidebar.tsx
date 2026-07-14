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
  MessageSquare,
  Bell,
  Bug,
  Lightbulb,
  Pin,
  Hash,
  Users,
  ChevronRight,
  Star,
  LogIn,
  UserPlus,
  LogOut,
  User,
} from "lucide-react";
import { useState } from "react";
import { useApp, languages } from "./AppContext";
import * as api from "@/services/api";

const authedNavItems = [
  { icon: LayoutDashboard, labelKey: "dashboard", to: "/dashboard" },
  { icon: Megaphone, labelKey: "campaigns", to: "/campaigns" },
  { icon: ArrowLeftRight, labelKey: "transactions", to: "/transactions" },
  { icon: BarChart3, labelKey: "analytics", to: "/analytics" },
  { icon: PlusCircle, labelKey: "createCampaign", to: "/create-campaign" },
  { icon: Settings, labelKey: "settings", to: "/settings" },
  { icon: User, labelKey: "profile", to: "/profile" },
] as const;

const guestNavItems = [
  { icon: LogIn, label: "Sign In", to: "/login" },
  { icon: UserPlus, label: "Sign Up", to: "/signup" },
] as const;

const communityChannels = [
  { icon: Bell, label: "Announcements", to: "/community/announcements" },
  { icon: MessageSquare, label: "General Discussion", to: "/community/general" },
  { icon: Megaphone, label: "Campaign Updates", to: "/community/updates" },
  { icon: Bug, label: "Bug Reports", to: "/community/bugs" },
  { icon: Lightbulb, label: "Feature Requests", to: "/community/features" },
  { icon: Users, label: "Support Tickets", to: "/community/support" },
];

const pinnedItems = [
  { icon: Star, label: "Trending Campaigns", to: "/campaigns?sort=trending" },
  { icon: Shield, label: "Security Center", to: "/settings?tab=security" },
];

export default function Sidebar() {
  const { collapsed, toggleCollapsed, lang, setLang, wallet, openWalletModal, disconnectWallet, t } =
    useApp();
  const [langOpen, setLangOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(true);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const app = useApp();

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
        {/* Main navigation */}
        {(app.isAuthenticated ? authedNavItems : guestNavItems).map((item: any) => {
          const Icon = item.icon;
          const isActive = pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition relative ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
              }`}
              title={collapsed ? (item.label || (item as any).labelKey) : undefined}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r bg-gradient-brand" />
              )}
              <Icon className="w-[18px] h-[18px] shrink-0" />
              {!collapsed && <span className="truncate">{item.label || t((item as any).labelKey)}</span>}
            </Link>
          );
        })}

        {!collapsed && <div className="border-t border-sidebar-border my-2" />}

        {/* Pinned items */}
        {app.isAuthenticated && !collapsed && (
          <>
            <div className="flex items-center gap-2 px-3 py-1.5">
              <Pin className="w-3 h-3 text-muted-foreground" />
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Pinned</span>
            </div>
            {pinnedItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.to?.split("?")[0];
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition ${
                    isActive
                      ? "bg-sidebar-accent text-sidebar-foreground"
                      : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </>
        )}

        {/* Community Channels Section */}
        {app.isAuthenticated && !collapsed && (
          <>
            <div className="border-t border-sidebar-border my-2" />
            <button
              onClick={() => setCommunityOpen((v) => !v)}
              className="w-full flex items-center gap-2 px-3 py-1.5 text-[10px] uppercase tracking-wider text-muted-foreground font-medium hover:text-foreground transition"
            >
              <ChevronRight
                className={`w-3 h-3 transition-transform ${communityOpen ? "rotate-90" : ""}`}
              />
              Community
            </button>
            {communityOpen &&
              communityChannels.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.to;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition ${
                      isActive
                        ? "bg-sidebar-accent text-sidebar-foreground"
                        : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
          </>
        )}
      </nav>

      <div className="border-t border-sidebar-border p-3 space-y-2 shrink-0">
        <div className="relative">
          <button
            onClick={() => setLangOpen((v) => !v)}
            disabled={!app.isAuthenticated}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition disabled:opacity-50"
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
          {langOpen && !collapsed && app.isAuthenticated && (
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

        {app.isAuthenticated ? (
          <button
            onClick={async () => {
              api.logout();
              app.setUser(null);
              disconnectWallet();
            }}
            className={`w-full flex items-center justify-center gap-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 font-medium text-sm transition h-10 ${
              collapsed ? "px-0" : "px-3"
            }`}
            title={collapsed ? "Logout" : undefined}
          >
            <LogOut className="w-[18px] h-[18px]" />
            {!collapsed && <span>Logout</span>}
          </button>
        ) : (
          <div className="space-y-2">
            <Link to="/login" className={`w-full flex items-center justify-center gap-2 rounded-lg glass hover:border-white/25 text-foreground font-medium text-sm transition h-10 ${collapsed ? "px-0" : "px-3"}`}>
              <LogIn className="w-[18px] h-[18px]" />
              {!collapsed && <span>Sign In</span>}
            </Link>
            <Link to="/signup" className={`w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-brand text-primary-foreground font-medium text-sm transition hover:shadow-glow h-10 ${collapsed ? "px-0" : "px-4"}`}>
              <UserPlus className="w-[18px] h-[18px]" />
              {!collapsed && <span>Sign Up</span>}
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}