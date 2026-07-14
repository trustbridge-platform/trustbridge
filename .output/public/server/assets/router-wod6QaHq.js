import { t as AppProvider } from "./AppContext-Cyd9VWQY.js";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/assets/styles-DNJMUUFw.css";
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$18 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "TrustBridge — Humanitarian Aid on Stellar" },
			{
				name: "description",
				content: "TrustBridge is a decentralized humanitarian aid platform built on the Stellar network, enabling transparent, low-fee donations to verified campaigns worldwide."
			},
			{
				name: "author",
				content: "TrustBridge Team"
			},
			{
				property: "og:title",
				content: "TrustBridge — Humanitarian Aid on Stellar"
			},
			{
				property: "og:description",
				content: "Decentralized humanitarian aid platform on Stellar"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@TrustBridge"
			},
			{
				name: "twitter:title",
				content: "TrustBridge — Humanitarian Aid on Stellar"
			},
			{
				name: "twitter:description",
				content: "Decentralized humanitarian aid platform on Stellar"
			},
			{
				property: "og:image",
				content: "/favicon.svg"
			},
			{
				name: "twitter:image",
				content: "/favicon.svg"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$18.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(AppProvider, { children: /* @__PURE__ */ jsx(Outlet, {}) })
	});
}
//#endregion
//#region src/routes/transactions.tsx
var $$splitComponentImporter$17 = () => import("./transactions-YTvQ4XRm.js");
var Route$17 = createFileRoute("/transactions")({
	head: () => ({ meta: [{ title: "Transactions — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
//#endregion
//#region src/routes/signup.tsx
var $$splitComponentImporter$16 = () => import("./signup-CDQVylfw.js");
var Route$16 = createFileRoute("/signup")({
	head: () => ({ meta: [{ title: "Sign Up — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
//#endregion
//#region src/routes/settings.tsx
var $$splitComponentImporter$15 = () => import("./settings-Bv_A9JGn.js");
var Route$15 = createFileRoute("/settings")({
	head: () => ({ meta: [{ title: "Settings — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
//#endregion
//#region src/routes/send.tsx
var $$splitComponentImporter$14 = () => import("./send-KuA7xMzj.js");
var Route$14 = createFileRoute("/send")({
	head: () => ({ meta: [{ title: "Send — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
//#endregion
//#region src/routes/receive.tsx
var $$splitComponentImporter$13 = () => import("./receive-X7_F9BC3.js");
var Route$13 = createFileRoute("/receive")({
	head: () => ({ meta: [{ title: "Receive — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
//#endregion
//#region src/routes/profile.tsx
var $$splitComponentImporter$12 = () => import("./profile-CqkgDTip.js");
var Route$12 = createFileRoute("/profile")({
	head: () => ({ meta: [{ title: "Profile — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
//#endregion
//#region src/routes/login.tsx
var $$splitComponentImporter$11 = () => import("./login-1cmWyso5.js");
var Route$11 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Sign In — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
//#endregion
//#region src/routes/dashboard.tsx
var $$splitComponentImporter$10 = () => import("./dashboard-xQe-0lDJ.js");
var Route$10 = createFileRoute("/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
//#endregion
//#region src/routes/create-campaign.tsx
var $$splitComponentImporter$9 = () => import("./create-campaign-Btkq9G2W.js");
var Route$9 = createFileRoute("/create-campaign")({
	head: () => ({ meta: [{ title: "Create Campaign — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
//#endregion
//#region src/routes/campaigns.tsx
var $$splitComponentImporter$8 = () => import("./campaigns-CMZwGxcE.js");
var Route$8 = createFileRoute("/campaigns")({
	head: () => ({ meta: [{ title: "Campaigns — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/analytics.tsx
var $$splitComponentImporter$7 = () => import("./analytics-DySlrIn8.js");
var Route$7 = createFileRoute("/analytics")({
	head: () => ({ meta: [{ title: "Analytics — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$6 = () => import("./routes-DYRS2PrR.js");
var Route$6 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "TrustBridge — Transparent Humanitarian Aid on Stellar" },
			{
				name: "description",
				content: "TrustBridge brings end-to-end transparency to humanitarian aid. Every donation tracked on the Stellar blockchain. Instant, trustless, accountable."
			},
			{
				property: "og:title",
				content: "TrustBridge — Humanitarian Aid on Stellar"
			},
			{
				property: "og:description",
				content: "Transparent, on-chain humanitarian aid. Connect your Stellar wallet to launch or fund verified campaigns."
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/community/updates.tsx
var $$splitComponentImporter$5 = () => import("./updates-Del73t_y.js");
var Route$5 = createFileRoute("/community/updates")({
	head: () => ({ meta: [{ title: "Campaign Updates — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/community/support.tsx
var $$splitComponentImporter$4 = () => import("./support-BRPUFlrc.js");
var Route$4 = createFileRoute("/community/support")({
	head: () => ({ meta: [{ title: "Support Tickets — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/community/general.tsx
var $$splitComponentImporter$3 = () => import("./general-tocfwJut.js");
var Route$3 = createFileRoute("/community/general")({
	head: () => ({ meta: [{ title: "General Discussion — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/community/features.tsx
var $$splitComponentImporter$2 = () => import("./features-DnEfSy6G.js");
var Route$2 = createFileRoute("/community/features")({
	head: () => ({ meta: [{ title: "Feature Requests — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/community/bugs.tsx
var $$splitComponentImporter$1 = () => import("./bugs-BAnagnUP.js");
var Route$1 = createFileRoute("/community/bugs")({
	head: () => ({ meta: [{ title: "Bug Reports — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/community/announcements.tsx
var $$splitComponentImporter = () => import("./announcements-B7cVECj6.js");
var Route = createFileRoute("/community/announcements")({
	head: () => ({ meta: [{ title: "Announcements — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var TransactionsRoute = Route$17.update({
	id: "/transactions",
	path: "/transactions",
	getParentRoute: () => Route$18
});
var SignupRoute = Route$16.update({
	id: "/signup",
	path: "/signup",
	getParentRoute: () => Route$18
});
var SettingsRoute = Route$15.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => Route$18
});
var SendRoute = Route$14.update({
	id: "/send",
	path: "/send",
	getParentRoute: () => Route$18
});
var ReceiveRoute = Route$13.update({
	id: "/receive",
	path: "/receive",
	getParentRoute: () => Route$18
});
var ProfileRoute = Route$12.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => Route$18
});
var LoginRoute = Route$11.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$18
});
var DashboardRoute = Route$10.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$18
});
var CreateCampaignRoute = Route$9.update({
	id: "/create-campaign",
	path: "/create-campaign",
	getParentRoute: () => Route$18
});
var CampaignsRoute = Route$8.update({
	id: "/campaigns",
	path: "/campaigns",
	getParentRoute: () => Route$18
});
var AnalyticsRoute = Route$7.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => Route$18
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$18
});
var CommunityUpdatesRoute = Route$5.update({
	id: "/community/updates",
	path: "/community/updates",
	getParentRoute: () => Route$18
});
var CommunitySupportRoute = Route$4.update({
	id: "/community/support",
	path: "/community/support",
	getParentRoute: () => Route$18
});
var CommunityGeneralRoute = Route$3.update({
	id: "/community/general",
	path: "/community/general",
	getParentRoute: () => Route$18
});
var CommunityFeaturesRoute = Route$2.update({
	id: "/community/features",
	path: "/community/features",
	getParentRoute: () => Route$18
});
var CommunityBugsRoute = Route$1.update({
	id: "/community/bugs",
	path: "/community/bugs",
	getParentRoute: () => Route$18
});
var rootRouteChildren = {
	IndexRoute,
	AnalyticsRoute,
	CampaignsRoute,
	CreateCampaignRoute,
	DashboardRoute,
	LoginRoute,
	ProfileRoute,
	ReceiveRoute,
	SendRoute,
	SettingsRoute,
	SignupRoute,
	TransactionsRoute,
	CommunityAnnouncementsRoute: Route.update({
		id: "/community/announcements",
		path: "/community/announcements",
		getParentRoute: () => Route$18
	}),
	CommunityBugsRoute,
	CommunityFeaturesRoute,
	CommunityGeneralRoute,
	CommunitySupportRoute,
	CommunityUpdatesRoute
};
var routeTree = Route$18._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
