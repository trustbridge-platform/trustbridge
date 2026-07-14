import { C as ArrowLeftRight, _ as CirclePlus, a as Wallet, g as Copy, h as ExternalLink, o as Users, p as Heart, r as require_browser, u as Megaphone } from "./DonateModal-CW9uRStD.js";
import { _ as __toESM, h as require_react, l as Link, m as require_jsx_runtime, n as useApp } from "./index-BQzpoh2w.js";
import { n as createLucideIcon } from "./shield-acfSeoTd.js";
import { t as Network } from "./network-DIZ0P730.js";
import { t as Send } from "./send-B8SMNHnz.js";
import { t as AppShell } from "./AppShell-GVpdRIE_.js";
import { t as RequireAuth } from "./RequireAuth-DfBJzJb3.js";
import { r as StatTile, t as Badge } from "./ui-bits-DDgNDqhg.js";
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Download = createLucideIcon("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]);
//#endregion
//#region src/routes/dashboard.tsx?tsr-split=component
var import_browser = /* @__PURE__ */ __toESM(require_browser());
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var txs = [
	{
		id: "tx_01",
		type: "Donation received",
		campaign: "Clean Water Yemen",
		amount: "+125 XLM",
		status: "confirmed",
		time: "2 min ago"
	},
	{
		id: "tx_02",
		type: "Sent",
		campaign: "Direct transfer",
		amount: "-50 XLM",
		status: "confirmed",
		time: "1 h ago"
	},
	{
		id: "tx_03",
		type: "Donation received",
		campaign: "Earthquake Relief Türkiye",
		amount: "+300 XLM",
		status: "pending",
		time: "3 h ago"
	},
	{
		id: "tx_04",
		type: "Disbursement",
		campaign: "School Books Kenya",
		amount: "-1,200 XLM",
		status: "confirmed",
		time: "yesterday"
	},
	{
		id: "tx_05",
		type: "Donation received",
		campaign: "Medical Aid Sudan",
		amount: "+75 XLM",
		status: "failed",
		time: "yesterday"
	}
];
function Dashboard() {
	const { wallet, openWalletModal, t } = useApp();
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [qrSvg, setQrSvg] = (0, import_react.useState)("");
	const address = wallet.address ?? "GA…CONNECT_WALLET_TO_VIEW";
	(0, import_react.useEffect)(() => {
		if (!wallet.address) {
			setQrSvg("");
			return;
		}
		import_browser.toString(`stellar:${wallet.address}?amount=`, {
			type: "svg",
			margin: 1,
			width: 300
		}).then(setQrSvg).catch(() => setQrSvg(""));
	}, [wallet.address]);
	const copy = () => {
		navigator.clipboard?.writeText(address);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireAuth, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Dashboard",
		subtitle: "Overview of your wallet, campaigns and recent on-chain activity.",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-2 px-3 h-9 rounded-lg glass text-xs",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-emerald shadow-glow" }),
				" ",
				t("stellarMainnet")
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/create-campaign",
			className: "inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium hover:shadow-glow transition",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlus, { className: "w-4 h-4" }),
				" ",
				t("createCampaign")
			]
		})] }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-3 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 glass rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: t("walletBalance")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-display text-4xl font-semibold tracking-tight mt-1",
									children: [
										wallet.connected ? "12,480.25" : "—",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-base text-muted-foreground font-normal",
											children: "XLM"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm text-muted-foreground mt-1",
									children: [
										"≈ $",
										wallet.connected ? "1,485.32" : "0.00",
										" USD"
									]
								})
							] }), !wallet.connected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: openWalletModal,
								className: "h-10 px-4 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium inline-flex items-center gap-2 hover:shadow-glow transition",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "w-4 h-4" }),
									" ",
									t("connect")
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								tone: "success",
								children: [
									t("connected"),
									" · ",
									wallet.provider
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5 text-xs font-mono",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate flex-1",
									children: address
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: copy,
									className: "px-2 py-1 rounded hover:bg-white/10 inline-flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3 h-3" }),
										" ",
										copied ? t("copied") : t("copy")
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#",
									className: "px-2 py-1 rounded hover:bg-white/10 inline-flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3 h-3" }),
										" ",
										t("explorer")
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-3 mt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/send",
									className: "h-12 rounded-xl bg-gradient-brand text-primary-foreground font-medium inline-flex items-center justify-center gap-2 hover:shadow-glow transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" }),
										" ",
										t("send")
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/receive",
									className: "h-12 rounded-xl glass hover:border-white/25 font-medium inline-flex items-center justify-center gap-2 transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-4 h-4" }),
										" ",
										t("receive")
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/create-campaign",
									className: "h-12 rounded-xl glass hover:border-white/25 font-medium inline-flex items-center justify-center gap-2 transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlus, { className: "w-4 h-4" }),
										" ",
										t("campaign")
									]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-6 flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: t("network")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "success",
								children: t("operational")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 rounded-lg bg-emerald/10 grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { className: "w-5 h-5 text-emerald" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium",
								children: t("stellarMainnet")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground",
								children: [t("ledger"), " 52,148,920"]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: t("avgConfirmation"),
									value: t("confirmationTime")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: t("avgFee"),
									value: t("fee")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: t("validators"),
									value: `178 ${t("online")}`
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto pt-4 flex flex-col items-center",
							children: [qrSvg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl bg-white p-2 shadow-lg",
								style: {
									width: 140,
									height: 140
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										width: 124,
										height: 124
									},
									dangerouslySetInnerHTML: { __html: qrSvg }
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-[140px] h-[140px] rounded-xl bg-white/5 flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted-foreground",
									children: t("connect")
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-center text-[11px] text-muted-foreground mt-2",
								children: wallet.connected ? t("scanToSend") : t("connect")
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						label: t("totalRaised"),
						value: "$48,290",
						delta: "+12.4%",
						icon: Heart
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						label: t("activeCampaigns"),
						value: "7",
						delta: "+2",
						icon: Megaphone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						label: t("beneficiaries"),
						value: "1,284",
						delta: "+38",
						icon: Users
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						label: t("transactionsCount"),
						value: "9,420",
						delta: "+5.1%",
						icon: ArrowLeftRight
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-2xl mt-6 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-5 border-b border-white/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display font-semibold",
						children: t("recentActivity")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: t("latestOnChain")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/transactions",
						className: "text-xs text-primary hover:underline",
						children: [t("viewAll"), " →"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-white/5",
					children: txs.map((tx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 p-4 hover:bg-white/[0.02] transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-9 h-9 rounded-lg bg-primary/10 grid place-items-center shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeftRight, { className: "w-4 h-4 text-primary" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm font-medium truncate",
									children: [
										tx.type === "Donation received" && t("donationReceived"),
										tx.type === "Sent" && t("sent"),
										tx.type === "Disbursement" && t("disbursement")
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground truncate",
									children: tx.campaign
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `text-sm font-mono ${tx.amount.startsWith("+") ? "text-emerald" : "text-foreground"}`,
									children: tx.amount
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-muted-foreground",
									children: tx.time
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: tx.status === "confirmed" ? "success" : tx.status === "pending" ? "warning" : "danger",
								children: tx.status
							})
						]
					}, tx.id))
				})]
			})
		]
	}) });
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium",
			children: value
		})]
	});
}
//#endregion
export { Dashboard as component };
