import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as useApp } from "./AppContext-uQY-TZ3c.mjs";
import { I as Copy, f as Share2, r as Wallet } from "../_libs/lucide-react.mjs";
import { t as require_lib } from "../_libs/qrcode.mjs";
import { t as AppShell } from "./AppShell-DnZRZZms.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/receive-B-14klOm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = /* @__PURE__ */ __toESM(require_lib());
function ReceivePage() {
	const { wallet, openWalletModal, t } = useApp();
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [qrSvg, setQrSvg] = (0, import_react.useState)("");
	const address = wallet.address ?? "GA…CONNECT_WALLET_TO_VIEW";
	(0, import_react.useEffect)(() => {
		if (!wallet.address) {
			setQrSvg("");
			return;
		}
		import_lib.toString(`stellar:${wallet.address}?amount=`, {
			type: "svg",
			margin: 1,
			width: 400,
			color: {
				dark: "#0b1220",
				light: "#ffffff"
			}
		}).then(setQrSvg).catch(() => setQrSvg(""));
	}, [wallet.address]);
	const copy = () => {
		navigator.clipboard?.writeText(address);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: t("receive"),
		subtitle: t("overview"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-md mx-auto",
			children: !wallet.connected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-2xl p-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-16 h-16 rounded-2xl bg-gradient-brand grid place-items-center mx-auto mb-4 shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "w-8 h-8 text-primary-foreground" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-xl font-semibold",
						children: t("connectWallet")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-2 mb-6",
						children: "Connect your wallet to receive funds"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: openWalletModal,
						className: "h-11 px-6 rounded-xl bg-gradient-brand text-primary-foreground font-medium hover:shadow-glow transition inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "w-4 h-4" }), " Connect Wallet"]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-2xl p-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center mb-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-white p-3 rounded-xl shadow-lg",
							children: qrSvg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-lg",
								style: {
									width: 200,
									height: 200
								},
								dangerouslySetInnerHTML: { __html: qrSvg }
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-[200px] h-[200px] rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-xs",
								children: "Loading..."
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium",
						children: "Your Wallet Address"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate flex-1",
							children: address
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: copy,
							className: "shrink-0 px-3 py-1.5 rounded-lg bg-gradient-brand text-primary-foreground text-[11px] font-medium inline-flex items-center gap-1 hover:shadow-glow transition",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3 h-3" }),
								" ",
								copied ? "Copied!" : "Copy"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: copy,
							className: "h-11 rounded-xl bg-gradient-brand text-primary-foreground text-sm font-medium inline-flex items-center justify-center gap-2 hover:shadow-glow transition",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-4 h-4" }),
								" ",
								copied ? t("copied") : t("copy")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "h-11 rounded-xl glass hover:border-white/25 text-sm font-medium inline-flex items-center justify-center gap-2 transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "w-4 h-4" }), " Share"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground mt-4",
						children: t("scanToSend")
					})
				]
			})
		})
	});
}
//#endregion
export { ReceivePage as component };
