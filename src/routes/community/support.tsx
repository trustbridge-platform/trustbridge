import { createFileRoute } from "@tanstack/react-router";
import CommunityPage from "./-community-page";

export const Route = createFileRoute("/community/support")({
  head: () => ({ meta: [{ title: "Support Tickets — TrustBridge" }] }),
  component: () => <CommunityPage channel="support" />,
});