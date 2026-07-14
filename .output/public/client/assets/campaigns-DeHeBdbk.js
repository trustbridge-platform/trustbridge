import { o as Users, p as Heart } from "./DonateModal-DUxy_P0-.js";
import { _ as __toESM, h as require_react, m as require_jsx_runtime, n as useApp } from "./index-BgNBbm5u.js";
import { n as createLucideIcon } from "./shield-D90MvTBE.js";
import { t as Search } from "./search-BhQphEhg.js";
import { t as AppShell } from "./AppShell-BAgAe4_0.js";
import { t as RequireAuth } from "./RequireAuth-DMxoKncT.js";
import { n as Progress, t as Badge } from "./ui-bits-ZCLeS0xh.js";
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Clock = createLucideIcon("clock", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l4 2",
	key: "mmk7yg"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Flame = createLucideIcon("flame", [["path", {
	d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
	key: "1slcih"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Funnel = createLucideIcon("funnel", [["path", {
	d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
	key: "sc7q7i"
}]]);
//#endregion
//#region src/routes/campaigns.tsx?tsr-split=component
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categoriesKey = [
	"all",
	"foodWater",
	"disasterRelief",
	"medical",
	"education"
];
var sortKeys = [
	"trending",
	"urgent",
	"nearlyFunded"
];
var allCampaigns = [
	{
		id: 1,
		title: "Clean Water for Yemen",
		org: "Mercy Wells",
		cat: "Food & Water",
		raised: 84200,
		goal: 12e4,
		donors: 1284,
		days: 12,
		urgent: true,
		gradient: "from-blue-500 to-emerald-400"
	},
	{
		id: 2,
		title: "Earthquake Relief Türkiye",
		org: "Global Aid Network",
		cat: "Disaster Relief",
		raised: 198400,
		goal: 25e4,
		donors: 4820,
		days: 4,
		urgent: true,
		gradient: "from-rose-500 to-amber-400"
	},
	{
		id: 3,
		title: "Mobile Clinics Sudan",
		org: "MedBridge",
		cat: "Medical",
		raised: 42100,
		goal: 9e4,
		donors: 612,
		days: 28,
		urgent: false,
		gradient: "from-emerald-500 to-cyan-400"
	},
	{
		id: 4,
		title: "Books for Rural Kenya",
		org: "EduFuture",
		cat: "Education",
		raised: 28900,
		goal: 45e3,
		donors: 408,
		days: 19,
		urgent: false,
		gradient: "from-violet-500 to-blue-500"
	},
	{
		id: 5,
		title: "Food Aid Gaza",
		org: "Hope Kitchen",
		cat: "Food & Water",
		raised: 312e3,
		goal: 35e4,
		donors: 9201,
		days: 7,
		urgent: true,
		gradient: "from-amber-500 to-rose-500"
	},
	{
		id: 6,
		title: "Flood Recovery Pakistan",
		org: "RiverCare",
		cat: "Disaster Relief",
		raised: 56200,
		goal: 2e5,
		donors: 982,
		days: 45,
		urgent: false,
		gradient: "from-cyan-500 to-blue-600"
	},
	{
		id: 7,
		title: "Vaccines for Children DRC",
		org: "MedBridge",
		cat: "Medical",
		raised: 73400,
		goal: 8e4,
		donors: 1140,
		days: 9,
		urgent: false,
		gradient: "from-emerald-400 to-teal-500"
	},
	{
		id: 8,
		title: "Solar Schools Bangladesh",
		org: "EduFuture",
		cat: "Education",
		raised: 12800,
		goal: 6e4,
		donors: 220,
		days: 60,
		urgent: false,
		gradient: "from-yellow-400 to-orange-500"
	}
];
function Campaigns() {
	const { openDonate, t } = useApp();
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("All");
	const [sort, setSort] = (0, import_react.useState)("Trending");
	const labels = {
		all: t("all"),
		foodWater: t("foodWater"),
		disasterRelief: t("disasterRelief"),
		medical: t("medical"),
		education: t("education")
	};
	t("trending"), t("urgent"), t("nearlyFunded");
	const list = (0, import_react.useMemo)(() => {
		let l = allCampaigns.filter((c) => (cat === t("all") || c.cat === cat) && (c.title.toLowerCase().includes(q.toLowerCase()) || c.org.toLowerCase().includes(q.toLowerCase())));
		if (sort === t("urgent")) l = [...l].sort((a, b) => a.days - b.days);
		if (sort === t("nearlyFunded")) l = [...l].sort((a, b) => b.raised / b.goal - a.raised / a.goal);
		if (sort === t("trending")) l = [...l].sort((a, b) => b.donors - a.donors);
		return l;
	}, [
		q,
		cat,
		sort
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireAuth, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: t("campaigns"),
		subtitle: t("overview"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass rounded-2xl p-4 mb-6 flex flex-col md:flex-row gap-3 md:items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: t("searchPlaceholder"),
						className: "w-full h-10 pl-9 pr-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2 overflow-x-auto",
					children: categoriesKey.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCat(labels[key]),
						className: `h-9 px-3 rounded-lg text-xs font-medium whitespace-nowrap border transition ${cat === labels[key] ? "bg-primary/15 border-primary text-primary" : "border-white/10 text-muted-foreground hover:text-foreground hover:border-white/25"}`,
						children: labels[key]
					}, key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "w-4 h-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: sort,
						onChange: (e) => setSort(e.target.value),
						className: "h-9 px-3 rounded-lg bg-white/5 border border-white/10 text-xs outline-none",
						children: sortKeys.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t(s) }, s))
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
			children: list.map((c) => {
				const pct = Math.round(c.raised / c.goal * 100);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `h-36 bg-gradient-to-br ${c.gradient} relative`,
						children: [c.urgent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-3 left-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								tone: "danger",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "w-3 h-3" }),
									" ",
									t("urgent")
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-3 right-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "info",
								children: c.cat
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 flex-1 flex flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-semibold text-base leading-snug mb-1",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground mb-4",
								children: [
									t("by"),
									" ",
									c.org
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: pct }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-medium",
											children: [
												"$",
												c.raised.toLocaleString(),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-muted-foreground",
													children: ["of $", c.goal.toLocaleString()]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-primary font-semibold",
											children: [pct, "%"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-[11px] text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-3 h-3" }),
												" ",
												c.donors.toLocaleString(),
												" ",
												t("donors")
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3 h-3" }),
												" ",
												c.days,
												t("daysLeft")
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => openDonate({
											title: c.title,
											org: c.org,
											goal: c.goal,
											raised: c.raised
										}),
										className: "w-full h-10 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium inline-flex items-center justify-center gap-2 hover:shadow-glow transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-4 h-4" }), " Donate"]
									})
								]
							})
						]
					})]
				}, c.id);
			})
		})]
	}) });
}
//#endregion
export { Campaigns as component };
