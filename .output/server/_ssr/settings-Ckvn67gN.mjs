import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as languages, r as useApp } from "./AppContext-uQY-TZ3c.mjs";
import { J as Bell, O as Globe, V as CircleCheck, a as User, d as Shield, r as Wallet } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-DnZRZZms.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-Ckvn67gN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tabs = [
	{
		id: "profile",
		labelKey: "profile",
		icon: User
	},
	{
		id: "wallet",
		labelKey: "wallet",
		icon: Wallet
	},
	{
		id: "notifications",
		labelKey: "notifications",
		icon: Bell
	},
	{
		id: "language",
		labelKey: "language",
		icon: Globe
	},
	{
		id: "security",
		labelKey: "security",
		icon: Shield
	}
];
function SettingsPage() {
	const { lang, setLang, wallet, openWalletModal, disconnectWallet, t } = useApp();
	const [tab, setTab] = (0, import_react.useState)("profile");
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [profile, setProfile] = (0, import_react.useState)({
		name: "Alex Carter",
		email: "alex@trustbridge.app"
	});
	const [prefs, setPrefs] = (0, import_react.useState)({
		donations: true,
		campaignUpdates: true,
		weeklyDigest: false,
		securityAlerts: true
	});
	const [security, setSecurity] = (0, import_react.useState)({
		twoFA: true,
		sessionAlerts: true
	});
	const save = () => {
		setSaved(true);
		setTimeout(() => setSaved(false), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: t("settings"),
		subtitle: t("overview"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-[220px,1fr] gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "glass rounded-2xl p-2 h-fit",
				children: tabs.map((tabItem) => {
					const Icon = tabItem.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setTab(tabItem.id),
						className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${tab === tabItem.id ? "bg-sidebar-accent text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4" }), t(tabItem.labelKey)]
					}, tabItem.id);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-2xl p-6",
				children: [
					tab === "profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: t("profile"),
						desc: t("overview"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: t("fullName", "Full name"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: profile.name,
									onChange: (e) => setProfile({
										...profile,
										name: e.target.value
									}),
									className: input
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: t("email", "Email"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									value: profile.email,
									onChange: (e) => setProfile({
										...profile,
										email: e.target.value
									}),
									className: input
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveBar, {
								onSave: save,
								saved
							})
						]
					}),
					tab === "wallet" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: t("wallet"),
						desc: t("overview"),
						children: wallet.connected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-strong rounded-xl p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: [
									t("connected"),
									" via ",
									wallet.provider
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 font-mono text-sm break-all",
								children: wallet.address
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: disconnectWallet,
							className: "h-10 px-4 rounded-lg glass hover:border-white/25 text-sm",
							children: t("disconnectWallet")
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: openWalletModal,
							className: "h-10 px-4 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium inline-flex items-center gap-2 hover:shadow-glow transition",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "w-4 h-4" }),
								" ",
								t("connectWallet")
							]
						})
					}),
					tab === "notifications" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: t("notifications"),
						desc: t("overview"),
						children: [[
							["donations", t("newDonations", "New donations to your campaigns")],
							["campaignUpdates", t("campaignUpdates", "Updates from campaigns you donated to")],
							["weeklyDigest", t("weeklyDigest", "Weekly impact digest")],
							["securityAlerts", t("securityAlerts", "Security & login alerts")]
						].map(([k, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							label,
							value: prefs[k],
							onChange: (v) => setPrefs({
								...prefs,
								[k]: v
							})
						}, k)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveBar, {
							onSave: save,
							saved
						})]
					}),
					tab === "language" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: t("language"),
						desc: t("overview"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid sm:grid-cols-2 gap-2",
							children: languages.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setLang(l.code),
								className: `h-11 px-4 rounded-lg border text-sm font-medium transition text-left ${lang === l.code ? "bg-primary/15 border-primary text-primary" : "border-white/10 hover:border-white/25"}`,
								children: l.label
							}, l.code))
						})
					}),
					tab === "security" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: t("security"),
						desc: t("overview"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: t("twoFactor", "Two-factor authentication"),
								value: security.twoFA,
								onChange: (v) => setSecurity({
									...security,
									twoFA: v
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: t("loginAlerts", "Alert on new device login"),
								value: security.sessionAlerts,
								onChange: (v) => setSecurity({
									...security,
									sessionAlerts: v
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "h-10 px-4 rounded-lg glass hover:border-white/25 text-sm",
								children: t("changePassword", "Change password")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveBar, {
								onSave: save,
								saved
							})
						]
					})
				]
			})]
		})
	});
}
var input = "w-full h-11 px-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm";
function Section({ title, desc, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-lg font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs text-muted-foreground",
			children: desc
		})] }), children]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs font-medium text-muted-foreground mb-1.5",
			children: label
		}), children]
	});
}
function Toggle({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between p-3 rounded-lg border border-white/10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => onChange(!value),
			className: `relative w-10 h-6 rounded-full transition ${value ? "bg-gradient-brand" : "bg-white/10"}`,
			"aria-pressed": value,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${value ? "translate-x-4" : ""}` })
		})]
	});
}
function SaveBar({ onSave, saved }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 pt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: onSave,
			className: "h-10 px-4 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium hover:shadow-glow transition",
			children: "Save changes"
		}), saved && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-1 text-xs text-emerald",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4" }), " Saved"]
		})]
	});
}
//#endregion
export { SettingsPage as component };
