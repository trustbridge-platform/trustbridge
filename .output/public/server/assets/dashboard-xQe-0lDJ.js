import { r as useApp } from "./AppContext-Cyd9VWQY.js";
import { t as AppShell } from "./AppShell-B-zS6ULv.js";
import { t as RequireAuth } from "./RequireAuth-DU5YrG0J.js";
import { r as StatTile, t as Badge } from "./ui-bits-DYZZSpTM.js";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeftRight, Copy, Download, ExternalLink, Heart, Megaphone, Network, PlusCircle, Send, Users, Wallet } from "lucide-react";
import QRCode from "qrcode";
//#region src/routes/dashboard.tsx?tsr-split=component
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
	const [copied, setCopied] = useState(false);
	const [qrSvg, setQrSvg] = useState("");
	const address = wallet.address ?? "GA…CONNECT_WALLET_TO_VIEW";
	useEffect(() => {
		if (!wallet.address) {
			setQrSvg("");
			return;
		}
		QRCode.toString(`stellar:${wallet.address}?amount=`, {
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
	return /* @__PURE__ */ jsx(RequireAuth, { children: /* @__PURE__ */ jsxs(AppShell, {
		title: "Dashboard",
		subtitle: "Overview of your wallet, campaigns and recent on-chain activity.",
		actions: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("span", {
			className: "inline-flex items-center gap-2 px-3 h-9 rounded-lg glass text-xs",
			children: [
				/* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald shadow-glow" }),
				" ",
				t("stellarMainnet")
			]
		}), /* @__PURE__ */ jsxs(Link, {
			to: "/create-campaign",
			className: "inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium hover:shadow-glow transition",
			children: [
				/* @__PURE__ */ jsx(PlusCircle, { className: "w-4 h-4" }),
				" ",
				t("createCampaign")
			]
		})] }),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "grid lg:grid-cols-3 gap-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-2 glass rounded-2xl p-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-start justify-between gap-4 mb-6",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("div", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: t("walletBalance")
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "font-display text-4xl font-semibold tracking-tight mt-1",
									children: [
										wallet.connected ? "12,480.25" : "—",
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-base text-muted-foreground font-normal",
											children: "XLM"
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "text-sm text-muted-foreground mt-1",
									children: [
										"≈ $",
										wallet.connected ? "1,485.32" : "0.00",
										" USD"
									]
								})
							] }), !wallet.connected ? /* @__PURE__ */ jsxs("button", {
								onClick: openWalletModal,
								className: "h-10 px-4 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium inline-flex items-center gap-2 hover:shadow-glow transition",
								children: [
									/* @__PURE__ */ jsx(Wallet, { className: "w-4 h-4" }),
									" ",
									t("connect")
								]
							}) : /* @__PURE__ */ jsxs(Badge, {
								tone: "success",
								children: [
									t("connected"),
									" · ",
									wallet.provider
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5 text-xs font-mono",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "truncate flex-1",
									children: address
								}),
								/* @__PURE__ */ jsxs("button", {
									onClick: copy,
									className: "px-2 py-1 rounded hover:bg-white/10 inline-flex items-center gap-1",
									children: [
										/* @__PURE__ */ jsx(Copy, { className: "w-3 h-3" }),
										" ",
										copied ? t("copied") : t("copy")
									]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "#",
									className: "px-2 py-1 rounded hover:bg-white/10 inline-flex items-center gap-1",
									children: [
										/* @__PURE__ */ jsx(ExternalLink, { className: "w-3 h-3" }),
										" ",
										t("explorer")
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-3 gap-3 mt-6",
							children: [
								/* @__PURE__ */ jsxs(Link, {
									to: "/send",
									className: "h-12 rounded-xl bg-gradient-brand text-primary-foreground font-medium inline-flex items-center justify-center gap-2 hover:shadow-glow transition",
									children: [
										/* @__PURE__ */ jsx(Send, { className: "w-4 h-4" }),
										" ",
										t("send")
									]
								}),
								/* @__PURE__ */ jsxs(Link, {
									to: "/receive",
									className: "h-12 rounded-xl glass hover:border-white/25 font-medium inline-flex items-center justify-center gap-2 transition",
									children: [
										/* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
										" ",
										t("receive")
									]
								}),
								/* @__PURE__ */ jsxs(Link, {
									to: "/create-campaign",
									className: "h-12 rounded-xl glass hover:border-white/25 font-medium inline-flex items-center justify-center gap-2 transition",
									children: [
										/* @__PURE__ */ jsx(PlusCircle, { className: "w-4 h-4" }),
										" ",
										t("campaign")
									]
								})
							]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "glass rounded-2xl p-6 flex flex-col",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: t("network")
							}), /* @__PURE__ */ jsx(Badge, {
								tone: "success",
								children: t("operational")
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 mb-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-10 h-10 rounded-lg bg-emerald/10 grid place-items-center",
								children: /* @__PURE__ */ jsx(Network, { className: "w-5 h-5 text-emerald" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "font-medium",
								children: t("stellarMainnet")
							}), /* @__PURE__ */ jsxs("div", {
								className: "text-xs text-muted-foreground",
								children: [t("ledger"), " 52,148,920"]
							})] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2 text-sm",
							children: [
								/* @__PURE__ */ jsx(Row, {
									label: t("avgConfirmation"),
									value: t("confirmationTime")
								}),
								/* @__PURE__ */ jsx(Row, {
									label: t("avgFee"),
									value: t("fee")
								}),
								/* @__PURE__ */ jsx(Row, {
									label: t("validators"),
									value: `178 ${t("online")}`
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-auto pt-4 flex flex-col items-center",
							children: [qrSvg ? /* @__PURE__ */ jsx("div", {
								className: "rounded-xl bg-white p-2 shadow-lg",
								style: {
									width: 140,
									height: 140
								},
								children: /* @__PURE__ */ jsx("div", {
									style: {
										width: 124,
										height: 124
									},
									dangerouslySetInnerHTML: { __html: qrSvg }
								})
							}) : /* @__PURE__ */ jsx("div", {
								className: "w-[140px] h-[140px] rounded-xl bg-white/5 flex items-center justify-center",
								children: /* @__PURE__ */ jsx("span", {
									className: "text-[11px] text-muted-foreground",
									children: t("connect")
								})
							}), /* @__PURE__ */ jsx("div", {
								className: "text-center text-[11px] text-muted-foreground mt-2",
								children: wallet.connected ? t("scanToSend") : t("connect")
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-6",
				children: [
					/* @__PURE__ */ jsx(StatTile, {
						label: t("totalRaised"),
						value: "$48,290",
						delta: "+12.4%",
						icon: Heart
					}),
					/* @__PURE__ */ jsx(StatTile, {
						label: t("activeCampaigns"),
						value: "7",
						delta: "+2",
						icon: Megaphone
					}),
					/* @__PURE__ */ jsx(StatTile, {
						label: t("beneficiaries"),
						value: "1,284",
						delta: "+38",
						icon: Users
					}),
					/* @__PURE__ */ jsx(StatTile, {
						label: t("transactionsCount"),
						value: "9,420",
						delta: "+5.1%",
						icon: ArrowLeftRight
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "glass rounded-2xl mt-6 overflow-hidden",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between p-5 border-b border-white/5",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "font-display font-semibold",
						children: t("recentActivity")
					}), /* @__PURE__ */ jsx("div", {
						className: "text-xs text-muted-foreground",
						children: t("latestOnChain")
					})] }), /* @__PURE__ */ jsxs(Link, {
						to: "/transactions",
						className: "text-xs text-primary hover:underline",
						children: [t("viewAll"), " →"]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "divide-y divide-white/5",
					children: txs.map((tx) => /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-4 p-4 hover:bg-white/[0.02] transition",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-9 h-9 rounded-lg bg-primary/10 grid place-items-center shrink-0",
								children: /* @__PURE__ */ jsx(ArrowLeftRight, { className: "w-4 h-4 text-primary" })
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "text-sm font-medium truncate",
									children: [
										tx.type === "Donation received" && t("donationReceived"),
										tx.type === "Sent" && t("sent"),
										tx.type === "Disbursement" && t("disbursement")
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground truncate",
									children: tx.campaign
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "text-right shrink-0",
								children: [/* @__PURE__ */ jsx("div", {
									className: `text-sm font-mono ${tx.amount.startsWith("+") ? "text-emerald" : "text-foreground"}`,
									children: tx.amount
								}), /* @__PURE__ */ jsx("div", {
									className: "text-[11px] text-muted-foreground",
									children: tx.time
								})]
							}),
							/* @__PURE__ */ jsx(Badge, {
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
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between text-sm",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("span", {
			className: "font-medium",
			children: value
		})]
	});
}
//#endregion
export { Dashboard as component };
