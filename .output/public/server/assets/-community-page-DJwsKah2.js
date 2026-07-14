import { r as useApp } from "./AppContext-Cyd9VWQY.js";
import { t as AppShell } from "./AppShell-B-zS6ULv.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { AlertCircle, Bell, Bug, CheckCircle2, Lightbulb, Megaphone, MessageCircle, MessageSquare, Pin, Send, ThumbsUp, Users } from "lucide-react";
//#region src/routes/community/-community-page.tsx
var channelMeta = {
	announcements: {
		title: "Announcements",
		subtitle: "Official TrustBridge updates and news",
		icon: Bell,
		color: "from-blue-500 to-cyan-400"
	},
	general: {
		title: "General Discussion",
		subtitle: "Talk about anything related to humanitarian aid and Stellar",
		icon: MessageSquare,
		color: "from-emerald-500 to-teal-400"
	},
	updates: {
		title: "Campaign Updates",
		subtitle: "Follow progress on active campaigns",
		icon: Megaphone,
		color: "from-amber-500 to-rose-400"
	},
	bugs: {
		title: "Bug Reports",
		subtitle: "Report issues you've found on the platform",
		icon: Bug,
		color: "from-red-500 to-orange-400"
	},
	features: {
		title: "Feature Requests",
		subtitle: "Suggest ideas to improve TrustBridge",
		icon: Lightbulb,
		color: "from-violet-500 to-purple-400"
	},
	support: {
		title: "Support Tickets",
		subtitle: "Get help from the TrustBridge team",
		icon: Users,
		color: "from-sky-500 to-indigo-400"
	}
};
var samplePosts = {
	announcements: [
		{
			id: "a1",
			author: "TrustBridge Team",
			avatar: "🛡️",
			content: "🚀 **TrustBridge v2.0 is live!** We've added community channels, improved wallet detection, and a brand new campaign experience. Check out the new features in the sidebar!",
			timestamp: "2h ago",
			likes: 48,
			liked: false,
			comments: 12,
			pinned: true
		},
		{
			id: "a2",
			author: "TrustBridge Team",
			avatar: "🛡️",
			content: "📢 **Stellar Protocol Upgrade** — StellarCore v22.0 will be deployed on Oct 15. All users should ensure their wallets are updated.",
			timestamp: "1d ago",
			likes: 32,
			liked: false,
			comments: 8
		},
		{
			id: "a3",
			author: "TrustBridge Team",
			avatar: "🛡️",
			content: "🌍 **New Partnership** — We're partnering with the Red Cross to bring transparent aid tracking to disaster relief operations globally.",
			timestamp: "3d ago",
			likes: 156,
			liked: false,
			comments: 24
		}
	],
	general: [
		{
			id: "g1",
			author: "CryptoHelper",
			avatar: "🌐",
			content: "Just made my first donation through TrustBridge! The Stellar transaction was confirmed in under 5 seconds. This is the future of aid!",
			timestamp: "30m ago",
			likes: 15,
			liked: false,
			comments: 3
		},
		{
			id: "g2",
			author: "StellarFan",
			avatar: "⭐",
			content: "Has anyone tried connecting with Ledger via Freighter? Would love to know if hardware wallet support works well.",
			timestamp: "1h ago",
			likes: 8,
			liked: false,
			comments: 5
		},
		{
			id: "g3",
			author: "AidWorker",
			avatar: "🤝",
			content: "Working in the field — being able to track exactly where donations go is game-changing for building trust with communities.",
			timestamp: "5h ago",
			likes: 42,
			liked: false,
			comments: 7
		}
	],
	updates: [{
		id: "u1",
		author: "Clean Water Yemen",
		avatar: "💧",
		content: "**Update:** We've reached 70% of our goal! New wells being drilled in 3 villages this week. Thank you donors!",
		timestamp: "4h ago",
		likes: 28,
		liked: false,
		comments: 6
	}, {
		id: "u2",
		author: "Earthquake Relief Türkiye",
		avatar: "🏗️",
		content: "**Progress Report:** 1,200 families have received emergency shelter kits. Next phase: permanent housing.",
		timestamp: "1d ago",
		likes: 67,
		liked: false,
		comments: 14
	}],
	bugs: [{
		id: "b1",
		author: "TechUser",
		avatar: "🐛",
		content: "**Bug:** When I try to connect Freighter, it shows 'Install' even though I have it installed. Chrome v118, Freighter v7.0.1",
		timestamp: "3h ago",
		likes: 5,
		liked: false,
		comments: 2,
		status: "open"
	}, {
		id: "b2",
		author: "MobileUser",
		avatar: "📱",
		content: "**Bug:** Dashboard layout breaks on tablet view (iPad Pro). The QR code overlaps with network status.",
		timestamp: "1d ago",
		likes: 3,
		liked: false,
		comments: 1,
		status: "resolved"
	}],
	features: [{
		id: "f1",
		author: "PowerUser",
		avatar: "💡",
		content: "**Feature Request:** Would love to see multi-wallet support — being able to track balance from multiple wallets in one dashboard.",
		timestamp: "6h ago",
		likes: 22,
		liked: false,
		comments: 9
	}, {
		id: "f2",
		author: "Donor",
		avatar: "❤️",
		content: "**Feature Request:** Monthly recurring donations with auto-execute via smart contracts would be amazing!",
		timestamp: "2d ago",
		likes: 35,
		liked: false,
		comments: 11
	}],
	support: [{
		id: "s1",
		author: "NewUser",
		avatar: "🙋",
		content: "**Question:** How do I create a campaign? I'm from a registered NGO and would like to start fundraising.",
		timestamp: "2h ago",
		likes: 4,
		liked: false,
		comments: 2,
		status: "open"
	}, {
		id: "s2",
		author: "DonorHelp",
		avatar: "❓",
		content: "**Question:** My transaction shows as 'pending' for over an hour. Hash: e23f9a... Is this normal?",
		timestamp: "8h ago",
		likes: 2,
		liked: false,
		comments: 1,
		status: "open"
	}]
};
function CommunityPage({ channel }) {
	const { t, wallet, openWalletModal } = useApp();
	const meta = channelMeta[channel];
	const Icon = meta.icon;
	const [posts, setPosts] = useState(samplePosts[channel]);
	const [newPost, setNewPost] = useState("");
	const toggleLike = (id) => {
		setPosts((prev) => prev.map((p) => p.id === id ? {
			...p,
			liked: !p.liked,
			likes: p.liked ? p.likes - 1 : p.likes + 1
		} : p));
	};
	const handlePost = () => {
		if (!newPost.trim()) return;
		const post = {
			id: `new-${Date.now()}`,
			author: wallet?.address ? `${wallet.address.slice(0, 6)}…${wallet.address.slice(-4)}` : "Anonymous",
			avatar: wallet.connected ? "🔐" : "👤",
			content: newPost,
			timestamp: "Just now",
			likes: 0,
			liked: false,
			comments: 0,
			status: channel === "bugs" || channel === "support" ? "open" : void 0
		};
		setPosts((prev) => [post, ...prev]);
		setNewPost("");
	};
	const pinned = posts.filter((p) => p.pinned);
	const regular = posts.filter((p) => !p.pinned);
	return /* @__PURE__ */ jsx(AppShell, {
		title: meta.title,
		subtitle: meta.subtitle,
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid lg:grid-cols-[1fr,320px] gap-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "glass rounded-2xl p-4",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-10 h-10 rounded-xl bg-gradient-brand grid place-items-center shrink-0 shadow-glow text-lg",
								children: wallet.connected ? "🔐" : "👤"
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ jsx("textarea", {
									value: newPost,
									onChange: (e) => setNewPost(e.target.value),
									placeholder: channel === "bugs" ? "Describe the bug you found..." : channel === "features" ? "Share your feature idea..." : channel === "support" ? "Ask for help..." : "Share your thoughts...",
									className: "w-full min-h-[80px] p-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm resize-none"
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between mt-2",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "text-[11px] text-muted-foreground",
										children: [!wallet.connected && "Connect wallet to post — ", /* @__PURE__ */ jsx("button", {
											onClick: openWalletModal,
											className: "text-primary underline",
											children: "Connect"
										})]
									}), /* @__PURE__ */ jsxs("button", {
										onClick: handlePost,
										disabled: !newPost.trim(),
										className: "h-9 px-4 rounded-lg bg-gradient-brand text-primary-foreground text-xs font-medium inline-flex items-center gap-2 hover:shadow-glow transition disabled:opacity-50 disabled:cursor-not-allowed",
										children: [/* @__PURE__ */ jsx(Send, { className: "w-3 h-3" }), " Post"]
									})]
								})]
							})]
						})
					}),
					pinned.map((post) => /* @__PURE__ */ jsx(PostCard, {
						post,
						channel,
						onLike: toggleLike
					}, post.id)),
					regular.map((post) => /* @__PURE__ */ jsx(PostCard, {
						post,
						channel,
						onLike: toggleLike
					}, post.id))
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "glass rounded-2xl p-5",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: `h-20 rounded-xl bg-gradient-to-br ${meta.color} mb-4 flex items-center justify-center`,
							children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8 text-white/90" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display font-semibold",
							children: meta.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground mt-1 mb-4",
							children: meta.subtitle
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-2 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ jsx("span", { children: "Posts" }), /* @__PURE__ */ jsx("span", {
										className: "font-medium text-foreground",
										children: posts.length
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ jsx("span", { children: "Members online" }), /* @__PURE__ */ jsx("span", {
										className: "font-medium text-emerald",
										children: "142"
									})]
								}),
								(channel === "bugs" || channel === "support") && /* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ jsx("span", { children: "Open" }), /* @__PURE__ */ jsx("span", {
										className: "font-medium text-amber-400",
										children: posts.filter((p) => p.status === "open").length
									})]
								})
							]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "glass rounded-2xl p-5",
					children: [/* @__PURE__ */ jsx("h4", {
						className: "font-display font-semibold text-sm mb-3",
						children: "Channel Rules"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-2 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ jsx("li", {
								className: "flex items-start gap-2",
								children: "• Be respectful and constructive"
							}),
							/* @__PURE__ */ jsx("li", {
								className: "flex items-start gap-2",
								children: "• Stay on topic"
							}),
							/* @__PURE__ */ jsx("li", {
								className: "flex items-start gap-2",
								children: "• No spam or self-promotion"
							}),
							/* @__PURE__ */ jsx("li", {
								className: "flex items-start gap-2",
								children: "• Follow the Stellar community guidelines"
							})
						]
					})]
				})]
			})]
		})
	});
}
function PostCard({ post, channel, onLike }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `glass rounded-2xl p-5 transition hover:border-white/15 ${post.pinned ? "border-primary/30" : ""}`,
		children: [post.pinned && /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1.5 text-[11px] text-primary font-medium mb-3",
			children: [/* @__PURE__ */ jsx(Pin, { className: "w-3 h-3" }), " Pinned"]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ jsx("div", {
				className: "w-10 h-10 rounded-xl bg-white/10 grid place-items-center shrink-0 text-lg",
				children: post.avatar
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex-1 min-w-0",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 flex-wrap",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-medium text-sm",
								children: post.author
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-[11px] text-muted-foreground",
								children: post.timestamp
							}),
							post.status && /* @__PURE__ */ jsxs("span", {
								className: `inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-medium ${post.status === "open" ? "bg-amber-500/10 text-amber-400" : "bg-emerald/10 text-emerald"}`,
								children: [post.status === "open" ? /* @__PURE__ */ jsx(AlertCircle, { className: "w-2.5 h-2.5" }) : /* @__PURE__ */ jsx(CheckCircle2, { className: "w-2.5 h-2.5" }), post.status]
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "text-sm mt-1.5 leading-relaxed whitespace-pre-wrap",
						children: post.content
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-4 mt-3",
						children: [
							/* @__PURE__ */ jsxs("button", {
								onClick: () => onLike(post.id),
								className: `inline-flex items-center gap-1.5 text-xs transition ${post.liked ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
								children: [/* @__PURE__ */ jsx(ThumbsUp, { className: `w-3.5 h-3.5 ${post.liked ? "fill-primary" : ""}` }), post.likes]
							}),
							/* @__PURE__ */ jsxs("button", {
								className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition",
								children: [/* @__PURE__ */ jsx(MessageCircle, { className: "w-3.5 h-3.5" }), post.comments]
							}),
							(channel === "bugs" || channel === "support") && /* @__PURE__ */ jsx("button", {
								className: "ml-auto text-[11px] text-primary hover:underline",
								children: "Mark resolved"
							})
						]
					})
				]
			})]
		})]
	});
}
//#endregion
export { CommunityPage as t };
