import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { useApp } from "./AppContext";
import ConnectWalletModal from "./modals/ConnectWalletModal";
import DonateModal from "./modals/DonateModal";

export default function AppShell({
  children,
  title,
  subtitle,
  actions,
}: {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  const { collapsed } = useApp();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <div
        className={`transition-[padding] duration-300 ${
          collapsed ? "pl-[72px]" : "pl-[260px]"
        }`}
      >
        <main className="px-6 lg:px-10 py-8 max-w-7xl mx-auto">
          {(title || actions) && (
            <header className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                {title && (
                  <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                    {title}
                  </h1>
                )}
                {subtitle && (
                  <p className="text-muted-foreground mt-1 text-sm">{subtitle}</p>
                )}
              </div>
              {actions && <div className="flex items-center gap-2">{actions}</div>}
            </header>
          )}
          {children}
        </main>
      </div>
      <ConnectWalletModal />
      <DonateModal />
    </div>
  );
}
