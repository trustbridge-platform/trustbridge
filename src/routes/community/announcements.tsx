import { createFileRoute } from "@tanstack/react-router";
import CommunityPage from "./-community-page";

export const Route = createFileRoute("/community/announcements")({
  head: () => ({ meta: [{ title: "Announcements — TrustBridge" }] }),
  component: () => <CommunityPage channel="announcements" />,
});