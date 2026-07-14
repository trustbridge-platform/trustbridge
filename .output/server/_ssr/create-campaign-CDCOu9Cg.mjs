import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { V as CircleCheck, s as Upload, u as Sparkles } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-DnZRZZms.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/create-campaign-CDCOu9Cg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var cats = [
	"Food & Water",
	"Disaster Relief",
	"Medical",
	"Education",
	"Shelter",
	"Other"
];
function CreateCampaign() {
	const [form, setForm] = (0, import_react.useState)({
		title: "",
		org: "",
		desc: "",
		goal: "",
		cat: "Food & Water",
		location: "",
		end: "",
		image: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [success, setSuccess] = (0, import_react.useState)(false);
	const update = (k, v) => setForm((f) => ({
		...f,
		[k]: v
	}));
	const submit = (e) => {
		e.preventDefault();
		const errs = {};
		if (form.title.trim().length < 6) errs.title = "At least 6 characters.";
		if (form.org.trim().length < 2) errs.org = "Required.";
		if (form.desc.trim().length < 30) errs.desc = "Describe in at least 30 characters.";
		const g = Number(form.goal);
		if (!g || g < 100) errs.goal = "Minimum 100 XLM.";
		if (!form.location.trim()) errs.location = "Required.";
		if (!form.end) errs.end = "Pick an end date.";
		setErrors(errs);
		if (Object.keys(errs).length === 0) {
			setSuccess(true);
			setTimeout(() => setSuccess(false), 4e3);
			setForm({
				title: "",
				org: "",
				desc: "",
				goal: "",
				cat: "Food & Water",
				location: "",
				end: "",
				image: ""
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Create Campaign",
		subtitle: "Launch a verified humanitarian campaign on Stellar.",
		children: [success && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 glass-strong rounded-xl p-4 flex items-center gap-3 border-emerald/30",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-9 h-9 rounded-lg bg-emerald/20 grid place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-5 h-5 text-emerald" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-medium",
				children: "Campaign submitted"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted-foreground",
				children: "We'll notify you once verification is complete."
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "grid lg:grid-cols-3 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 glass rounded-2xl p-6 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Campaign title",
						error: errors.title,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.title,
							onChange: (e) => update("title", e.target.value),
							placeholder: "e.g. Clean Water for Yemen",
							className: input
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Organization name",
						error: errors.org,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.org,
							onChange: (e) => update("org", e.target.value),
							placeholder: "e.g. Mercy Wells Foundation",
							className: input
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Description",
						error: errors.desc,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: form.desc,
							onChange: (e) => update("desc", e.target.value),
							rows: 5,
							placeholder: "Tell donors about the impact, beneficiaries, and timeline…",
							className: input + " resize-none"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Goal amount (XLM)",
								error: errors.goal,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									value: form.goal,
									onChange: (e) => update("goal", e.target.value),
									placeholder: "50000",
									className: input
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Category",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: form.cat,
									onChange: (e) => update("cat", e.target.value),
									className: input,
									children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Location",
								error: errors.location,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.location,
									onChange: (e) => update("location", e.target.value),
									placeholder: "Country / region",
									className: input
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "End date",
								error: errors.end,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									value: form.end,
									onChange: (e) => update("end", e.target.value),
									className: input
								})
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-wider text-muted-foreground mb-3",
								children: "Cover image"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block aspect-video rounded-xl border-2 border-dashed border-white/15 hover:border-primary/50 transition grid place-items-center cursor-pointer bg-white/[0.02]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center px-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "w-6 h-6 mx-auto text-muted-foreground mb-2" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-medium",
											children: "Drop or browse"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: "PNG, JPG up to 5 MB"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: "image/*",
									className: "hidden",
									onChange: (e) => update("image", e.target.files?.[0]?.name ?? "")
								})]
							}),
							form.image && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 text-xs text-emerald",
								children: ["Selected: ", form.image]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display font-semibold mb-2 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-emerald" }), " Verification"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground leading-relaxed",
							children: "Campaigns go through KYB, local partner attestation, and milestone-based escrow on Stellar before going live."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "w-full h-12 rounded-xl bg-gradient-brand text-primary-foreground font-medium hover:shadow-glow transition",
						children: "Submit for verification"
					})
				]
			})]
		})]
	});
}
var input = "w-full h-11 px-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm";
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-medium text-muted-foreground mb-1.5",
				children: label
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-red-400 mt-1",
				children: error
			})
		]
	});
}
//#endregion
export { CreateCampaign as component };
