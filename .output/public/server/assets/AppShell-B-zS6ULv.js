import { r as useApp } from "./AppContext-Cyd9VWQY.js";
import { n as ConnectWalletModal, r as Sidebar, t as DonateModal } from "./DonateModal-DAZ_SpYc.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/AppShell.tsx
function AppShell({ children, title, subtitle, actions }) {
	const { collapsed } = useApp();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx(Sidebar, {}),
			/* @__PURE__ */ jsx("div", {
				className: `transition-[padding] duration-300 ${collapsed ? "pl-[72px]" : "pl-[260px]"}`,
				children: /* @__PURE__ */ jsxs("main", {
					className: "px-6 lg:px-10 py-8 max-w-7xl mx-auto",
					children: [(title || actions) && /* @__PURE__ */ jsxs("header", {
						className: "flex flex-wrap items-end justify-between gap-4 mb-8",
						children: [/* @__PURE__ */ jsxs("div", { children: [title && /* @__PURE__ */ jsx("h1", {
							className: "font-display text-3xl md:text-4xl font-semibold tracking-tight",
							children: title
						}), subtitle && /* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground mt-1 text-sm",
							children: subtitle
						})] }), actions && /* @__PURE__ */ jsx("div", {
							className: "flex items-center gap-2",
							children: actions
						})]
					}), children]
				})
			}),
			/* @__PURE__ */ jsx(ConnectWalletModal, {}),
			/* @__PURE__ */ jsx(DonateModal, {})
		]
	});
}
//#endregion
export { AppShell as t };
