import { i as Sidebar, n as ConnectWalletModal, t as DonateModal } from "./DonateModal-DUxy_P0-.js";
import { m as require_jsx_runtime, n as useApp } from "./index-BgNBbm5u.js";
//#region src/components/AppShell.tsx
var import_jsx_runtime = require_jsx_runtime();
function AppShell({ children, title, subtitle, actions }) {
	const { collapsed } = useApp();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `transition-[padding] duration-300 ${collapsed ? "pl-[72px]" : "pl-[260px]"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "px-6 lg:px-10 py-8 max-w-7xl mx-auto",
					children: [(title || actions) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex flex-wrap items-end justify-between gap-4 mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl md:text-4xl font-semibold tracking-tight",
							children: title
						}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-1 text-sm",
							children: subtitle
						})] }), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2",
							children: actions
						})]
					}), children]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectWalletModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonateModal, {})
		]
	});
}
//#endregion
export { AppShell as t };
