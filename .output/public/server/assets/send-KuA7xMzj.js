import { r as useApp } from "./AppContext-Cyd9VWQY.js";
import { t as AppShell } from "./AppShell-B-zS6ULv.js";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Send, Wallet } from "lucide-react";
//#region src/routes/send.tsx?tsr-split=component
var assets = [
	"XLM",
	"USDC",
	"EURC",
	"BTC"
];
function SendPage() {
	const { wallet, openWalletModal, t } = useApp();
	const nav = useNavigate();
	const [form, setForm] = useState({
		to: "",
		amount: "",
		asset: "XLM",
		memo: ""
	});
	const [sent, setSent] = useState(false);
	const send = (e) => {
		e.preventDefault();
		if (!wallet.connected) return openWalletModal();
		setSent(true);
		setTimeout(() => nav({ to: "/transactions" }), 1400);
	};
	const amount = Number(form.amount) || 0;
	const fee = 1e-5;
	return /* @__PURE__ */ jsx(AppShell, {
		title: t("send"),
		subtitle: t("overview"),
		children: /* @__PURE__ */ jsxs("form", {
			onSubmit: send,
			className: "glass rounded-2xl p-6 max-w-2xl",
			children: [
				/* @__PURE__ */ jsx(Field, {
					label: t("recipientAddress", "Recipient address"),
					children: /* @__PURE__ */ jsx("input", {
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
				/* @__PURE__ */ jsxs("div", {
					className: "grid sm:grid-cols-[1fr,140px] gap-3 mt-4",
					children: [/* @__PURE__ */ jsx(Field, {
						label: t("amount"),
						children: /* @__PURE__ */ jsx("input", {
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
					}), /* @__PURE__ */ jsx(Field, {
						label: t("asset"),
						children: /* @__PURE__ */ jsx("select", {
							value: form.asset,
							onChange: (e) => setForm({
								...form,
								asset: e.target.value
							}),
							className: "w-full h-11 px-3 rounded-lg bg-white/5 border border-white/10 outline-none text-sm",
							children: assets.map((a) => /* @__PURE__ */ jsx("option", { children: a }, a))
						})
					})]
				}),
				/* @__PURE__ */ jsx(Field, {
					label: t("memo", "Memo"),
					className: "mt-4",
					children: /* @__PURE__ */ jsx("input", {
						value: form.memo,
						onChange: (e) => setForm({
							...form,
							memo: e.target.value
						}),
						placeholder: "Donation, invoice ID, etc.",
						className: "w-full h-11 px-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm"
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ jsx(Row, {
							label: t("amount"),
							value: `${amount} ${form.asset}`
						}),
						/* @__PURE__ */ jsx(Row, {
							label: t("networkFee", "Network fee"),
							value: `${fee} XLM`
						}),
						/* @__PURE__ */ jsx(Row, {
							label: t("total"),
							value: `${amount} ${form.asset} + ${fee} XLM`,
							bold: true
						})
					]
				}),
				/* @__PURE__ */ jsxs("button", {
					type: "submit",
					disabled: sent,
					className: "mt-6 w-full h-12 rounded-xl bg-gradient-brand text-primary-foreground font-medium inline-flex items-center justify-center gap-2 hover:shadow-glow transition disabled:opacity-60",
					children: [sent ? t("broadcasting", "Broadcasting…") : wallet.connected ? /* @__PURE__ */ jsxs(Fragment, { children: ["Send transaction ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsx(Wallet, { className: "w-4 h-4" }),
						" ",
						t("connectWallet")
					] }), wallet.connected && !sent && /* @__PURE__ */ jsx(Send, { className: "w-4 h-4 hidden" })]
				})
			]
		})
	});
}
function Field({ label, children, className = "" }) {
	return /* @__PURE__ */ jsxs("label", {
		className: `block ${className}`,
		children: [/* @__PURE__ */ jsx("div", {
			className: "text-xs font-medium text-muted-foreground mb-1.5",
			children: label
		}), children]
	});
}
function Row({ label, value, bold }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("span", {
			className: bold ? "font-semibold" : "",
			children: value
		})]
	});
}
//#endregion
export { SendPage as component };
