import { useEffect } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { useApp } from "@/components/AppContext";

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useApp();
  const router = useRouterState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate({ to: "/login" });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}