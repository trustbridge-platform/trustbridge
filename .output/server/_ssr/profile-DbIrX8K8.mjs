import { i as __toESM } from "../_runtime.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as getMyTransactions, l as useApp, r as getMe } from "./AppContext-DkQX8ryp.mjs";
import { B as Facebook, F as Globe, M as Instagram, P as Heart, i as Wallet, n as Youtube, nt as Calendar, p as Shield, st as ArrowLeftRight } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-Bxm18wc0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-DbIrX8K8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProfilePage() {
	const { isAuthenticated } = useApp();
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [stats, setStats] = (0, import_react.useState)({
		campaignsCreated: 0,
		donationsMade: 0,
		totalDonated: 0
	});
	const [recentActivity, setRecentActivity] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (!isAuthenticated) return;
		const load = async () => {
			try {
				const me = await getMe();
				setProfile(me.user);
				try {
					await getMe();
					const txsData = await getMyTransactions({ type: "donation" });
					setStats({
						campaignsCreated: 0,
						donationsMade: txsData.transactions?.length || 0,
						totalDonated: txsData.transactions?.reduce((sum, tx) => sum + Math.abs(tx.amount || 0), 0) || 0
					});
					setRecentActivity(txsData.transactions?.slice(0, 5) || []);
				} catch {
					setStats({
						campaignsCreated: 0,
						donationsMade: 0,
						totalDonated: 0
					});
					setRecentActivity([]);
				}
			} catch (e) {
				console.error(e);
			} finally {
				setLoading(false);
			}
		};
		load();
	}, [isAuthenticated]);
	if (!isAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: "Profile",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass rounded-2xl p-12 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-12 h-12 mx-auto text-muted-foreground mb-4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-semibold mb-2",
					children: "Please log in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mb-6",
					children: "You need to be logged in to view your profile."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "inline-flex items-center justify-center h-10 px-4 rounded-lg bg-gradient-brand text-primary-foreground font-medium hover:shadow-glow transition",
					children: "Sign In"
				})
			]
		})
	});
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: "Profile",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" })
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: "Profile",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-3 gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center text-center mb-6",
							children: [
								profile?.avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 shadow-glow mb-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: profile.avatar,
										alt: "Avatar",
										className: "w-full h-full object-cover"
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-20 h-20 rounded-full bg-gradient-brand grid place-items-center text-2xl font-bold text-primary-foreground shadow-glow mb-3",
									children: [profile?.firstName?.[0], profile?.lastName?.[0]]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-display text-xl font-semibold",
									children: [
										profile?.firstName,
										" ",
										profile?.lastName
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground",
									children: profile?.email
								}),
								profile?.gender && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground mt-1 capitalize",
									children: profile.gender
								}),
								profile?.country && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-1 text-xs text-muted-foreground mt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-3 h-3" }),
										" ",
										profile.country
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 border-t border-white/10 pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4 text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Joined:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: profile?.joined ? new Date(profile.joined).toLocaleDateString() : "N/A"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "w-4 h-4 text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Wallet:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs truncate",
										children: profile?.walletAddress || "Not connected"
									})
								]
							})]
						}),
						profile?.bio && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 pt-4 border-t border-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground mb-2",
								children: "Bio"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: profile.bio
							})]
						}),
						(profile?.facebook || profile?.instagram || profile?.youtube) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 pt-4 border-t border-white/10 space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground mb-2",
									children: "Social Media"
								}),
								profile?.facebook && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: profile.facebook,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "w-3 h-3" }), " Facebook"]
								}),
								profile?.instagram && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: profile.instagram,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "w-3 h-3" }), " Instagram"]
								}),
								profile?.youtube && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: profile.youtube,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "w-3 h-3" }), " YouTube"]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-semibold mb-4",
						children: "Statistics"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								icon: Heart,
								label: "Campaigns Created",
								value: stats.campaignsCreated
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								icon: ArrowLeftRight,
								label: "Donations Made",
								value: stats.donationsMade
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								icon: Wallet,
								label: "Total Donated (XLM)",
								value: stats.totalDonated.toFixed(2)
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-semibold mb-4",
						children: "Recent Activity"
					}), recentActivity.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "No activity yet."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-white/5",
						children: recentActivity.map((tx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-8 h-8 rounded-lg bg-primary/10 grid place-items-center shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeftRight, { className: "w-4 h-4 text-primary" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-medium truncate capitalize",
										children: tx.type
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: new Date(tx.created_at).toLocaleString()
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `text-sm font-mono ${tx.type === "receive" || tx.type === "donation" ? "text-emerald" : ""}`,
									children: [tx.amount, " XLM"]
								})
							]
						}, tx.id))
					})]
				})
			]
		})
	});
}
function Stat({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 rounded-xl bg-white/5 border border-white/5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 mb-2 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xl font-semibold mt-1",
				children: value
			})
		]
	});
}
//#endregion
export { ProfilePage as component };
