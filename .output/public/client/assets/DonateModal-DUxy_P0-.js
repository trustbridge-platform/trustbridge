import { _ as __toESM, d as useStructuralSharing, f as useStore, g as __commonJSMin, h as require_react, l as Link, m as require_jsx_runtime, n as useApp, p as useRouter, s as logout, t as languages } from "./index-BgNBbm5u.js";
import { n as createLucideIcon, t as Shield } from "./shield-D90MvTBE.js";
import { t as UserPlus } from "./user-plus-ENmlsMbz.js";
//#region node_modules/@tanstack/react-router/dist/esm/useRouterState.js
/**
* Subscribe to the router's state store with optional selection and
* structural sharing for render optimization.
*
* Options:
* - `select`: Project the full router state to a derived slice
* - `structuralSharing`: Replace-equal semantics for stable references
* - `router`: Read state from a specific router instance instead of context
*
* @returns The selected router state (or the full state by default).
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useRouterStateHook
*/
function useRouterState(opts) {
	const contextRouter = useRouter({ warn: opts?.router === void 0 });
	const router = opts?.router || contextRouter;
	return useStore(router.stores.__store, useStructuralSharing(opts, router));
}
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowLeftRight = createLucideIcon("arrow-left-right", [
	["path", {
		d: "M8 3 4 7l4 4",
		key: "9rb6wj"
	}],
	["path", {
		d: "M4 7h16",
		key: "6tx8e3"
	}],
	["path", {
		d: "m16 21 4-4-4-4",
		key: "siv7j2"
	}],
	["path", {
		d: "M20 17H4",
		key: "h6l3hr"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowRight = createLucideIcon("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Bell = createLucideIcon("bell", [["path", {
	d: "M10.268 21a2 2 0 0 0 3.464 0",
	key: "vwvbt9"
}], ["path", {
	d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
	key: "11g9vi"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Bug = createLucideIcon("bug", [
	["path", {
		d: "M12 20v-9",
		key: "1qisl0"
	}],
	["path", {
		d: "M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",
		key: "uouzyp"
	}],
	["path", {
		d: "M14.12 3.88 16 2",
		key: "qol33r"
	}],
	["path", {
		d: "M21 21a4 4 0 0 0-3.81-4",
		key: "1b0z45"
	}],
	["path", {
		d: "M21 5a4 4 0 0 1-3.55 3.97",
		key: "5cxbf6"
	}],
	["path", {
		d: "M22 13h-4",
		key: "1jl80f"
	}],
	["path", {
		d: "M3 21a4 4 0 0 1 3.81-4",
		key: "1fjd4g"
	}],
	["path", {
		d: "M3 5a4 4 0 0 0 3.55 3.97",
		key: "1d7oge"
	}],
	["path", {
		d: "M6 13H2",
		key: "82j7cp"
	}],
	["path", {
		d: "m8 2 1.88 1.88",
		key: "fmnt4t"
	}],
	["path", {
		d: "M9 7.13V6a3 3 0 1 1 6 0v1.13",
		key: "1vgav8"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChartColumn = createLucideIcon("chart-column", [
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}],
	["path", {
		d: "M18 17V9",
		key: "2bz60n"
	}],
	["path", {
		d: "M13 17V5",
		key: "1frdt8"
	}],
	["path", {
		d: "M8 17v-3",
		key: "17ska0"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronLeft = createLucideIcon("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronRight = createLucideIcon("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleCheck = createLucideIcon("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CirclePlus = createLucideIcon("circle-plus", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M8 12h8",
		key: "1wcyev"
	}],
	["path", {
		d: "M12 8v8",
		key: "napkw2"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleX = createLucideIcon("circle-x", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Copy = createLucideIcon("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ExternalLink = createLucideIcon("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Globe = createLucideIcon("globe", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
		key: "13o1zl"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Heart = createLucideIcon("heart", [["path", {
	d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
	key: "mvr1a0"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LayoutDashboard = createLucideIcon("layout-dashboard", [
	["rect", {
		width: "7",
		height: "9",
		x: "3",
		y: "3",
		rx: "1",
		key: "10lvy0"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "14",
		y: "3",
		rx: "1",
		key: "16une8"
	}],
	["rect", {
		width: "7",
		height: "9",
		x: "14",
		y: "12",
		rx: "1",
		key: "1hutg5"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "3",
		y: "16",
		rx: "1",
		key: "ldoo1y"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Lightbulb = createLucideIcon("lightbulb", [
	["path", {
		d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
		key: "1gvzjb"
	}],
	["path", {
		d: "M9 18h6",
		key: "x1upvd"
	}],
	["path", {
		d: "M10 22h4",
		key: "ceow96"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LoaderCircle = createLucideIcon("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LogIn = createLucideIcon("log-in", [
	["path", {
		d: "m10 17 5-5-5-5",
		key: "1bsop3"
	}],
	["path", {
		d: "M15 12H3",
		key: "6jk70r"
	}],
	["path", {
		d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
		key: "u53s6r"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LogOut = createLucideIcon("log-out", [
	["path", {
		d: "m16 17 5-5-5-5",
		key: "1bji2h"
	}],
	["path", {
		d: "M21 12H9",
		key: "dn1m92"
	}],
	["path", {
		d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
		key: "1uf3rs"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Megaphone = createLucideIcon("megaphone", [
	["path", {
		d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
		key: "q8bfy3"
	}],
	["path", {
		d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",
		key: "1853fq"
	}],
	["path", {
		d: "M8 6v8",
		key: "15ugcq"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MessageSquare = createLucideIcon("message-square", [["path", {
	d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
	key: "18887p"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Pin = createLucideIcon("pin", [["path", {
	d: "M12 17v5",
	key: "bb1du9"
}], ["path", {
	d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
	key: "1nkz8b"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var QrCode = createLucideIcon("qr-code", [
	["rect", {
		width: "5",
		height: "5",
		x: "3",
		y: "3",
		rx: "1",
		key: "1tu5fj"
	}],
	["rect", {
		width: "5",
		height: "5",
		x: "16",
		y: "3",
		rx: "1",
		key: "1v8r4q"
	}],
	["rect", {
		width: "5",
		height: "5",
		x: "3",
		y: "16",
		rx: "1",
		key: "1x03jg"
	}],
	["path", {
		d: "M21 16h-3a2 2 0 0 0-2 2v3",
		key: "177gqh"
	}],
	["path", {
		d: "M21 21v.01",
		key: "ents32"
	}],
	["path", {
		d: "M12 7v3a2 2 0 0 1-2 2H7",
		key: "8crl2c"
	}],
	["path", {
		d: "M3 12h.01",
		key: "nlz23k"
	}],
	["path", {
		d: "M12 3h.01",
		key: "n36tog"
	}],
	["path", {
		d: "M12 16v.01",
		key: "133mhm"
	}],
	["path", {
		d: "M16 12h1",
		key: "1slzba"
	}],
	["path", {
		d: "M21 12v.01",
		key: "1lwtk9"
	}],
	["path", {
		d: "M12 21v-1",
		key: "1880an"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Settings = createLucideIcon("settings", [["path", {
	d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
	key: "1i5ecw"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Star = createLucideIcon("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var User = createLucideIcon("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Users = createLucideIcon("users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["path", {
		d: "M16 3.128a4 4 0 0 1 0 7.744",
		key: "16gr8j"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Wallet = createLucideIcon("wallet", [["path", {
	d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
	key: "18etb6"
}], ["path", {
	d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",
	key: "xoc0q4"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region src/components/Sidebar.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var authedNavItems = [
	{
		icon: LayoutDashboard,
		labelKey: "dashboard",
		to: "/dashboard"
	},
	{
		icon: Megaphone,
		labelKey: "campaigns",
		to: "/campaigns"
	},
	{
		icon: ArrowLeftRight,
		labelKey: "transactions",
		to: "/transactions"
	},
	{
		icon: ChartColumn,
		labelKey: "analytics",
		to: "/analytics"
	},
	{
		icon: CirclePlus,
		labelKey: "createCampaign",
		to: "/create-campaign"
	},
	{
		icon: Settings,
		labelKey: "settings",
		to: "/settings"
	},
	{
		icon: User,
		labelKey: "profile",
		to: "/profile"
	}
];
var guestNavItems = [{
	icon: LogIn,
	label: "Sign In",
	to: "/login"
}, {
	icon: UserPlus,
	label: "Sign Up",
	to: "/signup"
}];
var communityChannels = [
	{
		icon: Bell,
		label: "Announcements",
		to: "/community/announcements"
	},
	{
		icon: MessageSquare,
		label: "General Discussion",
		to: "/community/general"
	},
	{
		icon: Megaphone,
		label: "Campaign Updates",
		to: "/community/updates"
	},
	{
		icon: Bug,
		label: "Bug Reports",
		to: "/community/bugs"
	},
	{
		icon: Lightbulb,
		label: "Feature Requests",
		to: "/community/features"
	},
	{
		icon: Users,
		label: "Support Tickets",
		to: "/community/support"
	}
];
var pinnedItems = [{
	icon: Star,
	label: "Trending Campaigns",
	to: "/campaigns?sort=trending"
}, {
	icon: Shield,
	label: "Security Center",
	to: "/settings?tab=security"
}];
function Sidebar() {
	const { collapsed, toggleCollapsed, lang, setLang, wallet, openWalletModal, disconnectWallet, t } = useApp();
	const [langOpen, setLangOpen] = (0, import_react.useState)(false);
	const [communityOpen, setCommunityOpen] = (0, import_react.useState)(true);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const app = useApp();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: `fixed inset-y-0 left-0 z-40 flex flex-col bg-sidebar border-r border-sidebar-border transition-[width] duration-300 ${collapsed ? "w-[72px]" : "w-[260px]"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "h-16 flex items-center px-4 border-b border-sidebar-border shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-9 h-9 rounded-lg bg-gradient-brand grid place-items-center shrink-0 shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
							className: "w-5 h-5 text-primary-foreground",
							strokeWidth: 2.5
						})
					}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold text-sidebar-foreground leading-tight",
							children: "TrustBridge"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-wider text-muted-foreground",
							children: "On Stellar"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: toggleCollapsed,
					className: "ml-auto w-8 h-8 grid place-items-center rounded-md hover:bg-sidebar-accent text-muted-foreground hover:text-sidebar-foreground transition",
					"aria-label": "Toggle sidebar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: `w-4 h-4 transition-transform ${collapsed ? "rotate-180" : ""}` })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex-1 overflow-y-auto py-4 px-3 space-y-1",
				children: [
					(app.isAuthenticated ? authedNavItems : guestNavItems).map((item) => {
						const Icon = item.icon;
						const isActive = pathname === item.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition relative ${isActive ? "bg-sidebar-accent text-sidebar-foreground" : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"}`,
							title: collapsed ? item.label || item.labelKey : void 0,
							children: [
								isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r bg-gradient-brand" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-[18px] h-[18px] shrink-0" }),
								!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: item.label || t(item.labelKey)
								})
							]
						}, item.to);
					}),
					!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-sidebar-border my-2" }),
					app.isAuthenticated && !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 px-3 py-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, { className: "w-3 h-3 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-wider text-muted-foreground font-medium",
							children: "Pinned"
						})]
					}), pinnedItems.map((item) => {
						const Icon = item.icon;
						const isActive = pathname === item.to?.split("?")[0];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: `w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition ${isActive ? "bg-sidebar-accent text-sidebar-foreground" : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: item.label
							})]
						}, item.label);
					})] }),
					app.isAuthenticated && !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-sidebar-border my-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setCommunityOpen((v) => !v),
							className: "w-full flex items-center gap-2 px-3 py-1.5 text-[10px] uppercase tracking-wider text-muted-foreground font-medium hover:text-foreground transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: `w-3 h-3 transition-transform ${communityOpen ? "rotate-90" : ""}` }), "Community"]
						}),
						communityOpen && communityChannels.map((item) => {
							const Icon = item.icon;
							const isActive = pathname === item.to;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: `w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition ${isActive ? "bg-sidebar-accent text-sidebar-foreground" : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: item.label
								})]
							}, item.label);
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-sidebar-border p-3 space-y-2 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setLangOpen((v) => !v),
						disabled: !app.isAuthenticated,
						className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition disabled:opacity-50",
						title: collapsed ? "Language" : void 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-[18px] h-[18px] shrink-0" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 text-left",
							children: languages.find((l) => l.code === lang)?.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `w-4 h-4 transition ${langOpen ? "rotate-180" : ""}` })] })]
					}), langOpen && !collapsed && app.isAuthenticated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-full left-0 right-0 mb-2 glass-strong rounded-lg p-1 shadow-elegant z-50",
						children: languages.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setLang(l.code);
								setLangOpen(false);
							},
							className: `w-full text-left px-3 py-2 rounded-md text-sm transition ${lang === l.code ? "bg-primary/15 text-primary" : "text-foreground hover:bg-white/5"}`,
							children: l.label
						}, l.code))
					})]
				}), app.isAuthenticated ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: async () => {
						logout();
						app.setUser(null);
						disconnectWallet();
					},
					className: `w-full flex items-center justify-center gap-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 font-medium text-sm transition h-10 ${collapsed ? "px-0" : "px-3"}`,
					title: collapsed ? "Logout" : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-[18px] h-[18px]" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Logout" })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/login",
						className: `w-full flex items-center justify-center gap-2 rounded-lg glass hover:border-white/25 text-foreground font-medium text-sm transition h-10 ${collapsed ? "px-0" : "px-3"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "w-[18px] h-[18px]" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sign In" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/signup",
						className: `w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-brand text-primary-foreground font-medium text-sm transition hover:shadow-glow h-10 ${collapsed ? "px-0" : "px-4"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "w-[18px] h-[18px]" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sign Up" })]
					})]
				})]
			})
		]
	});
}
//#endregion
//#region node_modules/qrcode/lib/can-promise.js
var require_can_promise = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function() {
		return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/utils.js
var require_utils$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var toSJISFunction;
	var CODEWORDS_COUNT = [
		0,
		26,
		44,
		70,
		100,
		134,
		172,
		196,
		242,
		292,
		346,
		404,
		466,
		532,
		581,
		655,
		733,
		815,
		901,
		991,
		1085,
		1156,
		1258,
		1364,
		1474,
		1588,
		1706,
		1828,
		1921,
		2051,
		2185,
		2323,
		2465,
		2611,
		2761,
		2876,
		3034,
		3196,
		3362,
		3532,
		3706
	];
	/**
	* Returns the QR Code size for the specified version
	*
	* @param  {Number} version QR Code version
	* @return {Number}         size of QR code
	*/
	exports.getSymbolSize = function getSymbolSize(version) {
		if (!version) throw new Error("\"version\" cannot be null or undefined");
		if (version < 1 || version > 40) throw new Error("\"version\" should be in range from 1 to 40");
		return version * 4 + 17;
	};
	/**
	* Returns the total number of codewords used to store data and EC information.
	*
	* @param  {Number} version QR Code version
	* @return {Number}         Data length in bits
	*/
	exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
		return CODEWORDS_COUNT[version];
	};
	/**
	* Encode data with Bose-Chaudhuri-Hocquenghem
	*
	* @param  {Number} data Value to encode
	* @return {Number}      Encoded value
	*/
	exports.getBCHDigit = function(data) {
		let digit = 0;
		while (data !== 0) {
			digit++;
			data >>>= 1;
		}
		return digit;
	};
	exports.setToSJISFunction = function setToSJISFunction(f) {
		if (typeof f !== "function") throw new Error("\"toSJISFunc\" is not a valid function.");
		toSJISFunction = f;
	};
	exports.isKanjiModeEnabled = function() {
		return typeof toSJISFunction !== "undefined";
	};
	exports.toSJIS = function toSJIS(kanji) {
		return toSJISFunction(kanji);
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/error-correction-level.js
var require_error_correction_level = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.L = { bit: 1 };
	exports.M = { bit: 0 };
	exports.Q = { bit: 3 };
	exports.H = { bit: 2 };
	function fromString(string) {
		if (typeof string !== "string") throw new Error("Param is not a string");
		switch (string.toLowerCase()) {
			case "l":
			case "low": return exports.L;
			case "m":
			case "medium": return exports.M;
			case "q":
			case "quartile": return exports.Q;
			case "h":
			case "high": return exports.H;
			default: throw new Error("Unknown EC Level: " + string);
		}
	}
	exports.isValid = function isValid(level) {
		return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
	};
	exports.from = function from(value, defaultValue) {
		if (exports.isValid(value)) return value;
		try {
			return fromString(value);
		} catch (e) {
			return defaultValue;
		}
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/bit-buffer.js
var require_bit_buffer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function BitBuffer() {
		this.buffer = [];
		this.length = 0;
	}
	BitBuffer.prototype = {
		get: function(index) {
			const bufIndex = Math.floor(index / 8);
			return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
		},
		put: function(num, length) {
			for (let i = 0; i < length; i++) this.putBit((num >>> length - i - 1 & 1) === 1);
		},
		getLengthInBits: function() {
			return this.length;
		},
		putBit: function(bit) {
			const bufIndex = Math.floor(this.length / 8);
			if (this.buffer.length <= bufIndex) this.buffer.push(0);
			if (bit) this.buffer[bufIndex] |= 128 >>> this.length % 8;
			this.length++;
		}
	};
	module.exports = BitBuffer;
}));
//#endregion
//#region node_modules/qrcode/lib/core/bit-matrix.js
var require_bit_matrix = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Helper class to handle QR Code symbol modules
	*
	* @param {Number} size Symbol size
	*/
	function BitMatrix(size) {
		if (!size || size < 1) throw new Error("BitMatrix size must be defined and greater than 0");
		this.size = size;
		this.data = new Uint8Array(size * size);
		this.reservedBit = new Uint8Array(size * size);
	}
	/**
	* Set bit value at specified location
	* If reserved flag is set, this bit will be ignored during masking process
	*
	* @param {Number}  row
	* @param {Number}  col
	* @param {Boolean} value
	* @param {Boolean} reserved
	*/
	BitMatrix.prototype.set = function(row, col, value, reserved) {
		const index = row * this.size + col;
		this.data[index] = value;
		if (reserved) this.reservedBit[index] = true;
	};
	/**
	* Returns bit value at specified location
	*
	* @param  {Number}  row
	* @param  {Number}  col
	* @return {Boolean}
	*/
	BitMatrix.prototype.get = function(row, col) {
		return this.data[row * this.size + col];
	};
	/**
	* Applies xor operator at specified location
	* (used during masking process)
	*
	* @param {Number}  row
	* @param {Number}  col
	* @param {Boolean} value
	*/
	BitMatrix.prototype.xor = function(row, col, value) {
		this.data[row * this.size + col] ^= value;
	};
	/**
	* Check if bit at specified location is reserved
	*
	* @param {Number}   row
	* @param {Number}   col
	* @return {Boolean}
	*/
	BitMatrix.prototype.isReserved = function(row, col) {
		return this.reservedBit[row * this.size + col];
	};
	module.exports = BitMatrix;
}));
//#endregion
//#region node_modules/qrcode/lib/core/alignment-pattern.js
var require_alignment_pattern = /* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* Alignment pattern are fixed reference pattern in defined positions
	* in a matrix symbology, which enables the decode software to re-synchronise
	* the coordinate mapping of the image modules in the event of moderate amounts
	* of distortion of the image.
	*
	* Alignment patterns are present only in QR Code symbols of version 2 or larger
	* and their number depends on the symbol version.
	*/
	var getSymbolSize = require_utils$1().getSymbolSize;
	/**
	* Calculate the row/column coordinates of the center module of each alignment pattern
	* for the specified QR Code version.
	*
	* The alignment patterns are positioned symmetrically on either side of the diagonal
	* running from the top left corner of the symbol to the bottom right corner.
	*
	* Since positions are simmetrical only half of the coordinates are returned.
	* Each item of the array will represent in turn the x and y coordinate.
	* @see {@link getPositions}
	*
	* @param  {Number} version QR Code version
	* @return {Array}          Array of coordinate
	*/
	exports.getRowColCoords = function getRowColCoords(version) {
		if (version === 1) return [];
		const posCount = Math.floor(version / 7) + 2;
		const size = getSymbolSize(version);
		const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
		const positions = [size - 7];
		for (let i = 1; i < posCount - 1; i++) positions[i] = positions[i - 1] - intervals;
		positions.push(6);
		return positions.reverse();
	};
	/**
	* Returns an array containing the positions of each alignment pattern.
	* Each array's element represent the center point of the pattern as (x, y) coordinates
	*
	* Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
	* and filtering out the items that overlaps with finder pattern
	*
	* @example
	* For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
	* The alignment patterns, therefore, are to be centered on (row, column)
	* positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
	* Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
	* and are not therefore used for alignment patterns.
	*
	* let pos = getPositions(7)
	* // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
	*
	* @param  {Number} version QR Code version
	* @return {Array}          Array of coordinates
	*/
	exports.getPositions = function getPositions(version) {
		const coords = [];
		const pos = exports.getRowColCoords(version);
		const posLength = pos.length;
		for (let i = 0; i < posLength; i++) for (let j = 0; j < posLength; j++) {
			if (i === 0 && j === 0 || i === 0 && j === posLength - 1 || i === posLength - 1 && j === 0) continue;
			coords.push([pos[i], pos[j]]);
		}
		return coords;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/finder-pattern.js
var require_finder_pattern = /* @__PURE__ */ __commonJSMin(((exports) => {
	var getSymbolSize = require_utils$1().getSymbolSize;
	var FINDER_PATTERN_SIZE = 7;
	/**
	* Returns an array containing the positions of each finder pattern.
	* Each array's element represent the top-left point of the pattern as (x, y) coordinates
	*
	* @param  {Number} version QR Code version
	* @return {Array}          Array of coordinates
	*/
	exports.getPositions = function getPositions(version) {
		const size = getSymbolSize(version);
		return [
			[0, 0],
			[size - FINDER_PATTERN_SIZE, 0],
			[0, size - FINDER_PATTERN_SIZE]
		];
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/mask-pattern.js
var require_mask_pattern = /* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* Data mask pattern reference
	* @type {Object}
	*/
	exports.Patterns = {
		PATTERN000: 0,
		PATTERN001: 1,
		PATTERN010: 2,
		PATTERN011: 3,
		PATTERN100: 4,
		PATTERN101: 5,
		PATTERN110: 6,
		PATTERN111: 7
	};
	/**
	* Weighted penalty scores for the undesirable features
	* @type {Object}
	*/
	var PenaltyScores = {
		N1: 3,
		N2: 3,
		N3: 40,
		N4: 10
	};
	/**
	* Check if mask pattern value is valid
	*
	* @param  {Number}  mask    Mask pattern
	* @return {Boolean}         true if valid, false otherwise
	*/
	exports.isValid = function isValid(mask) {
		return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
	};
	/**
	* Returns mask pattern from a value.
	* If value is not valid, returns undefined
	*
	* @param  {Number|String} value        Mask pattern value
	* @return {Number}                     Valid mask pattern or undefined
	*/
	exports.from = function from(value) {
		return exports.isValid(value) ? parseInt(value, 10) : void 0;
	};
	/**
	* Find adjacent modules in row/column with the same color
	* and assign a penalty value.
	*
	* Points: N1 + i
	* i is the amount by which the number of adjacent modules of the same color exceeds 5
	*/
	exports.getPenaltyN1 = function getPenaltyN1(data) {
		const size = data.size;
		let points = 0;
		let sameCountCol = 0;
		let sameCountRow = 0;
		let lastCol = null;
		let lastRow = null;
		for (let row = 0; row < size; row++) {
			sameCountCol = sameCountRow = 0;
			lastCol = lastRow = null;
			for (let col = 0; col < size; col++) {
				let module$1 = data.get(row, col);
				if (module$1 === lastCol) sameCountCol++;
				else {
					if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
					lastCol = module$1;
					sameCountCol = 1;
				}
				module$1 = data.get(col, row);
				if (module$1 === lastRow) sameCountRow++;
				else {
					if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
					lastRow = module$1;
					sameCountRow = 1;
				}
			}
			if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
			if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
		}
		return points;
	};
	/**
	* Find 2x2 blocks with the same color and assign a penalty value
	*
	* Points: N2 * (m - 1) * (n - 1)
	*/
	exports.getPenaltyN2 = function getPenaltyN2(data) {
		const size = data.size;
		let points = 0;
		for (let row = 0; row < size - 1; row++) for (let col = 0; col < size - 1; col++) {
			const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
			if (last === 4 || last === 0) points++;
		}
		return points * PenaltyScores.N2;
	};
	/**
	* Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
	* preceded or followed by light area 4 modules wide
	*
	* Points: N3 * number of pattern found
	*/
	exports.getPenaltyN3 = function getPenaltyN3(data) {
		const size = data.size;
		let points = 0;
		let bitsCol = 0;
		let bitsRow = 0;
		for (let row = 0; row < size; row++) {
			bitsCol = bitsRow = 0;
			for (let col = 0; col < size; col++) {
				bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
				if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
				bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
				if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
			}
		}
		return points * PenaltyScores.N3;
	};
	/**
	* Calculate proportion of dark modules in entire symbol
	*
	* Points: N4 * k
	*
	* k is the rating of the deviation of the proportion of dark modules
	* in the symbol from 50% in steps of 5%
	*/
	exports.getPenaltyN4 = function getPenaltyN4(data) {
		let darkCount = 0;
		const modulesCount = data.data.length;
		for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
		return Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10) * PenaltyScores.N4;
	};
	/**
	* Return mask value at given position
	*
	* @param  {Number} maskPattern Pattern reference value
	* @param  {Number} i           Row
	* @param  {Number} j           Column
	* @return {Boolean}            Mask value
	*/
	function getMaskAt(maskPattern, i, j) {
		switch (maskPattern) {
			case exports.Patterns.PATTERN000: return (i + j) % 2 === 0;
			case exports.Patterns.PATTERN001: return i % 2 === 0;
			case exports.Patterns.PATTERN010: return j % 3 === 0;
			case exports.Patterns.PATTERN011: return (i + j) % 3 === 0;
			case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
			case exports.Patterns.PATTERN101: return i * j % 2 + i * j % 3 === 0;
			case exports.Patterns.PATTERN110: return (i * j % 2 + i * j % 3) % 2 === 0;
			case exports.Patterns.PATTERN111: return (i * j % 3 + (i + j) % 2) % 2 === 0;
			default: throw new Error("bad maskPattern:" + maskPattern);
		}
	}
	/**
	* Apply a mask pattern to a BitMatrix
	*
	* @param  {Number}    pattern Pattern reference number
	* @param  {BitMatrix} data    BitMatrix data
	*/
	exports.applyMask = function applyMask(pattern, data) {
		const size = data.size;
		for (let col = 0; col < size; col++) for (let row = 0; row < size; row++) {
			if (data.isReserved(row, col)) continue;
			data.xor(row, col, getMaskAt(pattern, row, col));
		}
	};
	/**
	* Returns the best mask pattern for data
	*
	* @param  {BitMatrix} data
	* @return {Number} Mask pattern reference number
	*/
	exports.getBestMask = function getBestMask(data, setupFormatFunc) {
		const numPatterns = Object.keys(exports.Patterns).length;
		let bestPattern = 0;
		let lowerPenalty = Infinity;
		for (let p = 0; p < numPatterns; p++) {
			setupFormatFunc(p);
			exports.applyMask(p, data);
			const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
			exports.applyMask(p, data);
			if (penalty < lowerPenalty) {
				lowerPenalty = penalty;
				bestPattern = p;
			}
		}
		return bestPattern;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/error-correction-code.js
var require_error_correction_code = /* @__PURE__ */ __commonJSMin(((exports) => {
	var ECLevel = require_error_correction_level();
	var EC_BLOCKS_TABLE = [
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		2,
		2,
		1,
		2,
		2,
		4,
		1,
		2,
		4,
		4,
		2,
		4,
		4,
		4,
		2,
		4,
		6,
		5,
		2,
		4,
		6,
		6,
		2,
		5,
		8,
		8,
		4,
		5,
		8,
		8,
		4,
		5,
		8,
		11,
		4,
		8,
		10,
		11,
		4,
		9,
		12,
		16,
		4,
		9,
		16,
		16,
		6,
		10,
		12,
		18,
		6,
		10,
		17,
		16,
		6,
		11,
		16,
		19,
		6,
		13,
		18,
		21,
		7,
		14,
		21,
		25,
		8,
		16,
		20,
		25,
		8,
		17,
		23,
		25,
		9,
		17,
		23,
		34,
		9,
		18,
		25,
		30,
		10,
		20,
		27,
		32,
		12,
		21,
		29,
		35,
		12,
		23,
		34,
		37,
		12,
		25,
		34,
		40,
		13,
		26,
		35,
		42,
		14,
		28,
		38,
		45,
		15,
		29,
		40,
		48,
		16,
		31,
		43,
		51,
		17,
		33,
		45,
		54,
		18,
		35,
		48,
		57,
		19,
		37,
		51,
		60,
		19,
		38,
		53,
		63,
		20,
		40,
		56,
		66,
		21,
		43,
		59,
		70,
		22,
		45,
		62,
		74,
		24,
		47,
		65,
		77,
		25,
		49,
		68,
		81
	];
	var EC_CODEWORDS_TABLE = [
		7,
		10,
		13,
		17,
		10,
		16,
		22,
		28,
		15,
		26,
		36,
		44,
		20,
		36,
		52,
		64,
		26,
		48,
		72,
		88,
		36,
		64,
		96,
		112,
		40,
		72,
		108,
		130,
		48,
		88,
		132,
		156,
		60,
		110,
		160,
		192,
		72,
		130,
		192,
		224,
		80,
		150,
		224,
		264,
		96,
		176,
		260,
		308,
		104,
		198,
		288,
		352,
		120,
		216,
		320,
		384,
		132,
		240,
		360,
		432,
		144,
		280,
		408,
		480,
		168,
		308,
		448,
		532,
		180,
		338,
		504,
		588,
		196,
		364,
		546,
		650,
		224,
		416,
		600,
		700,
		224,
		442,
		644,
		750,
		252,
		476,
		690,
		816,
		270,
		504,
		750,
		900,
		300,
		560,
		810,
		960,
		312,
		588,
		870,
		1050,
		336,
		644,
		952,
		1110,
		360,
		700,
		1020,
		1200,
		390,
		728,
		1050,
		1260,
		420,
		784,
		1140,
		1350,
		450,
		812,
		1200,
		1440,
		480,
		868,
		1290,
		1530,
		510,
		924,
		1350,
		1620,
		540,
		980,
		1440,
		1710,
		570,
		1036,
		1530,
		1800,
		570,
		1064,
		1590,
		1890,
		600,
		1120,
		1680,
		1980,
		630,
		1204,
		1770,
		2100,
		660,
		1260,
		1860,
		2220,
		720,
		1316,
		1950,
		2310,
		750,
		1372,
		2040,
		2430
	];
	/**
	* Returns the number of error correction block that the QR Code should contain
	* for the specified version and error correction level.
	*
	* @param  {Number} version              QR Code version
	* @param  {Number} errorCorrectionLevel Error correction level
	* @return {Number}                      Number of error correction blocks
	*/
	exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
		switch (errorCorrectionLevel) {
			case ECLevel.L: return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
			case ECLevel.M: return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
			case ECLevel.Q: return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
			case ECLevel.H: return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
			default: return;
		}
	};
	/**
	* Returns the number of error correction codewords to use for the specified
	* version and error correction level.
	*
	* @param  {Number} version              QR Code version
	* @param  {Number} errorCorrectionLevel Error correction level
	* @return {Number}                      Number of error correction codewords
	*/
	exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
		switch (errorCorrectionLevel) {
			case ECLevel.L: return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
			case ECLevel.M: return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
			case ECLevel.Q: return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
			case ECLevel.H: return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
			default: return;
		}
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/galois-field.js
var require_galois_field = /* @__PURE__ */ __commonJSMin(((exports) => {
	var EXP_TABLE = /* @__PURE__ */ new Uint8Array(512);
	var LOG_TABLE = /* @__PURE__ */ new Uint8Array(256);
	(function initTables() {
		let x = 1;
		for (let i = 0; i < 255; i++) {
			EXP_TABLE[i] = x;
			LOG_TABLE[x] = i;
			x <<= 1;
			if (x & 256) x ^= 285;
		}
		for (let i = 255; i < 512; i++) EXP_TABLE[i] = EXP_TABLE[i - 255];
	})();
	/**
	* Returns log value of n inside Galois Field
	*
	* @param  {Number} n
	* @return {Number}
	*/
	exports.log = function log(n) {
		if (n < 1) throw new Error("log(" + n + ")");
		return LOG_TABLE[n];
	};
	/**
	* Returns anti-log value of n inside Galois Field
	*
	* @param  {Number} n
	* @return {Number}
	*/
	exports.exp = function exp(n) {
		return EXP_TABLE[n];
	};
	/**
	* Multiplies two number inside Galois Field
	*
	* @param  {Number} x
	* @param  {Number} y
	* @return {Number}
	*/
	exports.mul = function mul(x, y) {
		if (x === 0 || y === 0) return 0;
		return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/polynomial.js
var require_polynomial = /* @__PURE__ */ __commonJSMin(((exports) => {
	var GF = require_galois_field();
	/**
	* Multiplies two polynomials inside Galois Field
	*
	* @param  {Uint8Array} p1 Polynomial
	* @param  {Uint8Array} p2 Polynomial
	* @return {Uint8Array}    Product of p1 and p2
	*/
	exports.mul = function mul(p1, p2) {
		const coeff = new Uint8Array(p1.length + p2.length - 1);
		for (let i = 0; i < p1.length; i++) for (let j = 0; j < p2.length; j++) coeff[i + j] ^= GF.mul(p1[i], p2[j]);
		return coeff;
	};
	/**
	* Calculate the remainder of polynomials division
	*
	* @param  {Uint8Array} divident Polynomial
	* @param  {Uint8Array} divisor  Polynomial
	* @return {Uint8Array}          Remainder
	*/
	exports.mod = function mod(divident, divisor) {
		let result = new Uint8Array(divident);
		while (result.length - divisor.length >= 0) {
			const coeff = result[0];
			for (let i = 0; i < divisor.length; i++) result[i] ^= GF.mul(divisor[i], coeff);
			let offset = 0;
			while (offset < result.length && result[offset] === 0) offset++;
			result = result.slice(offset);
		}
		return result;
	};
	/**
	* Generate an irreducible generator polynomial of specified degree
	* (used by Reed-Solomon encoder)
	*
	* @param  {Number} degree Degree of the generator polynomial
	* @return {Uint8Array}    Buffer containing polynomial coefficients
	*/
	exports.generateECPolynomial = function generateECPolynomial(degree) {
		let poly = new Uint8Array([1]);
		for (let i = 0; i < degree; i++) poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
		return poly;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/reed-solomon-encoder.js
var require_reed_solomon_encoder = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Polynomial = require_polynomial();
	function ReedSolomonEncoder(degree) {
		this.genPoly = void 0;
		this.degree = degree;
		if (this.degree) this.initialize(this.degree);
	}
	/**
	* Initialize the encoder.
	* The input param should correspond to the number of error correction codewords.
	*
	* @param  {Number} degree
	*/
	ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
		this.degree = degree;
		this.genPoly = Polynomial.generateECPolynomial(this.degree);
	};
	/**
	* Encodes a chunk of data
	*
	* @param  {Uint8Array} data Buffer containing input data
	* @return {Uint8Array}      Buffer containing encoded data
	*/
	ReedSolomonEncoder.prototype.encode = function encode(data) {
		if (!this.genPoly) throw new Error("Encoder not initialized");
		const paddedData = new Uint8Array(data.length + this.degree);
		paddedData.set(data);
		const remainder = Polynomial.mod(paddedData, this.genPoly);
		const start = this.degree - remainder.length;
		if (start > 0) {
			const buff = new Uint8Array(this.degree);
			buff.set(remainder, start);
			return buff;
		}
		return remainder;
	};
	module.exports = ReedSolomonEncoder;
}));
//#endregion
//#region node_modules/qrcode/lib/core/version-check.js
var require_version_check = /* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* Check if QR Code version is valid
	*
	* @param  {Number}  version QR Code version
	* @return {Boolean}         true if valid version, false otherwise
	*/
	exports.isValid = function isValid(version) {
		return !isNaN(version) && version >= 1 && version <= 40;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/regex.js
var require_regex = /* @__PURE__ */ __commonJSMin(((exports) => {
	var numeric = "[0-9]+";
	var alphanumeric = "[A-Z $%*+\\-./:]+";
	var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
	kanji = kanji.replace(/u/g, "\\u");
	var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
	exports.KANJI = new RegExp(kanji, "g");
	exports.BYTE_KANJI = /* @__PURE__ */ new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
	exports.BYTE = new RegExp(byte, "g");
	exports.NUMERIC = new RegExp(numeric, "g");
	exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
	var TEST_KANJI = new RegExp("^" + kanji + "$");
	var TEST_NUMERIC = /* @__PURE__ */ new RegExp("^[0-9]+$");
	var TEST_ALPHANUMERIC = /* @__PURE__ */ new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
	exports.testKanji = function testKanji(str) {
		return TEST_KANJI.test(str);
	};
	exports.testNumeric = function testNumeric(str) {
		return TEST_NUMERIC.test(str);
	};
	exports.testAlphanumeric = function testAlphanumeric(str) {
		return TEST_ALPHANUMERIC.test(str);
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/mode.js
var require_mode = /* @__PURE__ */ __commonJSMin(((exports) => {
	var VersionCheck = require_version_check();
	var Regex = require_regex();
	/**
	* Numeric mode encodes data from the decimal digit set (0 - 9)
	* (byte values 30HEX to 39HEX).
	* Normally, 3 data characters are represented by 10 bits.
	*
	* @type {Object}
	*/
	exports.NUMERIC = {
		id: "Numeric",
		bit: 1,
		ccBits: [
			10,
			12,
			14
		]
	};
	/**
	* Alphanumeric mode encodes data from a set of 45 characters,
	* i.e. 10 numeric digits (0 - 9),
	*      26 alphabetic characters (A - Z),
	*   and 9 symbols (SP, $, %, *, +, -, ., /, :).
	* Normally, two input characters are represented by 11 bits.
	*
	* @type {Object}
	*/
	exports.ALPHANUMERIC = {
		id: "Alphanumeric",
		bit: 2,
		ccBits: [
			9,
			11,
			13
		]
	};
	/**
	* In byte mode, data is encoded at 8 bits per character.
	*
	* @type {Object}
	*/
	exports.BYTE = {
		id: "Byte",
		bit: 4,
		ccBits: [
			8,
			16,
			16
		]
	};
	/**
	* The Kanji mode efficiently encodes Kanji characters in accordance with
	* the Shift JIS system based on JIS X 0208.
	* The Shift JIS values are shifted from the JIS X 0208 values.
	* JIS X 0208 gives details of the shift coded representation.
	* Each two-byte character value is compacted to a 13-bit binary codeword.
	*
	* @type {Object}
	*/
	exports.KANJI = {
		id: "Kanji",
		bit: 8,
		ccBits: [
			8,
			10,
			12
		]
	};
	/**
	* Mixed mode will contain a sequences of data in a combination of any of
	* the modes described above
	*
	* @type {Object}
	*/
	exports.MIXED = { bit: -1 };
	/**
	* Returns the number of bits needed to store the data length
	* according to QR Code specifications.
	*
	* @param  {Mode}   mode    Data mode
	* @param  {Number} version QR Code version
	* @return {Number}         Number of bits
	*/
	exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
		if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
		if (!VersionCheck.isValid(version)) throw new Error("Invalid version: " + version);
		if (version >= 1 && version < 10) return mode.ccBits[0];
		else if (version < 27) return mode.ccBits[1];
		return mode.ccBits[2];
	};
	/**
	* Returns the most efficient mode to store the specified data
	*
	* @param  {String} dataStr Input data string
	* @return {Mode}           Best mode
	*/
	exports.getBestModeForData = function getBestModeForData(dataStr) {
		if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
		else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
		else if (Regex.testKanji(dataStr)) return exports.KANJI;
		else return exports.BYTE;
	};
	/**
	* Return mode name as string
	*
	* @param {Mode} mode Mode object
	* @returns {String}  Mode name
	*/
	exports.toString = function toString(mode) {
		if (mode && mode.id) return mode.id;
		throw new Error("Invalid mode");
	};
	/**
	* Check if input param is a valid mode object
	*
	* @param   {Mode}    mode Mode object
	* @returns {Boolean} True if valid mode, false otherwise
	*/
	exports.isValid = function isValid(mode) {
		return mode && mode.bit && mode.ccBits;
	};
	/**
	* Get mode object from its name
	*
	* @param   {String} string Mode name
	* @returns {Mode}          Mode object
	*/
	function fromString(string) {
		if (typeof string !== "string") throw new Error("Param is not a string");
		switch (string.toLowerCase()) {
			case "numeric": return exports.NUMERIC;
			case "alphanumeric": return exports.ALPHANUMERIC;
			case "kanji": return exports.KANJI;
			case "byte": return exports.BYTE;
			default: throw new Error("Unknown mode: " + string);
		}
	}
	/**
	* Returns mode from a value.
	* If value is not a valid mode, returns defaultValue
	*
	* @param  {Mode|String} value        Encoding mode
	* @param  {Mode}        defaultValue Fallback value
	* @return {Mode}                     Encoding mode
	*/
	exports.from = function from(value, defaultValue) {
		if (exports.isValid(value)) return value;
		try {
			return fromString(value);
		} catch (e) {
			return defaultValue;
		}
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/version.js
var require_version = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Utils = require_utils$1();
	var ECCode = require_error_correction_code();
	var ECLevel = require_error_correction_level();
	var Mode = require_mode();
	var VersionCheck = require_version_check();
	var G18 = 7973;
	var G18_BCH = Utils.getBCHDigit(G18);
	function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
		for (let currentVersion = 1; currentVersion <= 40; currentVersion++) if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) return currentVersion;
	}
	function getReservedBitsCount(mode, version) {
		return Mode.getCharCountIndicator(mode, version) + 4;
	}
	function getTotalBitsFromDataArray(segments, version) {
		let totalBits = 0;
		segments.forEach(function(data) {
			const reservedBits = getReservedBitsCount(data.mode, version);
			totalBits += reservedBits + data.getBitsLength();
		});
		return totalBits;
	}
	function getBestVersionForMixedData(segments, errorCorrectionLevel) {
		for (let currentVersion = 1; currentVersion <= 40; currentVersion++) if (getTotalBitsFromDataArray(segments, currentVersion) <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) return currentVersion;
	}
	/**
	* Returns version number from a value.
	* If value is not a valid version, returns defaultValue
	*
	* @param  {Number|String} value        QR Code version
	* @param  {Number}        defaultValue Fallback value
	* @return {Number}                     QR Code version number
	*/
	exports.from = function from(value, defaultValue) {
		if (VersionCheck.isValid(value)) return parseInt(value, 10);
		return defaultValue;
	};
	/**
	* Returns how much data can be stored with the specified QR code version
	* and error correction level
	*
	* @param  {Number} version              QR Code version (1-40)
	* @param  {Number} errorCorrectionLevel Error correction level
	* @param  {Mode}   mode                 Data mode
	* @return {Number}                      Quantity of storable data
	*/
	exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
		if (!VersionCheck.isValid(version)) throw new Error("Invalid QR Code version");
		if (typeof mode === "undefined") mode = Mode.BYTE;
		const dataTotalCodewordsBits = (Utils.getSymbolTotalCodewords(version) - ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)) * 8;
		if (mode === Mode.MIXED) return dataTotalCodewordsBits;
		const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
		switch (mode) {
			case Mode.NUMERIC: return Math.floor(usableBits / 10 * 3);
			case Mode.ALPHANUMERIC: return Math.floor(usableBits / 11 * 2);
			case Mode.KANJI: return Math.floor(usableBits / 13);
			case Mode.BYTE:
			default: return Math.floor(usableBits / 8);
		}
	};
	/**
	* Returns the minimum version needed to contain the amount of data
	*
	* @param  {Segment} data                    Segment of data
	* @param  {Number} [errorCorrectionLevel=H] Error correction level
	* @param  {Mode} mode                       Data mode
	* @return {Number}                          QR Code version
	*/
	exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
		let seg;
		const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
		if (Array.isArray(data)) {
			if (data.length > 1) return getBestVersionForMixedData(data, ecl);
			if (data.length === 0) return 1;
			seg = data[0];
		} else seg = data;
		return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
	};
	/**
	* Returns version information with relative error correction bits
	*
	* The version information is included in QR Code symbols of version 7 or larger.
	* It consists of an 18-bit sequence containing 6 data bits,
	* with 12 error correction bits calculated using the (18, 6) Golay code.
	*
	* @param  {Number} version QR Code version
	* @return {Number}         Encoded version info bits
	*/
	exports.getEncodedBits = function getEncodedBits(version) {
		if (!VersionCheck.isValid(version) || version < 7) throw new Error("Invalid QR Code version");
		let d = version << 12;
		while (Utils.getBCHDigit(d) - G18_BCH >= 0) d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
		return version << 12 | d;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/format-info.js
var require_format_info = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Utils = require_utils$1();
	var G15 = 1335;
	var G15_MASK = 21522;
	var G15_BCH = Utils.getBCHDigit(G15);
	/**
	* Returns format information with relative error correction bits
	*
	* The format information is a 15-bit sequence containing 5 data bits,
	* with 10 error correction bits calculated using the (15, 5) BCH code.
	*
	* @param  {Number} errorCorrectionLevel Error correction level
	* @param  {Number} mask                 Mask pattern
	* @return {Number}                      Encoded format information bits
	*/
	exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
		const data = errorCorrectionLevel.bit << 3 | mask;
		let d = data << 10;
		while (Utils.getBCHDigit(d) - G15_BCH >= 0) d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
		return (data << 10 | d) ^ G15_MASK;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Mode = require_mode();
	function NumericData(data) {
		this.mode = Mode.NUMERIC;
		this.data = data.toString();
	}
	NumericData.getBitsLength = function getBitsLength(length) {
		return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
	};
	NumericData.prototype.getLength = function getLength() {
		return this.data.length;
	};
	NumericData.prototype.getBitsLength = function getBitsLength() {
		return NumericData.getBitsLength(this.data.length);
	};
	NumericData.prototype.write = function write(bitBuffer) {
		let i, group, value;
		for (i = 0; i + 3 <= this.data.length; i += 3) {
			group = this.data.substr(i, 3);
			value = parseInt(group, 10);
			bitBuffer.put(value, 10);
		}
		const remainingNum = this.data.length - i;
		if (remainingNum > 0) {
			group = this.data.substr(i);
			value = parseInt(group, 10);
			bitBuffer.put(value, remainingNum * 3 + 1);
		}
	};
	module.exports = NumericData;
}));
//#endregion
//#region node_modules/qrcode/lib/core/alphanumeric-data.js
var require_alphanumeric_data = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Mode = require_mode();
	/**
	* Array of characters available in alphanumeric mode
	*
	* As per QR Code specification, to each character
	* is assigned a value from 0 to 44 which in this case coincides
	* with the array index
	*
	* @type {Array}
	*/
	var ALPHA_NUM_CHARS = [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
		" ",
		"$",
		"%",
		"*",
		"+",
		"-",
		".",
		"/",
		":"
	];
	function AlphanumericData(data) {
		this.mode = Mode.ALPHANUMERIC;
		this.data = data;
	}
	AlphanumericData.getBitsLength = function getBitsLength(length) {
		return 11 * Math.floor(length / 2) + 6 * (length % 2);
	};
	AlphanumericData.prototype.getLength = function getLength() {
		return this.data.length;
	};
	AlphanumericData.prototype.getBitsLength = function getBitsLength() {
		return AlphanumericData.getBitsLength(this.data.length);
	};
	AlphanumericData.prototype.write = function write(bitBuffer) {
		let i;
		for (i = 0; i + 2 <= this.data.length; i += 2) {
			let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
			value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
			bitBuffer.put(value, 11);
		}
		if (this.data.length % 2) bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
	};
	module.exports = AlphanumericData;
}));
//#endregion
//#region node_modules/qrcode/lib/core/byte-data.js
var require_byte_data = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Mode = require_mode();
	function ByteData(data) {
		this.mode = Mode.BYTE;
		if (typeof data === "string") this.data = new TextEncoder().encode(data);
		else this.data = new Uint8Array(data);
	}
	ByteData.getBitsLength = function getBitsLength(length) {
		return length * 8;
	};
	ByteData.prototype.getLength = function getLength() {
		return this.data.length;
	};
	ByteData.prototype.getBitsLength = function getBitsLength() {
		return ByteData.getBitsLength(this.data.length);
	};
	ByteData.prototype.write = function(bitBuffer) {
		for (let i = 0, l = this.data.length; i < l; i++) bitBuffer.put(this.data[i], 8);
	};
	module.exports = ByteData;
}));
//#endregion
//#region node_modules/qrcode/lib/core/kanji-data.js
var require_kanji_data = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Mode = require_mode();
	var Utils = require_utils$1();
	function KanjiData(data) {
		this.mode = Mode.KANJI;
		this.data = data;
	}
	KanjiData.getBitsLength = function getBitsLength(length) {
		return length * 13;
	};
	KanjiData.prototype.getLength = function getLength() {
		return this.data.length;
	};
	KanjiData.prototype.getBitsLength = function getBitsLength() {
		return KanjiData.getBitsLength(this.data.length);
	};
	KanjiData.prototype.write = function(bitBuffer) {
		let i;
		for (i = 0; i < this.data.length; i++) {
			let value = Utils.toSJIS(this.data[i]);
			if (value >= 33088 && value <= 40956) value -= 33088;
			else if (value >= 57408 && value <= 60351) value -= 49472;
			else throw new Error("Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8");
			value = (value >>> 8 & 255) * 192 + (value & 255);
			bitBuffer.put(value, 13);
		}
	};
	module.exports = KanjiData;
}));
//#endregion
//#region node_modules/dijkstrajs/dijkstra.js
var require_dijkstra = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/******************************************************************************
	* Created 2008-08-19.
	*
	* Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
	*
	* Copyright (C) 2008
	*   Wyatt Baldwin <self@wyattbaldwin.com>
	*   All rights reserved
	*
	* Licensed under the MIT license.
	*
	*   http://www.opensource.org/licenses/mit-license.php
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	* THE SOFTWARE.
	*****************************************************************************/
	var dijkstra = {
		single_source_shortest_paths: function(graph, s, d) {
			var predecessors = {};
			var costs = {};
			costs[s] = 0;
			var open = dijkstra.PriorityQueue.make();
			open.push(s, 0);
			var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
			while (!open.empty()) {
				closest = open.pop();
				u = closest.value;
				cost_of_s_to_u = closest.cost;
				adjacent_nodes = graph[u] || {};
				for (v in adjacent_nodes) if (adjacent_nodes.hasOwnProperty(v)) {
					cost_of_e = adjacent_nodes[v];
					cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
					cost_of_s_to_v = costs[v];
					first_visit = typeof costs[v] === "undefined";
					if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
						costs[v] = cost_of_s_to_u_plus_cost_of_e;
						open.push(v, cost_of_s_to_u_plus_cost_of_e);
						predecessors[v] = u;
					}
				}
			}
			if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
				var msg = [
					"Could not find a path from ",
					s,
					" to ",
					d,
					"."
				].join("");
				throw new Error(msg);
			}
			return predecessors;
		},
		extract_shortest_path_from_predecessor_list: function(predecessors, d) {
			var nodes = [];
			var u = d;
			while (u) {
				nodes.push(u);
				predecessors[u];
				u = predecessors[u];
			}
			nodes.reverse();
			return nodes;
		},
		find_path: function(graph, s, d) {
			var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
			return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
		},
		/**
		* A very naive priority queue implementation.
		*/
		PriorityQueue: {
			make: function(opts) {
				var T = dijkstra.PriorityQueue, t = {}, key;
				opts = opts || {};
				for (key in T) if (T.hasOwnProperty(key)) t[key] = T[key];
				t.queue = [];
				t.sorter = opts.sorter || T.default_sorter;
				return t;
			},
			default_sorter: function(a, b) {
				return a.cost - b.cost;
			},
			/**
			* Add a new item to the queue and ensure the highest priority element
			* is at the front of the queue.
			*/
			push: function(value, cost) {
				var item = {
					value,
					cost
				};
				this.queue.push(item);
				this.queue.sort(this.sorter);
			},
			/**
			* Return the highest priority element in the queue.
			*/
			pop: function() {
				return this.queue.shift();
			},
			empty: function() {
				return this.queue.length === 0;
			}
		}
	};
	if (typeof module !== "undefined") module.exports = dijkstra;
}));
//#endregion
//#region node_modules/qrcode/lib/core/segments.js
var require_segments = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Mode = require_mode();
	var NumericData = require_numeric_data();
	var AlphanumericData = require_alphanumeric_data();
	var ByteData = require_byte_data();
	var KanjiData = require_kanji_data();
	var Regex = require_regex();
	var Utils = require_utils$1();
	var dijkstra = require_dijkstra();
	/**
	* Returns UTF8 byte length
	*
	* @param  {String} str Input string
	* @return {Number}     Number of byte
	*/
	function getStringByteLength(str) {
		return unescape(encodeURIComponent(str)).length;
	}
	/**
	* Get a list of segments of the specified mode
	* from a string
	*
	* @param  {Mode}   mode Segment mode
	* @param  {String} str  String to process
	* @return {Array}       Array of object with segments data
	*/
	function getSegments(regex, mode, str) {
		const segments = [];
		let result;
		while ((result = regex.exec(str)) !== null) segments.push({
			data: result[0],
			index: result.index,
			mode,
			length: result[0].length
		});
		return segments;
	}
	/**
	* Extracts a series of segments with the appropriate
	* modes from a string
	*
	* @param  {String} dataStr Input string
	* @return {Array}          Array of object with segments data
	*/
	function getSegmentsFromString(dataStr) {
		const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
		const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
		let byteSegs;
		let kanjiSegs;
		if (Utils.isKanjiModeEnabled()) {
			byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
			kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
		} else {
			byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
			kanjiSegs = [];
		}
		return numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs).sort(function(s1, s2) {
			return s1.index - s2.index;
		}).map(function(obj) {
			return {
				data: obj.data,
				mode: obj.mode,
				length: obj.length
			};
		});
	}
	/**
	* Returns how many bits are needed to encode a string of
	* specified length with the specified mode
	*
	* @param  {Number} length String length
	* @param  {Mode} mode     Segment mode
	* @return {Number}        Bit length
	*/
	function getSegmentBitsLength(length, mode) {
		switch (mode) {
			case Mode.NUMERIC: return NumericData.getBitsLength(length);
			case Mode.ALPHANUMERIC: return AlphanumericData.getBitsLength(length);
			case Mode.KANJI: return KanjiData.getBitsLength(length);
			case Mode.BYTE: return ByteData.getBitsLength(length);
		}
	}
	/**
	* Merges adjacent segments which have the same mode
	*
	* @param  {Array} segs Array of object with segments data
	* @return {Array}      Array of object with segments data
	*/
	function mergeSegments(segs) {
		return segs.reduce(function(acc, curr) {
			const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
			if (prevSeg && prevSeg.mode === curr.mode) {
				acc[acc.length - 1].data += curr.data;
				return acc;
			}
			acc.push(curr);
			return acc;
		}, []);
	}
	/**
	* Generates a list of all possible nodes combination which
	* will be used to build a segments graph.
	*
	* Nodes are divided by groups. Each group will contain a list of all the modes
	* in which is possible to encode the given text.
	*
	* For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
	* The group for '12345' will contain then 3 objects, one for each
	* possible encoding mode.
	*
	* Each node represents a possible segment.
	*
	* @param  {Array} segs Array of object with segments data
	* @return {Array}      Array of object with segments data
	*/
	function buildNodes(segs) {
		const nodes = [];
		for (let i = 0; i < segs.length; i++) {
			const seg = segs[i];
			switch (seg.mode) {
				case Mode.NUMERIC:
					nodes.push([
						seg,
						{
							data: seg.data,
							mode: Mode.ALPHANUMERIC,
							length: seg.length
						},
						{
							data: seg.data,
							mode: Mode.BYTE,
							length: seg.length
						}
					]);
					break;
				case Mode.ALPHANUMERIC:
					nodes.push([seg, {
						data: seg.data,
						mode: Mode.BYTE,
						length: seg.length
					}]);
					break;
				case Mode.KANJI:
					nodes.push([seg, {
						data: seg.data,
						mode: Mode.BYTE,
						length: getStringByteLength(seg.data)
					}]);
					break;
				case Mode.BYTE: nodes.push([{
					data: seg.data,
					mode: Mode.BYTE,
					length: getStringByteLength(seg.data)
				}]);
			}
		}
		return nodes;
	}
	/**
	* Builds a graph from a list of nodes.
	* All segments in each node group will be connected with all the segments of
	* the next group and so on.
	*
	* At each connection will be assigned a weight depending on the
	* segment's byte length.
	*
	* @param  {Array} nodes    Array of object with segments data
	* @param  {Number} version QR Code version
	* @return {Object}         Graph of all possible segments
	*/
	function buildGraph(nodes, version) {
		const table = {};
		const graph = { start: {} };
		let prevNodeIds = ["start"];
		for (let i = 0; i < nodes.length; i++) {
			const nodeGroup = nodes[i];
			const currentNodeIds = [];
			for (let j = 0; j < nodeGroup.length; j++) {
				const node = nodeGroup[j];
				const key = "" + i + j;
				currentNodeIds.push(key);
				table[key] = {
					node,
					lastCount: 0
				};
				graph[key] = {};
				for (let n = 0; n < prevNodeIds.length; n++) {
					const prevNodeId = prevNodeIds[n];
					if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
						graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
						table[prevNodeId].lastCount += node.length;
					} else {
						if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
						graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
					}
				}
			}
			prevNodeIds = currentNodeIds;
		}
		for (let n = 0; n < prevNodeIds.length; n++) graph[prevNodeIds[n]].end = 0;
		return {
			map: graph,
			table
		};
	}
	/**
	* Builds a segment from a specified data and mode.
	* If a mode is not specified, the more suitable will be used.
	*
	* @param  {String} data             Input data
	* @param  {Mode | String} modesHint Data mode
	* @return {Segment}                 Segment
	*/
	function buildSingleSegment(data, modesHint) {
		let mode;
		const bestMode = Mode.getBestModeForData(data);
		mode = Mode.from(modesHint, bestMode);
		if (mode !== Mode.BYTE && mode.bit < bestMode.bit) throw new Error("\"" + data + "\" cannot be encoded with mode " + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
		if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) mode = Mode.BYTE;
		switch (mode) {
			case Mode.NUMERIC: return new NumericData(data);
			case Mode.ALPHANUMERIC: return new AlphanumericData(data);
			case Mode.KANJI: return new KanjiData(data);
			case Mode.BYTE: return new ByteData(data);
		}
	}
	/**
	* Builds a list of segments from an array.
	* Array can contain Strings or Objects with segment's info.
	*
	* For each item which is a string, will be generated a segment with the given
	* string and the more appropriate encoding mode.
	*
	* For each item which is an object, will be generated a segment with the given
	* data and mode.
	* Objects must contain at least the property "data".
	* If property "mode" is not present, the more suitable mode will be used.
	*
	* @param  {Array} array Array of objects with segments data
	* @return {Array}       Array of Segments
	*/
	exports.fromArray = function fromArray(array) {
		return array.reduce(function(acc, seg) {
			if (typeof seg === "string") acc.push(buildSingleSegment(seg, null));
			else if (seg.data) acc.push(buildSingleSegment(seg.data, seg.mode));
			return acc;
		}, []);
	};
	/**
	* Builds an optimized sequence of segments from a string,
	* which will produce the shortest possible bitstream.
	*
	* @param  {String} data    Input string
	* @param  {Number} version QR Code version
	* @return {Array}          Array of segments
	*/
	exports.fromString = function fromString(data, version) {
		const graph = buildGraph(buildNodes(getSegmentsFromString(data, Utils.isKanjiModeEnabled())), version);
		const path = dijkstra.find_path(graph.map, "start", "end");
		const optimizedSegs = [];
		for (let i = 1; i < path.length - 1; i++) optimizedSegs.push(graph.table[path[i]].node);
		return exports.fromArray(mergeSegments(optimizedSegs));
	};
	/**
	* Splits a string in various segments with the modes which
	* best represent their content.
	* The produced segments are far from being optimized.
	* The output of this function is only used to estimate a QR Code version
	* which may contain the data.
	*
	* @param  {string} data Input string
	* @return {Array}       Array of segments
	*/
	exports.rawSplit = function rawSplit(data) {
		return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/qrcode.js
var require_qrcode = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Utils = require_utils$1();
	var ECLevel = require_error_correction_level();
	var BitBuffer = require_bit_buffer();
	var BitMatrix = require_bit_matrix();
	var AlignmentPattern = require_alignment_pattern();
	var FinderPattern = require_finder_pattern();
	var MaskPattern = require_mask_pattern();
	var ECCode = require_error_correction_code();
	var ReedSolomonEncoder = require_reed_solomon_encoder();
	var Version = require_version();
	var FormatInfo = require_format_info();
	var Mode = require_mode();
	var Segments = require_segments();
	/**
	* QRCode for JavaScript
	*
	* modified by Ryan Day for nodejs support
	* Copyright (c) 2011 Ryan Day
	*
	* Licensed under the MIT license:
	*   http://www.opensource.org/licenses/mit-license.php
	*
	//---------------------------------------------------------------------
	// QRCode for JavaScript
	//
	// Copyright (c) 2009 Kazuhiko Arase
	//
	// URL: http://www.d-project.com/
	//
	// Licensed under the MIT license:
	//   http://www.opensource.org/licenses/mit-license.php
	//
	// The word "QR Code" is registered trademark of
	// DENSO WAVE INCORPORATED
	//   http://www.denso-wave.com/qrcode/faqpatent-e.html
	//
	//---------------------------------------------------------------------
	*/
	/**
	* Add finder patterns bits to matrix
	*
	* @param  {BitMatrix} matrix  Modules matrix
	* @param  {Number}    version QR Code version
	*/
	function setupFinderPattern(matrix, version) {
		const size = matrix.size;
		const pos = FinderPattern.getPositions(version);
		for (let i = 0; i < pos.length; i++) {
			const row = pos[i][0];
			const col = pos[i][1];
			for (let r = -1; r <= 7; r++) {
				if (row + r <= -1 || size <= row + r) continue;
				for (let c = -1; c <= 7; c++) {
					if (col + c <= -1 || size <= col + c) continue;
					if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) matrix.set(row + r, col + c, true, true);
					else matrix.set(row + r, col + c, false, true);
				}
			}
		}
	}
	/**
	* Add timing pattern bits to matrix
	*
	* Note: this function must be called before {@link setupAlignmentPattern}
	*
	* @param  {BitMatrix} matrix Modules matrix
	*/
	function setupTimingPattern(matrix) {
		const size = matrix.size;
		for (let r = 8; r < size - 8; r++) {
			const value = r % 2 === 0;
			matrix.set(r, 6, value, true);
			matrix.set(6, r, value, true);
		}
	}
	/**
	* Add alignment patterns bits to matrix
	*
	* Note: this function must be called after {@link setupTimingPattern}
	*
	* @param  {BitMatrix} matrix  Modules matrix
	* @param  {Number}    version QR Code version
	*/
	function setupAlignmentPattern(matrix, version) {
		const pos = AlignmentPattern.getPositions(version);
		for (let i = 0; i < pos.length; i++) {
			const row = pos[i][0];
			const col = pos[i][1];
			for (let r = -2; r <= 2; r++) for (let c = -2; c <= 2; c++) if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) matrix.set(row + r, col + c, true, true);
			else matrix.set(row + r, col + c, false, true);
		}
	}
	/**
	* Add version info bits to matrix
	*
	* @param  {BitMatrix} matrix  Modules matrix
	* @param  {Number}    version QR Code version
	*/
	function setupVersionInfo(matrix, version) {
		const size = matrix.size;
		const bits = Version.getEncodedBits(version);
		let row, col, mod;
		for (let i = 0; i < 18; i++) {
			row = Math.floor(i / 3);
			col = i % 3 + size - 8 - 3;
			mod = (bits >> i & 1) === 1;
			matrix.set(row, col, mod, true);
			matrix.set(col, row, mod, true);
		}
	}
	/**
	* Add format info bits to matrix
	*
	* @param  {BitMatrix} matrix               Modules matrix
	* @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
	* @param  {Number}    maskPattern          Mask pattern reference value
	*/
	function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
		const size = matrix.size;
		const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
		let i, mod;
		for (i = 0; i < 15; i++) {
			mod = (bits >> i & 1) === 1;
			if (i < 6) matrix.set(i, 8, mod, true);
			else if (i < 8) matrix.set(i + 1, 8, mod, true);
			else matrix.set(size - 15 + i, 8, mod, true);
			if (i < 8) matrix.set(8, size - i - 1, mod, true);
			else if (i < 9) matrix.set(8, 15 - i - 1 + 1, mod, true);
			else matrix.set(8, 15 - i - 1, mod, true);
		}
		matrix.set(size - 8, 8, 1, true);
	}
	/**
	* Add encoded data bits to matrix
	*
	* @param  {BitMatrix}  matrix Modules matrix
	* @param  {Uint8Array} data   Data codewords
	*/
	function setupData(matrix, data) {
		const size = matrix.size;
		let inc = -1;
		let row = size - 1;
		let bitIndex = 7;
		let byteIndex = 0;
		for (let col = size - 1; col > 0; col -= 2) {
			if (col === 6) col--;
			while (true) {
				for (let c = 0; c < 2; c++) if (!matrix.isReserved(row, col - c)) {
					let dark = false;
					if (byteIndex < data.length) dark = (data[byteIndex] >>> bitIndex & 1) === 1;
					matrix.set(row, col - c, dark);
					bitIndex--;
					if (bitIndex === -1) {
						byteIndex++;
						bitIndex = 7;
					}
				}
				row += inc;
				if (row < 0 || size <= row) {
					row -= inc;
					inc = -inc;
					break;
				}
			}
		}
	}
	/**
	* Create encoded codewords from data input
	*
	* @param  {Number}   version              QR Code version
	* @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
	* @param  {ByteData} data                 Data input
	* @return {Uint8Array}                    Buffer containing encoded codewords
	*/
	function createData(version, errorCorrectionLevel, segments) {
		const buffer = new BitBuffer();
		segments.forEach(function(data) {
			buffer.put(data.mode.bit, 4);
			buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
			data.write(buffer);
		});
		const dataTotalCodewordsBits = (Utils.getSymbolTotalCodewords(version) - ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)) * 8;
		if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) buffer.put(0, 4);
		while (buffer.getLengthInBits() % 8 !== 0) buffer.putBit(0);
		const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
		for (let i = 0; i < remainingByte; i++) buffer.put(i % 2 ? 17 : 236, 8);
		return createCodewords(buffer, version, errorCorrectionLevel);
	}
	/**
	* Encode input data with Reed-Solomon and return codewords with
	* relative error correction bits
	*
	* @param  {BitBuffer} bitBuffer            Data to encode
	* @param  {Number}    version              QR Code version
	* @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
	* @return {Uint8Array}                     Buffer containing encoded codewords
	*/
	function createCodewords(bitBuffer, version, errorCorrectionLevel) {
		const totalCodewords = Utils.getSymbolTotalCodewords(version);
		const dataTotalCodewords = totalCodewords - ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
		const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
		const blocksInGroup1 = ecTotalBlocks - totalCodewords % ecTotalBlocks;
		const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
		const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
		const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
		const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
		const rs = new ReedSolomonEncoder(ecCount);
		let offset = 0;
		const dcData = new Array(ecTotalBlocks);
		const ecData = new Array(ecTotalBlocks);
		let maxDataSize = 0;
		const buffer = new Uint8Array(bitBuffer.buffer);
		for (let b = 0; b < ecTotalBlocks; b++) {
			const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
			dcData[b] = buffer.slice(offset, offset + dataSize);
			ecData[b] = rs.encode(dcData[b]);
			offset += dataSize;
			maxDataSize = Math.max(maxDataSize, dataSize);
		}
		const data = new Uint8Array(totalCodewords);
		let index = 0;
		let i, r;
		for (i = 0; i < maxDataSize; i++) for (r = 0; r < ecTotalBlocks; r++) if (i < dcData[r].length) data[index++] = dcData[r][i];
		for (i = 0; i < ecCount; i++) for (r = 0; r < ecTotalBlocks; r++) data[index++] = ecData[r][i];
		return data;
	}
	/**
	* Build QR Code symbol
	*
	* @param  {String} data                 Input string
	* @param  {Number} version              QR Code version
	* @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
	* @param  {MaskPattern} maskPattern     Mask pattern
	* @return {Object}                      Object containing symbol data
	*/
	function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
		let segments;
		if (Array.isArray(data)) segments = Segments.fromArray(data);
		else if (typeof data === "string") {
			let estimatedVersion = version;
			if (!estimatedVersion) {
				const rawSegments = Segments.rawSplit(data);
				estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
			}
			segments = Segments.fromString(data, estimatedVersion || 40);
		} else throw new Error("Invalid data");
		const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
		if (!bestVersion) throw new Error("The amount of data is too big to be stored in a QR Code");
		if (!version) version = bestVersion;
		else if (version < bestVersion) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n");
		const dataBits = createData(version, errorCorrectionLevel, segments);
		const modules = new BitMatrix(Utils.getSymbolSize(version));
		setupFinderPattern(modules, version);
		setupTimingPattern(modules);
		setupAlignmentPattern(modules, version);
		setupFormatInfo(modules, errorCorrectionLevel, 0);
		if (version >= 7) setupVersionInfo(modules, version);
		setupData(modules, dataBits);
		if (isNaN(maskPattern)) maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
		MaskPattern.applyMask(maskPattern, modules);
		setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
		return {
			modules,
			version,
			errorCorrectionLevel,
			maskPattern,
			segments
		};
	}
	/**
	* QR Code
	*
	* @param {String | Array} data                 Input data
	* @param {Object} options                      Optional configurations
	* @param {Number} options.version              QR Code version
	* @param {String} options.errorCorrectionLevel Error correction level
	* @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
	*/
	exports.create = function create(data, options) {
		if (typeof data === "undefined" || data === "") throw new Error("No input text");
		let errorCorrectionLevel = ECLevel.M;
		let version;
		let mask;
		if (typeof options !== "undefined") {
			errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
			version = Version.from(options.version);
			mask = MaskPattern.from(options.maskPattern);
			if (options.toSJISFunc) Utils.setToSJISFunction(options.toSJISFunc);
		}
		return createSymbol(data, version, errorCorrectionLevel, mask);
	};
}));
//#endregion
//#region node_modules/qrcode/lib/renderer/utils.js
var require_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	function hex2rgba(hex) {
		if (typeof hex === "number") hex = hex.toString();
		if (typeof hex !== "string") throw new Error("Color should be defined as hex string");
		let hexCode = hex.slice().replace("#", "").split("");
		if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) throw new Error("Invalid hex color: " + hex);
		if (hexCode.length === 3 || hexCode.length === 4) hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
			return [c, c];
		}));
		if (hexCode.length === 6) hexCode.push("F", "F");
		const hexValue = parseInt(hexCode.join(""), 16);
		return {
			r: hexValue >> 24 & 255,
			g: hexValue >> 16 & 255,
			b: hexValue >> 8 & 255,
			a: hexValue & 255,
			hex: "#" + hexCode.slice(0, 6).join("")
		};
	}
	exports.getOptions = function getOptions(options) {
		if (!options) options = {};
		if (!options.color) options.color = {};
		const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
		const width = options.width && options.width >= 21 ? options.width : void 0;
		const scale = options.scale || 4;
		return {
			width,
			scale: width ? 4 : scale,
			margin,
			color: {
				dark: hex2rgba(options.color.dark || "#000000ff"),
				light: hex2rgba(options.color.light || "#ffffffff")
			},
			type: options.type,
			rendererOpts: options.rendererOpts || {}
		};
	};
	exports.getScale = function getScale(qrSize, opts) {
		return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
	};
	exports.getImageWidth = function getImageWidth(qrSize, opts) {
		const scale = exports.getScale(qrSize, opts);
		return Math.floor((qrSize + opts.margin * 2) * scale);
	};
	exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
		const size = qr.modules.size;
		const data = qr.modules.data;
		const scale = exports.getScale(size, opts);
		const symbolSize = Math.floor((size + opts.margin * 2) * scale);
		const scaledMargin = opts.margin * scale;
		const palette = [opts.color.light, opts.color.dark];
		for (let i = 0; i < symbolSize; i++) for (let j = 0; j < symbolSize; j++) {
			let posDst = (i * symbolSize + j) * 4;
			let pxColor = opts.color.light;
			if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
				const iSrc = Math.floor((i - scaledMargin) / scale);
				const jSrc = Math.floor((j - scaledMargin) / scale);
				pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
			}
			imgData[posDst++] = pxColor.r;
			imgData[posDst++] = pxColor.g;
			imgData[posDst++] = pxColor.b;
			imgData[posDst] = pxColor.a;
		}
	};
}));
//#endregion
//#region node_modules/qrcode/lib/renderer/canvas.js
var require_canvas = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Utils = require_utils();
	function clearCanvas(ctx, canvas, size) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		if (!canvas.style) canvas.style = {};
		canvas.height = size;
		canvas.width = size;
		canvas.style.height = size + "px";
		canvas.style.width = size + "px";
	}
	function getCanvasElement() {
		try {
			return document.createElement("canvas");
		} catch (e) {
			throw new Error("You need to specify a canvas element");
		}
	}
	exports.render = function render(qrData, canvas, options) {
		let opts = options;
		let canvasEl = canvas;
		if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
			opts = canvas;
			canvas = void 0;
		}
		if (!canvas) canvasEl = getCanvasElement();
		opts = Utils.getOptions(opts);
		const size = Utils.getImageWidth(qrData.modules.size, opts);
		const ctx = canvasEl.getContext("2d");
		const image = ctx.createImageData(size, size);
		Utils.qrToImageData(image.data, qrData, opts);
		clearCanvas(ctx, canvasEl, size);
		ctx.putImageData(image, 0, 0);
		return canvasEl;
	};
	exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
		let opts = options;
		if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
			opts = canvas;
			canvas = void 0;
		}
		if (!opts) opts = {};
		const canvasEl = exports.render(qrData, canvas, opts);
		const type = opts.type || "image/png";
		const rendererOpts = opts.rendererOpts || {};
		return canvasEl.toDataURL(type, rendererOpts.quality);
	};
}));
//#endregion
//#region node_modules/qrcode/lib/renderer/svg-tag.js
var require_svg_tag = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Utils = require_utils();
	function getColorAttrib(color, attrib) {
		const alpha = color.a / 255;
		const str = attrib + "=\"" + color.hex + "\"";
		return alpha < 1 ? str + " " + attrib + "-opacity=\"" + alpha.toFixed(2).slice(1) + "\"" : str;
	}
	function svgCmd(cmd, x, y) {
		let str = cmd + x;
		if (typeof y !== "undefined") str += " " + y;
		return str;
	}
	function qrToPath(data, size, margin) {
		let path = "";
		let moveBy = 0;
		let newRow = false;
		let lineLength = 0;
		for (let i = 0; i < data.length; i++) {
			const col = Math.floor(i % size);
			const row = Math.floor(i / size);
			if (!col && !newRow) newRow = true;
			if (data[i]) {
				lineLength++;
				if (!(i > 0 && col > 0 && data[i - 1])) {
					path += newRow ? svgCmd("M", col + margin, .5 + row + margin) : svgCmd("m", moveBy, 0);
					moveBy = 0;
					newRow = false;
				}
				if (!(col + 1 < size && data[i + 1])) {
					path += svgCmd("h", lineLength);
					lineLength = 0;
				}
			} else moveBy++;
		}
		return path;
	}
	exports.render = function render(qrData, options, cb) {
		const opts = Utils.getOptions(options);
		const size = qrData.modules.size;
		const data = qrData.modules.data;
		const qrcodesize = size + opts.margin * 2;
		const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + " d=\"M0 0h" + qrcodesize + "v" + qrcodesize + "H0z\"/>";
		const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + " d=\"" + qrToPath(data, size, opts.margin) + "\"/>";
		const viewBox = "viewBox=\"0 0 " + qrcodesize + " " + qrcodesize + "\"";
		const svgTag = "<svg xmlns=\"http://www.w3.org/2000/svg\" " + (!opts.width ? "" : "width=\"" + opts.width + "\" height=\"" + opts.width + "\" ") + viewBox + " shape-rendering=\"crispEdges\">" + bg + path + "</svg>\n";
		if (typeof cb === "function") cb(null, svgTag);
		return svgTag;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/browser.js
var require_browser = /* @__PURE__ */ __commonJSMin(((exports) => {
	var canPromise = require_can_promise();
	var QRCode = require_qrcode();
	var CanvasRenderer = require_canvas();
	var SvgRenderer = require_svg_tag();
	function renderCanvas(renderFunc, canvas, text, opts, cb) {
		const args = [].slice.call(arguments, 1);
		const argsNum = args.length;
		const isLastArgCb = typeof args[argsNum - 1] === "function";
		if (!isLastArgCb && !canPromise()) throw new Error("Callback required as last argument");
		if (isLastArgCb) {
			if (argsNum < 2) throw new Error("Too few arguments provided");
			if (argsNum === 2) {
				cb = text;
				text = canvas;
				canvas = opts = void 0;
			} else if (argsNum === 3) if (canvas.getContext && typeof cb === "undefined") {
				cb = opts;
				opts = void 0;
			} else {
				cb = opts;
				opts = text;
				text = canvas;
				canvas = void 0;
			}
		} else {
			if (argsNum < 1) throw new Error("Too few arguments provided");
			if (argsNum === 1) {
				text = canvas;
				canvas = opts = void 0;
			} else if (argsNum === 2 && !canvas.getContext) {
				opts = text;
				text = canvas;
				canvas = void 0;
			}
			return new Promise(function(resolve, reject) {
				try {
					resolve(renderFunc(QRCode.create(text, opts), canvas, opts));
				} catch (e) {
					reject(e);
				}
			});
		}
		try {
			const data = QRCode.create(text, opts);
			cb(null, renderFunc(data, canvas, opts));
		} catch (e) {
			cb(e);
		}
	}
	exports.create = QRCode.create;
	exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
	exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
	exports.toString = renderCanvas.bind(null, function(data, _, opts) {
		return SvgRenderer.render(data, opts);
	});
}));
//#endregion
//#region src/components/modals/ConnectWalletModal.tsx
var import_browser = /* @__PURE__ */ __toESM(require_browser(), 1);
var walletProviders = [
	{
		id: "freighter",
		name: "Freighter",
		icon: "🔐",
		installUrl: "https://www.freighter.app"
	},
	{
		id: "lobstr",
		name: "Lobstr",
		icon: "🐙",
		installUrl: "https://lobstr.co"
	},
	{
		id: "xbull",
		name: "xBull",
		icon: "🦬",
		installUrl: "https://xbull.app"
	},
	{
		id: "albedo",
		name: "Albedo",
		icon: "🌐",
		installUrl: "https://albedo.link"
	},
	{
		id: "walletconnect",
		name: "WalletConnect",
		icon: "🔗",
		installUrl: "https://walletconnect.com",
		alwaysConnect: true
	},
	{
		id: "metamask",
		name: "MetaMask",
		icon: "🦊",
		installUrl: "https://metamask.io"
	}
];
function ConnectWalletModal() {
	const { walletModalOpen, closeWalletModal, connectWallet, connectManual, t } = useApp();
	const [walletStatus, setWalletStatus] = (0, import_react.useState)({});
	const [showQR, setShowQR] = (0, import_react.useState)(null);
	const [qrDataUri, setQrDataUri] = (0, import_react.useState)("");
	const [copiedQr, setCopiedQr] = (0, import_react.useState)(false);
	const qrCanvasRef = (0, import_react.useRef)(null);
	const [manualMode, setManualMode] = (0, import_react.useState)(false);
	const [manualAddress, setManualAddress] = (0, import_react.useState)("");
	const [manualMemo, setManualMemo] = (0, import_react.useState)("");
	const [manualLoading, setManualLoading] = (0, import_react.useState)(false);
	const [manualError, setManualError] = (0, import_react.useState)("");
	const [manualSuccess, setManualSuccess] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!walletModalOpen) return;
		const detectWallets = () => {
			console.log("🔍 Wallet detection running...");
			console.log("Window available:", typeof window !== "undefined");
			console.log("Online:", typeof navigator !== "undefined" ? navigator.onLine : "N/A");
			const has = (prop) => {
				try {
					if (typeof window === "undefined") return false;
					const val = window[prop];
					if (val !== void 0 && val !== null) {
						console.log(`✅ ${prop} FOUND:`, typeof val, val.toString().substring(0, 50));
						return true;
					} else {
						console.log(`❌ ${prop} NOT found (undefined)`);
						return false;
					}
				} catch (e) {
					console.log(`⚠️ ${prop} error:`, e);
					return false;
				}
			};
			const freighterDetected = has("freighterApi") || has("freighter") || has("getFreighterPublicKey") || typeof window !== "undefined" && typeof window.getFreighterPublicKey === "function";
			const lobstrDetected = has("lobstr") || has("lobstrWallet") || typeof window !== "undefined" && (typeof window.lobstr?.getPublicKey === "function" || typeof window.lobstrWallet?.getPublicKey === "function");
			const xbullDetected = has("xbull") || has("xbullWallet") || typeof window !== "undefined" && typeof window.xbull?.getPublicKey === "function";
			const albedoDetected = has("albedo") || has("albedoWallet") || typeof window !== "undefined" && typeof window.albedo?.publicKey === "function";
			console.log("📊 Detection results:", {
				freighter: freighterDetected,
				lobstr: lobstrDetected,
				xbull: xbullDetected,
				albedo: albedoDetected,
				walletconnect: true,
				metamask: has("ethereum")
			});
			setWalletStatus({
				freighter: freighterDetected,
				lobstr: lobstrDetected,
				xbull: xbullDetected,
				albedo: albedoDetected,
				walletconnect: true,
				metamask: has("ethereum")
			});
		};
		detectWallets();
		setShowQR(null);
		setQrDataUri("");
	}, [walletModalOpen]);
	(0, import_react.useEffect)(() => {
		if (showQR !== "walletconnect") return;
		const wcUri = "wc:trustbridge-connect?version=2&symKey=" + Array.from({ length: 32 }, () => Math.random().toString(36)[2]).join("");
		import_browser.toDataURL(wcUri, {
			width: 400,
			margin: 2,
			color: {
				dark: "#0b1220",
				light: "#ffffff"
			}
		}).then(setQrDataUri).catch(() => setQrDataUri(""));
	}, [showQR]);
	const copyQrAddress = () => {
		navigator.clipboard?.writeText("trustbridge://connect");
		setCopiedQr(true);
		setTimeout(() => setCopiedQr(false), 1500);
	};
	const handleWalletClick = (w, isDetected) => {
		if (w.alwaysConnect) setShowQR(w.id);
		else if (isDetected) connectWallet(w.id);
		else window.open(w.installUrl, "_blank");
	};
	const handleManualConnect = async () => {
		setManualError("");
		setManualLoading(true);
		try {
			await connectManual(manualAddress.trim(), manualMemo.trim() || void 0);
			setManualSuccess(true);
			setTimeout(() => setManualSuccess(false), 2e3);
			setManualAddress("");
			setManualMemo("");
			setManualMode(false);
		} catch (err) {
			setManualError(err.message || "Connection failed");
		} finally {
			setManualLoading(false);
		}
	};
	if (!walletModalOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 grid place-items-center p-4 bg-black/70 backdrop-blur-sm",
		onClick: closeWalletModal,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-strong rounded-2xl w-full max-w-lg shadow-elegant border border-white/10",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-5 border-b border-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-9 h-9 rounded-lg bg-gradient-brand grid place-items-center shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "w-5 h-5 text-primary-foreground" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold",
							children: t("connectWallet")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: t("chooseWallet")
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: closeWalletModal,
						className: "w-8 h-8 grid place-items-center rounded-md hover:bg-white/5 text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 pt-3 pb-0 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] text-muted-foreground",
						children: "Wallet extensions detected in browser"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							if (typeof window !== "undefined") {
								setWalletStatus({
									freighter: !!window.freighterApi || !!window.freighter || typeof window.getFreighterPublicKey === "function",
									lobstr: !!window.lobstr || !!window.lobstrWallet,
									xbull: !!window.xbull || !!window.xbullWallet,
									albedo: !!window.albedo || !!window.albedoWallet,
									walletconnect: true,
									metamask: !!window.ethereum
								});
								console.log("🔄 Manual re-detection triggered");
								console.log("freighterApi:", window.freighterApi);
								console.log("getFreighterPublicKey:", window.getFreighterPublicKey);
								console.log("lobstr:", window.lobstr);
								console.log("xbull:", window.xbull);
								console.log("albedo:", window.albedo);
							}
						},
						className: "text-[11px] text-primary hover:underline flex items-center gap-1",
						children: "↻ Refresh"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-4 space-y-2 max-h-[60vh] overflow-y-auto",
					children: walletProviders.map((w) => {
						const isDetected = walletStatus[w.id] ?? false;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: showQR === w.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-xl bg-white/5 border border-white/10 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-center mb-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bg-white p-3 rounded-xl",
										children: qrDataUri ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: qrDataUri,
											alt: "WalletConnect QR",
											width: 200,
											height: 200,
											className: "rounded-lg"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
											ref: qrCanvasRef,
											width: 200,
											height: 200,
											className: "rounded-lg bg-gray-100"
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground break-all mb-3 font-mono",
									children: ["Scan with ", w.name]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: copyQrAddress,
										className: "flex-1 h-9 rounded-lg glass border border-white/10 text-xs font-medium hover:border-white/25 transition inline-flex items-center justify-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3 h-3" }),
											" ",
											copiedQr ? "Copied!" : "Copy Address"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setShowQR(null),
										className: "flex-1 h-9 rounded-lg bg-gradient-brand text-primary-foreground text-xs font-medium hover:shadow-glow transition",
										children: "Back"
									})]
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleWalletClick(w, isDetected),
							className: "w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 border border-white/5 hover:border-white/15 transition text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-2xl",
									children: w.icon
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-medium text-sm flex items-center gap-2",
										children: [w.name, w.alwaysConnect ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 text-[10px] text-muted-foreground font-medium",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "w-3 h-3" }), " QR CONNECT"]
										}) : isDetected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 text-[10px] text-emerald font-semibold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3 h-3" }), " ✅ DETECTED"]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 text-[10px] text-red-400 font-semibold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "w-3 h-3" }), " ❌ NOT DETECTED"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-muted-foreground",
										children: w.alwaysConnect ? "Scan QR code to connect" : isDetected ? "Click to connect your wallet" : "Wallet extension not found"
									})]
								}),
								isDetected && !w.alwaysConnect ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-primary font-medium shrink-0",
									children: t("connect")
								}) : w.alwaysConnect ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 text-xs text-muted-foreground shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "w-3 h-3" }), " Connect"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 text-xs text-muted-foreground shrink-0",
									children: [
										t("install"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3 h-3" })
									]
								})
							]
						}) }, w.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setManualMode(!manualMode),
						className: "w-full flex items-center justify-center gap-2 py-3 px-4 text-xs text-muted-foreground hover:text-foreground transition",
						children: [manualMode ? "▼" : "▶", " Enter Stellar address manually"]
					}), manualMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 pb-4 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[11px] text-muted-foreground mb-1 block",
									children: "Stellar Address (starts with G, 56 chars)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: manualAddress,
									onChange: (e) => {
										setManualAddress(e.target.value);
										setManualError("");
									},
									placeholder: "GABCDEFGHIJKLMNOPQRSTUVWXYZ234567...",
									maxLength: 56,
									className: "w-full h-10 px-3 rounded-lg bg-[#1a1f35] border border-white/10 focus:border-primary outline-none text-sm font-mono text-white"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 mt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-2 h-2 rounded-full ${manualAddress.startsWith("G") && manualAddress.length === 56 ? "bg-emerald" : "bg-white/20"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] text-muted-foreground",
										children: [
											manualAddress.length,
											"/56 chars",
											manualAddress && !manualAddress.startsWith("G") && " · Must start with G"
										]
									})]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[11px] text-muted-foreground mb-1 block",
								children: "Memo (optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: manualMemo,
								onChange: (e) => setManualMemo(e.target.value),
								placeholder: "e.g. Wallet transfer",
								className: "w-full h-10 px-3 rounded-lg bg-[#1a1f35] border border-white/10 focus:border-primary outline-none text-sm text-white"
							})] }),
							manualError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-red-400 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20",
								children: manualError
							}),
							manualSuccess && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-emerald px-3 py-2 rounded-lg bg-emerald/10 border border-emerald/20",
								children: "Wallet connected successfully!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleManualConnect,
								disabled: manualLoading || !manualAddress.startsWith("G") || manualAddress.length !== 56,
								className: "w-full h-10 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-medium hover:shadow-glow transition disabled:opacity-50 inline-flex items-center justify-center gap-2",
								children: [manualLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "w-4 h-4" }), manualLoading ? "Verifying on Stellar..." : "Connect Wallet"]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-4 text-[11px] text-muted-foreground text-center border-t border-white/10",
					children: t("byConnecting")
				})
			]
		})
	});
}
//#endregion
//#region src/components/modals/DonateModal.tsx
var presets = [
	10,
	25,
	50,
	100,
	250
];
function DonateModal() {
	const { donateTarget, closeDonate, wallet, openWalletModal } = useApp();
	const [step, setStep] = (0, import_react.useState)(1);
	const [amount, setAmount] = (0, import_react.useState)(25);
	const [custom, setCustom] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (donateTarget) {
			setStep(1);
			setAmount(25);
			setCustom("");
		}
	}, [donateTarget]);
	if (!donateTarget) return null;
	const finalAmount = custom ? Number(custom) || 0 : amount;
	const fee = 1e-5;
	const confirm = () => {
		setStep(2);
		setTimeout(() => setStep(3), 1800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 grid place-items-center p-4 bg-black/60 backdrop-blur-sm",
		onClick: closeDonate,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-strong rounded-2xl w-full max-w-md shadow-elegant",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between p-5 border-b border-white/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: "Donate to"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display font-semibold truncate",
					children: donateTarget.title
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: closeDonate,
					className: "w-8 h-8 grid place-items-center rounded-md hover:bg-white/5 text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5",
				children: [
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wider text-muted-foreground mb-3",
							children: "Select amount (XLM)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-2 mb-4",
							children: presets.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setAmount(p);
									setCustom("");
								},
								className: `h-11 rounded-lg border text-sm font-medium transition ${!custom && amount === p ? "bg-primary/15 border-primary text-primary" : "border-white/10 hover:border-white/25"}`,
								children: p
							}, p))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							placeholder: "Custom amount",
							value: custom,
							onChange: (e) => setCustom(e.target.value),
							className: "w-full h-11 px-4 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Amount",
									value: `${finalAmount} XLM`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Network fee",
									value: `${fee} XLM`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Total",
									value: `${(finalAmount + fee).toFixed(5)} XLM`,
									bold: true
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							disabled: finalAmount <= 0,
							onClick: () => wallet.connected ? confirm() : openWalletModal(),
							className: "mt-6 w-full h-11 rounded-xl bg-gradient-brand text-primary-foreground font-medium inline-flex items-center justify-center gap-2 disabled:opacity-50 hover:shadow-glow transition",
							children: [wallet.connected ? "Confirm donation" : "Connect wallet to donate", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
						})
					] }),
					step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-10 h-10 mx-auto text-primary animate-spin mb-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium",
								children: "Broadcasting transaction…"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground mt-1",
								children: "Waiting for Stellar confirmation"
							})
						]
					}),
					step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-16 h-16 rounded-full bg-emerald/20 grid place-items-center mx-auto mb-4 animate-float",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-9 h-9 text-emerald" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-xl font-semibold",
								children: "Thank you!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground mt-2 max-w-xs mx-auto",
								children: [
									"Your ",
									finalAmount,
									" XLM donation to ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground",
										children: donateTarget.title
									}),
									" was confirmed on-chain."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: closeDonate,
									className: "flex-1 h-10 rounded-lg glass hover:border-white/25 transition text-sm",
									children: "Close"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: closeDonate,
									className: "flex-1 h-10 rounded-lg bg-gradient-brand text-primary-foreground inline-flex items-center justify-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-4 h-4" }), " Share"]
								})]
							})
						]
					})
				]
			})]
		})
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
export { ArrowLeftRight as C, ArrowRight as S, CirclePlus as _, Wallet as a, Bug as b, Pin as c, LogOut as d, Lightbulb as f, Copy as g, ExternalLink as h, Sidebar as i, MessageSquare as l, Globe as m, ConnectWalletModal as n, Users as o, Heart as p, require_browser as r, User as s, DonateModal as t, Megaphone as u, CircleCheck as v, useRouterState as w, Bell as x, ChevronDown as y };
