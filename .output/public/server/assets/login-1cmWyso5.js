import { r as useApp, s as login } from "./AppContext-Cyd9VWQY.js";
import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Eye, EyeOff, Lock, Mail, Shield } from "lucide-react";
//#region src/routes/login.tsx?tsr-split=component
function LoginPage() {
	const nav = useNavigate();
	const { setUser } = useApp();
	const [showPw, setShowPw] = useState(false);
	const [form, setForm] = useState({
		email: "",
		password: ""
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		try {
			const res = await login({
				email: form.email,
				password: form.password
			});
			localStorage.setItem("trustbridge_token", res.token);
			setUser(res.user);
			nav({ to: "/dashboard" });
		} catch (err) {
			setError(err.message || "Login failed");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen grid lg:grid-cols-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-[#0a0e1a] via-[#0f1525] to-[#1a1f35] relative overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "relative z-10",
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-10 h-10 rounded-xl bg-gradient-brand grid place-items-center shadow-glow",
							children: /* @__PURE__ */ jsx(Shield, {
								className: "w-6 h-6 text-primary-foreground",
								strokeWidth: 2.5
							})
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "font-display text-xl font-bold text-white",
							children: "TrustBridge"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-[10px] uppercase tracking-widest text-white/50",
							children: "On Stellar"
						})] })]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative z-10 space-y-6",
					children: [
						/* @__PURE__ */ jsx("blockquote", {
							className: "text-2xl font-display font-semibold text-white leading-snug max-w-md",
							children: "\"The best way to find yourself is to lose yourself in the service of others.\""
						}),
						/* @__PURE__ */ jsx("div", {
							className: "text-white/60 text-sm",
							children: "— Mahatma Gandhi"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-4 text-xs text-white/40",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald shadow-glow" }), " Stellar Mainnet"]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald shadow-glow" }), " 4.2s Settlement"]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald shadow-glow" }), " 99.97% On-chain"]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.68_0.16_235)_0%,_transparent_60%)]" })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-center p-8 bg-[#0a0e1a]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "w-full max-w-sm",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "lg:hidden flex items-center justify-center mb-8",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-primary" }), /* @__PURE__ */ jsx("span", {
								className: "font-display font-bold text-lg",
								children: "TrustBridge"
							})]
						})
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "font-display text-2xl font-bold text-center mb-1",
						children: "Welcome back"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground text-center mb-8",
						children: "Sign in to your TrustBridge account"
					}),
					/* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: "text-xs font-medium text-muted-foreground mb-1.5 block",
								children: "Email"
							}), /* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [/* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
									type: "email",
									value: form.email,
									onChange: (e) => setForm({
										...form,
										email: e.target.value
									}),
									placeholder: "you@example.com",
									className: "w-full h-11 pl-9 pr-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm",
									required: true
								})]
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: "text-xs font-medium text-muted-foreground mb-1.5 block",
								children: "Password"
							}), /* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ jsx(Lock, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
									/* @__PURE__ */ jsx("input", {
										type: showPw ? "text" : "password",
										value: form.password,
										onChange: (e) => setForm({
											...form,
											password: e.target.value
										}),
										placeholder: "••••••••",
										className: "w-full h-11 pl-9 pr-10 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm",
										required: true
									}),
									/* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => setShowPw(!showPw),
										className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
										children: showPw ? /* @__PURE__ */ jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4" })
									})
								]
							})] }),
							error && /* @__PURE__ */ jsx("div", {
								className: "text-xs text-red-500 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20",
								children: error
							}),
							/* @__PURE__ */ jsxs("button", {
								type: "submit",
								disabled: loading,
								className: "w-full h-12 rounded-xl bg-gradient-brand text-primary-foreground font-medium inline-flex items-center justify-center gap-2 hover:shadow-glow transition disabled:opacity-60",
								children: [loading ? /* @__PURE__ */ jsx("span", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }) : /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4" }), loading ? "Signing in…" : "Sign In"]
							})
						]
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "text-center text-sm text-muted-foreground mt-6",
						children: ["Don't have an account? ", /* @__PURE__ */ jsx(Link, {
							to: "/signup",
							className: "text-primary hover:underline",
							children: "Sign up"
						})]
					})
				]
			})
		})]
	});
}
//#endregion
export { LoginPage as component };
