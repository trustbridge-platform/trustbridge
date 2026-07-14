import { r as useApp } from "./AppContext-Cyd9VWQY.js";
import { t as AppShell } from "./AppShell-B-zS6ULv.js";
import { t as RequireAuth } from "./RequireAuth-DU5YrG0J.js";
import { n as Progress, t as Badge } from "./ui-bits-DYZZSpTM.js";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Clock, Filter, Flame, Heart, Search, Users } from "lucide-react";
//#region src/routes/campaigns.tsx?tsr-split=component
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
	const [q, setQ] = useState("");
	const [cat, setCat] = useState("All");
	const [sort, setSort] = useState("Trending");
	const labels = {
		all: t("all"),
		foodWater: t("foodWater"),
		disasterRelief: t("disasterRelief"),
		medical: t("medical"),
		education: t("education")
	};
	t("trending"), t("urgent"), t("nearlyFunded");
	const list = useMemo(() => {
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
	return /* @__PURE__ */ jsx(RequireAuth, { children: /* @__PURE__ */ jsxs(AppShell, {
		title: t("campaigns"),
		subtitle: t("overview"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "glass rounded-2xl p-4 mb-6 flex flex-col md:flex-row gap-3 md:items-center",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ jsx(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: t("searchPlaceholder"),
						className: "w-full h-10 pl-9 pr-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-2 overflow-x-auto",
					children: categoriesKey.map((key) => /* @__PURE__ */ jsx("button", {
						onClick: () => setCat(labels[key]),
						className: `h-9 px-3 rounded-lg text-xs font-medium whitespace-nowrap border transition ${cat === labels[key] ? "bg-primary/15 border-primary text-primary" : "border-white/10 text-muted-foreground hover:text-foreground hover:border-white/25"}`,
						children: labels[key]
					}, key))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(Filter, { className: "w-4 h-4 text-muted-foreground" }), /* @__PURE__ */ jsx("select", {
						value: sort,
						onChange: (e) => setSort(e.target.value),
						className: "h-9 px-3 rounded-lg bg-white/5 border border-white/10 text-xs outline-none",
						children: sortKeys.map((s) => /* @__PURE__ */ jsx("option", { children: t(s) }, s))
					})]
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
			children: list.map((c) => {
				const pct = Math.round(c.raised / c.goal * 100);
				return /* @__PURE__ */ jsxs("div", {
					className: "glass rounded-2xl overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex flex-col",
					children: [/* @__PURE__ */ jsxs("div", {
						className: `h-36 bg-gradient-to-br ${c.gradient} relative`,
						children: [c.urgent && /* @__PURE__ */ jsx("span", {
							className: "absolute top-3 left-3",
							children: /* @__PURE__ */ jsxs(Badge, {
								tone: "danger",
								children: [
									/* @__PURE__ */ jsx(Flame, { className: "w-3 h-3" }),
									" ",
									t("urgent")
								]
							})
						}), /* @__PURE__ */ jsx("span", {
							className: "absolute top-3 right-3",
							children: /* @__PURE__ */ jsx(Badge, {
								tone: "info",
								children: c.cat
							})
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-5 flex-1 flex flex-col",
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "font-display font-semibold text-base leading-snug mb-1",
								children: c.title
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "text-xs text-muted-foreground mb-4",
								children: [
									t("by"),
									" ",
									c.org
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-auto space-y-3",
								children: [
									/* @__PURE__ */ jsx(Progress, { value: pct }),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "font-medium",
											children: [
												"$",
												c.raised.toLocaleString(),
												" ",
												/* @__PURE__ */ jsxs("span", {
													className: "text-muted-foreground",
													children: ["of $", c.goal.toLocaleString()]
												})
											]
										}), /* @__PURE__ */ jsxs("span", {
											className: "text-primary font-semibold",
											children: [pct, "%"]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between text-[11px] text-muted-foreground",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1",
											children: [
												/* @__PURE__ */ jsx(Users, { className: "w-3 h-3" }),
												" ",
												c.donors.toLocaleString(),
												" ",
												t("donors")
											]
										}), /* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1",
											children: [
												/* @__PURE__ */ jsx(Clock, { className: "w-3 h-3" }),
												" ",
												c.days,
												t("daysLeft")
											]
										})]
									}),
									/* @__PURE__ */ jsxs("button", {
										onClick: () => openDonate({
											title: c.title,
											org: c.org,
											goal: c.goal,
											raised: c.raised
										}),
										className: "w-full h-10 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium inline-flex items-center justify-center gap-2 hover:shadow-glow transition",
										children: [/* @__PURE__ */ jsx(Heart, { className: "w-4 h-4" }), " Donate"]
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
