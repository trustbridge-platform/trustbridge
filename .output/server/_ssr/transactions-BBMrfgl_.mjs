import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { l as useApp } from "./AppContext-DkQX8ryp.mjs";
import { P as Heart, U as ExternalLink, _ as Search, at as ArrowUpRight, ct as ArrowDownLeft, et as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Bxm18wc0.mjs";
import { t as RequireAuth } from "./RequireAuth-CZcrzSOG.mjs";
import { t as Badge } from "./ui-bits-DYZZSpTM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/transactions-BBMrfgl_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var all = [
	{
		id: "TX-94821",
		hash: "a1f9c7…d3e2",
		type: "donation",
		campaign: "Clean Water Yemen",
		amount: -125,
		asset: "XLM",
		status: "confirmed",
		date: "2026-06-21 14:32",
		fee: 1e-5,
		memo: "Campaign #CW-2026"
	},
	{
		id: "TX-94820",
		hash: "b2c8d4…91f0",
		type: "receive",
		campaign: "Direct transfer",
		amount: 500,
		asset: "XLM",
		status: "confirmed",
		date: "2026-06-21 13:15",
		fee: 1e-5
	},
	{
		id: "TX-94819",
		hash: "f7e3b1…ac20",
		type: "send",
		campaign: "Vendor payout",
		amount: -1200,
		asset: "XLM",
		status: "pending",
		date: "2026-06-21 11:48",
		fee: 1e-5
	},
	{
		id: "TX-94818",
		hash: "9d2a55…7be4",
		type: "donation",
		campaign: "Earthquake Relief Türkiye",
		amount: -300,
		asset: "USDC",
		status: "confirmed",
		date: "2026-06-20 21:02",
		fee: 1e-5
	},
	{
		id: "TX-94817",
		hash: "1c44a0…0091",
		type: "receive",
		campaign: "Mobile Clinics Sudan",
		amount: 75,
		asset: "XLM",
		status: "failed",
		date: "2026-06-20 18:50",
		fee: 0
	},
	{
		id: "TX-94816",
		hash: "33fa12…ee59",
		type: "donation",
		campaign: "Books for Rural Kenya",
		amount: -50,
		asset: "XLM",
		status: "confirmed",
		date: "2026-06-20 09:11",
		fee: 1e-5
	}
];
var tabsKey = [
	"all",
	"sent",
	"received"
];
function Transactions() {
	const { t } = useApp();
	const [tab, setTab] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(null);
	const list = (0, import_react.useMemo)(() => {
		return all.filter((tx) => {
			if (tab === "sent" && tx.amount >= 0) return false;
			if (tab === "received" && tx.amount < 0) return false;
			if (!q) return true;
			const s = q.toLowerCase();
			return tx.id.toLowerCase().includes(s) || tx.hash.toLowerCase().includes(s) || tx.campaign.toLowerCase().includes(s);
		});
	}, [tab, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireAuth, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: t("transactions"),
		subtitle: t("overview"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass rounded-2xl p-4 mb-6 flex flex-col md:flex-row gap-3 md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-1 p-1 rounded-lg bg-white/5 border border-white/10",
				children: tabsKey.map((tKey) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(tKey),
					className: `h-8 px-3 rounded-md text-xs font-medium transition ${tab === tKey ? "bg-gradient-brand text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
					children: t(tKey)
				}, tKey))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: t("searchPlaceholder"),
					className: "w-full h-10 pl-9 pr-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass rounded-2xl overflow-hidden divide-y divide-white/5",
			children: [list.map((tx) => {
				const isOpen = open === tx.id;
				const Icon = tx.type === "donation" ? Heart : tx.amount >= 0 ? ArrowDownLeft : ArrowUpRight;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpen(isOpen ? null : tx.id),
					className: "w-full flex items-center gap-4 p-4 hover:bg-white/[0.02] transition text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `w-9 h-9 rounded-lg grid place-items-center shrink-0 ${tx.amount >= 0 ? "bg-emerald/10 text-emerald" : "bg-primary/10 text-primary"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm font-medium capitalize truncate",
								children: [
									tx.type,
									" · ",
									tx.campaign
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground font-mono truncate",
								children: [
									tx.hash,
									" · ",
									tx.id
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `text-sm font-mono ${tx.amount >= 0 ? "text-emerald" : ""}`,
								children: [
									tx.amount >= 0 ? "+" : "",
									tx.amount,
									" ",
									tx.asset
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-muted-foreground",
								children: tx.date
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: tx.status === "confirmed" ? "success" : tx.status === "pending" ? "warning" : "danger",
							children: tx.status === "confirmed" ? t("statusConfirmed") : tx.status === "pending" ? t("statusPending") : t("statusFailed")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `w-4 h-4 text-muted-foreground transition ${isOpen ? "rotate-180" : ""}` })
					]
				}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white/[0.02] px-4 pb-4 grid sm:grid-cols-2 gap-3 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Transaction ID",
							value: tx.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Hash",
							value: tx.hash,
							mono: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Network fee",
							value: `${tx.fee} XLM`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Memo",
							value: tx.memo ?? "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#",
							className: "sm:col-span-2 inline-flex items-center gap-2 text-primary hover:underline",
							children: ["View on Stellar Expert ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3 h-3" })]
						})
					]
				})] }, tx.id);
			}), list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-8 text-center text-sm text-muted-foreground",
				children: "No transactions match your filters."
			})]
		})]
	}) });
}
function Detail({ label, value, mono }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-lg p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-1 ${mono ? "font-mono" : ""}`,
			children: value
		})]
	});
}
//#endregion
export { Transactions as component };
