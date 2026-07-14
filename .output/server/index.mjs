globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, i as defineLazyEventHandler, n as HTTPError, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
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
	"/assets/-community-page-CWHEyc-A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a03-XmtwlAw7v67fnjyDd0ph6co4sDM\"",
		"mtime": "2026-07-14T09:47:12.214Z",
		"size": 10755,
		"path": "../public/assets/-community-page-CWHEyc-A.js"
	},
	"/assets/announcements-D8pSEzL9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3-XWiCFNbR8bVt7iXFMc0AnwGwBic\"",
		"mtime": "2026-07-14T09:47:12.214Z",
		"size": 163,
		"path": "../public/assets/announcements-D8pSEzL9.js"
	},
	"/assets/AppShell-Bq17uE1-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"39d-rG8bvWV/d2f2OGFvfpicLC1ZJvg\"",
		"mtime": "2026-07-14T09:47:12.214Z",
		"size": 925,
		"path": "../public/assets/AppShell-Bq17uE1-.js"
	},
	"/assets/campaigns-B2W0svqL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1883-tjkreytCa47lGe8EeWt4Qs/FZrk\"",
		"mtime": "2026-07-14T09:47:12.230Z",
		"size": 6275,
		"path": "../public/assets/campaigns-B2W0svqL.js"
	},
	"/assets/analytics-BYlyq0OJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b10-FGwV4r1gill7AP8/A/sICDLjGw8\"",
		"mtime": "2026-07-14T09:47:12.214Z",
		"size": 6928,
		"path": "../public/assets/analytics-BYlyq0OJ.js"
	},
	"/assets/bugs-ByNut6Vm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-xGV6DPoxMLhJd3mlC1YG32Hg3jI\"",
		"mtime": "2026-07-14T09:47:12.228Z",
		"size": 154,
		"path": "../public/assets/bugs-ByNut6Vm.js"
	},
	"/assets/create-campaign-BCG3ODRM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14f4-lzYIt2JCM3AEKCPX3nqXHFlyumA\"",
		"mtime": "2026-07-14T09:47:12.231Z",
		"size": 5364,
		"path": "../public/assets/create-campaign-BCG3ODRM.js"
	},
	"/assets/dashboard-CnjQrNgY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20fd-3UqcR/LIGaQx3SJ1lZ6WYuLtlW8\"",
		"mtime": "2026-07-14T09:47:12.231Z",
		"size": 8445,
		"path": "../public/assets/dashboard-CnjQrNgY.js"
	},
	"/assets/DonateModal-el721E0Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c61c-XvTy1NkE3KchZruzrs6tSwrySQw\"",
		"mtime": "2026-07-14T09:47:12.214Z",
		"size": 50716,
		"path": "../public/assets/DonateModal-el721E0Y.js"
	},
	"/assets/eye-off-BuUhw1Lk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a4-iEmDsbNp73mLrhQM9SJTURTuSeE\"",
		"mtime": "2026-07-14T09:47:12.232Z",
		"size": 420,
		"path": "../public/assets/eye-off-BuUhw1Lk.js"
	},
	"/assets/features-C5p3-LX_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-kF8vF3ww96UK48MsJTbzTnKFhTo\"",
		"mtime": "2026-07-14T09:47:12.232Z",
		"size": 158,
		"path": "../public/assets/features-C5p3-LX_.js"
	},
	"/assets/lock-6CB3lfkb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18f-7GdTYOiH9YGi4CDHb7Cw9NDVEG8\"",
		"mtime": "2026-07-14T09:47:12.236Z",
		"size": 399,
		"path": "../public/assets/lock-6CB3lfkb.js"
	},
	"/assets/general-DIiMdGRA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d-r3JRSjmFQMj01SwQKE3jFrqX6kg\"",
		"mtime": "2026-07-14T09:47:12.232Z",
		"size": 157,
		"path": "../public/assets/general-DIiMdGRA.js"
	},
	"/assets/login-gEgJLULB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1513-jmvjSU1lrkP2Mk0AU8gqGRATtlY\"",
		"mtime": "2026-07-14T09:47:12.237Z",
		"size": 5395,
		"path": "../public/assets/login-gEgJLULB.js"
	},
	"/assets/mail-YGGImUcq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-bkyKjRgAKhbzSf/JzqEfvnL+kFM\"",
		"mtime": "2026-07-14T09:47:12.238Z",
		"size": 203,
		"path": "../public/assets/mail-YGGImUcq.js"
	},
	"/assets/network-CXU4kKOF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-ojZaXwa164GnP0b+V2MPIKLeqO4\"",
		"mtime": "2026-07-14T09:47:12.297Z",
		"size": 374,
		"path": "../public/assets/network-CXU4kKOF.js"
	},
	"/assets/message-circle-Lj5ZeqZ-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e7-XofQ2dVGMN8ytAQZ787oMEt/xaY\"",
		"mtime": "2026-07-14T09:47:12.297Z",
		"size": 231,
		"path": "../public/assets/message-circle-Lj5ZeqZ-.js"
	},
	"/assets/profile-CN8fZLNu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c5c-pj1+iDZvuJ24+vdxzWFMVYyT75U\"",
		"mtime": "2026-07-14T09:47:12.297Z",
		"size": 7260,
		"path": "../public/assets/profile-CN8fZLNu.js"
	},
	"/assets/RequireAuth-Cy8knTBe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"139-GYlGs0jT4P7W+9Z1WnANZ/mZzsk\"",
		"mtime": "2026-07-14T09:47:12.214Z",
		"size": 313,
		"path": "../public/assets/RequireAuth-Cy8knTBe.js"
	},
	"/assets/receive-CG9t2T9h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"de3-2I5whOpOmJTnGlULeCwkAbeu5WA\"",
		"mtime": "2026-07-14T09:47:12.297Z",
		"size": 3555,
		"path": "../public/assets/receive-CG9t2T9h.js"
	},
	"/assets/routes-Cw6smQom.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"329b-TiGFR/e2MURqcpggpkiuPvTzm3g\"",
		"mtime": "2026-07-14T09:47:12.297Z",
		"size": 12955,
		"path": "../public/assets/routes-Cw6smQom.js"
	},
	"/assets/search-DKeTf8Ws.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-S3MYzHFDV8SVhxnPkhIGJbgfr2E\"",
		"mtime": "2026-07-14T09:47:12.297Z",
		"size": 164,
		"path": "../public/assets/search-DKeTf8Ws.js"
	},
	"/assets/index-4fH0q2Il.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d413-RtW/lrD0H03+5BjY6aLfM3dHijY\"",
		"mtime": "2026-07-14T09:47:12.214Z",
		"size": 316435,
		"path": "../public/assets/index-4fH0q2Il.js"
	},
	"/assets/send-BQocS4Ev.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ccb-qAh5llPXYR1a4JESDp4B6OJABhU\"",
		"mtime": "2026-07-14T09:47:12.297Z",
		"size": 3275,
		"path": "../public/assets/send-BQocS4Ev.js"
	},
	"/assets/send-DK_B_AEP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"118-TeiZ08X5HzT6ydoqyCTxoDsami8\"",
		"mtime": "2026-07-14T09:47:12.297Z",
		"size": 280,
		"path": "../public/assets/send-DK_B_AEP.js"
	},
	"/assets/settings-DT7WovrN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bb2-EBOw4iwSaXBipzLZnCYCzpkRnAo\"",
		"mtime": "2026-07-14T09:47:12.297Z",
		"size": 11186,
		"path": "../public/assets/settings-DT7WovrN.js"
	},
	"/assets/shield-BzJ5Tzhk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57b-V6rVyRUmIrquEt3qtkcFsUYtpdk\"",
		"mtime": "2026-07-14T09:47:12.310Z",
		"size": 1403,
		"path": "../public/assets/shield-BzJ5Tzhk.js"
	},
	"/assets/signup-COkwX-xS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d24-r9KXDzZ9JJTXkNss86UiFZjBy6w\"",
		"mtime": "2026-07-14T09:47:12.311Z",
		"size": 11556,
		"path": "../public/assets/signup-COkwX-xS.js"
	},
	"/assets/sparkles-DuC9uUdC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e4-KuFcLFO0idWLh5X7IQWW14Bb6iA\"",
		"mtime": "2026-07-14T09:47:12.312Z",
		"size": 484,
		"path": "../public/assets/sparkles-DuC9uUdC.js"
	},
	"/assets/styles-D_TJyQSk.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18915-2vA9VHWeWAKJs+vUY5jBFWzFjEU\"",
		"mtime": "2026-07-14T09:47:12.314Z",
		"size": 100629,
		"path": "../public/assets/styles-D_TJyQSk.css"
	},
	"/assets/support-C60k3zH0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d-Z6iZcx27eu/ntsadqXCMFeO2Zck\"",
		"mtime": "2026-07-14T09:47:12.312Z",
		"size": 157,
		"path": "../public/assets/support-C60k3zH0.js"
	},
	"/assets/transactions-DFVfLJaW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1444-5TuZDc4xVH6I7tkI0gYy/yGDM/U\"",
		"mtime": "2026-07-14T09:47:12.314Z",
		"size": 5188,
		"path": "../public/assets/transactions-DFVfLJaW.js"
	},
	"/assets/ui-bits-DNtKbXFk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"58c-eGZdSLpe9fviXH4NIiOAtOYHMI0\"",
		"mtime": "2026-07-14T09:47:12.314Z",
		"size": 1420,
		"path": "../public/assets/ui-bits-DNtKbXFk.js"
	},
	"/assets/updates-Dd42sAyR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d-lgf/zLXbGC0dNT4karuUmMlul2w\"",
		"mtime": "2026-07-14T09:47:12.314Z",
		"size": 157,
		"path": "../public/assets/updates-Dd42sAyR.js"
	},
	"/assets/user-plus-C55YK2TP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12c-MeXG0khGbQFrLS9FsRAJrAaNQrw\"",
		"mtime": "2026-07-14T09:47:12.314Z",
		"size": 300,
		"path": "../public/assets/user-plus-C55YK2TP.js"
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
