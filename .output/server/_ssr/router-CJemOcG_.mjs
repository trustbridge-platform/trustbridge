import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as AppProvider } from "./AppContext-DkQX8ryp.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CJemOcG_.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D_TJyQSk.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$18.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$17 = () => import("./transactions-BBMrfgl_.mjs");
var Route$17 = createFileRoute("/transactions")({
	head: () => ({ meta: [{ title: "Transactions — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./signup-Ce_4r7ab.mjs");
var Route$16 = createFileRoute("/signup")({
	head: () => ({ meta: [{ title: "Sign Up — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./settings-DIbn5Hl_.mjs");
var Route$15 = createFileRoute("/settings")({
	head: () => ({ meta: [{ title: "Settings — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./send-CaJXShrQ.mjs");
var Route$14 = createFileRoute("/send")({
	head: () => ({ meta: [{ title: "Send — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./receive-CeVnYtu7.mjs");
var Route$13 = createFileRoute("/receive")({
	head: () => ({ meta: [{ title: "Receive — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./profile-DbIrX8K8.mjs");
var Route$12 = createFileRoute("/profile")({
	head: () => ({ meta: [{ title: "Profile — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./login-C-xfzjnb.mjs");
var Route$11 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Sign In — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./dashboard-q4RS3W-a.mjs");
var Route$10 = createFileRoute("/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./create-campaign-DXBlJ563.mjs");
var Route$9 = createFileRoute("/create-campaign")({
	head: () => ({ meta: [{ title: "Create Campaign — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./campaigns-uCo7JvgZ.mjs");
var Route$8 = createFileRoute("/campaigns")({
	head: () => ({ meta: [{ title: "Campaigns — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./analytics-CjMGSNic.mjs");
var Route$7 = createFileRoute("/analytics")({
	head: () => ({ meta: [{ title: "Analytics — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./routes-CsKNsgBx.mjs");
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
var $$splitComponentImporter$5 = () => import("./updates-Cf3lhEU-.mjs");
var Route$5 = createFileRoute("/community/updates")({
	head: () => ({ meta: [{ title: "Campaign Updates — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./support-BNHIkflM.mjs");
var Route$4 = createFileRoute("/community/support")({
	head: () => ({ meta: [{ title: "Support Tickets — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./general-CjfyBp6r.mjs");
var Route$3 = createFileRoute("/community/general")({
	head: () => ({ meta: [{ title: "General Discussion — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./features-137J_ZS9.mjs");
var Route$2 = createFileRoute("/community/features")({
	head: () => ({ meta: [{ title: "Feature Requests — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./bugs-cnsZTqWv.mjs");
var Route$1 = createFileRoute("/community/bugs")({
	head: () => ({ meta: [{ title: "Bug Reports — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./announcements-CVc6ZXBS.mjs");
var Route = createFileRoute("/community/announcements")({
	head: () => ({ meta: [{ title: "Announcements — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
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
