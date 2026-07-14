import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as AppProvider } from "./AppContext-uQY-TZ3c.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CZPPRgpd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DMt32QEk.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
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
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
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
var Route$16 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "stellar" },
			{
				name: "description",
				content: "trustbridge"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "stellar"
			},
			{
				property: "og:description",
				content: "trustbridge"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			},
			{
				name: "twitter:title",
				content: "stellar"
			},
			{
				name: "twitter:description",
				content: "trustbridge"
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2374983c-1c82-4058-82be-6fc3d9c0e80b/id-preview-43c4584a--8812b53e-2cb2-4824-8b6f-9e896c9ed8cb.lovable.app-1782048732111.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2374983c-1c82-4058-82be-6fc3d9c0e80b/id-preview-43c4584a--8812b53e-2cb2-4824-8b6f-9e896c9ed8cb.lovable.app-1782048732111.png"
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
	const { queryClient } = Route$16.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$15 = () => import("./transactions-CDx74fYy.mjs");
var Route$15 = createFileRoute("/transactions")({
	head: () => ({ meta: [{ title: "Transactions — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./settings-Ckvn67gN.mjs");
var Route$14 = createFileRoute("/settings")({
	head: () => ({ meta: [{ title: "Settings — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./send-CLmy9Lhg.mjs");
var Route$13 = createFileRoute("/send")({
	head: () => ({ meta: [{ title: "Send — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./receive-B-14klOm.mjs");
var Route$12 = createFileRoute("/receive")({
	head: () => ({ meta: [{ title: "Receive — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./login-BAXsIIgf.mjs");
var Route$11 = createFileRoute("/login")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => ({ meta: [{ title: "Sign In — TrustBridge" }] })
});
var $$splitComponentImporter$10 = () => import("./dashboard-rKDdbS6-.mjs");
var Route$10 = createFileRoute("/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./create-campaign-CDCOu9Cg.mjs");
var Route$9 = createFileRoute("/create-campaign")({
	head: () => ({ meta: [{ title: "Create Campaign — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./campaigns-DlKvz_dd.mjs");
var Route$8 = createFileRoute("/campaigns")({
	head: () => ({ meta: [{ title: "Campaigns — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./analytics-CHwEcHjN.mjs");
var Route$7 = createFileRoute("/analytics")({
	head: () => ({ meta: [{ title: "Analytics — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./routes-BE82tG9z.mjs");
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
var $$splitComponentImporter$5 = () => import("./updates-D5X2q0Df.mjs");
var Route$5 = createFileRoute("/community/updates")({
	head: () => ({ meta: [{ title: "Campaign Updates — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./support-5B7Ca-AJ.mjs");
var Route$4 = createFileRoute("/community/support")({
	head: () => ({ meta: [{ title: "Support Tickets — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./general-Be4gHpZd.mjs");
var Route$3 = createFileRoute("/community/general")({
	head: () => ({ meta: [{ title: "General Discussion — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./features-CSHOHt8A.mjs");
var Route$2 = createFileRoute("/community/features")({
	head: () => ({ meta: [{ title: "Feature Requests — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./bugs-LKhZ0dD9.mjs");
var Route$1 = createFileRoute("/community/bugs")({
	head: () => ({ meta: [{ title: "Bug Reports — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./announcements-DEkQwue5.mjs");
var Route = createFileRoute("/community/announcements")({
	head: () => ({ meta: [{ title: "Announcements — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TransactionsRoute = Route$15.update({
	id: "/transactions",
	path: "/transactions",
	getParentRoute: () => Route$16
});
var SettingsRoute = Route$14.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => Route$16
});
var SendRoute = Route$13.update({
	id: "/send",
	path: "/send",
	getParentRoute: () => Route$16
});
var ReceiveRoute = Route$12.update({
	id: "/receive",
	path: "/receive",
	getParentRoute: () => Route$16
});
var LoginRoute = Route$11.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$16
});
var DashboardRoute = Route$10.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$16
});
var CreateCampaignRoute = Route$9.update({
	id: "/create-campaign",
	path: "/create-campaign",
	getParentRoute: () => Route$16
});
var CampaignsRoute = Route$8.update({
	id: "/campaigns",
	path: "/campaigns",
	getParentRoute: () => Route$16
});
var AnalyticsRoute = Route$7.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => Route$16
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$16
});
var CommunityUpdatesRoute = Route$5.update({
	id: "/community/updates",
	path: "/community/updates",
	getParentRoute: () => Route$16
});
var CommunitySupportRoute = Route$4.update({
	id: "/community/support",
	path: "/community/support",
	getParentRoute: () => Route$16
});
var CommunityGeneralRoute = Route$3.update({
	id: "/community/general",
	path: "/community/general",
	getParentRoute: () => Route$16
});
var CommunityFeaturesRoute = Route$2.update({
	id: "/community/features",
	path: "/community/features",
	getParentRoute: () => Route$16
});
var CommunityBugsRoute = Route$1.update({
	id: "/community/bugs",
	path: "/community/bugs",
	getParentRoute: () => Route$16
});
var rootRouteChildren = {
	IndexRoute,
	AnalyticsRoute,
	CampaignsRoute,
	CreateCampaignRoute,
	DashboardRoute,
	LoginRoute,
	ReceiveRoute,
	SendRoute,
	SettingsRoute,
	TransactionsRoute,
	CommunityAnnouncementsRoute: Route.update({
		id: "/community/announcements",
		path: "/community/announcements",
		getParentRoute: () => Route$16
	}),
	CommunityBugsRoute,
	CommunityFeaturesRoute,
	CommunityGeneralRoute,
	CommunitySupportRoute,
	CommunityUpdatesRoute
};
var routeTree = Route$16._addFileChildren(rootRouteChildren)._addFileTypes();
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
