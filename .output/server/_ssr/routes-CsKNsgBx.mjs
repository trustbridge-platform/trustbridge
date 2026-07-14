import { i as __toESM } from "../_runtime.mjs";
import { F as init_performance, I as performance_default, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { l as useApp } from "./AppContext-DkQX8ryp.mjs";
import { C as MessageCircle, I as Github, K as Coins, O as Lock, P as Heart, V as Eye, a as Users, d as Sparkles, et as ChevronDown, g as Send, i as Wallet, ot as ArrowRight, p as Shield, st as ArrowLeftRight, t as Zap, w as Megaphone, x as Network } from "../_libs/lucide-react.mjs";
import { n as DonateModal, r as Sidebar, t as ConnectWalletModal } from "./DonateModal-CRYHPGLb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CsKNsgBx.js
init_performance();
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useCountUp(target, duration = 2e3) {
	const [value, setValue] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	const started = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting && !started.current) {
					started.current = true;
					const start = performance_default.now();
					const tick = (now) => {
						const p = Math.min((now - start) / duration, 1);
						const eased = 1 - Math.pow(1 - p, 3);
						setValue(Math.floor(eased * target));
						if (p < 1) requestAnimationFrame(tick);
					};
					requestAnimationFrame(tick);
				}
			});
		}, { threshold: .3 });
		obs.observe(el);
		return () => obs.disconnect();
	}, [target, duration]);
	return {
		value,
		ref
	};
}
function StatCard({ label, target, prefix = "", suffix = "", icon: Icon }) {
	const { value, ref } = useCountUp(target);
	const formatted = value.toLocaleString();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "glass rounded-2xl p-6 hover:border-white/20 transition group",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-10 h-10 rounded-lg bg-primary/10 grid place-items-center mb-4 group-hover:bg-primary/20 transition",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 text-primary" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-display text-3xl md:text-4xl font-semibold tracking-tight",
				children: [
					prefix,
					formatted,
					suffix
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm text-muted-foreground mt-1",
				children: label
			})
		]
	});
}
function FeatureCard({ icon: Icon, title, desc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-2xl p-6 hover:border-white/20 hover:-translate-y-1 transition-all duration-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-11 h-11 rounded-xl bg-gradient-brand grid place-items-center mb-5 shadow-glow",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 text-primary-foreground" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display font-semibold text-lg mb-2",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground leading-relaxed",
				children: desc
			})
		]
	});
}
function FaqItem({ q, a, open, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-xl overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: onToggle,
			className: "w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/[0.03] transition",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-base",
				children: q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `w-5 h-5 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}` })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-5 pb-5 text-sm text-muted-foreground leading-relaxed",
					children: a
				})
			})
		})]
	});
}
function Landing() {
	const { collapsed, openWalletModal } = useApp();
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectWalletModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonateModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `transition-[padding] duration-300 ${collapsed ? "pl-[72px]" : "pl-[260px]"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-hero pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 pointer-events-none [background-image:radial-gradient(oklch(1_0_0/0.04)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative max-w-6xl mx-auto px-6 lg:px-10 pt-24 pb-28 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-8 animate-fade-in-up",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-emerald" }), "Live on Stellar Mainnet"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex justify-center mb-8 animate-fade-in-up",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-brand blur-3xl opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative w-20 h-20 rounded-2xl bg-gradient-brand grid place-items-center shadow-glow animate-float",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
													className: "w-10 h-10 text-primary-foreground",
													strokeWidth: 2.5
												})
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "font-display text-5xl md:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up",
										style: { animationDelay: "0.1s" },
										children: [
											"Transparent Humanitarian",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Aid on ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gradient",
												children: "Stellar"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "max-w-2xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed animate-fade-in-up",
										style: { animationDelay: "0.2s" },
										children: "Every donation tracked on-chain. Every beneficiary verified. Every dollar accounted for. The future of giving is open, instant, and trustless."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-center gap-3 animate-fade-in-up",
										style: { animationDelay: "0.3s" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: openWalletModal,
											className: "h-12 px-6 rounded-xl bg-gradient-brand text-primary-foreground font-medium inline-flex items-center gap-2 hover:shadow-glow transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "w-4 h-4" }), "Connect Wallet"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/campaigns",
											className: "h-12 px-6 rounded-xl glass hover:border-white/25 text-foreground font-medium inline-flex items-center gap-2 transition",
											children: ["Explore Campaigns", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "px-6 lg:px-10 pb-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									label: "Aid Distributed",
									target: 1248e4,
									prefix: "$",
									icon: Heart
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									label: "Active Campaigns",
									target: 342,
									icon: Megaphone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									label: "Beneficiaries",
									target: 89240,
									icon: Users
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									label: "Transactions",
									target: 1284900,
									icon: ArrowLeftRight
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "px-6 lg:px-10 py-24 border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-6xl mx-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center max-w-2xl mx-auto mb-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-[0.2em] text-primary mb-3",
										children: "Platform"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4",
										children: "Built for trust at global scale"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-lg",
										children: "Eight foundations that make TrustBridge the most accountable aid network on the blockchain."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
								children: [
									{
										icon: Eye,
										title: "Full Transparency",
										desc: "Every transaction is publicly verifiable on the Stellar ledger in real time."
									},
									{
										icon: Lock,
										title: "Secure by Design",
										desc: "Multi-signature escrow and audited smart contracts protect every donation."
									},
									{
										icon: Zap,
										title: "Instant Settlement",
										desc: "Funds reach beneficiaries in 3–5 seconds, not days. No middlemen."
									},
									{
										icon: Coins,
										title: "Near-Zero Fees",
										desc: "Stellar fees are fractions of a cent, so 99.9% of every dollar reaches aid."
									},
									{
										icon: Network,
										title: "Global Reach",
										desc: "Send aid to 180+ countries with built-in fiat on/off-ramps via anchors."
									},
									{
										icon: Users,
										title: "Community Governed",
										desc: "Campaign milestones validated by independent verifiers and local partners."
									},
									{
										icon: Heart,
										title: "Impact Tracking",
										desc: "Beneficiaries confirm receipt on-chain. See your dollar's full journey."
									},
									{
										icon: Shield,
										title: "KYC Compliant",
										desc: "Built-in compliance tooling meets FATF guidance and regional regulations."
									}
								].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, { ...f }, f.title))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "px-6 lg:px-10 py-24 border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl mx-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center mb-14",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-[0.2em] text-emerald mb-3",
									children: "FAQ"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-4xl md:text-5xl font-semibold tracking-tight",
									children: "Questions, answered"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: [
									{
										q: "What is TrustBridge?",
										a: "TrustBridge is a humanitarian aid platform built on the Stellar blockchain that brings end-to-end transparency to charitable giving. Every donation, disbursement, and beneficiary receipt is recorded on-chain and publicly verifiable."
									},
									{
										q: "Which wallets are supported?",
										a: "TrustBridge supports Freighter, Lobstr, Albedo, xBull, and any WalletConnect-compatible Stellar wallet. Hardware wallets are supported through Freighter."
									},
									{
										q: "How are campaigns verified?",
										a: "Each campaign goes through a multi-step verification: organization KYB, local partner attestation, and milestone-based escrow release validated by independent reviewers."
									},
									{
										q: "What are the fees?",
										a: "TrustBridge charges 0% platform fees during beta. Stellar network fees are roughly $0.00001 per transaction, meaning effectively 100% of your donation reaches its destination."
									},
									{
										q: "Is TrustBridge open source?",
										a: "Yes. All smart contracts, the web client, and verification tooling are open source under the Apache 2.0 license. Audits and code are public on GitHub."
									}
								].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqItem, {
									q: f.q,
									a: f.a,
									open: openFaq === i,
									onToggle: () => setOpenFaq(openFaq === i ? null : i)
								}, i))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "px-6 lg:px-10 py-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-5xl mx-auto relative overflow-hidden rounded-3xl glass-strong p-12 md:p-16 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-hero opacity-60 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4",
										children: "Ready to make a difference?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-lg max-w-xl mx-auto mb-8",
										children: "Connect your wallet to launch a campaign or contribute to verified humanitarian efforts worldwide."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: openWalletModal,
											className: "h-12 px-6 rounded-xl bg-gradient-brand text-primary-foreground font-medium inline-flex items-center gap-2 hover:shadow-glow transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "w-4 h-4" }), "Connect Wallet"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/create-campaign",
											className: "h-12 px-6 rounded-xl glass hover:border-white/25 text-foreground font-medium inline-flex items-center gap-2 transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4" }), "Start a Campaign"]
										})]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "px-6 lg:px-10 py-12 border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-8 h-8 rounded-lg bg-gradient-brand grid place-items-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
											className: "w-4 h-4 text-primary-foreground",
											strokeWidth: 2.5
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display font-semibold",
										children: "TrustBridge"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground hidden sm:inline",
										children: "© 2026 · Built on Stellar"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								className: "flex flex-wrap items-center gap-1 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#",
										className: "px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition inline-flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "w-4 h-4" }), " GitHub"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#",
										className: "px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition inline-flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4" }), " Discord"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#",
										className: "px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition inline-flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" }), " Feedback"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition",
										children: "Terms"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition",
										children: "Privacy"
									})
								]
							})]
						})
					})
				] })
			})
		]
	});
}
var SplitComponent = Landing;
//#endregion
export { SplitComponent as component };
