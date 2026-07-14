import { createFileRoute } from "@tanstack/react-router";
import CommunityPage from "./-community-page";

export const Route = createFileRoute("/community/updates")({
  head: () => ({ meta: [{ title: "Campaign Updates — TrustBridge" }] }),
  component: () => <CommunityPage channel="updates" />,
});