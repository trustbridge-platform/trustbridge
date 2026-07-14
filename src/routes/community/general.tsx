import { createFileRoute } from "@tanstack/react-router";
import CommunityPage from "./-community-page";

export const Route = createFileRoute("/community/general")({
  head: () => ({ meta: [{ title: "General Discussion — TrustBridge" }] }),
  component: () => <CommunityPage channel="general" />,
});