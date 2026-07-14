import { m as require_jsx_runtime } from "./index-BQzpoh2w.js";
//#region src/components/ui-bits.tsx
var import_jsx_runtime = require_jsx_runtime();
function Badge({ children, tone = "neutral" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium border ${{
			neutral: "bg-white/5 text-muted-foreground border-white/10",
			success: "bg-emerald/10 text-emerald border-emerald/20",
			warning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
			danger: "bg-destructive/15 text-red-400 border-destructive/30",
			info: "bg-primary/10 text-primary border-primary/20"
		}[tone]}`,
		children
	});
}
function Progress({ value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-1.5 w-full rounded-full bg-white/5 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full bg-gradient-brand rounded-full transition-all duration-700",
			style: { width: `${Math.min(100, Math.max(0, value))}%` }
		})
	});
}
function StatTile({ label, value, delta, icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-2xl p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-9 h-9 rounded-lg bg-primary/10 grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4.5 h-4.5 text-primary" })
				}), delta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] text-emerald font-medium",
					children: delta
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-2xl font-semibold tracking-tight",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted-foreground mt-1",
				children: label
			})
		]
	});
}
//#endregion
export { Progress as n, StatTile as r, Badge as t };
