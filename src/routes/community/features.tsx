import { createFileRoute } from "@tanstack/react-router";
import CommunityPage from "./-community-page";

export const Route = createFileRoute("/community/features")({
  head: () => ({ meta: [{ title: "Feature Requests — TrustBridge" }] }),
  component: () => <CommunityPage channel="features" />,
});