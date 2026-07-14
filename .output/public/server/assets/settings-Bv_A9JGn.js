import { i as changePassword, n as languages, r as useApp } from "./AppContext-Cyd9VWQY.js";
import { t as AppShell } from "./AppShell-B-zS6ULv.js";
import { t as RequireAuth } from "./RequireAuth-DU5YrG0J.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Bell, CheckCircle2, Eye, EyeOff, Fingerprint, Globe, History, Lock, LogOut, Rocket, Shield, Smartphone, User, Wallet } from "lucide-react";
//#region src/routes/settings.tsx?tsr-split=component
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
	const [tab, setTab] = useState("profile");
	const [saved, setSaved] = useState(false);
	const [profile, setProfile] = useState({
		name: user?.firstName + " " + user?.lastName || "User",
		email: user?.email || ""
	});
	const [prefs, setPrefs] = useState({
		donations: true,
		campaignUpdates: true,
		weeklyDigest: false,
		securityAlerts: true
	});
	const [security, setSecurity] = useState({
		twoFA: true,
		sessionAlerts: true
	});
	const [pwForm, setPwForm] = useState({
		oldPassword: "",
		newPassword: "",
		confirmPassword: ""
	});
	const [showOldPw, setShowOldPw] = useState(false);
	const [showNewPw, setShowNewPw] = useState(false);
	const [pwLoading, setPwLoading] = useState(false);
	const [pwError, setPwError] = useState("");
	const [pwSuccess, setPwSuccess] = useState("");
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
	return /* @__PURE__ */ jsx(RequireAuth, { children: /* @__PURE__ */ jsx(AppShell, {
		title: t("settings"),
		subtitle: t("overview"),
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid lg:grid-cols-[220px,1fr] gap-6",
			children: [/* @__PURE__ */ jsx("nav", {
				className: "glass rounded-2xl p-2 h-fit",
				children: tabs.map((tabItem) => {
					const Icon = tabItem.icon;
					return /* @__PURE__ */ jsxs("button", {
						onClick: () => setTab(tabItem.id),
						className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${tab === tabItem.id ? "bg-sidebar-accent text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`,
						children: [/* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" }), t(tabItem.labelKey)]
					}, tabItem.id);
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "glass rounded-2xl p-6",
				children: [
					tab === "profile" && /* @__PURE__ */ jsxs(Section, {
						title: t("profile"),
						desc: t("overview"),
						children: [
							/* @__PURE__ */ jsx(Field, {
								label: t("fullName", "Full name"),
								children: /* @__PURE__ */ jsx("input", {
									value: profile.name,
									onChange: (e) => setProfile({
										...profile,
										name: e.target.value
									}),
									className: input
								})
							}),
							/* @__PURE__ */ jsx(Field, {
								label: t("email", "Email"),
								children: /* @__PURE__ */ jsx("input", {
									type: "email",
									value: profile.email,
									onChange: (e) => setProfile({
										...profile,
										email: e.target.value
									}),
									className: input
								})
							}),
							/* @__PURE__ */ jsx(SaveBar, {
								onSave: save,
								saved
							})
						]
					}),
					tab === "wallet" && /* @__PURE__ */ jsx(Section, {
						title: t("wallet"),
						desc: t("overview"),
						children: wallet.connected ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
							className: "glass-strong rounded-xl p-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: [
									t("connected"),
									" via ",
									wallet.provider
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-2 font-mono text-sm break-all",
								children: wallet.address
							})]
						}), /* @__PURE__ */ jsx("button", {
							onClick: disconnectWallet,
							className: "h-10 px-4 rounded-lg glass hover:border-white/25 text-sm",
							children: t("disconnectWallet")
						})] }) : /* @__PURE__ */ jsxs("button", {
							onClick: openWalletModal,
							className: "h-10 px-4 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium inline-flex items-center gap-2 hover:shadow-glow transition",
							children: [
								/* @__PURE__ */ jsx(Wallet, { className: "w-4 h-4" }),
								" ",
								t("connectWallet")
							]
						})
					}),
					tab === "notifications" && /* @__PURE__ */ jsxs(Section, {
						title: t("notifications"),
						desc: t("overview"),
						children: [[
							["donations", t("newDonations", "New donations to your campaigns")],
							["campaignUpdates", t("campaignUpdates", "Updates from campaigns you donated to")],
							["weeklyDigest", t("weeklyDigest", "Weekly impact digest")],
							["securityAlerts", t("securityAlerts", "Security & login alerts")]
						].map(([k, label]) => /* @__PURE__ */ jsx(Toggle, {
							label,
							value: prefs[k],
							onChange: (v) => setPrefs({
								...prefs,
								[k]: v
							})
						}, k)), /* @__PURE__ */ jsx(SaveBar, {
							onSave: save,
							saved
						})]
					}),
					tab === "language" && /* @__PURE__ */ jsx(Section, {
						title: t("language"),
						desc: t("overview"),
						children: /* @__PURE__ */ jsx("div", {
							className: "grid sm:grid-cols-2 gap-2",
							children: languages.map((l) => /* @__PURE__ */ jsx("button", {
								onClick: () => setLang(l.code),
								className: `h-11 px-4 rounded-lg border text-sm font-medium transition text-left ${lang === l.code ? "bg-primary/15 border-primary text-primary" : "border-white/10 hover:border-white/25"}`,
								children: l.label
							}, l.code))
						})
					}),
					tab === "security" && /* @__PURE__ */ jsxs(Section, {
						title: t("security"),
						desc: t("overview"),
						children: [
							/* @__PURE__ */ jsx(Toggle, {
								label: t("twoFactor", "Two-factor authentication"),
								value: security.twoFA,
								onChange: (v) => setSecurity({
									...security,
									twoFA: v
								})
							}),
							/* @__PURE__ */ jsx(Toggle, {
								label: t("loginAlerts", "Alert on new device login"),
								value: security.sessionAlerts,
								onChange: (v) => setSecurity({
									...security,
									sessionAlerts: v
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "border-t border-white/10 pt-4 mt-4",
								children: [/* @__PURE__ */ jsx("div", {
									className: "font-display font-semibold mb-4",
									children: "Change Password"
								}), /* @__PURE__ */ jsxs("form", {
									onSubmit: handleChangePassword,
									className: "space-y-3",
									children: [
										/* @__PURE__ */ jsx(Field, {
											label: "Current Password",
											children: /* @__PURE__ */ jsxs("div", {
												className: "relative",
												children: [
													/* @__PURE__ */ jsx(Lock, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
													/* @__PURE__ */ jsx("input", {
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
													/* @__PURE__ */ jsx("button", {
														type: "button",
														onClick: () => setShowOldPw(!showOldPw),
														className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
														children: showOldPw ? /* @__PURE__ */ jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4" })
													})
												]
											})
										}),
										/* @__PURE__ */ jsx(Field, {
											label: "New Password",
											children: /* @__PURE__ */ jsxs("div", {
												className: "relative",
												children: [
													/* @__PURE__ */ jsx(Lock, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
													/* @__PURE__ */ jsx("input", {
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
													/* @__PURE__ */ jsx("button", {
														type: "button",
														onClick: () => setShowNewPw(!showNewPw),
														className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
														children: showNewPw ? /* @__PURE__ */ jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4" })
													})
												]
											})
										}),
										/* @__PURE__ */ jsx(Field, {
											label: "Confirm New Password",
											children: /* @__PURE__ */ jsx("input", {
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
										pwError && /* @__PURE__ */ jsx("div", {
											className: "text-xs text-red-500 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20",
											children: pwError
										}),
										pwSuccess && /* @__PURE__ */ jsx("div", {
											className: "text-xs text-emerald px-3 py-2 rounded-lg bg-emerald/10 border border-emerald/20",
											children: pwSuccess
										}),
										/* @__PURE__ */ jsx("button", {
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
					tab === "comingSoon" && /* @__PURE__ */ jsx(Section, {
						title: "Coming Soon",
						desc: "Features we're working on",
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ jsx(ComingSoonItem, {
									icon: Shield,
									title: "Two-Factor Authentication (2FA)",
									description: "We're working on adding 2FA to make your account even more secure."
								}),
								/* @__PURE__ */ jsx(ComingSoonItem, {
									icon: Smartphone,
									title: "Device Management",
									description: "View and remove devices that have accessed your account."
								}),
								/* @__PURE__ */ jsx(ComingSoonItem, {
									icon: History,
									title: "Login History",
									description: "See where and when you've logged in from."
								}),
								/* @__PURE__ */ jsx(ComingSoonItem, {
									icon: Fingerprint,
									title: "Biometric Authentication",
									description: "Use Face ID or fingerprint to log in."
								}),
								/* @__PURE__ */ jsx(ComingSoonItem, {
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
	return /* @__PURE__ */ jsxs("div", {
		className: "p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-start gap-4",
		children: [/* @__PURE__ */ jsx("div", {
			className: "w-10 h-10 rounded-lg bg-gradient-brand/20 grid place-items-center shrink-0",
			children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-primary" })
		}), /* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsx("div", {
				className: "font-medium text-sm",
				children: title
			}),
			/* @__PURE__ */ jsx("div", {
				className: "text-xs text-muted-foreground mt-1",
				children: description
			}),
			/* @__PURE__ */ jsx("span", {
				className: "inline-flex items-center gap-1 text-[10px] text-emerald font-semibold mt-2",
				children: "🚀 Coming Soon"
			})
		] })]
	});
}
var input = "w-full h-11 px-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm";
function Section({ title, desc, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
			className: "font-display text-lg font-semibold",
			children: title
		}), /* @__PURE__ */ jsx("div", {
			className: "text-xs text-muted-foreground",
			children: desc
		})] }), children]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ jsxs("label", {
		className: "block",
		children: [/* @__PURE__ */ jsx("div", {
			className: "text-xs font-medium text-muted-foreground mb-1.5",
			children: label
		}), children]
	});
}
function Toggle({ label, value, onChange }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between p-3 rounded-lg border border-white/10",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-sm",
			children: label
		}), /* @__PURE__ */ jsx("button", {
			onClick: () => onChange(!value),
			className: `relative w-10 h-6 rounded-full transition ${value ? "bg-gradient-brand" : "bg-white/10"}`,
			"aria-pressed": value,
			children: /* @__PURE__ */ jsx("span", { className: `absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${value ? "translate-x-4" : ""}` })
		})]
	});
}
function SaveBar({ onSave, saved }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-3 pt-2",
		children: [/* @__PURE__ */ jsx("button", {
			onClick: onSave,
			className: "h-10 px-4 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium hover:shadow-glow transition",
			children: "Save changes"
		}), saved && /* @__PURE__ */ jsxs("span", {
			className: "inline-flex items-center gap-1 text-xs text-emerald",
			children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4" }), " Saved"]
		})]
	});
}
//#endregion
export { SettingsPage as component };
