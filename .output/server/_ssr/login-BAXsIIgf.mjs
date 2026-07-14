import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as useApp } from "./AppContext-uQY-TZ3c.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Lock, M as Eye, N as EyeOff, S as Mail, d as Shield, o as UserPlus } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-BAXsIIgf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const nav = useNavigate();
	const { t, login: appLogin } = useApp();
	const [mode, setMode] = (0, import_react.useState)("login");
	const [showPw, setShowPw] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		email: "",
		password: "",
		confirmPassword: "",
		username: ""
	});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		try {
			if (await appLogin(mode, form)) nav({ to: "/dashboard" });
		} catch (err) {
			setError(err.message || "Authentication failed");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen grid lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-[#0a0e1a] via-[#0f1525] to-[#1a1f35] relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-10 h-10 rounded-xl bg-gradient-brand grid place-items-center shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
								className: "w-6 h-6 text-primary-foreground",
								strokeWidth: 2.5
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xl font-bold text-white",
							children: "TrustBridge"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-widest text-white/50",
							children: "On Stellar"
						})] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "text-2xl font-display font-semibold text-white leading-snug max-w-md",
							children: "\"The best way to find yourself is to lose yourself in the service of others.\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white/60 text-sm",
							children: "— Mahatma Gandhi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 text-xs text-white/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald shadow-glow" }), " Stellar Mainnet"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald shadow-glow" }), " 4.2s Settlement"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald shadow-glow" }), " 99.97% On-chain"]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.68_0.16_235)_0%,_transparent_60%)]" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center p-8 bg-[#0a0e1a]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:hidden flex items-center justify-center mb-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-6 h-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-bold text-lg",
								children: "TrustBridge"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10 mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setMode("login");
								setError("");
							},
							className: `flex-1 h-9 rounded-lg text-sm font-medium transition ${mode === "login" ? "bg-gradient-brand text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
							children: t("login", "Sign In")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setMode("signup");
								setError("");
							},
							className: `flex-1 h-9 rounded-lg text-sm font-medium transition ${mode === "signup" ? "bg-gradient-brand text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
							children: t("signup", "Sign Up")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl font-bold text-center mb-1",
						children: mode === "login" ? "Welcome back" : "Create account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground text-center mb-8",
						children: mode === "login" ? "Sign in to your TrustBridge account" : "Start your humanitarian journey"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-4",
						children: [
							mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-medium text-muted-foreground mb-1.5 block",
								children: t("username", "Username")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.username,
								onChange: (e) => setForm({
									...form,
									username: e.target.value
								}),
								placeholder: "alex",
								className: "w-full h-11 px-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm",
								required: true,
								minLength: 2
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-medium text-muted-foreground mb-1.5 block",
								children: t("email", "Email")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									value: form.email,
									onChange: (e) => setForm({
										...form,
										email: e.target.value
									}),
									placeholder: "alex@trustbridge.app",
									className: "w-full h-11 pl-9 pr-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm",
									required: true
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-medium text-muted-foreground mb-1.5 block",
								children: t("password", "Password")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: showPw ? "text" : "password",
										value: form.password,
										onChange: (e) => setForm({
											...form,
											password: e.target.value
										}),
										placeholder: "••••••••",
										className: "w-full h-11 pl-9 pr-10 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm",
										required: true,
										minLength: 8
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setShowPw(!showPw),
										className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
										children: showPw ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4" })
									})
								]
							})] }),
							mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-medium text-muted-foreground mb-1.5 block",
								children: t("confirmPassword", "Confirm Password")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "password",
									value: form.confirmPassword,
									onChange: (e) => setForm({
										...form,
										confirmPassword: e.target.value
									}),
									placeholder: "••••••••",
									className: "w-full h-11 pl-9 pr-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm",
									required: true
								})]
							})] }),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-red px-3 py-2 rounded-lg bg-red/10 border border-red/20",
								children: error
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: loading,
								className: "w-full h-12 rounded-xl bg-gradient-brand text-primary-foreground font-medium inline-flex items-center justify-center gap-2 hover:shadow-glow transition disabled:opacity-60",
								children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "w-4 h-4" }), loading ? "Processing…" : mode === "login" ? "Sign In" : "Create Account"]
							})
						]
					})
				]
			})
		})]
	});
}
//#endregion
export { LoginPage as component };
