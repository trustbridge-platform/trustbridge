import { C as ArrowLeftRight, m as Globe, o as Users, p as Heart, u as Megaphone } from "./DonateModal-CvlrMbxO.js";
import { _ as __toESM, h as require_react, m as require_jsx_runtime, n as useApp } from "./index-CzLJxDRa.js";
import { t as AppShell } from "./AppShell-DqUipN0r.js";
import { t as RequireAuth } from "./RequireAuth-Ct5nOfLe.js";
import { n as Progress, r as StatTile } from "./ui-bits-Co8MTWsV.js";
//#region src/routes/analytics.tsx?tsr-split=component
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ranges = [
	"24h",
	"7d",
	"30d",
	"90d"
];
var categoryData = [
	{
		name: "Food & Water",
		pct: 38,
		color: "from-blue-500 to-emerald-400"
	},
	{
		name: "Disaster Relief",
		pct: 27,
		color: "from-rose-500 to-amber-400"
	},
	{
		name: "Medical",
		pct: 21,
		color: "from-emerald-500 to-cyan-400"
	},
	{
		name: "Education",
		pct: 14,
		color: "from-violet-500 to-blue-500"
	}
];
var topCampaigns = [
	{
		name: "Food Aid Gaza",
		org: "Hope Kitchen",
		raised: 312e3,
		donors: 9201,
		pct: 89
	},
	{
		name: "Earthquake Relief Türkiye",
		org: "Global Aid Network",
		raised: 198400,
		donors: 4820,
		pct: 79
	},
	{
		name: "Clean Water Yemen",
		org: "Mercy Wells",
		raised: 84200,
		donors: 1284,
		pct: 70
	},
	{
		name: "Vaccines DRC",
		org: "MedBridge",
		raised: 73400,
		donors: 1140,
		pct: 92
	}
];
function makeSeries(seed, n) {
	let v = 40 + seed % 30;
	return Array.from({ length: n }, () => {
		v += (Math.sin(v) + 1) * 8 - 6 + (Math.random() * 6 - 3);
		v = Math.max(10, Math.min(95, v));
		return Math.round(v);
	});
}
function Sparkline({ data, height = 120 }) {
	const w = 100;
	const max = Math.max(...data);
	const min = Math.min(...data);
	const pts = data.map((d, i) => {
		return `${i / (data.length - 1) * w},${height - (d - min) / (max - min || 1) * height}`;
	}).join(" ");
	const area = `0,${height} ${pts} ${w},${height}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${w} ${height}`,
		className: "w-full h-full",
		preserveAspectRatio: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "g",
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "oklch(0.68 0.16 235)",
					stopOpacity: "0.5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "oklch(0.68 0.16 235)",
					stopOpacity: "0"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: area,
				fill: "url(#g)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
				points: pts,
				fill: "none",
				stroke: "oklch(0.74 0.16 165)",
				strokeWidth: "1.2"
			})
		]
	});
}
function Analytics() {
	const { t } = useApp();
	const [range, setRange] = (0, import_react.useState)("7d");
	const n = range === "24h" ? 24 : range === "7d" ? 14 : range === "30d" ? 30 : 60;
	const series = (0, import_react.useMemo)(() => makeSeries(n * 3, n), [n]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireAuth, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: t("analytics"),
		subtitle: t("overview"),
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center gap-1 p-1 rounded-lg bg-white/5 border border-white/10",
			children: ranges.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setRange(r),
				className: `h-8 px-3 rounded-md text-xs font-medium transition ${range === r ? "bg-gradient-brand text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
				children: r
			}, r))
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						label: t("totalRaised"),
						value: "$12.4M",
						delta: "+8.2%",
						icon: Heart
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						label: t("campaigns"),
						value: "342",
						delta: "+14",
						icon: Megaphone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						label: t("beneficiaries"),
						value: "89,240",
						delta: "+3.4%",
						icon: Users
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						label: t("transactionsCount"),
						value: "1.28M",
						delta: "+11.7%",
						icon: ArrowLeftRight
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-3 gap-6 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-6 lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold",
							children: "Donation activity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground",
							children: ["XLM volume across ", range]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl font-semibold",
								children: "$184,920"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-emerald",
								children: "+12.4% vs prev"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-48",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkline, {
							data: series,
							height: 180
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-semibold mb-4",
						children: "Top categories"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: categoryData.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-sm mb-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [c.pct, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 rounded-full bg-white/5 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-full bg-gradient-to-r ${c.color} rounded-full`,
								style: { width: `${c.pct}%` }
							})
						})] }, c.name))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-2xl overflow-hidden mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-5 border-b border-white/5 font-display font-semibold",
					children: "Top performing campaigns"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-[11px] uppercase tracking-wider text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left font-medium px-5 py-3",
								children: "Campaign"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left font-medium px-5 py-3 hidden sm:table-cell",
								children: "Organization"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-right font-medium px-5 py-3",
								children: "Raised"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-right font-medium px-5 py-3 hidden md:table-cell",
								children: "Donors"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left font-medium px-5 py-3 w-40",
								children: "Funded"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-white/5",
						children: topCampaigns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "hover:bg-white/[0.02]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3 font-medium",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3 text-muted-foreground hidden sm:table-cell",
									children: c.org
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-5 py-3 text-right font-mono",
									children: ["$", c.raised.toLocaleString()]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3 text-right hidden md:table-cell",
									children: c.donors.toLocaleString()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: c.pct }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-primary font-medium w-9 text-right",
											children: [c.pct, "%"]
										})]
									})
								})
							]
						}, c.name))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-16 h-16 rounded-2xl bg-gradient-brand grid place-items-center shadow-glow shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-8 h-8 text-primary-foreground" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 text-center md:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xl font-semibold",
							children: "Global impact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground mt-1 max-w-2xl",
							children: [
								"Donations reaching ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "text-foreground",
									children: "182 countries"
								}),
								", with",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "text-foreground",
									children: " 4.2s"
								}),
								" average settlement and",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "text-foreground",
									children: " 99.97%"
								}),
								" of funds delivered to beneficiaries on-chain."
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-4 text-center",
						children: [
							["182", "Countries"],
							["4.2s", "Settlement"],
							["99.97%", "Delivered"]
						].map(([v, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xl font-semibold",
							children: v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-muted-foreground",
							children: l
						})] }, l))
					})
				]
			})
		]
	}) });
}
//#endregion
export { Analytics as component };
