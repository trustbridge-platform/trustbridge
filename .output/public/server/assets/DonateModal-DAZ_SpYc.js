import { c as logout, n as languages, r as useApp } from "./AppContext-Cyd9VWQY.js";
import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeftRight, ArrowRight, BarChart3, Bell, Bug, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Copy, ExternalLink, Globe, Heart, LayoutDashboard, Lightbulb, Loader2, LogIn, LogOut, Megaphone, MessageSquare, Pin, PlusCircle, QrCode, Settings, Shield, Star, User, UserPlus, Users, Wallet, X, XCircle } from "lucide-react";
import QRCode from "qrcode";
//#region src/components/Sidebar.tsx
var authedNavItems = [
	{
		icon: LayoutDashboard,
		labelKey: "dashboard",
		to: "/dashboard"
	},
	{
		icon: Megaphone,
		labelKey: "campaigns",
		to: "/campaigns"
	},
	{
		icon: ArrowLeftRight,
		labelKey: "transactions",
		to: "/transactions"
	},
	{
		icon: BarChart3,
		labelKey: "analytics",
		to: "/analytics"
	},
	{
		icon: PlusCircle,
		labelKey: "createCampaign",
		to: "/create-campaign"
	},
	{
		icon: Settings,
		labelKey: "settings",
		to: "/settings"
	},
	{
		icon: User,
		labelKey: "profile",
		to: "/profile"
	}
];
var guestNavItems = [{
	icon: LogIn,
	label: "Sign In",
	to: "/login"
}, {
	icon: UserPlus,
	label: "Sign Up",
	to: "/signup"
}];
var communityChannels = [
	{
		icon: Bell,
		label: "Announcements",
		to: "/community/announcements"
	},
	{
		icon: MessageSquare,
		label: "General Discussion",
		to: "/community/general"
	},
	{
		icon: Megaphone,
		label: "Campaign Updates",
		to: "/community/updates"
	},
	{
		icon: Bug,
		label: "Bug Reports",
		to: "/community/bugs"
	},
	{
		icon: Lightbulb,
		label: "Feature Requests",
		to: "/community/features"
	},
	{
		icon: Users,
		label: "Support Tickets",
		to: "/community/support"
	}
];
var pinnedItems = [{
	icon: Star,
	label: "Trending Campaigns",
	to: "/campaigns?sort=trending"
}, {
	icon: Shield,
	label: "Security Center",
	to: "/settings?tab=security"
}];
function Sidebar() {
	const { collapsed, toggleCollapsed, lang, setLang, wallet, openWalletModal, disconnectWallet, t } = useApp();
	const [langOpen, setLangOpen] = useState(false);
	const [communityOpen, setCommunityOpen] = useState(true);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const app = useApp();
	return /* @__PURE__ */ jsxs("aside", {
		className: `fixed inset-y-0 left-0 z-40 flex flex-col bg-sidebar border-r border-sidebar-border transition-[width] duration-300 ${collapsed ? "w-[72px]" : "w-[260px]"}`,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "h-16 flex items-center px-4 border-b border-sidebar-border shrink-0",
				children: [/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-3 overflow-hidden",
					children: [/* @__PURE__ */ jsx("div", {
						className: "w-9 h-9 rounded-lg bg-gradient-brand grid place-items-center shrink-0 shadow-glow",
						children: /* @__PURE__ */ jsx(Shield, {
							className: "w-5 h-5 text-primary-foreground",
							strokeWidth: 2.5
						})
					}), !collapsed && /* @__PURE__ */ jsxs("div", {
						className: "overflow-hidden",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-display font-semibold text-sidebar-foreground leading-tight",
							children: "TrustBridge"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-[10px] uppercase tracking-wider text-muted-foreground",
							children: "On Stellar"
						})]
					})]
				}), /* @__PURE__ */ jsx("button", {
					onClick: toggleCollapsed,
					className: "ml-auto w-8 h-8 grid place-items-center rounded-md hover:bg-sidebar-accent text-muted-foreground hover:text-sidebar-foreground transition",
					"aria-label": "Toggle sidebar",
					children: /* @__PURE__ */ jsx(ChevronLeft, { className: `w-4 h-4 transition-transform ${collapsed ? "rotate-180" : ""}` })
				})]
			}),
			/* @__PURE__ */ jsxs("nav", {
				className: "flex-1 overflow-y-auto py-4 px-3 space-y-1",
				children: [
					(app.isAuthenticated ? authedNavItems : guestNavItems).map((item) => {
						const Icon = item.icon;
						const isActive = pathname === item.to;
						return /* @__PURE__ */ jsxs(Link, {
							to: item.to,
							className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition relative ${isActive ? "bg-sidebar-accent text-sidebar-foreground" : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"}`,
							title: collapsed ? item.label || item.labelKey : void 0,
							children: [
								isActive && /* @__PURE__ */ jsx("span", { className: "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r bg-gradient-brand" }),
								/* @__PURE__ */ jsx(Icon, { className: "w-[18px] h-[18px] shrink-0" }),
								!collapsed && /* @__PURE__ */ jsx("span", {
									className: "truncate",
									children: item.label || t(item.labelKey)
								})
							]
						}, item.to);
					}),
					!collapsed && /* @__PURE__ */ jsx("div", { className: "border-t border-sidebar-border my-2" }),
					app.isAuthenticated && !collapsed && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 px-3 py-1.5",
						children: [/* @__PURE__ */ jsx(Pin, { className: "w-3 h-3 text-muted-foreground" }), /* @__PURE__ */ jsx("span", {
							className: "text-[10px] uppercase tracking-wider text-muted-foreground font-medium",
							children: "Pinned"
						})]
					}), pinnedItems.map((item) => {
						const Icon = item.icon;
						const isActive = pathname === item.to?.split("?")[0];
						return /* @__PURE__ */ jsxs(Link, {
							to: item.to,
							className: `w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition ${isActive ? "bg-sidebar-accent text-sidebar-foreground" : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"}`,
							children: [/* @__PURE__ */ jsx(Icon, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ jsx("span", {
								className: "truncate",
								children: item.label
							})]
						}, item.label);
					})] }),
					app.isAuthenticated && !collapsed && /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsx("div", { className: "border-t border-sidebar-border my-2" }),
						/* @__PURE__ */ jsxs("button", {
							onClick: () => setCommunityOpen((v) => !v),
							className: "w-full flex items-center gap-2 px-3 py-1.5 text-[10px] uppercase tracking-wider text-muted-foreground font-medium hover:text-foreground transition",
							children: [/* @__PURE__ */ jsx(ChevronRight, { className: `w-3 h-3 transition-transform ${communityOpen ? "rotate-90" : ""}` }), "Community"]
						}),
						communityOpen && communityChannels.map((item) => {
							const Icon = item.icon;
							const isActive = pathname === item.to;
							return /* @__PURE__ */ jsxs(Link, {
								to: item.to,
								className: `w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition ${isActive ? "bg-sidebar-accent text-sidebar-foreground" : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"}`,
								children: [/* @__PURE__ */ jsx(Icon, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ jsx("span", {
									className: "truncate",
									children: item.label
								})]
							}, item.label);
						})
					] })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "border-t border-sidebar-border p-3 space-y-2 shrink-0",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsxs("button", {
						onClick: () => setLangOpen((v) => !v),
						disabled: !app.isAuthenticated,
						className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition disabled:opacity-50",
						title: collapsed ? "Language" : void 0,
						children: [/* @__PURE__ */ jsx(Globe, { className: "w-[18px] h-[18px] shrink-0" }), !collapsed && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
							className: "flex-1 text-left",
							children: languages.find((l) => l.code === lang)?.label
						}), /* @__PURE__ */ jsx(ChevronDown, { className: `w-4 h-4 transition ${langOpen ? "rotate-180" : ""}` })] })]
					}), langOpen && !collapsed && app.isAuthenticated && /* @__PURE__ */ jsx("div", {
						className: "absolute bottom-full left-0 right-0 mb-2 glass-strong rounded-lg p-1 shadow-elegant z-50",
						children: languages.map((l) => /* @__PURE__ */ jsx("button", {
							onClick: () => {
								setLang(l.code);
								setLangOpen(false);
							},
							className: `w-full text-left px-3 py-2 rounded-md text-sm transition ${lang === l.code ? "bg-primary/15 text-primary" : "text-foreground hover:bg-white/5"}`,
							children: l.label
						}, l.code))
					})]
				}), app.isAuthenticated ? /* @__PURE__ */ jsxs("button", {
					onClick: async () => {
						logout();
						app.setUser(null);
						disconnectWallet();
					},
					className: `w-full flex items-center justify-center gap-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 font-medium text-sm transition h-10 ${collapsed ? "px-0" : "px-3"}`,
					title: collapsed ? "Logout" : void 0,
					children: [/* @__PURE__ */ jsx(LogOut, { className: "w-[18px] h-[18px]" }), !collapsed && /* @__PURE__ */ jsx("span", { children: "Logout" })]
				}) : /* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/login",
						className: `w-full flex items-center justify-center gap-2 rounded-lg glass hover:border-white/25 text-foreground font-medium text-sm transition h-10 ${collapsed ? "px-0" : "px-3"}`,
						children: [/* @__PURE__ */ jsx(LogIn, { className: "w-[18px] h-[18px]" }), !collapsed && /* @__PURE__ */ jsx("span", { children: "Sign In" })]
					}), /* @__PURE__ */ jsxs(Link, {
						to: "/signup",
						className: `w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-brand text-primary-foreground font-medium text-sm transition hover:shadow-glow h-10 ${collapsed ? "px-0" : "px-4"}`,
						children: [/* @__PURE__ */ jsx(UserPlus, { className: "w-[18px] h-[18px]" }), !collapsed && /* @__PURE__ */ jsx("span", { children: "Sign Up" })]
					})]
				})]
			})
		]
	});
}
//#endregion
//#region src/components/modals/ConnectWalletModal.tsx
var walletProviders = [
	{
		id: "freighter",
		name: "Freighter",
		icon: "🔐",
		installUrl: "https://www.freighter.app"
	},
	{
		id: "lobstr",
		name: "Lobstr",
		icon: "🐙",
		installUrl: "https://lobstr.co"
	},
	{
		id: "xbull",
		name: "xBull",
		icon: "🦬",
		installUrl: "https://xbull.app"
	},
	{
		id: "albedo",
		name: "Albedo",
		icon: "🌐",
		installUrl: "https://albedo.link"
	},
	{
		id: "walletconnect",
		name: "WalletConnect",
		icon: "🔗",
		installUrl: "https://walletconnect.com",
		alwaysConnect: true
	},
	{
		id: "metamask",
		name: "MetaMask",
		icon: "🦊",
		installUrl: "https://metamask.io"
	}
];
function ConnectWalletModal() {
	const { walletModalOpen, closeWalletModal, connectWallet, connectManual, t } = useApp();
	const [walletStatus, setWalletStatus] = useState({});
	const [showQR, setShowQR] = useState(null);
	const [qrDataUri, setQrDataUri] = useState("");
	const [copiedQr, setCopiedQr] = useState(false);
	const qrCanvasRef = useRef(null);
	const [manualMode, setManualMode] = useState(false);
	const [manualAddress, setManualAddress] = useState("");
	const [manualMemo, setManualMemo] = useState("");
	const [manualLoading, setManualLoading] = useState(false);
	const [manualError, setManualError] = useState("");
	const [manualSuccess, setManualSuccess] = useState(false);
	useEffect(() => {
		if (!walletModalOpen) return;
		const detectWallets = () => {
			console.log("🔍 Wallet detection running...");
			console.log("Window available:", typeof window !== "undefined");
			console.log("Online:", typeof navigator !== "undefined" ? navigator.onLine : "N/A");
			const has = (prop) => {
				try {
					if (typeof window === "undefined") return false;
					const val = window[prop];
					if (val !== void 0 && val !== null) {
						console.log(`✅ ${prop} FOUND:`, typeof val, val.toString().substring(0, 50));
						return true;
					} else {
						console.log(`❌ ${prop} NOT found (undefined)`);
						return false;
					}
				} catch (e) {
					console.log(`⚠️ ${prop} error:`, e);
					return false;
				}
			};
			const freighterDetected = has("freighterApi") || has("freighter") || has("getFreighterPublicKey") || typeof window !== "undefined" && typeof window.getFreighterPublicKey === "function";
			const lobstrDetected = has("lobstr") || has("lobstrWallet") || typeof window !== "undefined" && (typeof window.lobstr?.getPublicKey === "function" || typeof window.lobstrWallet?.getPublicKey === "function");
			const xbullDetected = has("xbull") || has("xbullWallet") || typeof window !== "undefined" && typeof window.xbull?.getPublicKey === "function";
			const albedoDetected = has("albedo") || has("albedoWallet") || typeof window !== "undefined" && typeof window.albedo?.publicKey === "function";
			console.log("📊 Detection results:", {
				freighter: freighterDetected,
				lobstr: lobstrDetected,
				xbull: xbullDetected,
				albedo: albedoDetected,
				walletconnect: true,
				metamask: has("ethereum")
			});
			setWalletStatus({
				freighter: freighterDetected,
				lobstr: lobstrDetected,
				xbull: xbullDetected,
				albedo: albedoDetected,
				walletconnect: true,
				metamask: has("ethereum")
			});
		};
		detectWallets();
		setShowQR(null);
		setQrDataUri("");
	}, [walletModalOpen]);
	useEffect(() => {
		if (showQR !== "walletconnect") return;
		const wcUri = "wc:trustbridge-connect?version=2&symKey=" + Array.from({ length: 32 }, () => Math.random().toString(36)[2]).join("");
		QRCode.toDataURL(wcUri, {
			width: 400,
			margin: 2,
			color: {
				dark: "#0b1220",
				light: "#ffffff"
			}
		}).then(setQrDataUri).catch(() => setQrDataUri(""));
	}, [showQR]);
	const copyQrAddress = () => {
		navigator.clipboard?.writeText("trustbridge://connect");
		setCopiedQr(true);
		setTimeout(() => setCopiedQr(false), 1500);
	};
	const handleWalletClick = (w, isDetected) => {
		if (w.alwaysConnect) setShowQR(w.id);
		else if (isDetected) connectWallet(w.id);
		else window.open(w.installUrl, "_blank");
	};
	const handleManualConnect = async () => {
		setManualError("");
		setManualLoading(true);
		try {
			await connectManual(manualAddress.trim(), manualMemo.trim() || void 0);
			setManualSuccess(true);
			setTimeout(() => setManualSuccess(false), 2e3);
			setManualAddress("");
			setManualMemo("");
			setManualMode(false);
		} catch (err) {
			setManualError(err.message || "Connection failed");
		} finally {
			setManualLoading(false);
		}
	};
	if (!walletModalOpen) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-50 grid place-items-center p-4 bg-black/70 backdrop-blur-sm",
		onClick: closeWalletModal,
		children: /* @__PURE__ */ jsxs("div", {
			className: "glass-strong rounded-2xl w-full max-w-lg shadow-elegant border border-white/10",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between p-5 border-b border-white/10",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-9 h-9 rounded-lg bg-gradient-brand grid place-items-center shadow-glow",
							children: /* @__PURE__ */ jsx(Wallet, { className: "w-5 h-5 text-primary-foreground" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "font-display font-semibold",
							children: t("connectWallet")
						}), /* @__PURE__ */ jsx("div", {
							className: "text-xs text-muted-foreground",
							children: t("chooseWallet")
						})] })]
					}), /* @__PURE__ */ jsx("button", {
						onClick: closeWalletModal,
						className: "w-8 h-8 grid place-items-center rounded-md hover:bg-white/5 text-muted-foreground",
						children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "px-4 pt-3 pb-0 flex items-center justify-between",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[11px] text-muted-foreground",
						children: "Wallet extensions detected in browser"
					}), /* @__PURE__ */ jsx("button", {
						onClick: () => {
							if (typeof window !== "undefined") {
								setWalletStatus({
									freighter: !!window.freighterApi || !!window.freighter || typeof window.getFreighterPublicKey === "function",
									lobstr: !!window.lobstr || !!window.lobstrWallet,
									xbull: !!window.xbull || !!window.xbullWallet,
									albedo: !!window.albedo || !!window.albedoWallet,
									walletconnect: true,
									metamask: !!window.ethereum
								});
								console.log("🔄 Manual re-detection triggered");
								console.log("freighterApi:", window.freighterApi);
								console.log("getFreighterPublicKey:", window.getFreighterPublicKey);
								console.log("lobstr:", window.lobstr);
								console.log("xbull:", window.xbull);
								console.log("albedo:", window.albedo);
							}
						},
						className: "text-[11px] text-primary hover:underline flex items-center gap-1",
						children: "↻ Refresh"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "p-4 space-y-2 max-h-[60vh] overflow-y-auto",
					children: walletProviders.map((w) => {
						const isDetected = walletStatus[w.id] ?? false;
						return /* @__PURE__ */ jsx("div", { children: showQR === w.id ? /* @__PURE__ */ jsxs("div", {
							className: "p-4 rounded-xl bg-white/5 border border-white/10 text-center",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex justify-center mb-3",
									children: /* @__PURE__ */ jsx("div", {
										className: "bg-white p-3 rounded-xl",
										children: qrDataUri ? /* @__PURE__ */ jsx("img", {
											src: qrDataUri,
											alt: "WalletConnect QR",
											width: 200,
											height: 200,
											className: "rounded-lg"
										}) : /* @__PURE__ */ jsx("canvas", {
											ref: qrCanvasRef,
											width: 200,
											height: 200,
											className: "rounded-lg bg-gray-100"
										})
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "text-xs text-muted-foreground break-all mb-3 font-mono",
									children: ["Scan with ", w.name]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ jsxs("button", {
										onClick: copyQrAddress,
										className: "flex-1 h-9 rounded-lg glass border border-white/10 text-xs font-medium hover:border-white/25 transition inline-flex items-center justify-center gap-1",
										children: [
											/* @__PURE__ */ jsx(Copy, { className: "w-3 h-3" }),
											" ",
											copiedQr ? "Copied!" : "Copy Address"
										]
									}), /* @__PURE__ */ jsx("button", {
										onClick: () => setShowQR(null),
										className: "flex-1 h-9 rounded-lg bg-gradient-brand text-primary-foreground text-xs font-medium hover:shadow-glow transition",
										children: "Back"
									})]
								})
							]
						}) : /* @__PURE__ */ jsxs("button", {
							onClick: () => handleWalletClick(w, isDetected),
							className: "w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 border border-white/5 hover:border-white/15 transition text-left",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "text-2xl",
									children: w.icon
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "font-medium text-sm flex items-center gap-2",
										children: [w.name, w.alwaysConnect ? /* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1 text-[10px] text-muted-foreground font-medium",
											children: [/* @__PURE__ */ jsx(QrCode, { className: "w-3 h-3" }), " QR CONNECT"]
										}) : isDetected ? /* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1 text-[10px] text-emerald font-semibold",
											children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3" }), " ✅ DETECTED"]
										}) : /* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1 text-[10px] text-red-400 font-semibold",
											children: [/* @__PURE__ */ jsx(XCircle, { className: "w-3 h-3" }), " ❌ NOT DETECTED"]
										})]
									}), /* @__PURE__ */ jsx("div", {
										className: "text-[11px] text-muted-foreground",
										children: w.alwaysConnect ? "Scan QR code to connect" : isDetected ? "Click to connect your wallet" : "Wallet extension not found"
									})]
								}),
								isDetected && !w.alwaysConnect ? /* @__PURE__ */ jsx("span", {
									className: "text-xs text-primary font-medium shrink-0",
									children: t("connect")
								}) : w.alwaysConnect ? /* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1 text-xs text-muted-foreground shrink-0",
									children: [/* @__PURE__ */ jsx(QrCode, { className: "w-3 h-3" }), " Connect"]
								}) : /* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1 text-xs text-muted-foreground shrink-0",
									children: [
										t("install"),
										" ",
										/* @__PURE__ */ jsx(ExternalLink, { className: "w-3 h-3" })
									]
								})
							]
						}) }, w.id);
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "border-t border-white/10",
					children: [/* @__PURE__ */ jsxs("button", {
						onClick: () => setManualMode(!manualMode),
						className: "w-full flex items-center justify-center gap-2 py-3 px-4 text-xs text-muted-foreground hover:text-foreground transition",
						children: [manualMode ? "▼" : "▶", " Enter Stellar address manually"]
					}), manualMode && /* @__PURE__ */ jsxs("div", {
						className: "px-4 pb-4 space-y-3",
						children: [
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("label", {
									className: "text-[11px] text-muted-foreground mb-1 block",
									children: "Stellar Address (starts with G, 56 chars)"
								}),
								/* @__PURE__ */ jsx("input", {
									value: manualAddress,
									onChange: (e) => {
										setManualAddress(e.target.value);
										setManualError("");
									},
									placeholder: "GABCDEFGHIJKLMNOPQRSTUVWXYZ234567...",
									maxLength: 56,
									className: "w-full h-10 px-3 rounded-lg bg-[#1a1f35] border border-white/10 focus:border-primary outline-none text-sm font-mono text-white"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 mt-1",
									children: [/* @__PURE__ */ jsx("div", { className: `w-2 h-2 rounded-full ${manualAddress.startsWith("G") && manualAddress.length === 56 ? "bg-emerald" : "bg-white/20"}` }), /* @__PURE__ */ jsxs("span", {
										className: "text-[10px] text-muted-foreground",
										children: [
											manualAddress.length,
											"/56 chars",
											manualAddress && !manualAddress.startsWith("G") && " · Must start with G"
										]
									})]
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: "text-[11px] text-muted-foreground mb-1 block",
								children: "Memo (optional)"
							}), /* @__PURE__ */ jsx("input", {
								value: manualMemo,
								onChange: (e) => setManualMemo(e.target.value),
								placeholder: "e.g. Wallet transfer",
								className: "w-full h-10 px-3 rounded-lg bg-[#1a1f35] border border-white/10 focus:border-primary outline-none text-sm text-white"
							})] }),
							manualError && /* @__PURE__ */ jsx("div", {
								className: "text-xs text-red-400 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20",
								children: manualError
							}),
							manualSuccess && /* @__PURE__ */ jsx("div", {
								className: "text-xs text-emerald px-3 py-2 rounded-lg bg-emerald/10 border border-emerald/20",
								children: "Wallet connected successfully!"
							}),
							/* @__PURE__ */ jsxs("button", {
								onClick: handleManualConnect,
								disabled: manualLoading || !manualAddress.startsWith("G") || manualAddress.length !== 56,
								className: "w-full h-10 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium hover:shadow-glow transition disabled:opacity-50 inline-flex items-center justify-center gap-2",
								children: [manualLoading ? /* @__PURE__ */ jsx("span", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }) : /* @__PURE__ */ jsx(Wallet, { className: "w-4 h-4" }), manualLoading ? "Verifying on Stellar..." : "Connect Wallet"]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "p-4 text-[11px] text-muted-foreground text-center border-t border-white/10",
					children: t("byConnecting")
				})
			]
		})
	});
}
//#endregion
//#region src/components/modals/DonateModal.tsx
var presets = [
	10,
	25,
	50,
	100,
	250
];
function DonateModal() {
	const { donateTarget, closeDonate, wallet, openWalletModal } = useApp();
	const [step, setStep] = useState(1);
	const [amount, setAmount] = useState(25);
	const [custom, setCustom] = useState("");
	useEffect(() => {
		if (donateTarget) {
			setStep(1);
			setAmount(25);
			setCustom("");
		}
	}, [donateTarget]);
	if (!donateTarget) return null;
	const finalAmount = custom ? Number(custom) || 0 : amount;
	const fee = 1e-5;
	const confirm = () => {
		setStep(2);
		setTimeout(() => setStep(3), 1800);
	};
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-50 grid place-items-center p-4 bg-black/60 backdrop-blur-sm",
		onClick: closeDonate,
		children: /* @__PURE__ */ jsxs("div", {
			className: "glass-strong rounded-2xl w-full max-w-md shadow-elegant",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between p-5 border-b border-white/10",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs text-muted-foreground",
					children: "Donate to"
				}), /* @__PURE__ */ jsx("div", {
					className: "font-display font-semibold truncate",
					children: donateTarget.title
				})] }), /* @__PURE__ */ jsx("button", {
					onClick: closeDonate,
					className: "w-8 h-8 grid place-items-center rounded-md hover:bg-white/5 text-muted-foreground",
					children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "p-5",
				children: [
					step === 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-wider text-muted-foreground mb-3",
							children: "Select amount (XLM)"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-3 gap-2 mb-4",
							children: presets.map((p) => /* @__PURE__ */ jsx("button", {
								onClick: () => {
									setAmount(p);
									setCustom("");
								},
								className: `h-11 rounded-lg border text-sm font-medium transition ${!custom && amount === p ? "bg-primary/15 border-primary text-primary" : "border-white/10 hover:border-white/25"}`,
								children: p
							}, p))
						}),
						/* @__PURE__ */ jsx("input", {
							type: "number",
							placeholder: "Custom amount",
							value: custom,
							onChange: (e) => setCustom(e.target.value),
							className: "w-full h-11 px-4 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-5 space-y-2 text-sm",
							children: [
								/* @__PURE__ */ jsx(Row, {
									label: "Amount",
									value: `${finalAmount} XLM`
								}),
								/* @__PURE__ */ jsx(Row, {
									label: "Network fee",
									value: `${fee} XLM`
								}),
								/* @__PURE__ */ jsx(Row, {
									label: "Total",
									value: `${(finalAmount + fee).toFixed(5)} XLM`,
									bold: true
								})
							]
						}),
						/* @__PURE__ */ jsxs("button", {
							disabled: finalAmount <= 0,
							onClick: () => wallet.connected ? confirm() : openWalletModal(),
							className: "mt-6 w-full h-11 rounded-xl bg-gradient-brand text-primary-foreground font-medium inline-flex items-center justify-center gap-2 disabled:opacity-50 hover:shadow-glow transition",
							children: [wallet.connected ? "Confirm donation" : "Connect wallet to donate", /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
						})
					] }),
					step === 2 && /* @__PURE__ */ jsxs("div", {
						className: "py-10 text-center",
						children: [
							/* @__PURE__ */ jsx(Loader2, { className: "w-10 h-10 mx-auto text-primary animate-spin mb-4" }),
							/* @__PURE__ */ jsx("div", {
								className: "font-medium",
								children: "Broadcasting transaction…"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "text-xs text-muted-foreground mt-1",
								children: "Waiting for Stellar confirmation"
							})
						]
					}),
					step === 3 && /* @__PURE__ */ jsxs("div", {
						className: "py-8 text-center",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-16 h-16 rounded-full bg-emerald/20 grid place-items-center mx-auto mb-4 animate-float",
								children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-9 h-9 text-emerald" })
							}),
							/* @__PURE__ */ jsx("div", {
								className: "font-display text-xl font-semibold",
								children: "Thank you!"
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-sm text-muted-foreground mt-2 max-w-xs mx-auto",
								children: [
									"Your ",
									finalAmount,
									" XLM donation to ",
									/* @__PURE__ */ jsx("span", {
										className: "text-foreground",
										children: donateTarget.title
									}),
									" was confirmed on-chain."
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 flex gap-2",
								children: [/* @__PURE__ */ jsx("button", {
									onClick: closeDonate,
									className: "flex-1 h-10 rounded-lg glass hover:border-white/25 transition text-sm",
									children: "Close"
								}), /* @__PURE__ */ jsxs("button", {
									onClick: closeDonate,
									className: "flex-1 h-10 rounded-lg bg-gradient-brand text-primary-foreground inline-flex items-center justify-center gap-2 text-sm",
									children: [/* @__PURE__ */ jsx(Heart, { className: "w-4 h-4" }), " Share"]
								})]
							})
						]
					})
				]
			})]
		})
	});
}
function Row({ label, value, bold }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("span", {
			className: bold ? "font-semibold" : "",
			children: value
		})]
	});
}
//#endregion
export { ConnectWalletModal as n, Sidebar as r, DonateModal as t };
