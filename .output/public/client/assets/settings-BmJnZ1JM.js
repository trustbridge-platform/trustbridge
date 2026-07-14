import { a as Wallet, d as LogOut, m as Globe, s as User, v as CircleCheck, x as Bell } from "./DonateModal-CvlrMbxO.js";
import { _ as __toESM, h as require_react, m as require_jsx_runtime, n as useApp, r as changePassword, t as languages } from "./index-CzLJxDRa.js";
import { n as createLucideIcon, t as Shield } from "./shield-DUH9ghp3.js";
import { t as EyeOff } from "./eye-off-CrJ4xYoz.js";
import { n as Eye, t as Lock } from "./lock-Dx65nQ1I.js";
import { t as AppShell } from "./AppShell-DqUipN0r.js";
import { t as RequireAuth } from "./RequireAuth-Ct5nOfLe.js";
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FingerprintPattern = createLucideIcon("fingerprint-pattern", [
	["path", {
		d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
		key: "1nerag"
	}],
	["path", {
		d: "M14 13.12c0 2.38 0 6.38-1 8.88",
		key: "o46ks0"
	}],
	["path", {
		d: "M17.29 21.02c.12-.6.43-2.3.5-3.02",
		key: "ptglia"
	}],
	["path", {
		d: "M2 12a10 10 0 0 1 18-6",
		key: "ydlgp0"
	}],
	["path", {
		d: "M2 16h.01",
		key: "1gqxmh"
	}],
	["path", {
		d: "M21.8 16c.2-2 .131-5.354 0-6",
		key: "drycrb"
	}],
	["path", {
		d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",
		key: "1tidbn"
	}],
	["path", {
		d: "M8.65 22c.21-.66.45-1.32.57-2",
		key: "13wd9y"
	}],
	["path", {
		d: "M9 6.8a6 6 0 0 1 9 5.2v2",
		key: "1fr1j5"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var History = createLucideIcon("history", [
	["path", {
		d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
		key: "1357e3"
	}],
	["path", {
		d: "M3 3v5h5",
		key: "1xhq8a"
	}],
	["path", {
		d: "M12 7v5l4 2",
		key: "1fdv2h"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Rocket = createLucideIcon("rocket", [
	["path", {
		d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
		key: "qeys4"
	}],
	["path", {
		d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
		key: "u4xsad"
	}],
	["path", {
		d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
		key: "676m9"
	}],
	["path", {
		d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",
		key: "92ym6u"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Smartphone = createLucideIcon("smartphone", [["rect", {
	width: "14",
	height: "20",
	x: "5",
	y: "2",
	rx: "2",
	ry: "2",
	key: "1yt0o3"
}], ["path", {
	d: "M12 18h.01",
	key: "mhygvu"
}]]);
//#endregion
//#region src/routes/settings.tsx?tsr-split=component
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
	},
	{
		id: "comingSoon",
		labelKey: "Coming Soon",
		icon: Rocket
	}
];
function SettingsPage() {
	const { lang, setLang, wallet, openWalletModal, disconnectWallet, t, user, setUser } = useApp();
	const [tab, setTab] = (0, import_react.useState)("profile");
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [profile, setProfile] = (0, import_react.useState)({
		name: user?.firstName + " " + user?.lastName || "User",
		email: user?.email || ""
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
	const [pwForm, setPwForm] = (0, import_react.useState)({
		oldPassword: "",
		newPassword: "",
		confirmPassword: ""
	});
	const [showOldPw, setShowOldPw] = (0, import_react.useState)(false);
	const [showNewPw, setShowNewPw] = (0, import_react.useState)(false);
	const [pwLoading, setPwLoading] = (0, import_react.useState)(false);
	const [pwError, setPwError] = (0, import_react.useState)("");
	const [pwSuccess, setPwSuccess] = (0, import_react.useState)("");
	const save = () => {
		setSaved(true);
		setTimeout(() => setSaved(false), 2e3);
	};
	const handleChangePassword = async (e) => {
		e.preventDefault();
		setPwError("");
		setPwSuccess("");
		setPwLoading(true);
		try {
			await changePassword(pwForm);
			setPwSuccess("Password changed successfully!");
			setPwForm({
				oldPassword: "",
				newPassword: "",
				confirmPassword: ""
			});
		} catch (err) {
			setPwError(err.message || "Failed to change password");
		} finally {
			setPwLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireAuth, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-white/10 pt-4 mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display font-semibold mb-4",
									children: "Change Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: handleChangePassword,
									className: "space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Current Password",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: showOldPw ? "text" : "password",
														value: pwForm.oldPassword,
														onChange: (e) => setPwForm({
															...pwForm,
															oldPassword: e.target.value
														}),
														placeholder: "Current password",
														className: "w-full h-11 pl-9 pr-10 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm",
														required: true
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setShowOldPw(!showOldPw),
														className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
														children: showOldPw ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4" })
													})
												]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "New Password",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: showNewPw ? "text" : "password",
														value: pwForm.newPassword,
														onChange: (e) => setPwForm({
															...pwForm,
															newPassword: e.target.value
														}),
														placeholder: "Min 8 characters",
														className: "w-full h-11 pl-9 pr-10 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm",
														required: true,
														minLength: 8
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setShowNewPw(!showNewPw),
														className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
														children: showNewPw ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4" })
													})
												]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Confirm New Password",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "password",
												value: pwForm.confirmPassword,
												onChange: (e) => setPwForm({
													...pwForm,
													confirmPassword: e.target.value
												}),
												placeholder: "Repeat new password",
												className: "w-full h-11 px-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm",
												required: true
											})
										}),
										pwError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-red-500 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20",
											children: pwError
										}),
										pwSuccess && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-emerald px-3 py-2 rounded-lg bg-emerald/10 border border-emerald/20",
											children: pwSuccess
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											disabled: pwLoading,
											className: "h-10 px-4 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium hover:shadow-glow transition disabled:opacity-60",
											children: pwLoading ? "Updating..." : "Change Password"
										})
									]
								})]
							})
						]
					}),
					tab === "comingSoon" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Coming Soon",
						desc: "Features we're working on",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonItem, {
									icon: Shield,
									title: "Two-Factor Authentication (2FA)",
									description: "We're working on adding 2FA to make your account even more secure."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonItem, {
									icon: Smartphone,
									title: "Device Management",
									description: "View and remove devices that have accessed your account."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonItem, {
									icon: History,
									title: "Login History",
									description: "See where and when you've logged in from."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonItem, {
									icon: FingerprintPattern,
									title: "Biometric Authentication",
									description: "Use Face ID or fingerprint to log in."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonItem, {
									icon: LogOut,
									title: "Session Management",
									description: "Log out from all devices with one click."
								})
							]
						})
					})
				]
			})]
		})
	}) });
}
function ComingSoonItem({ icon: Icon, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-start gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-10 h-10 rounded-lg bg-gradient-brand/20 grid place-items-center shrink-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 text-primary" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-medium text-sm",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted-foreground mt-1",
				children: description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex items-center gap-1 text-[10px] text-emerald font-semibold mt-2",
				children: "🚀 Coming Soon"
			})
		] })]
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
