import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useApp } from "@/components/AppContext";
import * as api from "@/services/api";

export const Route = createFileRoute("/auth/github/callback")({
  head: () => ({ meta: [{ title: "Signing in with GitHub…" }] }),
  component: GithubCallback,
});

function GithubCallback() {
  const nav = useNavigate();
  const { setUser } = useApp();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (!code) {
      nav({ to: "/login" });
      return;
    }
    api.githubCallback(code)
      .then((res) => {
        localStorage.setItem("trustbridge_token", res.token);
        setUser(res.user);
        nav({ to: "/dashboard" });
      })
      .catch(() => {
        nav({ to: "/login" });
      });
  }, [nav, setUser]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0e1a]">
      <div className="text-center space-y-4">
        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
        <p className="text-sm text-muted-foreground">Signing in with GitHub…</p>
      </div>
    </div>
  );
}