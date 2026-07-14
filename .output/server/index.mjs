globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, i as defineLazyEventHandler, n as HTTPError, t as H3Core } from "./_libs/h3+rou3+srvx+unenv.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/announcements-AwVjFoJt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3-AC53zDcYDiDrp7EugvGkTM49GEM\"",
		"mtime": "2026-07-10T22:06:32.778Z",
		"size": 163,
		"path": "../public/assets/announcements-AwVjFoJt.js"
	},
	"/assets/-community-page-uAOoAPep.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29fe-oqRpdVx4MqKbBdhZ9DZE+oEl1g4\"",
		"mtime": "2026-07-10T22:06:32.535Z",
		"size": 10750,
		"path": "../public/assets/-community-page-uAOoAPep.js"
	},
	"/assets/analytics-Dt_tEUEQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aca-h/3cZ8Cqn0sGbukp3g8XxdFMa/g\"",
		"mtime": "2026-07-10T22:06:32.670Z",
		"size": 6858,
		"path": "../public/assets/analytics-Dt_tEUEQ.js"
	},
	"/assets/create-campaign-DXk8lGh7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14ae-dO14O/9wKvHCiTDRfd6nq0I1oDs\"",
		"mtime": "2026-07-10T22:06:32.819Z",
		"size": 5294,
		"path": "../public/assets/create-campaign-DXk8lGh7.js"
	},
	"/assets/dashboard-CX5jFGES.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20b7-ciZCL+zm8cA04EbsCmd6VP5LNfo\"",
		"mtime": "2026-07-10T22:06:32.869Z",
		"size": 8375,
		"path": "../public/assets/dashboard-CX5jFGES.js"
	},
	"/assets/DonateModal-wuO5cBUb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b0f6-+bKQIq4QAdi+JQUIShGrEmWqKcA\"",
		"mtime": "2026-07-10T22:06:32.658Z",
		"size": 45302,
		"path": "../public/assets/DonateModal-wuO5cBUb.js"
	},
	"/assets/features-keLYLzIh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-kN/DAFSxcTKIxjdABOkHGifGnck\"",
		"mtime": "2026-07-10T22:06:32.902Z",
		"size": 158,
		"path": "../public/assets/features-keLYLzIh.js"
	},
	"/assets/general-D6DmpDUo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d-4RwHThYaqi/Lz8gmlljchSan4Qk\"",
		"mtime": "2026-07-10T22:06:32.902Z",
		"size": 157,
		"path": "../public/assets/general-D6DmpDUo.js"
	},
	"/assets/index-CGvcgWkX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"58f65-RK5xqEOL3WcuteVZc4KXaktrcik\"",
		"mtime": "2026-07-10T22:06:32.520Z",
		"size": 364389,
		"path": "../public/assets/index-CGvcgWkX.js"
	},
	"/assets/lock-DZpSs8lo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18f-x460QASZ3TGu13J2dupZ966Ezwk\"",
		"mtime": "2026-07-10T22:06:32.902Z",
		"size": 399,
		"path": "../public/assets/lock-DZpSs8lo.js"
	},
	"/assets/login-CFLo_CQU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dd3-m2Nqt3g8wwLZro0uyorJFT5zEvo\"",
		"mtime": "2026-07-10T22:06:32.902Z",
		"size": 7635,
		"path": "../public/assets/login-CFLo_CQU.js"
	},
	"/assets/message-circle-1zb1dyp5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e7-fjz7bBxZUo0fXLSgt3HfGKPGe6o\"",
		"mtime": "2026-07-10T22:06:32.902Z",
		"size": 231,
		"path": "../public/assets/message-circle-1zb1dyp5.js"
	},
	"/assets/network-CC2G0eAp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-y2UExC0ZACVRuFhY0hNzyluXiK8\"",
		"mtime": "2026-07-10T22:06:32.902Z",
		"size": 374,
		"path": "../public/assets/network-CC2G0eAp.js"
	},
	"/assets/receive-BgCNkyq1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"de3-oQuTw2h0byeoNytQxaPwE98EyLw\"",
		"mtime": "2026-07-10T22:06:32.902Z",
		"size": 3555,
		"path": "../public/assets/receive-BgCNkyq1.js"
	},
	"/assets/routes--FZiKW3C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3291-z6M6P6cbnBK4UFI0uebGi6pCnWU\"",
		"mtime": "2026-07-10T22:06:32.902Z",
		"size": 12945,
		"path": "../public/assets/routes--FZiKW3C.js"
	},
	"/assets/search-DgQlcJ4H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-d427z1IQ1a8clJIS5A6FJcYZthQ\"",
		"mtime": "2026-07-10T22:06:32.902Z",
		"size": 164,
		"path": "../public/assets/search-DgQlcJ4H.js"
	},
	"/assets/send-Bj7M753S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"118-7YTc1jKB7QYlDkIwdt//jtkTNBA\"",
		"mtime": "2026-07-10T22:06:32.902Z",
		"size": 280,
		"path": "../public/assets/send-Bj7M753S.js"
	},
	"/assets/send-C9E2WXLE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cc6-Ia02rF9GvVmpwoe4V+fkd8B4fl4\"",
		"mtime": "2026-07-10T22:06:32.918Z",
		"size": 3270,
		"path": "../public/assets/send-C9E2WXLE.js"
	},
	"/assets/settings-BYSscqhC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"166c-oztrtb7/V8zpMvclU4L5ukY4U/M\"",
		"mtime": "2026-07-10T22:06:32.952Z",
		"size": 5740,
		"path": "../public/assets/settings-BYSscqhC.js"
	},
	"/assets/shield-D78VY5gV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57b-0VRlktfnOhToGFVFoCi7tPmY67E\"",
		"mtime": "2026-07-10T22:06:33.052Z",
		"size": 1403,
		"path": "../public/assets/shield-D78VY5gV.js"
	},
	"/assets/AppShell-Dk7NKpv9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"39d-gbFUaNvapaq9L8DYPSav1QnKgpg\"",
		"mtime": "2026-07-10T22:06:32.656Z",
		"size": 925,
		"path": "../public/assets/AppShell-Dk7NKpv9.js"
	},
	"/assets/bugs-CMazPS5M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-X6dVBc+wuYt/yGXplM0X8fnal2Y\"",
		"mtime": "2026-07-10T22:06:32.778Z",
		"size": 154,
		"path": "../public/assets/bugs-CMazPS5M.js"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"2532-P1u486agW3ymimJYHS3VvIiBLK8\"",
		"mtime": "2026-06-19T19:38:41.799Z",
		"size": 9522,
		"path": "../public/favicon.svg"
	},
	"/icons.svg": {
		"type": "image/svg+xml",
		"etag": "\"13a7-+Yl6wl4T3p6mAdLxrF2TU9++/No\"",
		"mtime": "2026-06-19T19:38:42.715Z",
		"size": 5031,
		"path": "../public/icons.svg"
	},
	"/assets/campaigns-jUJYk0_r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"183d-34P3SQbujF5eeXwgY95o8fdjdXQ\"",
		"mtime": "2026-07-10T22:06:32.778Z",
		"size": 6205,
		"path": "../public/assets/campaigns-jUJYk0_r.js"
	},
	"/assets/sparkles-CUuFkeZG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e4-Qlo7NmkLl/LuI41yodDbXykBJD0\"",
		"mtime": "2026-07-10T22:06:33.109Z",
		"size": 484,
		"path": "../public/assets/sparkles-CUuFkeZG.js"
	},
	"/assets/transactions-CV-7Bx0M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13fe-ZuhwVrwoyQo5X8mM7lFHQGfD8k4\"",
		"mtime": "2026-07-10T22:06:33.205Z",
		"size": 5118,
		"path": "../public/assets/transactions-CV-7Bx0M.js"
	},
	"/assets/updates-BPsBlUiN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d-RhPqm79mDgYRPCCLxBPb1QbkYKY\"",
		"mtime": "2026-07-10T22:06:33.399Z",
		"size": 157,
		"path": "../public/assets/updates-BPsBlUiN.js"
	},
	"/assets/styles-DMt32QEk.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1828c-4DzAdbGP2nNJNAGe2xfCb5xaR2o\"",
		"mtime": "2026-07-10T22:06:33.399Z",
		"size": 98956,
		"path": "../public/assets/styles-DMt32QEk.css"
	},
	"/assets/support-CxUrrnPY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d-TZl2b3FuB3tLgSuPIjLG01DOZz8\"",
		"mtime": "2026-07-10T22:06:33.177Z",
		"size": 157,
		"path": "../public/assets/support-CxUrrnPY.js"
	},
	"/assets/ui-bits-CInUjxXq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"58c-TSWa4Z2/Je48uBWgrZSHWxnYKZs\"",
		"mtime": "2026-07-10T22:06:33.399Z",
		"size": 1420,
		"path": "../public/assets/ui-bits-CInUjxXq.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_0Swi22 = defineLazyEventHandler(() => import("./_chunks/renderer-template.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_0Swi22
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
