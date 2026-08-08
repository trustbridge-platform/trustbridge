import { Menu, Shield } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useApp } from "./AppContext";

export default function MobileTopBar() {
  const { openMobileNav } = useApp();

  return (
    <header className="lg:hidden sticky top-0 z-30 flex items-center gap-3 h-14 px-4 border-b border-sidebar-border bg-background/90 backdrop-blur-md">
      <button
        onClick={openMobileNav}
        className="w-11 h-11 grid place-items-center rounded-lg hover:bg-sidebar-accent text-foreground transition"
        aria-label="Open navigation menu"
      >
        <Menu className="w-5 h-5" />
      </button>
      <Link to="/" className="flex items-center gap-2 min-w-0">
        <div className="w-8 h-8 rounded-lg bg-gradient-brand grid place-items-center shrink-0 shadow-glow">
          <Shield className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
        </div>
        <span className="font-display font-semibold text-sidebar-foreground truncate">
          TrustBridge
        </span>
      </Link>
    </header>
  );
}