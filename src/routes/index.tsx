import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/components/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TrustBridge — Transparent Humanitarian Aid on Stellar" },
      {
        name: "description",
        content:
          "TrustBridge brings end-to-end transparency to humanitarian aid. Every donation tracked on the Stellar blockchain. Instant, trustless, accountable.",
      },
      { property: "og:title", content: "TrustBridge — Humanitarian Aid on Stellar" },
      {
        property: "og:description",
        content:
          "Transparent, on-chain humanitarian aid. Connect your Stellar wallet to launch or fund verified campaigns.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Landing,
});
