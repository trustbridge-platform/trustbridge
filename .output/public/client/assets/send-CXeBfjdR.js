import { S as ArrowRight, a as Wallet } from "./DonateModal-DUxy_P0-.js";
import { _ as __toESM, h as require_react, m as require_jsx_runtime, n as useApp, u as useNavigate } from "./index-BgNBbm5u.js";
import { t as Send } from "./send-B6at7Lo4.js";
import { t as AppShell } from "./AppShell-BAgAe4_0.js";
//#region src/routes/send.tsx?tsr-split=component
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var assets = [
	"XLM",
	"USDC",
	"EURC",
	"BTC"
];
function SendPage() {
	const { wallet, openWalletModal, t } = useApp();
	const nav = useNavigate();
	const [form, setForm] = (0, import_react.useState)({
		to: "",
		amount: "",
		asset: "XLM",
		memo: ""
	});
	const [sent, setSent] = (0, import_react.useState)(false);
	const send = (e) => {
		e.preventDefault();
		if (!wallet.connected) return openWalletModal();
		setSent(true);
		setTimeout(() => nav({ to: "/transactions" }), 1400);
	};
	const amount = Number(form.amount) || 0;
	const fee = 1e-5;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: t("send"),
		subtitle: t("overview"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: send,
			className: "glass rounded-2xl p-6 max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t("recipientAddress", "Recipient address"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: form.to,
						onChange: (e) => setForm({
							...form,
							to: e.target.value
						}),
						placeholder: "G…",
						className: "w-full h-11 px-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm font-mono",
						required: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-[1fr,140px] gap-3 mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("amount"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							value: form.amount,
							onChange: (e) => setForm({
								...form,
								amount: e.target.value
							}),
							placeholder: "0.00",
							className: "w-full h-11 px-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm",
							required: true,
							min: "0",
							step: "0.0001"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("asset"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: form.asset,
							onChange: (e) => setForm({
								...form,
								asset: e.target.value
							}),
							className: "w-full h-11 px-3 rounded-lg bg-white/5 border border-white/10 outline-none text-sm",
							children: assets.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: a }, a))
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t("memo", "Memo"),
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: form.memo,
						onChange: (e) => setForm({
							...form,
							memo: e.target.value
						}),
						placeholder: "Donation, invoice ID, etc.",
						className: "w-full h-11 px-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: t("amount"),
							value: `${amount} ${form.asset}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: t("networkFee", "Network fee"),
							value: `${fee} XLM`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: t("total"),
							value: `${amount} ${form.asset} + ${fee} XLM`,
							bold: true
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: sent,
					className: "mt-6 w-full h-12 rounded-xl bg-gradient-brand text-primary-foreground font-medium inline-flex items-center justify-center gap-2 hover:shadow-glow transition disabled:opacity-60",
					children: [sent ? t("broadcasting", "Broadcasting…") : wallet.connected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Send transaction ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "w-4 h-4" }),
						" ",
						t("connectWallet")
					] }), wallet.connected && !sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4 hidden" })]
				})
			]
		})
	});
}
function Field({ label, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `block ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs font-medium text-muted-foreground mb-1.5",
			children: label
		}), children]
	});
}
function Row({ label, value, bold }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: bold ? "font-semibold" : "",
			children: value
		})]
	});
}
//#endregion
export { SendPage as component };
