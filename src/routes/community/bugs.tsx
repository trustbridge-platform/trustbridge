import { createFileRoute } from "@tanstack/react-router";
import CommunityPage from "./-community-page";

export const Route = createFileRoute("/community/bugs")({
  head: () => ({ meta: [{ title: "Bug Reports — TrustBridge" }] }),
  component: () => <CommunityPage channel="bugs" />,
});