import { _ as __toESM, c as register, h as require_react, l as Link, m as require_jsx_runtime, n as useApp, u as useNavigate } from "./index-BgNBbm5u.js";
import { t as Shield } from "./shield-D90MvTBE.js";
import { t as EyeOff } from "./eye-off-BGENDaLo.js";
import { n as Eye, t as Lock } from "./lock-DWTGwkCv.js";
import { t as Mail } from "./mail-DWnI7i1a.js";
import { t as UserPlus } from "./user-plus-ENmlsMbz.js";
//#region src/routes/signup.tsx?tsr-split=component
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AVATARS = [
	"https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4",
	"https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka&backgroundColor=ffd5dc",
	"https://api.dicebear.com/7.x/avataaars/svg?seed=Salem&backgroundColor=c0aede",
	"https://api.dicebear.com/7.x/avataaars/svg?seed=Mia&backgroundColor=ffdfbf",
	"https://api.dicebear.com/7.x/avataaars/svg?seed=Leo&backgroundColor=d4e157",
	"https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe&backgroundColor=ffb3ba",
	"https://api.dicebear.com/7.x/avataaars/svg?seed=Max&backgroundColor=ffcc80"
];
var COUNTRIES = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"Andorra",
	"Angola",
	"Argentina",
	"Armenia",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahrain",
	"Bangladesh",
	"Belarus",
	"Belgium",
	"Benin",
	"Bolivia",
	"Bosnia and Herzegovina",
	"Botswana",
	"Brazil",
	"Brunei",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Chad",
	"Chile",
	"China",
	"Colombia",
	"Comoros",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Cyprus",
	"Czech Republic",
	"Denmark",
	"Djibouti",
	"Dominican Republic",
	"DR Congo",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Fiji",
	"Finland",
	"France",
	"Gabon",
	"Gambia",
	"Georgia",
	"Germany",
	"Ghana",
	"Greece",
	"Guatemala",
	"Guinea",
	"Haiti",
	"Honduras",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran",
	"Iraq",
	"Ireland",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kuwait",
	"Kyrgyzstan",
	"Laos",
	"Latvia",
	"Lebanon",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Mauritania",
	"Mauritius",
	"Mexico",
	"Moldova",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nepal",
	"Netherlands",
	"New Zealand",
	"Nicaragua",
	"Niger",
	"Nigeria",
	"North Korea",
	"North Macedonia",
	"Norway",
	"Oman",
	"Pakistan",
	"Panama",
	"Paraguay",
	"Peru",
	"Philippines",
	"Poland",
	"Portugal",
	"Qatar",
	"Romania",
	"Russia",
	"Rwanda",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Sierra Leone",
	"Singapore",
	"Slovakia",
	"Slovenia",
	"Somalia",
	"South Africa",
	"South Korea",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan",
	"Suriname",
	"Sweden",
	"Switzerland",
	"Syria",
	"Taiwan",
	"Tajikistan",
	"Tanzania",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Uganda",
	"Ukraine",
	"United Arab Emirates",
	"United Kingdom",
	"United States",
	"Uruguay",
	"Uzbekistan",
	"Vatican City",
	"Venezuela",
	"Vietnam",
	"Yemen",
	"Zambia",
	"Zimbabwe"
];
function SignupPage() {
	const nav = useNavigate();
	const { setUser } = useApp();
	const [showPw, setShowPw] = (0, import_react.useState)(false);
	const [showConfirmPw, setShowConfirmPw] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		avatar: "",
		gender: "",
		country: "",
		bio: "",
		facebook: "",
		instagram: "",
		youtube: ""
	});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		if (form.password !== form.confirmPassword) {
			setError("Passwords do not match");
			setLoading(false);
			return;
		}
		try {
			const res = await register({ ...form });
			localStorage.setItem("trustbridge_token", res.token);
			setUser(res.user);
			nav({ to: "/dashboard" });
		} catch (err) {
			setError(err.message || "Registration failed");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-[#0a0e1a] flex items-center justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-2xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center mb-8",
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-2xl p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl font-bold text-center mb-1",
						children: "Create account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground text-center mb-6",
						children: "Start your humanitarian journey"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground mb-1.5 block",
									children: "First Name *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.firstName,
									onChange: (e) => setForm({
										...form,
										firstName: e.target.value
									}),
									autoComplete: "given-name",
									className: "w-full h-11 px-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm",
									required: true
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground mb-1.5 block",
									children: "Last Name *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.lastName,
									onChange: (e) => setForm({
										...form,
										lastName: e.target.value
									}),
									autoComplete: "family-name",
									className: "w-full h-11 px-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm",
									required: true
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-medium text-muted-foreground mb-1.5 block",
								children: "Email *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									value: form.email,
									onChange: (e) => setForm({
										...form,
										email: e.target.value
									}),
									placeholder: "you@example.com",
									autoComplete: "email",
									className: "w-full h-11 pl-9 pr-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm",
									required: true
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground mb-1.5 block",
									children: "Password *"
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
											placeholder: "Min 8 chars",
											autoComplete: "new-password",
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
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground mb-1.5 block",
									children: "Confirm Password *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: showConfirmPw ? "text" : "password",
											value: form.confirmPassword,
											onChange: (e) => setForm({
												...form,
												confirmPassword: e.target.value
											}),
											placeholder: "Repeat password",
											autoComplete: "new-password",
											className: "w-full h-11 pl-9 pr-10 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm",
											required: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShowConfirmPw(!showConfirmPw),
											className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
											children: showConfirmPw ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4" })
										})
									]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-medium text-muted-foreground mb-2 block",
								children: "Choose Avatar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-3 flex-wrap",
								children: AVATARS.map((url, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setForm({
										...form,
										avatar: url
									}),
									className: `w-14 h-14 rounded-full border-2 transition overflow-hidden ${form.avatar === url ? "border-primary shadow-glow scale-110" : "border-white/10 hover:border-white/30"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: url,
										alt: `Avatar ${i + 1}`,
										className: "w-full h-full object-cover"
									})
								}, i))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground mb-1.5 block",
									children: "Gender"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: form.gender,
										onChange: (e) => setForm({
											...form,
											gender: e.target.value
										}),
										className: "w-full h-11 px-3 rounded-xl bg-[#1a1f35] border border-white/10 focus:border-primary outline-none text-sm text-white appearance-none cursor-pointer",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												className: "bg-[#1a1f35] text-white/60",
												children: "Prefer not to say"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "male",
												className: "bg-[#1a1f35] text-white",
												children: "Male"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "female",
												className: "bg-[#1a1f35] text-white",
												children: "Female"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "other",
												className: "bg-[#1a1f35] text-white",
												children: "Other"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40 text-xs",
										children: "▼"
									})]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground mb-1.5 block",
									children: "Country"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: form.country,
										onChange: (e) => setForm({
											...form,
											country: e.target.value
										}),
										className: "w-full h-11 px-3 rounded-xl bg-[#1a1f35] border border-white/10 focus:border-primary outline-none text-sm text-white appearance-none cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											className: "bg-[#1a1f35] text-white/60",
											children: "Select country"
										}), COUNTRIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: c,
											className: "bg-[#1a1f35] text-white",
											children: c
										}, c))]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40 text-xs",
										children: "▼"
									})]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-medium text-muted-foreground mb-1.5 block",
								children: "Bio (optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: form.bio,
								onChange: (e) => setForm({
									...form,
									bio: e.target.value
								}),
								rows: 3,
								placeholder: "Tell us about yourself...",
								className: "w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm resize-none"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-medium text-muted-foreground mb-2 block",
								children: "Social Media (optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.facebook,
										onChange: (e) => setForm({
											...form,
											facebook: e.target.value
										}),
										placeholder: "https://facebook.com/username",
										className: "w-full h-11 px-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.instagram,
										onChange: (e) => setForm({
											...form,
											instagram: e.target.value
										}),
										placeholder: "https://instagram.com/username",
										className: "w-full h-11 px-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.youtube,
										onChange: (e) => setForm({
											...form,
											youtube: e.target.value
										}),
										placeholder: "https://youtube.com/@username",
										className: "w-full h-11 px-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm"
									})
								]
							})] }),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-red-500 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20",
								children: error
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: loading,
								className: "w-full h-12 rounded-xl bg-gradient-brand text-primary-foreground font-medium inline-flex items-center justify-center gap-2 hover:shadow-glow transition disabled:opacity-60",
								children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "w-4 h-4" }), loading ? "Creating…" : "Create Account"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-center text-sm text-muted-foreground mt-6",
						children: ["Already have an account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: "text-primary hover:underline",
							children: "Sign in"
						})]
					})
				]
			})]
		})
	});
}
//#endregion
export { SignupPage as component };
