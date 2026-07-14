const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/transactions-CD8SMCwt.js","assets/DonateModal-CvlrMbxO.js","assets/shield-DUH9ghp3.js","assets/user-plus-wH68-dT6.js","assets/search-BrsCgezH.js","assets/AppShell-DqUipN0r.js","assets/RequireAuth-Ct5nOfLe.js","assets/ui-bits-Co8MTWsV.js","assets/signup-DpXOtkse.js","assets/eye-off-CrJ4xYoz.js","assets/lock-Dx65nQ1I.js","assets/mail-BKrHFjND.js","assets/settings-BmJnZ1JM.js","assets/send-B3OFdjdH.js","assets/send-DciIVVlX.js","assets/receive-CFjaeFKi.js","assets/profile-Cez2q_it.js","assets/login-CpCoWf57.js","assets/dashboard-BxXOMxYe.js","assets/network-BrJI6LSM.js","assets/create-campaign-CzIgPqy7.js","assets/sparkles-BPzokvDp.js","assets/campaigns-lEa2ktCi.js","assets/analytics-rlnsGwQs.js","assets/routes-BBi5o6pa.js","assets/message-circle-COJI8mxL.js","assets/updates-B4mgw_L9.js","assets/-community-page-DHaQoIhK.js","assets/support-DQE9AhFq.js","assets/general-D2Vh6Nz2.js","assets/features-B679-tjK.js","assets/bugs-DJhB1-kk.js","assets/announcements-11FmRZ88.js"])))=>i.map(i=>d[i]);
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
//#region node_modules/react/cjs/react.production.min.js
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
	function A(a) {
		if (null === a || "object" !== typeof a) return null;
		a = z && a[z] || a["@@iterator"];
		return "function" === typeof a ? a : null;
	}
	var B = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, C = Object.assign, D = {};
	function E(a, b, e) {
		this.props = a;
		this.context = b;
		this.refs = D;
		this.updater = e || B;
	}
	E.prototype.isReactComponent = {};
	E.prototype.setState = function(a, b) {
		if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, a, b, "setState");
	};
	E.prototype.forceUpdate = function(a) {
		this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};
	function F() {}
	F.prototype = E.prototype;
	function G(a, b, e) {
		this.props = a;
		this.context = b;
		this.refs = D;
		this.updater = e || B;
	}
	var H = G.prototype = new F();
	H.constructor = G;
	C(H, E.prototype);
	H.isPureReactComponent = !0;
	var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = { current: null }, L = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function M(a, b, e) {
		var d, c = {}, k = null, h = null;
		if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
		var g = arguments.length - 2;
		if (1 === g) c.children = e;
		else if (1 < g) {
			for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
			c.children = f;
		}
		if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
		return {
			$$typeof: l,
			type: a,
			key: k,
			ref: h,
			props: c,
			_owner: K.current
		};
	}
	function N(a, b) {
		return {
			$$typeof: l,
			type: a.type,
			key: b,
			ref: a.ref,
			props: a.props,
			_owner: a._owner
		};
	}
	function O(a) {
		return "object" === typeof a && null !== a && a.$$typeof === l;
	}
	function escape(a) {
		var b = {
			"=": "=0",
			":": "=2"
		};
		return "$" + a.replace(/[=:]/g, function(a) {
			return b[a];
		});
	}
	var P = /\/+/g;
	function Q(a, b) {
		return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	}
	function R(a, b, e, d, c) {
		var k = typeof a;
		if ("undefined" === k || "boolean" === k) a = null;
		var h = !1;
		if (null === a) h = !0;
		else switch (k) {
			case "string":
			case "number":
				h = !0;
				break;
			case "object": switch (a.$$typeof) {
				case l:
				case n: h = !0;
			}
		}
		if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a) {
			return a;
		})) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
		h = 0;
		d = "" === d ? "." : d + ":";
		if (I(a)) for (var g = 0; g < a.length; g++) {
			k = a[g];
			var f = d + Q(k, g);
			h += R(k, b, e, f, c);
		}
		else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
		else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
		return h;
	}
	function S(a, b, e) {
		if (null == a) return a;
		var d = [], c = 0;
		R(a, d, "", "", function(a) {
			return b.call(e, a, c++);
		});
		return d;
	}
	function T(a) {
		if (-1 === a._status) {
			var b = a._result;
			b = b();
			b.then(function(b) {
				if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
			}, function(b) {
				if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
			});
			-1 === a._status && (a._status = 0, a._result = b);
		}
		if (1 === a._status) return a._result.default;
		throw a._result;
	}
	var U = { current: null }, V = { transition: null }, W = {
		ReactCurrentDispatcher: U,
		ReactCurrentBatchConfig: V,
		ReactCurrentOwner: K
	};
	function X() {
		throw Error("act(...) is not supported in production builds of React.");
	}
	exports.Children = {
		map: S,
		forEach: function(a, b, e) {
			S(a, function() {
				b.apply(this, arguments);
			}, e);
		},
		count: function(a) {
			var b = 0;
			S(a, function() {
				b++;
			});
			return b;
		},
		toArray: function(a) {
			return S(a, function(a) {
				return a;
			}) || [];
		},
		only: function(a) {
			if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
			return a;
		}
	};
	exports.Component = E;
	exports.Fragment = p;
	exports.Profiler = r;
	exports.PureComponent = G;
	exports.StrictMode = q;
	exports.Suspense = w;
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
	exports.act = X;
	exports.cloneElement = function(a, b, e) {
		if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
		var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
		if (null != b) {
			void 0 !== b.ref && (k = b.ref, h = K.current);
			void 0 !== b.key && (c = "" + b.key);
			if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
			for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
		}
		var f = arguments.length - 2;
		if (1 === f) d.children = e;
		else if (1 < f) {
			g = Array(f);
			for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
			d.children = g;
		}
		return {
			$$typeof: l,
			type: a.type,
			key: c,
			ref: k,
			props: d,
			_owner: h
		};
	};
	exports.createContext = function(a) {
		a = {
			$$typeof: u,
			_currentValue: a,
			_currentValue2: a,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		};
		a.Provider = {
			$$typeof: t,
			_context: a
		};
		return a.Consumer = a;
	};
	exports.createElement = M;
	exports.createFactory = function(a) {
		var b = M.bind(null, a);
		b.type = a;
		return b;
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(a) {
		return {
			$$typeof: v,
			render: a
		};
	};
	exports.isValidElement = O;
	exports.lazy = function(a) {
		return {
			$$typeof: y,
			_payload: {
				_status: -1,
				_result: a
			},
			_init: T
		};
	};
	exports.memo = function(a, b) {
		return {
			$$typeof: x,
			type: a,
			compare: void 0 === b ? null : b
		};
	};
	exports.startTransition = function(a) {
		var b = V.transition;
		V.transition = {};
		try {
			a();
		} finally {
			V.transition = b;
		}
	};
	exports.unstable_act = X;
	exports.useCallback = function(a, b) {
		return U.current.useCallback(a, b);
	};
	exports.useContext = function(a) {
		return U.current.useContext(a);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(a) {
		return U.current.useDeferredValue(a);
	};
	exports.useEffect = function(a, b) {
		return U.current.useEffect(a, b);
	};
	exports.useId = function() {
		return U.current.useId();
	};
	exports.useImperativeHandle = function(a, b, e) {
		return U.current.useImperativeHandle(a, b, e);
	};
	exports.useInsertionEffect = function(a, b) {
		return U.current.useInsertionEffect(a, b);
	};
	exports.useLayoutEffect = function(a, b) {
		return U.current.useLayoutEffect(a, b);
	};
	exports.useMemo = function(a, b) {
		return U.current.useMemo(a, b);
	};
	exports.useReducer = function(a, b, e) {
		return U.current.useReducer(a, b, e);
	};
	exports.useRef = function(a) {
		return U.current.useRef(a);
	};
	exports.useState = function(a) {
		return U.current.useState(a);
	};
	exports.useSyncExternalStore = function(a, b, e) {
		return U.current.useSyncExternalStore(a, b, e);
	};
	exports.useTransition = function() {
		return U.current.useTransition();
	};
	exports.version = "18.3.1";
}));
//#endregion
//#region node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_production_min();
}));
//#endregion
//#region node_modules/scheduler/cjs/scheduler.production.min.js
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_scheduler_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	function f(a, b) {
		var c = a.length;
		a.push(b);
		a: for (; 0 < c;) {
			var d = c - 1 >>> 1, e = a[d];
			if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
			else break a;
		}
	}
	function h(a) {
		return 0 === a.length ? null : a[0];
	}
	function k(a) {
		if (0 === a.length) return null;
		var b = a[0], c = a.pop();
		if (c !== b) {
			a[0] = c;
			a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
				var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
				if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
				else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
				else break a;
			}
		}
		return b;
	}
	function g(a, b) {
		var c = a.sortIndex - b.sortIndex;
		return 0 !== c ? c : a.id - b.id;
	}
	if ("object" === typeof performance && "function" === typeof performance.now) {
		var l = performance;
		exports.unstable_now = function() {
			return l.now();
		};
	} else {
		var p = Date, q = p.now();
		exports.unstable_now = function() {
			return p.now() - q;
		};
	}
	var r = [], t = [], u = 1, v = null, y = 3, z = !1, A = !1, B = !1, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
	"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function G(a) {
		for (var b = h(t); null !== b;) {
			if (null === b.callback) k(t);
			else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
			else break;
			b = h(t);
		}
	}
	function H(a) {
		B = !1;
		G(a);
		if (!A) if (null !== h(r)) A = !0, I(J);
		else {
			var b = h(t);
			null !== b && K(H, b.startTime - a);
		}
	}
	function J(a, b) {
		A = !1;
		B && (B = !1, E(L), L = -1);
		z = !0;
		var c = y;
		try {
			G(b);
			for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
				var d = v.callback;
				if ("function" === typeof d) {
					v.callback = null;
					y = v.priorityLevel;
					var e = d(v.expirationTime <= b);
					b = exports.unstable_now();
					"function" === typeof e ? v.callback = e : v === h(r) && k(r);
					G(b);
				} else k(r);
				v = h(r);
			}
			if (null !== v) var w = !0;
			else {
				var m = h(t);
				null !== m && K(H, m.startTime - b);
				w = !1;
			}
			return w;
		} finally {
			v = null, y = c, z = !1;
		}
	}
	var N = !1, O = null, L = -1, P = 5, Q = -1;
	function M() {
		return exports.unstable_now() - Q < P ? !1 : !0;
	}
	function R() {
		if (null !== O) {
			var a = exports.unstable_now();
			Q = a;
			var b = !0;
			try {
				b = O(!0, a);
			} finally {
				b ? S() : (N = !1, O = null);
			}
		} else N = !1;
	}
	var S;
	if ("function" === typeof F) S = function() {
		F(R);
	};
	else if ("undefined" !== typeof MessageChannel) {
		var T = new MessageChannel(), U = T.port2;
		T.port1.onmessage = R;
		S = function() {
			U.postMessage(null);
		};
	} else S = function() {
		D(R, 0);
	};
	function I(a) {
		O = a;
		N || (N = !0, S());
	}
	function K(a, b) {
		L = D(function() {
			a(exports.unstable_now());
		}, b);
	}
	exports.unstable_IdlePriority = 5;
	exports.unstable_ImmediatePriority = 1;
	exports.unstable_LowPriority = 4;
	exports.unstable_NormalPriority = 3;
	exports.unstable_Profiling = null;
	exports.unstable_UserBlockingPriority = 2;
	exports.unstable_cancelCallback = function(a) {
		a.callback = null;
	};
	exports.unstable_continueExecution = function() {
		A || z || (A = !0, I(J));
	};
	exports.unstable_forceFrameRate = function(a) {
		0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
	};
	exports.unstable_getCurrentPriorityLevel = function() {
		return y;
	};
	exports.unstable_getFirstCallbackNode = function() {
		return h(r);
	};
	exports.unstable_next = function(a) {
		switch (y) {
			case 1:
			case 2:
			case 3:
				var b = 3;
				break;
			default: b = y;
		}
		var c = y;
		y = b;
		try {
			return a();
		} finally {
			y = c;
		}
	};
	exports.unstable_pauseExecution = function() {};
	exports.unstable_requestPaint = function() {};
	exports.unstable_runWithPriority = function(a, b) {
		switch (a) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: a = 3;
		}
		var c = y;
		y = a;
		try {
			return b();
		} finally {
			y = c;
		}
	};
	exports.unstable_scheduleCallback = function(a, b, c) {
		var d = exports.unstable_now();
		"object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
		switch (a) {
			case 1:
				var e = -1;
				break;
			case 2:
				e = 250;
				break;
			case 5:
				e = 1073741823;
				break;
			case 4:
				e = 1e4;
				break;
			default: e = 5e3;
		}
		e = c + e;
		a = {
			id: u++,
			callback: b,
			priorityLevel: a,
			startTime: c,
			expirationTime: e,
			sortIndex: -1
		};
		c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
		return a;
	};
	exports.unstable_shouldYield = M;
	exports.unstable_wrapCallback = function(a) {
		var b = y;
		return function() {
			var c = y;
			y = b;
			try {
				return a.apply(this, arguments);
			} finally {
				y = c;
			}
		};
	};
}));
//#endregion
//#region node_modules/scheduler/index.js
var require_scheduler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_scheduler_production_min();
}));
//#endregion
//#region node_modules/react-dom/cjs/react-dom.production.min.js
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var aa = require_react(), ca = require_scheduler();
	function p(a) {
		for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
		return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var da = /* @__PURE__ */ new Set(), ea = {};
	function fa(a, b) {
		ha(a, b);
		ha(a + "Capture", b);
	}
	function ha(a, b) {
		ea[a] = b;
		for (a = 0; a < b.length; a++) da.add(b[a]);
	}
	var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
	function oa(a) {
		if (ja.call(ma, a)) return !0;
		if (ja.call(la, a)) return !1;
		if (ka.test(a)) return ma[a] = !0;
		la[a] = !0;
		return !1;
	}
	function pa(a, b, c, d) {
		if (null !== c && 0 === c.type) return !1;
		switch (typeof b) {
			case "function":
			case "symbol": return !0;
			case "boolean":
				if (d) return !1;
				if (null !== c) return !c.acceptsBooleans;
				a = a.toLowerCase().slice(0, 5);
				return "data-" !== a && "aria-" !== a;
			default: return !1;
		}
	}
	function qa(a, b, c, d) {
		if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
		if (d) return !1;
		if (null !== c) switch (c.type) {
			case 3: return !b;
			case 4: return !1 === b;
			case 5: return isNaN(b);
			case 6: return isNaN(b) || 1 > b;
		}
		return !1;
	}
	function v(a, b, c, d, e, f, g) {
		this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
		this.attributeName = d;
		this.attributeNamespace = e;
		this.mustUseProperty = c;
		this.propertyName = a;
		this.type = b;
		this.sanitizeURL = f;
		this.removeEmptyString = g;
	}
	var z = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
		z[a] = new v(a, 0, !1, a, null, !1, !1);
	});
	[
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach(function(a) {
		var b = a[0];
		z[b] = new v(b, 1, !1, a[1], null, !1, !1);
	});
	[
		"contentEditable",
		"draggable",
		"spellCheck",
		"value"
	].forEach(function(a) {
		z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
	});
	[
		"autoReverse",
		"externalResourcesRequired",
		"focusable",
		"preserveAlpha"
	].forEach(function(a) {
		z[a] = new v(a, 2, !1, a, null, !1, !1);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
		z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
	});
	[
		"checked",
		"multiple",
		"muted",
		"selected"
	].forEach(function(a) {
		z[a] = new v(a, 3, !0, a, null, !1, !1);
	});
	["capture", "download"].forEach(function(a) {
		z[a] = new v(a, 4, !1, a, null, !1, !1);
	});
	[
		"cols",
		"rows",
		"size",
		"span"
	].forEach(function(a) {
		z[a] = new v(a, 6, !1, a, null, !1, !1);
	});
	["rowSpan", "start"].forEach(function(a) {
		z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
	});
	var ra = /[\-:]([a-z])/g;
	function sa(a) {
		return a[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, null, !1, !1);
	});
	"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
	});
	[
		"xml:base",
		"xml:lang",
		"xml:space"
	].forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
	});
	["tabIndex", "crossOrigin"].forEach(function(a) {
		z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
	});
	z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
	[
		"src",
		"href",
		"action",
		"formAction"
	].forEach(function(a) {
		z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
	});
	function ta(a, b, c, d) {
		var e = z.hasOwnProperty(b) ? z[b] : null;
		if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
	}
	var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
	var Ia = Symbol.for("react.offscreen");
	var Ja = Symbol.iterator;
	function Ka(a) {
		if (null === a || "object" !== typeof a) return null;
		a = Ja && a[Ja] || a["@@iterator"];
		return "function" === typeof a ? a : null;
	}
	var A = Object.assign, La;
	function Ma(a) {
		if (void 0 === La) try {
			throw Error();
		} catch (c) {
			var b = c.stack.trim().match(/\n( *(at )?)/);
			La = b && b[1] || "";
		}
		return "\n" + La + a;
	}
	var Na = !1;
	function Oa(a, b) {
		if (!a || Na) return "";
		Na = !0;
		var c = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (b) if (b = function() {
				throw Error();
			}, Object.defineProperty(b.prototype, "props", { set: function() {
				throw Error();
			} }), "object" === typeof Reflect && Reflect.construct) {
				try {
					Reflect.construct(b, []);
				} catch (l) {
					var d = l;
				}
				Reflect.construct(a, [], b);
			} else {
				try {
					b.call();
				} catch (l) {
					d = l;
				}
				a.call(b.prototype);
			}
			else {
				try {
					throw Error();
				} catch (l) {
					d = l;
				}
				a();
			}
		} catch (l) {
			if (l && d && "string" === typeof l.stack) {
				for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
				for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
					if (1 !== g || 1 !== h) do
						if (g--, h--, 0 > h || e[g] !== f[h]) {
							var k = "\n" + e[g].replace(" at new ", " at ");
							a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
							return k;
						}
					while (1 <= g && 0 <= h);
					break;
				}
			}
		} finally {
			Na = !1, Error.prepareStackTrace = c;
		}
		return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
	}
	function Pa(a) {
		switch (a.tag) {
			case 5: return Ma(a.type);
			case 16: return Ma("Lazy");
			case 13: return Ma("Suspense");
			case 19: return Ma("SuspenseList");
			case 0:
			case 2:
			case 15: return a = Oa(a.type, !1), a;
			case 11: return a = Oa(a.type.render, !1), a;
			case 1: return a = Oa(a.type, !0), a;
			default: return "";
		}
	}
	function Qa(a) {
		if (null == a) return null;
		if ("function" === typeof a) return a.displayName || a.name || null;
		if ("string" === typeof a) return a;
		switch (a) {
			case ya: return "Fragment";
			case wa: return "Portal";
			case Aa: return "Profiler";
			case za: return "StrictMode";
			case Ea: return "Suspense";
			case Fa: return "SuspenseList";
		}
		if ("object" === typeof a) switch (a.$$typeof) {
			case Ca: return (a.displayName || "Context") + ".Consumer";
			case Ba: return (a._context.displayName || "Context") + ".Provider";
			case Da:
				var b = a.render;
				a = a.displayName;
				a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
				return a;
			case Ga: return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
			case Ha:
				b = a._payload;
				a = a._init;
				try {
					return Qa(a(b));
				} catch (c) {}
		}
		return null;
	}
	function Ra(a) {
		var b = a.type;
		switch (a.tag) {
			case 24: return "Cache";
			case 9: return (b.displayName || "Context") + ".Consumer";
			case 10: return (b._context.displayName || "Context") + ".Provider";
			case 18: return "DehydratedFragment";
			case 11: return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
			case 7: return "Fragment";
			case 5: return b;
			case 4: return "Portal";
			case 3: return "Root";
			case 6: return "Text";
			case 16: return Qa(b);
			case 8: return b === za ? "StrictMode" : "Mode";
			case 22: return "Offscreen";
			case 12: return "Profiler";
			case 21: return "Scope";
			case 13: return "Suspense";
			case 19: return "SuspenseList";
			case 25: return "TracingMarker";
			case 1:
			case 0:
			case 17:
			case 2:
			case 14:
			case 15:
				if ("function" === typeof b) return b.displayName || b.name || null;
				if ("string" === typeof b) return b;
		}
		return null;
	}
	function Sa(a) {
		switch (typeof a) {
			case "boolean":
			case "number":
			case "string":
			case "undefined": return a;
			case "object": return a;
			default: return "";
		}
	}
	function Ta(a) {
		var b = a.type;
		return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
	}
	function Ua(a) {
		var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
		if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
			var e = c.get, f = c.set;
			Object.defineProperty(a, b, {
				configurable: !0,
				get: function() {
					return e.call(this);
				},
				set: function(a) {
					d = "" + a;
					f.call(this, a);
				}
			});
			Object.defineProperty(a, b, { enumerable: c.enumerable });
			return {
				getValue: function() {
					return d;
				},
				setValue: function(a) {
					d = "" + a;
				},
				stopTracking: function() {
					a._valueTracker = null;
					delete a[b];
				}
			};
		}
	}
	function Va(a) {
		a._valueTracker || (a._valueTracker = Ua(a));
	}
	function Wa(a) {
		if (!a) return !1;
		var b = a._valueTracker;
		if (!b) return !0;
		var c = b.getValue();
		var d = "";
		a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
		a = d;
		return a !== c ? (b.setValue(a), !0) : !1;
	}
	function Xa(a) {
		a = a || ("undefined" !== typeof document ? document : void 0);
		if ("undefined" === typeof a) return null;
		try {
			return a.activeElement || a.body;
		} catch (b) {
			return a.body;
		}
	}
	function Ya(a, b) {
		var c = b.checked;
		return A({}, b, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: null != c ? c : a._wrapperState.initialChecked
		});
	}
	function Za(a, b) {
		var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
		c = Sa(null != b.value ? b.value : c);
		a._wrapperState = {
			initialChecked: d,
			initialValue: c,
			controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
		};
	}
	function ab(a, b) {
		b = b.checked;
		null != b && ta(a, "checked", b, !1);
	}
	function bb(a, b) {
		ab(a, b);
		var c = Sa(b.value), d = b.type;
		if (null != c) if ("number" === d) {
			if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
		} else a.value !== "" + c && (a.value = "" + c);
		else if ("submit" === d || "reset" === d) {
			a.removeAttribute("value");
			return;
		}
		b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
		null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
	}
	function db(a, b, c) {
		if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
			var d = b.type;
			if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
			b = "" + a._wrapperState.initialValue;
			c || b === a.value || (a.value = b);
			a.defaultValue = b;
		}
		c = a.name;
		"" !== c && (a.name = "");
		a.defaultChecked = !!a._wrapperState.initialChecked;
		"" !== c && (a.name = c);
	}
	function cb(a, b, c) {
		if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
	}
	var eb = Array.isArray;
	function fb(a, b, c, d) {
		a = a.options;
		if (b) {
			b = {};
			for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
			for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
		} else {
			c = "" + Sa(c);
			b = null;
			for (e = 0; e < a.length; e++) {
				if (a[e].value === c) {
					a[e].selected = !0;
					d && (a[e].defaultSelected = !0);
					return;
				}
				null !== b || a[e].disabled || (b = a[e]);
			}
			null !== b && (b.selected = !0);
		}
	}
	function gb(a, b) {
		if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
		return A({}, b, {
			value: void 0,
			defaultValue: void 0,
			children: "" + a._wrapperState.initialValue
		});
	}
	function hb(a, b) {
		var c = b.value;
		if (null == c) {
			c = b.children;
			b = b.defaultValue;
			if (null != c) {
				if (null != b) throw Error(p(92));
				if (eb(c)) {
					if (1 < c.length) throw Error(p(93));
					c = c[0];
				}
				b = c;
			}
			b ??= "";
			c = b;
		}
		a._wrapperState = { initialValue: Sa(c) };
	}
	function ib(a, b) {
		var c = Sa(b.value), d = Sa(b.defaultValue);
		null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
		null != d && (a.defaultValue = "" + d);
	}
	function jb(a) {
		var b = a.textContent;
		b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
	}
	function kb(a) {
		switch (a) {
			case "svg": return "http://www.w3.org/2000/svg";
			case "math": return "http://www.w3.org/1998/Math/MathML";
			default: return "http://www.w3.org/1999/xhtml";
		}
	}
	function lb(a, b) {
		return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
	}
	var mb, nb = function(a) {
		return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
			MSApp.execUnsafeLocalFunction(function() {
				return a(b, c, d, e);
			});
		} : a;
	}(function(a, b) {
		if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
		else {
			mb = mb || document.createElement("div");
			mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
			for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
			for (; b.firstChild;) a.appendChild(b.firstChild);
		}
	});
	function ob(a, b) {
		if (b) {
			var c = a.firstChild;
			if (c && c === a.lastChild && 3 === c.nodeType) {
				c.nodeValue = b;
				return;
			}
		}
		a.textContent = b;
	}
	var pb = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	}, qb = [
		"Webkit",
		"ms",
		"Moz",
		"O"
	];
	Object.keys(pb).forEach(function(a) {
		qb.forEach(function(b) {
			b = b + a.charAt(0).toUpperCase() + a.substring(1);
			pb[b] = pb[a];
		});
	});
	function rb(a, b, c) {
		return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
	}
	function sb(a, b) {
		a = a.style;
		for (var c in b) if (b.hasOwnProperty(c)) {
			var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
			"float" === c && (c = "cssFloat");
			d ? a.setProperty(c, e) : a[c] = e;
		}
	}
	var tb = A({ menuitem: !0 }, {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	});
	function ub(a, b) {
		if (b) {
			if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
			if (null != b.dangerouslySetInnerHTML) {
				if (null != b.children) throw Error(p(60));
				if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
			}
			if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
		}
	}
	function vb(a, b) {
		if (-1 === a.indexOf("-")) return "string" === typeof b.is;
		switch (a) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var wb = null;
	function xb(a) {
		a = a.target || a.srcElement || window;
		a.correspondingUseElement && (a = a.correspondingUseElement);
		return 3 === a.nodeType ? a.parentNode : a;
	}
	var yb = null, zb = null, Ab = null;
	function Bb(a) {
		if (a = Cb(a)) {
			if ("function" !== typeof yb) throw Error(p(280));
			var b = a.stateNode;
			b && (b = Db(b), yb(a.stateNode, a.type, b));
		}
	}
	function Eb(a) {
		zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
	}
	function Fb() {
		if (zb) {
			var a = zb, b = Ab;
			Ab = zb = null;
			Bb(a);
			if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
		}
	}
	function Gb(a, b) {
		return a(b);
	}
	function Hb() {}
	var Ib = !1;
	function Jb(a, b, c) {
		if (Ib) return a(b, c);
		Ib = !0;
		try {
			return Gb(a, b, c);
		} finally {
			if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
		}
	}
	function Kb(a, b) {
		var c = a.stateNode;
		if (null === c) return null;
		var d = Db(c);
		if (null === d) return null;
		c = d[b];
		a: switch (b) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
				a = !d;
				break a;
			default: a = !1;
		}
		if (a) return null;
		if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
		return c;
	}
	var Lb = !1;
	if (ia) try {
		var Mb = {};
		Object.defineProperty(Mb, "passive", { get: function() {
			Lb = !0;
		} });
		window.addEventListener("test", Mb, Mb);
		window.removeEventListener("test", Mb, Mb);
	} catch (a) {
		Lb = !1;
	}
	function Nb(a, b, c, d, e, f, g, h, k) {
		var l = Array.prototype.slice.call(arguments, 3);
		try {
			b.apply(c, l);
		} catch (m) {
			this.onError(m);
		}
	}
	var Ob = !1, Pb = null, Qb = !1, Rb = null, Sb = { onError: function(a) {
		Ob = !0;
		Pb = a;
	} };
	function Tb(a, b, c, d, e, f, g, h, k) {
		Ob = !1;
		Pb = null;
		Nb.apply(Sb, arguments);
	}
	function Ub(a, b, c, d, e, f, g, h, k) {
		Tb.apply(this, arguments);
		if (Ob) {
			if (Ob) {
				var l = Pb;
				Ob = !1;
				Pb = null;
			} else throw Error(p(198));
			Qb || (Qb = !0, Rb = l);
		}
	}
	function Vb(a) {
		var b = a, c = a;
		if (a.alternate) for (; b.return;) b = b.return;
		else {
			a = b;
			do
				b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
			while (a);
		}
		return 3 === b.tag ? c : null;
	}
	function Wb(a) {
		if (13 === a.tag) {
			var b = a.memoizedState;
			null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
			if (null !== b) return b.dehydrated;
		}
		return null;
	}
	function Xb(a) {
		if (Vb(a) !== a) throw Error(p(188));
	}
	function Yb(a) {
		var b = a.alternate;
		if (!b) {
			b = Vb(a);
			if (null === b) throw Error(p(188));
			return b !== a ? null : a;
		}
		for (var c = a, d = b;;) {
			var e = c.return;
			if (null === e) break;
			var f = e.alternate;
			if (null === f) {
				d = e.return;
				if (null !== d) {
					c = d;
					continue;
				}
				break;
			}
			if (e.child === f.child) {
				for (f = e.child; f;) {
					if (f === c) return Xb(e), a;
					if (f === d) return Xb(e), b;
					f = f.sibling;
				}
				throw Error(p(188));
			}
			if (c.return !== d.return) c = e, d = f;
			else {
				for (var g = !1, h = e.child; h;) {
					if (h === c) {
						g = !0;
						c = e;
						d = f;
						break;
					}
					if (h === d) {
						g = !0;
						d = e;
						c = f;
						break;
					}
					h = h.sibling;
				}
				if (!g) {
					for (h = f.child; h;) {
						if (h === c) {
							g = !0;
							c = f;
							d = e;
							break;
						}
						if (h === d) {
							g = !0;
							d = f;
							c = e;
							break;
						}
						h = h.sibling;
					}
					if (!g) throw Error(p(189));
				}
			}
			if (c.alternate !== d) throw Error(p(190));
		}
		if (3 !== c.tag) throw Error(p(188));
		return c.stateNode.current === c ? a : b;
	}
	function Zb(a) {
		a = Yb(a);
		return null !== a ? $b(a) : null;
	}
	function $b(a) {
		if (5 === a.tag || 6 === a.tag) return a;
		for (a = a.child; null !== a;) {
			var b = $b(a);
			if (null !== b) return b;
			a = a.sibling;
		}
		return null;
	}
	var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
	function mc(a) {
		if (lc && "function" === typeof lc.onCommitFiberRoot) try {
			lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
		} catch (b) {}
	}
	var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
	function nc(a) {
		a >>>= 0;
		return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
	}
	var rc = 64, sc = 4194304;
	function tc(a) {
		switch (a & -a) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return a & 4194240;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return a & 130023424;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 1073741824;
			default: return a;
		}
	}
	function uc(a, b) {
		var c = a.pendingLanes;
		if (0 === c) return 0;
		var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
		if (0 !== g) {
			var h = g & ~e;
			0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
		} else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
		if (0 === d) return 0;
		if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
		0 !== (d & 4) && (d |= c & 16);
		b = a.entangledLanes;
		if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
		return d;
	}
	function vc(a, b) {
		switch (a) {
			case 1:
			case 2:
			case 4: return b + 250;
			case 8:
			case 16:
			case 32:
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return b + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return -1;
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function wc(a, b) {
		for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
			var g = 31 - oc(f), h = 1 << g, k = e[g];
			if (-1 === k) {
				if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
			} else k <= b && (a.expiredLanes |= h);
			f &= ~h;
		}
	}
	function xc(a) {
		a = a.pendingLanes & -1073741825;
		return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	}
	function yc() {
		var a = rc;
		rc <<= 1;
		0 === (rc & 4194240) && (rc = 64);
		return a;
	}
	function zc(a) {
		for (var b = [], c = 0; 31 > c; c++) b.push(a);
		return b;
	}
	function Ac(a, b, c) {
		a.pendingLanes |= b;
		536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
		a = a.eventTimes;
		b = 31 - oc(b);
		a[b] = c;
	}
	function Bc(a, b) {
		var c = a.pendingLanes & ~b;
		a.pendingLanes = b;
		a.suspendedLanes = 0;
		a.pingedLanes = 0;
		a.expiredLanes &= b;
		a.mutableReadLanes &= b;
		a.entangledLanes &= b;
		b = a.entanglements;
		var d = a.eventTimes;
		for (a = a.expirationTimes; 0 < c;) {
			var e = 31 - oc(c), f = 1 << e;
			b[e] = 0;
			d[e] = -1;
			a[e] = -1;
			c &= ~f;
		}
	}
	function Cc(a, b) {
		var c = a.entangledLanes |= b;
		for (a = a.entanglements; c;) {
			var d = 31 - oc(c), e = 1 << d;
			e & b | a[d] & b && (a[d] |= b);
			c &= ~e;
		}
	}
	var C = 0;
	function Dc(a) {
		a &= -a;
		return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
	}
	var Ec, Fc, Gc, Hc, Ic, Jc = !1, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function Sc(a, b) {
		switch (a) {
			case "focusin":
			case "focusout":
				Lc = null;
				break;
			case "dragenter":
			case "dragleave":
				Mc = null;
				break;
			case "mouseover":
			case "mouseout":
				Nc = null;
				break;
			case "pointerover":
			case "pointerout":
				Oc.delete(b.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": Pc.delete(b.pointerId);
		}
	}
	function Tc(a, b, c, d, e, f) {
		if (null === a || a.nativeEvent !== f) return a = {
			blockedOn: b,
			domEventName: c,
			eventSystemFlags: d,
			nativeEvent: f,
			targetContainers: [e]
		}, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
		a.eventSystemFlags |= d;
		b = a.targetContainers;
		null !== e && -1 === b.indexOf(e) && b.push(e);
		return a;
	}
	function Uc(a, b, c, d, e) {
		switch (b) {
			case "focusin": return Lc = Tc(Lc, a, b, c, d, e), !0;
			case "dragenter": return Mc = Tc(Mc, a, b, c, d, e), !0;
			case "mouseover": return Nc = Tc(Nc, a, b, c, d, e), !0;
			case "pointerover":
				var f = e.pointerId;
				Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
				return !0;
			case "gotpointercapture": return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
		}
		return !1;
	}
	function Vc(a) {
		var b = Wc(a.target);
		if (null !== b) {
			var c = Vb(b);
			if (null !== c) {
				if (b = c.tag, 13 === b) {
					if (b = Wb(c), null !== b) {
						a.blockedOn = b;
						Ic(a.priority, function() {
							Gc(c);
						});
						return;
					}
				} else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
					a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
					return;
				}
			}
		}
		a.blockedOn = null;
	}
	function Xc(a) {
		if (null !== a.blockedOn) return !1;
		for (var b = a.targetContainers; 0 < b.length;) {
			var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
			if (null === c) {
				c = a.nativeEvent;
				var d = new c.constructor(c.type, c);
				wb = d;
				c.target.dispatchEvent(d);
				wb = null;
			} else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
			b.shift();
		}
		return !0;
	}
	function Zc(a, b, c) {
		Xc(a) && c.delete(b);
	}
	function $c() {
		Jc = !1;
		null !== Lc && Xc(Lc) && (Lc = null);
		null !== Mc && Xc(Mc) && (Mc = null);
		null !== Nc && Xc(Nc) && (Nc = null);
		Oc.forEach(Zc);
		Pc.forEach(Zc);
	}
	function ad(a, b) {
		a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
	}
	function bd(a) {
		function b(b) {
			return ad(b, a);
		}
		if (0 < Kc.length) {
			ad(Kc[0], a);
			for (var c = 1; c < Kc.length; c++) {
				var d = Kc[c];
				d.blockedOn === a && (d.blockedOn = null);
			}
		}
		null !== Lc && ad(Lc, a);
		null !== Mc && ad(Mc, a);
		null !== Nc && ad(Nc, a);
		Oc.forEach(b);
		Pc.forEach(b);
		for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
		for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
	}
	var cd = ua.ReactCurrentBatchConfig, dd = !0;
	function ed(a, b, c, d) {
		var e = C, f = cd.transition;
		cd.transition = null;
		try {
			C = 1, fd(a, b, c, d);
		} finally {
			C = e, cd.transition = f;
		}
	}
	function gd(a, b, c, d) {
		var e = C, f = cd.transition;
		cd.transition = null;
		try {
			C = 4, fd(a, b, c, d);
		} finally {
			C = e, cd.transition = f;
		}
	}
	function fd(a, b, c, d) {
		if (dd) {
			var e = Yc(a, b, c, d);
			if (null === e) hd(a, b, d, id, c), Sc(a, d);
			else if (Uc(e, a, b, c, d)) d.stopPropagation();
			else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
				for (; null !== e;) {
					var f = Cb(e);
					null !== f && Ec(f);
					f = Yc(a, b, c, d);
					null === f && hd(a, b, d, id, c);
					if (f === e) break;
					e = f;
				}
				null !== e && d.stopPropagation();
			} else hd(a, b, d, null, c);
		}
	}
	var id = null;
	function Yc(a, b, c, d) {
		id = null;
		a = xb(d);
		a = Wc(a);
		if (null !== a) if (b = Vb(a), null === b) a = null;
		else if (c = b.tag, 13 === c) {
			a = Wb(b);
			if (null !== a) return a;
			a = null;
		} else if (3 === c) {
			if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
			a = null;
		} else b !== a && (a = null);
		id = a;
		return null;
	}
	function jd(a) {
		switch (a) {
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 1;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "toggle":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 4;
			case "message": switch (ec()) {
				case fc: return 1;
				case gc: return 4;
				case hc:
				case ic: return 16;
				case jc: return 536870912;
				default: return 16;
			}
			default: return 16;
		}
	}
	var kd = null, ld = null, md = null;
	function nd() {
		if (md) return md;
		var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
		for (a = 0; a < c && b[a] === e[a]; a++);
		var g = c - a;
		for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
		return md = e.slice(a, 1 < d ? 1 - d : void 0);
	}
	function od(a) {
		var b = a.keyCode;
		"charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
		10 === a && (a = 13);
		return 32 <= a || 13 === a ? a : 0;
	}
	function pd() {
		return !0;
	}
	function qd() {
		return !1;
	}
	function rd(a) {
		function b(b, d, e, f, g) {
			this._reactName = b;
			this._targetInst = e;
			this.type = d;
			this.nativeEvent = f;
			this.target = g;
			this.currentTarget = null;
			for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
			this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
			this.isPropagationStopped = qd;
			return this;
		}
		A(b.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var a = this.nativeEvent;
				a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
			},
			stopPropagation: function() {
				var a = this.nativeEvent;
				a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
			},
			persist: function() {},
			isPersistent: pd
		});
		return b;
	}
	var sd = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(a) {
			return a.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, td = rd(sd), ud = A({}, sd, {
		view: 0,
		detail: 0
	}), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: zd,
		button: 0,
		buttons: 0,
		relatedTarget: function(a) {
			return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
		},
		movementX: function(a) {
			if ("movementX" in a) return a.movementX;
			a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
			return wd;
		},
		movementY: function(a) {
			return "movementY" in a ? a.movementY : xd;
		}
	}), Bd = rd(Ad), Dd = rd(A({}, Ad, { dataTransfer: 0 })), Fd = rd(A({}, ud, { relatedTarget: 0 })), Hd = rd(A({}, sd, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Jd = rd(A({}, sd, { clipboardData: function(a) {
		return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	} })), Ld = rd(A({}, sd, { data: 0 })), Md = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, Nd = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, Od = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Pd(a) {
		var b = this.nativeEvent;
		return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
	}
	function zd() {
		return Pd;
	}
	var Rd = rd(A({}, ud, {
		key: function(a) {
			if (a.key) {
				var b = Md[a.key] || a.key;
				if ("Unidentified" !== b) return b;
			}
			return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: zd,
		charCode: function(a) {
			return "keypress" === a.type ? od(a) : 0;
		},
		keyCode: function(a) {
			return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		},
		which: function(a) {
			return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		}
	})), Td = rd(A({}, Ad, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), Vd = rd(A({}, ud, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: zd
	})), Xd = rd(A({}, sd, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Zd = rd(A({}, Ad, {
		deltaX: function(a) {
			return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
		},
		deltaY: function(a) {
			return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), $d = [
		9,
		13,
		27,
		32
	], ae = ia && "CompositionEvent" in window, be = null;
	ia && "documentMode" in document && (be = document.documentMode);
	var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = !1;
	function ge(a, b) {
		switch (a) {
			case "keyup": return -1 !== $d.indexOf(b.keyCode);
			case "keydown": return 229 !== b.keyCode;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function he(a) {
		a = a.detail;
		return "object" === typeof a && "data" in a ? a.data : null;
	}
	var ie = !1;
	function je(a, b) {
		switch (a) {
			case "compositionend": return he(b);
			case "keypress":
				if (32 !== b.which) return null;
				fe = !0;
				return ee;
			case "textInput": return a = b.data, a === ee && fe ? null : a;
			default: return null;
		}
	}
	function ke(a, b) {
		if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
		switch (a) {
			case "paste": return null;
			case "keypress":
				if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
					if (b.char && 1 < b.char.length) return b.char;
					if (b.which) return String.fromCharCode(b.which);
				}
				return null;
			case "compositionend": return de && "ko" !== b.locale ? null : b.data;
			default: return null;
		}
	}
	var le = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function me(a) {
		var b = a && a.nodeName && a.nodeName.toLowerCase();
		return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
	}
	function ne(a, b, c, d) {
		Eb(d);
		b = oe(b, "onChange");
		0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
			event: c,
			listeners: b
		}));
	}
	var pe = null, qe = null;
	function re(a) {
		se(a, 0);
	}
	function te(a) {
		if (Wa(ue(a))) return a;
	}
	function ve(a, b) {
		if ("change" === a) return b;
	}
	var we = !1;
	if (ia) {
		var xe;
		if (ia) {
			var ye = "oninput" in document;
			if (!ye) {
				var ze = document.createElement("div");
				ze.setAttribute("oninput", "return;");
				ye = "function" === typeof ze.oninput;
			}
			xe = ye;
		} else xe = !1;
		we = xe && (!document.documentMode || 9 < document.documentMode);
	}
	function Ae() {
		pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
	}
	function Be(a) {
		if ("value" === a.propertyName && te(qe)) {
			var b = [];
			ne(b, qe, a, xb(a));
			Jb(re, b);
		}
	}
	function Ce(a, b, c) {
		"focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
	}
	function De(a) {
		if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
	}
	function Ee(a, b) {
		if ("click" === a) return te(b);
	}
	function Fe(a, b) {
		if ("input" === a || "change" === a) return te(b);
	}
	function Ge(a, b) {
		return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var He = "function" === typeof Object.is ? Object.is : Ge;
	function Ie(a, b) {
		if (He(a, b)) return !0;
		if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
		var c = Object.keys(a), d = Object.keys(b);
		if (c.length !== d.length) return !1;
		for (d = 0; d < c.length; d++) {
			var e = c[d];
			if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
		}
		return !0;
	}
	function Je(a) {
		for (; a && a.firstChild;) a = a.firstChild;
		return a;
	}
	function Ke(a, b) {
		var c = Je(a);
		a = 0;
		for (var d; c;) {
			if (3 === c.nodeType) {
				d = a + c.textContent.length;
				if (a <= b && d >= b) return {
					node: c,
					offset: b - a
				};
				a = d;
			}
			a: {
				for (; c;) {
					if (c.nextSibling) {
						c = c.nextSibling;
						break a;
					}
					c = c.parentNode;
				}
				c = void 0;
			}
			c = Je(c);
		}
	}
	function Le(a, b) {
		return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
	}
	function Me() {
		for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
			try {
				var c = "string" === typeof b.contentWindow.location.href;
			} catch (d) {
				c = !1;
			}
			if (c) a = b.contentWindow;
			else break;
			b = Xa(a.document);
		}
		return b;
	}
	function Ne(a) {
		var b = a && a.nodeName && a.nodeName.toLowerCase();
		return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
	}
	function Oe(a) {
		var b = Me(), c = a.focusedElem, d = a.selectionRange;
		if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
			if (null !== d && Ne(c)) {
				if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
				else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
					a = a.getSelection();
					var e = c.textContent.length, f = Math.min(d.start, e);
					d = void 0 === d.end ? f : Math.min(d.end, e);
					!a.extend && f > d && (e = d, d = f, f = e);
					e = Ke(c, f);
					var g = Ke(c, d);
					e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
				}
			}
			b = [];
			for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
				element: a,
				left: a.scrollLeft,
				top: a.scrollTop
			});
			"function" === typeof c.focus && c.focus();
			for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
		}
	}
	var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = !1;
	function Ue(a, b, c) {
		var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
		Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
			start: d.selectionStart,
			end: d.selectionEnd
		} : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
			anchorNode: d.anchorNode,
			anchorOffset: d.anchorOffset,
			focusNode: d.focusNode,
			focusOffset: d.focusOffset
		}), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
			event: b,
			listeners: d
		}), b.target = Qe)));
	}
	function Ve(a, b) {
		var c = {};
		c[a.toLowerCase()] = b.toLowerCase();
		c["Webkit" + a] = "webkit" + b;
		c["Moz" + a] = "moz" + b;
		return c;
	}
	var We = {
		animationend: Ve("Animation", "AnimationEnd"),
		animationiteration: Ve("Animation", "AnimationIteration"),
		animationstart: Ve("Animation", "AnimationStart"),
		transitionend: Ve("Transition", "TransitionEnd")
	}, Xe = {}, Ye = {};
	ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
	function Ze(a) {
		if (Xe[a]) return Xe[a];
		if (!We[a]) return a;
		var b = We[a], c;
		for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
		return a;
	}
	var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ff(a, b) {
		df.set(a, b);
		fa(b, [a]);
	}
	for (var gf = 0; gf < ef.length; gf++) {
		var hf = ef[gf];
		ff(hf.toLowerCase(), "on" + (hf[0].toUpperCase() + hf.slice(1)));
	}
	ff($e, "onAnimationEnd");
	ff(af, "onAnimationIteration");
	ff(bf, "onAnimationStart");
	ff("dblclick", "onDoubleClick");
	ff("focusin", "onFocus");
	ff("focusout", "onBlur");
	ff(cf, "onTransitionEnd");
	ha("onMouseEnter", ["mouseout", "mouseover"]);
	ha("onMouseLeave", ["mouseout", "mouseover"]);
	ha("onPointerEnter", ["pointerout", "pointerover"]);
	ha("onPointerLeave", ["pointerout", "pointerover"]);
	fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	fa("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]);
	fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
	function nf(a, b, c) {
		var d = a.type || "unknown-event";
		a.currentTarget = c;
		Ub(d, b, void 0, a);
		a.currentTarget = null;
	}
	function se(a, b) {
		b = 0 !== (b & 4);
		for (var c = 0; c < a.length; c++) {
			var d = a[c], e = d.event;
			d = d.listeners;
			a: {
				var f = void 0;
				if (b) for (var g = d.length - 1; 0 <= g; g--) {
					var h = d[g], k = h.instance, l = h.currentTarget;
					h = h.listener;
					if (k !== f && e.isPropagationStopped()) break a;
					nf(e, h, l);
					f = k;
				}
				else for (g = 0; g < d.length; g++) {
					h = d[g];
					k = h.instance;
					l = h.currentTarget;
					h = h.listener;
					if (k !== f && e.isPropagationStopped()) break a;
					nf(e, h, l);
					f = k;
				}
			}
		}
		if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
	}
	function D(a, b) {
		var c = b[of];
		void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
		var d = a + "__bubble";
		c.has(d) || (pf(b, a, 2, !1), c.add(d));
	}
	function qf(a, b, c) {
		var d = 0;
		b && (d |= 4);
		pf(c, a, d, b);
	}
	var rf = "_reactListening" + Math.random().toString(36).slice(2);
	function sf(a) {
		if (!a[rf]) {
			a[rf] = !0;
			da.forEach(function(b) {
				"selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
			});
			var b = 9 === a.nodeType ? a : a.ownerDocument;
			null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
		}
	}
	function pf(a, b, c, d) {
		switch (jd(b)) {
			case 1:
				var e = ed;
				break;
			case 4:
				e = gd;
				break;
			default: e = fd;
		}
		c = e.bind(null, b, c, a);
		e = void 0;
		!Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
		d ? void 0 !== e ? a.addEventListener(b, c, {
			capture: !0,
			passive: e
		}) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, !1);
	}
	function hd(a, b, c, d, e) {
		var f = d;
		if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
			if (null === d) return;
			var g = d.tag;
			if (3 === g || 4 === g) {
				var h = d.stateNode.containerInfo;
				if (h === e || 8 === h.nodeType && h.parentNode === e) break;
				if (4 === g) for (g = d.return; null !== g;) {
					var k = g.tag;
					if (3 === k || 4 === k) {
						if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
					}
					g = g.return;
				}
				for (; null !== h;) {
					g = Wc(h);
					if (null === g) return;
					k = g.tag;
					if (5 === k || 6 === k) {
						d = f = g;
						continue a;
					}
					h = h.parentNode;
				}
			}
			d = d.return;
		}
		Jb(function() {
			var d = f, e = xb(c), g = [];
			a: {
				var h = df.get(a);
				if (void 0 !== h) {
					var k = td, n = a;
					switch (a) {
						case "keypress": if (0 === od(c)) break a;
						case "keydown":
						case "keyup":
							k = Rd;
							break;
						case "focusin":
							n = "focus";
							k = Fd;
							break;
						case "focusout":
							n = "blur";
							k = Fd;
							break;
						case "beforeblur":
						case "afterblur":
							k = Fd;
							break;
						case "click": if (2 === c.button) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							k = Bd;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							k = Dd;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							k = Vd;
							break;
						case $e:
						case af:
						case bf:
							k = Hd;
							break;
						case cf:
							k = Xd;
							break;
						case "scroll":
							k = vd;
							break;
						case "wheel":
							k = Zd;
							break;
						case "copy":
						case "cut":
						case "paste":
							k = Jd;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup": k = Td;
					}
					var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h ? h + "Capture" : null : h;
					t = [];
					for (var w = d, u; null !== w;) {
						u = w;
						var F = u.stateNode;
						5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
						if (J) break;
						w = w.return;
					}
					0 < t.length && (h = new k(h, n, null, c, e), g.push({
						event: h,
						listeners: t
					}));
				}
			}
			if (0 === (b & 7)) {
				a: {
					h = "mouseover" === a || "pointerover" === a;
					k = "mouseout" === a || "pointerout" === a;
					if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
					if (k || h) {
						h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
						if (k) {
							if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
						} else k = null, n = d;
						if (k !== n) {
							t = Bd;
							F = "onMouseLeave";
							x = "onMouseEnter";
							w = "mouse";
							if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
							J = null == k ? h : ue(k);
							u = null == n ? h : ue(n);
							h = new t(F, w + "leave", k, c, e);
							h.target = J;
							h.relatedTarget = u;
							F = null;
							Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
							J = F;
							if (k && n) b: {
								t = k;
								x = n;
								w = 0;
								for (u = t; u; u = vf(u)) w++;
								u = 0;
								for (F = x; F; F = vf(F)) u++;
								for (; 0 < w - u;) t = vf(t), w--;
								for (; 0 < u - w;) x = vf(x), u--;
								for (; w--;) {
									if (t === x || null !== x && t === x.alternate) break b;
									t = vf(t);
									x = vf(x);
								}
								t = null;
							}
							else t = null;
							null !== k && wf(g, h, k, t, !1);
							null !== n && null !== J && wf(g, J, n, t, !0);
						}
					}
				}
				a: {
					h = d ? ue(d) : window;
					k = h.nodeName && h.nodeName.toLowerCase();
					if ("select" === k || "input" === k && "file" === h.type) var na = ve;
					else if (me(h)) if (we) na = Fe;
					else {
						na = De;
						var xa = Ce;
					}
					else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
					if (na && (na = na(a, d))) {
						ne(g, na, c, e);
						break a;
					}
					xa && xa(a, h, d);
					"focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
				}
				xa = d ? ue(d) : window;
				switch (a) {
					case "focusin":
						if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
						break;
					case "focusout":
						Se = Re = Qe = null;
						break;
					case "mousedown":
						Te = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Te = !1;
						Ue(g, c, e);
						break;
					case "selectionchange": if (Pe) break;
					case "keydown":
					case "keyup": Ue(g, c, e);
				}
				var $a;
				if (ae) b: {
					switch (a) {
						case "compositionstart":
							var ba = "onCompositionStart";
							break b;
						case "compositionend":
							ba = "onCompositionEnd";
							break b;
						case "compositionupdate":
							ba = "onCompositionUpdate";
							break b;
					}
					ba = void 0;
				}
				else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
				ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), g.push({
					event: ba,
					listeners: xa
				}), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
				if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
					event: e,
					listeners: d
				}), e.data = $a);
			}
			se(g, b);
		});
	}
	function tf(a, b, c) {
		return {
			instance: a,
			listener: b,
			currentTarget: c
		};
	}
	function oe(a, b) {
		for (var c = b + "Capture", d = []; null !== a;) {
			var e = a, f = e.stateNode;
			5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
			a = a.return;
		}
		return d;
	}
	function vf(a) {
		if (null === a) return null;
		do
			a = a.return;
		while (a && 5 !== a.tag);
		return a ? a : null;
	}
	function wf(a, b, c, d, e) {
		for (var f = b._reactName, g = []; null !== c && c !== d;) {
			var h = c, k = h.alternate, l = h.stateNode;
			if (null !== k && k === d) break;
			5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
			c = c.return;
		}
		0 !== g.length && a.push({
			event: b,
			listeners: g
		});
	}
	var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
	function zf(a) {
		return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
	}
	function Af(a, b, c) {
		b = zf(b);
		if (zf(a) !== b && c) throw Error(p(425));
	}
	function Bf() {}
	var Cf = null, Df = null;
	function Ef(a, b) {
		return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
	}
	var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
		return Hf.resolve(null).then(a).catch(If);
	} : Ff;
	function If(a) {
		setTimeout(function() {
			throw a;
		});
	}
	function Kf(a, b) {
		var c = b, d = 0;
		do {
			var e = c.nextSibling;
			a.removeChild(c);
			if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
				if (0 === d) {
					a.removeChild(e);
					bd(b);
					return;
				}
				d--;
			} else "$" !== c && "$?" !== c && "$!" !== c || d++;
			c = e;
		} while (c);
		bd(b);
	}
	function Lf(a) {
		for (; null != a; a = a.nextSibling) {
			var b = a.nodeType;
			if (1 === b || 3 === b) break;
			if (8 === b) {
				b = a.data;
				if ("$" === b || "$!" === b || "$?" === b) break;
				if ("/$" === b) return null;
			}
		}
		return a;
	}
	function Mf(a) {
		a = a.previousSibling;
		for (var b = 0; a;) {
			if (8 === a.nodeType) {
				var c = a.data;
				if ("$" === c || "$!" === c || "$?" === c) {
					if (0 === b) return a;
					b--;
				} else "/$" === c && b++;
			}
			a = a.previousSibling;
		}
		return null;
	}
	var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
	function Wc(a) {
		var b = a[Of];
		if (b) return b;
		for (var c = a.parentNode; c;) {
			if (b = c[uf] || c[Of]) {
				c = b.alternate;
				if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
					if (c = a[Of]) return c;
					a = Mf(a);
				}
				return b;
			}
			a = c;
			c = a.parentNode;
		}
		return null;
	}
	function Cb(a) {
		a = a[Of] || a[uf];
		return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	}
	function ue(a) {
		if (5 === a.tag || 6 === a.tag) return a.stateNode;
		throw Error(p(33));
	}
	function Db(a) {
		return a[Pf] || null;
	}
	var Sf = [], Tf = -1;
	function Uf(a) {
		return { current: a };
	}
	function E(a) {
		0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
	}
	function G(a, b) {
		Tf++;
		Sf[Tf] = a.current;
		a.current = b;
	}
	var Vf = {}, H = Uf(Vf), Wf = Uf(!1), Xf = Vf;
	function Yf(a, b) {
		var c = a.type.contextTypes;
		if (!c) return Vf;
		var d = a.stateNode;
		if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
		var e = {}, f;
		for (f in c) e[f] = b[f];
		d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
		return e;
	}
	function Zf(a) {
		a = a.childContextTypes;
		return null !== a && void 0 !== a;
	}
	function $f() {
		E(Wf);
		E(H);
	}
	function ag(a, b, c) {
		if (H.current !== Vf) throw Error(p(168));
		G(H, b);
		G(Wf, c);
	}
	function bg(a, b, c) {
		var d = a.stateNode;
		b = b.childContextTypes;
		if ("function" !== typeof d.getChildContext) return c;
		d = d.getChildContext();
		for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
		return A({}, c, d);
	}
	function cg(a) {
		a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
		Xf = H.current;
		G(H, a);
		G(Wf, Wf.current);
		return !0;
	}
	function dg(a, b, c) {
		var d = a.stateNode;
		if (!d) throw Error(p(169));
		c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
		G(Wf, c);
	}
	var eg = null, fg = !1, gg = !1;
	function hg(a) {
		null === eg ? eg = [a] : eg.push(a);
	}
	function ig(a) {
		fg = !0;
		hg(a);
	}
	function jg() {
		if (!gg && null !== eg) {
			gg = !0;
			var a = 0, b = C;
			try {
				var c = eg;
				for (C = 1; a < c.length; a++) {
					var d = c[a];
					do
						d = d(!0);
					while (null !== d);
				}
				eg = null;
				fg = !1;
			} catch (e) {
				throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
			} finally {
				C = b, gg = !1;
			}
		}
		return null;
	}
	var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
	function tg(a, b) {
		kg[lg++] = ng;
		kg[lg++] = mg;
		mg = a;
		ng = b;
	}
	function ug(a, b, c) {
		og[pg++] = rg;
		og[pg++] = sg;
		og[pg++] = qg;
		qg = a;
		var d = rg;
		a = sg;
		var e = 32 - oc(d) - 1;
		d &= ~(1 << e);
		c += 1;
		var f = 32 - oc(b) + e;
		if (30 < f) {
			var g = e - e % 5;
			f = (d & (1 << g) - 1).toString(32);
			d >>= g;
			e -= g;
			rg = 1 << 32 - oc(b) + e | c << e | d;
			sg = f + a;
		} else rg = 1 << f | c << e | d, sg = a;
	}
	function vg(a) {
		null !== a.return && (tg(a, 1), ug(a, 1, 0));
	}
	function wg(a) {
		for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
		for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
	}
	var xg = null, yg = null, I = !1, zg = null;
	function Ag(a, b) {
		var c = Bg(5, null, null, 0);
		c.elementType = "DELETED";
		c.stateNode = b;
		c.return = a;
		b = a.deletions;
		null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
	}
	function Cg(a, b) {
		switch (a.tag) {
			case 5:
				var c = a.type;
				b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
				return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;
			case 6: return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, !0) : !1;
			case 13: return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
				id: rg,
				overflow: sg
			} : null, a.memoizedState = {
				dehydrated: b,
				treeContext: c,
				retryLane: 1073741824
			}, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, !0) : !1;
			default: return !1;
		}
	}
	function Dg(a) {
		return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
	}
	function Eg(a) {
		if (I) {
			var b = yg;
			if (b) {
				var c = b;
				if (!Cg(a, b)) {
					if (Dg(a)) throw Error(p(418));
					b = Lf(c.nextSibling);
					var d = xg;
					b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
				}
			} else {
				if (Dg(a)) throw Error(p(418));
				a.flags = a.flags & -4097 | 2;
				I = !1;
				xg = a;
			}
		}
	}
	function Fg(a) {
		for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
		xg = a;
	}
	function Gg(a) {
		if (a !== xg) return !1;
		if (!I) return Fg(a), I = !0, !1;
		var b;
		(b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
		if (b && (b = yg)) {
			if (Dg(a)) throw Hg(), Error(p(418));
			for (; b;) Ag(a, b), b = Lf(b.nextSibling);
		}
		Fg(a);
		if (13 === a.tag) {
			a = a.memoizedState;
			a = null !== a ? a.dehydrated : null;
			if (!a) throw Error(p(317));
			a: {
				a = a.nextSibling;
				for (b = 0; a;) {
					if (8 === a.nodeType) {
						var c = a.data;
						if ("/$" === c) {
							if (0 === b) {
								yg = Lf(a.nextSibling);
								break a;
							}
							b--;
						} else "$" !== c && "$!" !== c && "$?" !== c || b++;
					}
					a = a.nextSibling;
				}
				yg = null;
			}
		} else yg = xg ? Lf(a.stateNode.nextSibling) : null;
		return !0;
	}
	function Hg() {
		for (var a = yg; a;) a = Lf(a.nextSibling);
	}
	function Ig() {
		yg = xg = null;
		I = !1;
	}
	function Jg(a) {
		null === zg ? zg = [a] : zg.push(a);
	}
	var Kg = ua.ReactCurrentBatchConfig;
	function Lg(a, b, c) {
		a = c.ref;
		if (null !== a && "function" !== typeof a && "object" !== typeof a) {
			if (c._owner) {
				c = c._owner;
				if (c) {
					if (1 !== c.tag) throw Error(p(309));
					var d = c.stateNode;
				}
				if (!d) throw Error(p(147, a));
				var e = d, f = "" + a;
				if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
				b = function(a) {
					var b = e.refs;
					null === a ? delete b[f] : b[f] = a;
				};
				b._stringRef = f;
				return b;
			}
			if ("string" !== typeof a) throw Error(p(284));
			if (!c._owner) throw Error(p(290, a));
		}
		return a;
	}
	function Mg(a, b) {
		a = Object.prototype.toString.call(b);
		throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
	}
	function Ng(a) {
		var b = a._init;
		return b(a._payload);
	}
	function Og(a) {
		function b(b, c) {
			if (a) {
				var d = b.deletions;
				null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
			}
		}
		function c(c, d) {
			if (!a) return null;
			for (; null !== d;) b(c, d), d = d.sibling;
			return null;
		}
		function d(a, b) {
			for (a = /* @__PURE__ */ new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
			return a;
		}
		function e(a, b) {
			a = Pg(a, b);
			a.index = 0;
			a.sibling = null;
			return a;
		}
		function f(b, c, d) {
			b.index = d;
			if (!a) return b.flags |= 1048576, c;
			d = b.alternate;
			if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
			b.flags |= 2;
			return c;
		}
		function g(b) {
			a && null === b.alternate && (b.flags |= 2);
			return b;
		}
		function h(a, b, c, d) {
			if (null === b || 6 !== b.tag) return b = Qg(c, a.mode, d), b.return = a, b;
			b = e(b, c);
			b.return = a;
			return b;
		}
		function k(a, b, c, d) {
			var f = c.type;
			if (f === ya) return m(a, b, c.props.children, d, c.key);
			if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && Ng(f) === b.type)) return d = e(b, c.props), d.ref = Lg(a, b, c), d.return = a, d;
			d = Rg(c.type, c.key, c.props, null, a.mode, d);
			d.ref = Lg(a, b, c);
			d.return = a;
			return d;
		}
		function l(a, b, c, d) {
			if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Sg(c, a.mode, d), b.return = a, b;
			b = e(b, c.children || []);
			b.return = a;
			return b;
		}
		function m(a, b, c, d, f) {
			if (null === b || 7 !== b.tag) return b = Tg(c, a.mode, d, f), b.return = a, b;
			b = e(b, c);
			b.return = a;
			return b;
		}
		function q(a, b, c) {
			if ("string" === typeof b && "" !== b || "number" === typeof b) return b = Qg("" + b, a.mode, c), b.return = a, b;
			if ("object" === typeof b && null !== b) {
				switch (b.$$typeof) {
					case va: return c = Rg(b.type, b.key, b.props, null, a.mode, c), c.ref = Lg(a, null, b), c.return = a, c;
					case wa: return b = Sg(b, a.mode, c), b.return = a, b;
					case Ha:
						var d = b._init;
						return q(a, d(b._payload), c);
				}
				if (eb(b) || Ka(b)) return b = Tg(b, a.mode, c, null), b.return = a, b;
				Mg(a, b);
			}
			return null;
		}
		function r(a, b, c, d) {
			var e = null !== b ? b.key : null;
			if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
			if ("object" === typeof c && null !== c) {
				switch (c.$$typeof) {
					case va: return c.key === e ? k(a, b, c, d) : null;
					case wa: return c.key === e ? l(a, b, c, d) : null;
					case Ha: return e = c._init, r(a, b, e(c._payload), d);
				}
				if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
				Mg(a, c);
			}
			return null;
		}
		function y(a, b, c, d, e) {
			if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
			if ("object" === typeof d && null !== d) {
				switch (d.$$typeof) {
					case va: return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
					case wa: return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
					case Ha:
						var f = d._init;
						return y(a, b, c, f(d._payload), e);
				}
				if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
				Mg(b, d);
			}
			return null;
		}
		function n(e, g, h, k) {
			for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
				u.index > w ? (x = u, u = null) : x = u.sibling;
				var n = r(e, u, h[w], k);
				if (null === n) {
					null === u && (u = x);
					break;
				}
				a && u && null === n.alternate && b(e, u);
				g = f(n, g, w);
				null === m ? l = n : m.sibling = n;
				m = n;
				u = x;
			}
			if (w === h.length) return c(e, u), I && tg(e, w), l;
			if (null === u) {
				for (; w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
				I && tg(e, w);
				return l;
			}
			for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
			a && u.forEach(function(a) {
				return b(e, a);
			});
			I && tg(e, w);
			return l;
		}
		function t(e, g, h, k) {
			var l = Ka(h);
			if ("function" !== typeof l) throw Error(p(150));
			h = l.call(h);
			if (null == h) throw Error(p(151));
			for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()) {
				m.index > w ? (x = m, m = null) : x = m.sibling;
				var t = r(e, m, n.value, k);
				if (null === t) {
					null === m && (m = x);
					break;
				}
				a && m && null === t.alternate && b(e, m);
				g = f(t, g, w);
				null === u ? l = t : u.sibling = t;
				u = t;
				m = x;
			}
			if (n.done) return c(e, m), I && tg(e, w), l;
			if (null === m) {
				for (; !n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
				I && tg(e, w);
				return l;
			}
			for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
			a && m.forEach(function(a) {
				return b(e, a);
			});
			I && tg(e, w);
			return l;
		}
		function J(a, d, f, h) {
			"object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
			if ("object" === typeof f && null !== f) {
				switch (f.$$typeof) {
					case va:
						a: {
							for (var k = f.key, l = d; null !== l;) {
								if (l.key === k) {
									k = f.type;
									if (k === ya) {
										if (7 === l.tag) {
											c(a, l.sibling);
											d = e(l, f.props.children);
											d.return = a;
											a = d;
											break a;
										}
									} else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && Ng(k) === l.type) {
										c(a, l.sibling);
										d = e(l, f.props);
										d.ref = Lg(a, l, f);
										d.return = a;
										a = d;
										break a;
									}
									c(a, l);
									break;
								} else b(a, l);
								l = l.sibling;
							}
							f.type === ya ? (d = Tg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Rg(f.type, f.key, f.props, null, a.mode, h), h.ref = Lg(a, d, f), h.return = a, a = h);
						}
						return g(a);
					case wa:
						a: {
							for (l = f.key; null !== d;) {
								if (d.key === l) if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
									c(a, d.sibling);
									d = e(d, f.children || []);
									d.return = a;
									a = d;
									break a;
								} else {
									c(a, d);
									break;
								}
								else b(a, d);
								d = d.sibling;
							}
							d = Sg(f, a.mode, h);
							d.return = a;
							a = d;
						}
						return g(a);
					case Ha: return l = f._init, J(a, d, l(f._payload), h);
				}
				if (eb(f)) return n(a, d, f, h);
				if (Ka(f)) return t(a, d, f, h);
				Mg(a, f);
			}
			return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Qg(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
		}
		return J;
	}
	var Ug = Og(!0), Vg = Og(!1), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
	function $g() {
		Zg = Yg = Xg = null;
	}
	function ah(a) {
		var b = Wg.current;
		E(Wg);
		a._currentValue = b;
	}
	function bh(a, b, c) {
		for (; null !== a;) {
			var d = a.alternate;
			(a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
			if (a === c) break;
			a = a.return;
		}
	}
	function ch(a, b) {
		Xg = a;
		Zg = Yg = null;
		a = a.dependencies;
		null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = !0), a.firstContext = null);
	}
	function eh(a) {
		var b = a._currentValue;
		if (Zg !== a) if (a = {
			context: a,
			memoizedValue: b,
			next: null
		}, null === Yg) {
			if (null === Xg) throw Error(p(308));
			Yg = a;
			Xg.dependencies = {
				lanes: 0,
				firstContext: a
			};
		} else Yg = Yg.next = a;
		return b;
	}
	var fh = null;
	function gh(a) {
		null === fh ? fh = [a] : fh.push(a);
	}
	function hh(a, b, c, d) {
		var e = b.interleaved;
		null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
		b.interleaved = c;
		return ih(a, d);
	}
	function ih(a, b) {
		a.lanes |= b;
		var c = a.alternate;
		null !== c && (c.lanes |= b);
		c = a;
		for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
		return 3 === c.tag ? c.stateNode : null;
	}
	var jh = !1;
	function kh(a) {
		a.updateQueue = {
			baseState: a.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				interleaved: null,
				lanes: 0
			},
			effects: null
		};
	}
	function lh(a, b) {
		a = a.updateQueue;
		b.updateQueue === a && (b.updateQueue = {
			baseState: a.baseState,
			firstBaseUpdate: a.firstBaseUpdate,
			lastBaseUpdate: a.lastBaseUpdate,
			shared: a.shared,
			effects: a.effects
		});
	}
	function mh(a, b) {
		return {
			eventTime: a,
			lane: b,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function nh(a, b, c) {
		var d = a.updateQueue;
		if (null === d) return null;
		d = d.shared;
		if (0 !== (K & 2)) {
			var e = d.pending;
			null === e ? b.next = b : (b.next = e.next, e.next = b);
			d.pending = b;
			return ih(a, c);
		}
		e = d.interleaved;
		null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
		d.interleaved = b;
		return ih(a, c);
	}
	function oh(a, b, c) {
		b = b.updateQueue;
		if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
			var d = b.lanes;
			d &= a.pendingLanes;
			c |= d;
			b.lanes = c;
			Cc(a, c);
		}
	}
	function ph(a, b) {
		var c = a.updateQueue, d = a.alternate;
		if (null !== d && (d = d.updateQueue, c === d)) {
			var e = null, f = null;
			c = c.firstBaseUpdate;
			if (null !== c) {
				do {
					var g = {
						eventTime: c.eventTime,
						lane: c.lane,
						tag: c.tag,
						payload: c.payload,
						callback: c.callback,
						next: null
					};
					null === f ? e = f = g : f = f.next = g;
					c = c.next;
				} while (null !== c);
				null === f ? e = f = b : f = f.next = b;
			} else e = f = b;
			c = {
				baseState: d.baseState,
				firstBaseUpdate: e,
				lastBaseUpdate: f,
				shared: d.shared,
				effects: d.effects
			};
			a.updateQueue = c;
			return;
		}
		a = c.lastBaseUpdate;
		null === a ? c.firstBaseUpdate = b : a.next = b;
		c.lastBaseUpdate = b;
	}
	function qh(a, b, c, d) {
		var e = a.updateQueue;
		jh = !1;
		var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
		if (null !== h) {
			e.shared.pending = null;
			var k = h, l = k.next;
			k.next = null;
			null === g ? f = l : g.next = l;
			g = k;
			var m = a.alternate;
			null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
		}
		if (null !== f) {
			var q = e.baseState;
			g = 0;
			m = l = k = null;
			h = f;
			do {
				var r = h.lane, y = h.eventTime;
				if ((d & r) === r) {
					null !== m && (m = m.next = {
						eventTime: y,
						lane: 0,
						tag: h.tag,
						payload: h.payload,
						callback: h.callback,
						next: null
					});
					a: {
						var n = a, t = h;
						r = b;
						y = c;
						switch (t.tag) {
							case 1:
								n = t.payload;
								if ("function" === typeof n) {
									q = n.call(y, q, r);
									break a;
								}
								q = n;
								break a;
							case 3: n.flags = n.flags & -65537 | 128;
							case 0:
								n = t.payload;
								r = "function" === typeof n ? n.call(y, q, r) : n;
								if (null === r || void 0 === r) break a;
								q = A({}, q, r);
								break a;
							case 2: jh = !0;
						}
					}
					null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
				} else y = {
					eventTime: y,
					lane: r,
					tag: h.tag,
					payload: h.payload,
					callback: h.callback,
					next: null
				}, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
				h = h.next;
				if (null === h) if (h = e.shared.pending, null === h) break;
				else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
			} while (1);
			null === m && (k = q);
			e.baseState = k;
			e.firstBaseUpdate = l;
			e.lastBaseUpdate = m;
			b = e.shared.interleaved;
			if (null !== b) {
				e = b;
				do
					g |= e.lane, e = e.next;
				while (e !== b);
			} else null === f && (e.shared.lanes = 0);
			rh |= g;
			a.lanes = g;
			a.memoizedState = q;
		}
	}
	function sh(a, b, c) {
		a = b.effects;
		b.effects = null;
		if (null !== a) for (b = 0; b < a.length; b++) {
			var d = a[b], e = d.callback;
			if (null !== e) {
				d.callback = null;
				d = c;
				if ("function" !== typeof e) throw Error(p(191, e));
				e.call(d);
			}
		}
	}
	var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
	function xh(a) {
		if (a === th) throw Error(p(174));
		return a;
	}
	function yh(a, b) {
		G(wh, b);
		G(vh, a);
		G(uh, th);
		a = b.nodeType;
		switch (a) {
			case 9:
			case 11:
				b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
				break;
			default: a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
		}
		E(uh);
		G(uh, b);
	}
	function zh() {
		E(uh);
		E(vh);
		E(wh);
	}
	function Ah(a) {
		xh(wh.current);
		var b = xh(uh.current);
		var c = lb(b, a.type);
		b !== c && (G(vh, a), G(uh, c));
	}
	function Bh(a) {
		vh.current === a && (E(uh), E(vh));
	}
	var L = Uf(0);
	function Ch(a) {
		for (var b = a; null !== b;) {
			if (13 === b.tag) {
				var c = b.memoizedState;
				if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
			} else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
				if (0 !== (b.flags & 128)) return b;
			} else if (null !== b.child) {
				b.child.return = b;
				b = b.child;
				continue;
			}
			if (b === a) break;
			for (; null === b.sibling;) {
				if (null === b.return || b.return === a) return null;
				b = b.return;
			}
			b.sibling.return = b.return;
			b = b.sibling;
		}
		return null;
	}
	var Dh = [];
	function Eh() {
		for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
		Dh.length = 0;
	}
	var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = !1, Jh = !1, Kh = 0, Lh = 0;
	function P() {
		throw Error(p(321));
	}
	function Mh(a, b) {
		if (null === b) return !1;
		for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
		return !0;
	}
	function Nh(a, b, c, d, e, f) {
		Hh = f;
		M = b;
		b.memoizedState = null;
		b.updateQueue = null;
		b.lanes = 0;
		Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
		a = c(d, e);
		if (Jh) {
			f = 0;
			do {
				Jh = !1;
				Kh = 0;
				if (25 <= f) throw Error(p(301));
				f += 1;
				O = N = null;
				b.updateQueue = null;
				Fh.current = Qh;
				a = c(d, e);
			} while (Jh);
		}
		Fh.current = Rh;
		b = null !== N && null !== N.next;
		Hh = 0;
		O = N = M = null;
		Ih = !1;
		if (b) throw Error(p(300));
		return a;
	}
	function Sh() {
		var a = 0 !== Kh;
		Kh = 0;
		return a;
	}
	function Th() {
		var a = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		null === O ? M.memoizedState = O = a : O = O.next = a;
		return O;
	}
	function Uh() {
		if (null === N) {
			var a = M.alternate;
			a = null !== a ? a.memoizedState : null;
		} else a = N.next;
		var b = null === O ? M.memoizedState : O.next;
		if (null !== b) O = b, N = a;
		else {
			if (null === a) throw Error(p(310));
			N = a;
			a = {
				memoizedState: N.memoizedState,
				baseState: N.baseState,
				baseQueue: N.baseQueue,
				queue: N.queue,
				next: null
			};
			null === O ? M.memoizedState = O = a : O = O.next = a;
		}
		return O;
	}
	function Vh(a, b) {
		return "function" === typeof b ? b(a) : b;
	}
	function Wh(a) {
		var b = Uh(), c = b.queue;
		if (null === c) throw Error(p(311));
		c.lastRenderedReducer = a;
		var d = N, e = d.baseQueue, f = c.pending;
		if (null !== f) {
			if (null !== e) {
				var g = e.next;
				e.next = f.next;
				f.next = g;
			}
			d.baseQueue = e = f;
			c.pending = null;
		}
		if (null !== e) {
			f = e.next;
			d = d.baseState;
			var h = g = null, k = null, l = f;
			do {
				var m = l.lane;
				if ((Hh & m) === m) null !== k && (k = k.next = {
					lane: 0,
					action: l.action,
					hasEagerState: l.hasEagerState,
					eagerState: l.eagerState,
					next: null
				}), d = l.hasEagerState ? l.eagerState : a(d, l.action);
				else {
					var q = {
						lane: m,
						action: l.action,
						hasEagerState: l.hasEagerState,
						eagerState: l.eagerState,
						next: null
					};
					null === k ? (h = k = q, g = d) : k = k.next = q;
					M.lanes |= m;
					rh |= m;
				}
				l = l.next;
			} while (null !== l && l !== f);
			null === k ? g = d : k.next = h;
			He(d, b.memoizedState) || (dh = !0);
			b.memoizedState = d;
			b.baseState = g;
			b.baseQueue = k;
			c.lastRenderedState = d;
		}
		a = c.interleaved;
		if (null !== a) {
			e = a;
			do
				f = e.lane, M.lanes |= f, rh |= f, e = e.next;
			while (e !== a);
		} else null === e && (c.lanes = 0);
		return [b.memoizedState, c.dispatch];
	}
	function Xh(a) {
		var b = Uh(), c = b.queue;
		if (null === c) throw Error(p(311));
		c.lastRenderedReducer = a;
		var d = c.dispatch, e = c.pending, f = b.memoizedState;
		if (null !== e) {
			c.pending = null;
			var g = e = e.next;
			do
				f = a(f, g.action), g = g.next;
			while (g !== e);
			He(f, b.memoizedState) || (dh = !0);
			b.memoizedState = f;
			null === b.baseQueue && (b.baseState = f);
			c.lastRenderedState = f;
		}
		return [f, d];
	}
	function Yh() {}
	function Zh(a, b) {
		var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
		f && (d.memoizedState = e, dh = !0);
		d = d.queue;
		$h(ai.bind(null, c, d, a), [a]);
		if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
			c.flags |= 2048;
			bi(9, ci.bind(null, c, d, e, b), void 0, null);
			if (null === Q) throw Error(p(349));
			0 !== (Hh & 30) || di(c, b, e);
		}
		return e;
	}
	function di(a, b, c) {
		a.flags |= 16384;
		a = {
			getSnapshot: b,
			value: c
		};
		b = M.updateQueue;
		null === b ? (b = {
			lastEffect: null,
			stores: null
		}, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
	}
	function ci(a, b, c, d) {
		b.value = c;
		b.getSnapshot = d;
		ei(b) && fi(a);
	}
	function ai(a, b, c) {
		return c(function() {
			ei(b) && fi(a);
		});
	}
	function ei(a) {
		var b = a.getSnapshot;
		a = a.value;
		try {
			var c = b();
			return !He(a, c);
		} catch (d) {
			return !0;
		}
	}
	function fi(a) {
		var b = ih(a, 1);
		null !== b && gi(b, a, 1, -1);
	}
	function hi(a) {
		var b = Th();
		"function" === typeof a && (a = a());
		b.memoizedState = b.baseState = a;
		a = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Vh,
			lastRenderedState: a
		};
		b.queue = a;
		a = a.dispatch = ii.bind(null, M, a);
		return [b.memoizedState, a];
	}
	function bi(a, b, c, d) {
		a = {
			tag: a,
			create: b,
			destroy: c,
			deps: d,
			next: null
		};
		b = M.updateQueue;
		null === b ? (b = {
			lastEffect: null,
			stores: null
		}, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
		return a;
	}
	function ji() {
		return Uh().memoizedState;
	}
	function ki(a, b, c, d) {
		var e = Th();
		M.flags |= a;
		e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
	}
	function li(a, b, c, d) {
		var e = Uh();
		d = void 0 === d ? null : d;
		var f = void 0;
		if (null !== N) {
			var g = N.memoizedState;
			f = g.destroy;
			if (null !== d && Mh(d, g.deps)) {
				e.memoizedState = bi(b, c, f, d);
				return;
			}
		}
		M.flags |= a;
		e.memoizedState = bi(1 | b, c, f, d);
	}
	function mi(a, b) {
		return ki(8390656, 8, a, b);
	}
	function $h(a, b) {
		return li(2048, 8, a, b);
	}
	function ni(a, b) {
		return li(4, 2, a, b);
	}
	function oi(a, b) {
		return li(4, 4, a, b);
	}
	function pi(a, b) {
		if ("function" === typeof b) return a = a(), b(a), function() {
			b(null);
		};
		if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
			b.current = null;
		};
	}
	function qi(a, b, c) {
		c = null !== c && void 0 !== c ? c.concat([a]) : null;
		return li(4, 4, pi.bind(null, b, a), c);
	}
	function ri() {}
	function si(a, b) {
		var c = Uh();
		b = void 0 === b ? null : b;
		var d = c.memoizedState;
		if (null !== d && null !== b && Mh(b, d[1])) return d[0];
		c.memoizedState = [a, b];
		return a;
	}
	function ti(a, b) {
		var c = Uh();
		b = void 0 === b ? null : b;
		var d = c.memoizedState;
		if (null !== d && null !== b && Mh(b, d[1])) return d[0];
		a = a();
		c.memoizedState = [a, b];
		return a;
	}
	function ui(a, b, c) {
		if (0 === (Hh & 21)) return a.baseState && (a.baseState = !1, dh = !0), a.memoizedState = c;
		He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = !0);
		return b;
	}
	function vi(a, b) {
		var c = C;
		C = 0 !== c && 4 > c ? c : 4;
		a(!0);
		var d = Gh.transition;
		Gh.transition = {};
		try {
			a(!1), b();
		} finally {
			C = c, Gh.transition = d;
		}
	}
	function wi() {
		return Uh().memoizedState;
	}
	function xi(a, b, c) {
		var d = yi(a);
		c = {
			lane: d,
			action: c,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (zi(a)) Ai(b, c);
		else if (c = hh(a, b, c, d), null !== c) {
			var e = R();
			gi(c, a, d, e);
			Bi(c, b, d);
		}
	}
	function ii(a, b, c) {
		var d = yi(a), e = {
			lane: d,
			action: c,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (zi(a)) Ai(b, e);
		else {
			var f = a.alternate;
			if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
				var g = b.lastRenderedState, h = f(g, c);
				e.hasEagerState = !0;
				e.eagerState = h;
				if (He(h, g)) {
					var k = b.interleaved;
					null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
					b.interleaved = e;
					return;
				}
			} catch (l) {}
			c = hh(a, b, e, d);
			null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
		}
	}
	function zi(a) {
		var b = a.alternate;
		return a === M || null !== b && b === M;
	}
	function Ai(a, b) {
		Jh = Ih = !0;
		var c = a.pending;
		null === c ? b.next = b : (b.next = c.next, c.next = b);
		a.pending = b;
	}
	function Bi(a, b, c) {
		if (0 !== (c & 4194240)) {
			var d = b.lanes;
			d &= a.pendingLanes;
			c |= d;
			b.lanes = c;
			Cc(a, c);
		}
	}
	var Rh = {
		readContext: eh,
		useCallback: P,
		useContext: P,
		useEffect: P,
		useImperativeHandle: P,
		useInsertionEffect: P,
		useLayoutEffect: P,
		useMemo: P,
		useReducer: P,
		useRef: P,
		useState: P,
		useDebugValue: P,
		useDeferredValue: P,
		useTransition: P,
		useMutableSource: P,
		useSyncExternalStore: P,
		useId: P,
		unstable_isNewReconciler: !1
	}, Oh = {
		readContext: eh,
		useCallback: function(a, b) {
			Th().memoizedState = [a, void 0 === b ? null : b];
			return a;
		},
		useContext: eh,
		useEffect: mi,
		useImperativeHandle: function(a, b, c) {
			c = null !== c && void 0 !== c ? c.concat([a]) : null;
			return ki(4194308, 4, pi.bind(null, b, a), c);
		},
		useLayoutEffect: function(a, b) {
			return ki(4194308, 4, a, b);
		},
		useInsertionEffect: function(a, b) {
			return ki(4, 2, a, b);
		},
		useMemo: function(a, b) {
			var c = Th();
			b = void 0 === b ? null : b;
			a = a();
			c.memoizedState = [a, b];
			return a;
		},
		useReducer: function(a, b, c) {
			var d = Th();
			b = void 0 !== c ? c(b) : b;
			d.memoizedState = d.baseState = b;
			a = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: a,
				lastRenderedState: b
			};
			d.queue = a;
			a = a.dispatch = xi.bind(null, M, a);
			return [d.memoizedState, a];
		},
		useRef: function(a) {
			var b = Th();
			a = { current: a };
			return b.memoizedState = a;
		},
		useState: hi,
		useDebugValue: ri,
		useDeferredValue: function(a) {
			return Th().memoizedState = a;
		},
		useTransition: function() {
			var a = hi(!1), b = a[0];
			a = vi.bind(null, a[1]);
			Th().memoizedState = a;
			return [b, a];
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(a, b, c) {
			var d = M, e = Th();
			if (I) {
				if (void 0 === c) throw Error(p(407));
				c = c();
			} else {
				c = b();
				if (null === Q) throw Error(p(349));
				0 !== (Hh & 30) || di(d, b, c);
			}
			e.memoizedState = c;
			var f = {
				value: c,
				getSnapshot: b
			};
			e.queue = f;
			mi(ai.bind(null, d, f, a), [a]);
			d.flags |= 2048;
			bi(9, ci.bind(null, d, f, c, b), void 0, null);
			return c;
		},
		useId: function() {
			var a = Th(), b = Q.identifierPrefix;
			if (I) {
				var c = sg;
				var d = rg;
				c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
				b = ":" + b + "R" + c;
				c = Kh++;
				0 < c && (b += "H" + c.toString(32));
				b += ":";
			} else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
			return a.memoizedState = b;
		},
		unstable_isNewReconciler: !1
	}, Ph = {
		readContext: eh,
		useCallback: si,
		useContext: eh,
		useEffect: $h,
		useImperativeHandle: qi,
		useInsertionEffect: ni,
		useLayoutEffect: oi,
		useMemo: ti,
		useReducer: Wh,
		useRef: ji,
		useState: function() {
			return Wh(Vh);
		},
		useDebugValue: ri,
		useDeferredValue: function(a) {
			return ui(Uh(), N.memoizedState, a);
		},
		useTransition: function() {
			return [Wh(Vh)[0], Uh().memoizedState];
		},
		useMutableSource: Yh,
		useSyncExternalStore: Zh,
		useId: wi,
		unstable_isNewReconciler: !1
	}, Qh = {
		readContext: eh,
		useCallback: si,
		useContext: eh,
		useEffect: $h,
		useImperativeHandle: qi,
		useInsertionEffect: ni,
		useLayoutEffect: oi,
		useMemo: ti,
		useReducer: Xh,
		useRef: ji,
		useState: function() {
			return Xh(Vh);
		},
		useDebugValue: ri,
		useDeferredValue: function(a) {
			var b = Uh();
			return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
		},
		useTransition: function() {
			return [Xh(Vh)[0], Uh().memoizedState];
		},
		useMutableSource: Yh,
		useSyncExternalStore: Zh,
		useId: wi,
		unstable_isNewReconciler: !1
	};
	function Ci(a, b) {
		if (a && a.defaultProps) {
			b = A({}, b);
			a = a.defaultProps;
			for (var c in a) void 0 === b[c] && (b[c] = a[c]);
			return b;
		}
		return b;
	}
	function Di(a, b, c, d) {
		b = a.memoizedState;
		c = c(d, b);
		c = null === c || void 0 === c ? b : A({}, b, c);
		a.memoizedState = c;
		0 === a.lanes && (a.updateQueue.baseState = c);
	}
	var Ei = {
		isMounted: function(a) {
			return (a = a._reactInternals) ? Vb(a) === a : !1;
		},
		enqueueSetState: function(a, b, c) {
			a = a._reactInternals;
			var d = R(), e = yi(a), f = mh(d, e);
			f.payload = b;
			void 0 !== c && null !== c && (f.callback = c);
			b = nh(a, f, e);
			null !== b && (gi(b, a, e, d), oh(b, a, e));
		},
		enqueueReplaceState: function(a, b, c) {
			a = a._reactInternals;
			var d = R(), e = yi(a), f = mh(d, e);
			f.tag = 1;
			f.payload = b;
			void 0 !== c && null !== c && (f.callback = c);
			b = nh(a, f, e);
			null !== b && (gi(b, a, e, d), oh(b, a, e));
		},
		enqueueForceUpdate: function(a, b) {
			a = a._reactInternals;
			var c = R(), d = yi(a), e = mh(c, d);
			e.tag = 2;
			void 0 !== b && null !== b && (e.callback = b);
			b = nh(a, e, d);
			null !== b && (gi(b, a, d, c), oh(b, a, d));
		}
	};
	function Fi(a, b, c, d, e, f, g) {
		a = a.stateNode;
		return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
	}
	function Gi(a, b, c) {
		var d = !1, e = Vf;
		var f = b.contextType;
		"object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
		b = new b(c, f);
		a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
		b.updater = Ei;
		a.stateNode = b;
		b._reactInternals = a;
		d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
		return b;
	}
	function Hi(a, b, c, d) {
		a = b.state;
		"function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
		"function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
		b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
	}
	function Ii(a, b, c, d) {
		var e = a.stateNode;
		e.props = c;
		e.state = a.memoizedState;
		e.refs = {};
		kh(a);
		var f = b.contextType;
		"object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
		e.state = a.memoizedState;
		f = b.getDerivedStateFromProps;
		"function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
		"function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
		"function" === typeof e.componentDidMount && (a.flags |= 4194308);
	}
	function Ji(a, b) {
		try {
			var c = "", d = b;
			do
				c += Pa(d), d = d.return;
			while (d);
			var e = c;
		} catch (f) {
			e = "\nError generating stack: " + f.message + "\n" + f.stack;
		}
		return {
			value: a,
			source: b,
			stack: e,
			digest: null
		};
	}
	function Ki(a, b, c) {
		return {
			value: a,
			source: null,
			stack: null != c ? c : null,
			digest: null != b ? b : null
		};
	}
	function Li(a, b) {
		try {
			console.error(b.value);
		} catch (c) {
			setTimeout(function() {
				throw c;
			});
		}
	}
	var Mi = "function" === typeof WeakMap ? WeakMap : Map;
	function Ni(a, b, c) {
		c = mh(-1, c);
		c.tag = 3;
		c.payload = { element: null };
		var d = b.value;
		c.callback = function() {
			Oi || (Oi = !0, Pi = d);
			Li(a, b);
		};
		return c;
	}
	function Qi(a, b, c) {
		c = mh(-1, c);
		c.tag = 3;
		var d = a.type.getDerivedStateFromError;
		if ("function" === typeof d) {
			var e = b.value;
			c.payload = function() {
				return d(e);
			};
			c.callback = function() {
				Li(a, b);
			};
		}
		var f = a.stateNode;
		null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
			Li(a, b);
			"function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
			var c = b.stack;
			this.componentDidCatch(b.value, { componentStack: null !== c ? c : "" });
		});
		return c;
	}
	function Si(a, b, c) {
		var d = a.pingCache;
		if (null === d) {
			d = a.pingCache = new Mi();
			var e = /* @__PURE__ */ new Set();
			d.set(b, e);
		} else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
		e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
	}
	function Ui(a) {
		do {
			var b;
			if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
			if (b) return a;
			a = a.return;
		} while (null !== a);
		return null;
	}
	function Vi(a, b, c, d, e) {
		if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
		a.flags |= 65536;
		a.lanes = e;
		return a;
	}
	var Wi = ua.ReactCurrentOwner, dh = !1;
	function Xi(a, b, c, d) {
		b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
	}
	function Yi(a, b, c, d, e) {
		c = c.render;
		var f = b.ref;
		ch(b, e);
		d = Nh(a, b, c, d, f, e);
		c = Sh();
		if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
		I && c && vg(b);
		b.flags |= 1;
		Xi(a, b, d, e);
		return b.child;
	}
	function $i(a, b, c, d, e) {
		if (null === a) {
			var f = c.type;
			if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
			a = Rg(c.type, null, d, b, b.mode, e);
			a.ref = b.ref;
			a.return = b;
			return b.child = a;
		}
		f = a.child;
		if (0 === (a.lanes & e)) {
			var g = f.memoizedProps;
			c = c.compare;
			c = null !== c ? c : Ie;
			if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
		}
		b.flags |= 1;
		a = Pg(f, d);
		a.ref = b.ref;
		a.return = b;
		return b.child = a;
	}
	function bj(a, b, c, d, e) {
		if (null !== a) {
			var f = a.memoizedProps;
			if (Ie(f, d) && a.ref === b.ref) if (dh = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = !0);
			else return b.lanes = a.lanes, Zi(a, b, e);
		}
		return cj(a, b, c, d, e);
	}
	function dj(a, b, c) {
		var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
		if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, G(ej, fj), fj |= c;
		else {
			if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
				baseLanes: a,
				cachePool: null,
				transitions: null
			}, b.updateQueue = null, G(ej, fj), fj |= a, null;
			b.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			};
			d = null !== f ? f.baseLanes : c;
			G(ej, fj);
			fj |= d;
		}
		else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
		Xi(a, b, e, c);
		return b.child;
	}
	function gj(a, b) {
		var c = b.ref;
		if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
	}
	function cj(a, b, c, d, e) {
		var f = Zf(c) ? Xf : H.current;
		f = Yf(b, f);
		ch(b, e);
		c = Nh(a, b, c, d, f, e);
		d = Sh();
		if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
		I && d && vg(b);
		b.flags |= 1;
		Xi(a, b, c, e);
		return b.child;
	}
	function hj(a, b, c, d, e) {
		if (Zf(c)) {
			var f = !0;
			cg(b);
		} else f = !1;
		ch(b, e);
		if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = !0;
		else if (null === a) {
			var g = b.stateNode, h = b.memoizedProps;
			g.props = h;
			var k = g.context, l = c.contextType;
			"object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
			var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
			q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
			jh = !1;
			var r = b.memoizedState;
			g.state = r;
			qh(b, d, g, e);
			k = b.memoizedState;
			h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
		} else {
			g = b.stateNode;
			lh(a, b);
			h = b.memoizedProps;
			l = b.type === b.elementType ? h : Ci(b.type, h);
			g.props = l;
			q = b.pendingProps;
			r = g.context;
			k = c.contextType;
			"object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
			var y = c.getDerivedStateFromProps;
			(m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
			jh = !1;
			r = b.memoizedState;
			g.state = r;
			qh(b, d, g, e);
			var n = b.memoizedState;
			h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
		}
		return jj(a, b, c, d, f, e);
	}
	function jj(a, b, c, d, e, f) {
		gj(a, b);
		var g = 0 !== (b.flags & 128);
		if (!d && !g) return e && dg(b, c, !1), Zi(a, b, f);
		d = b.stateNode;
		Wi.current = b;
		var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
		b.flags |= 1;
		null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
		b.memoizedState = d.state;
		e && dg(b, c, !0);
		return b.child;
	}
	function kj(a) {
		var b = a.stateNode;
		b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
		yh(a, b.containerInfo);
	}
	function lj(a, b, c, d, e) {
		Ig();
		Jg(e);
		b.flags |= 256;
		Xi(a, b, c, d);
		return b.child;
	}
	var mj = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0
	};
	function nj(a) {
		return {
			baseLanes: a,
			cachePool: null,
			transitions: null
		};
	}
	function oj(a, b, c) {
		var d = b.pendingProps, e = L.current, f = !1, g = 0 !== (b.flags & 128), h;
		(h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
		if (h) f = !0, b.flags &= -129;
		else if (null === a || null !== a.memoizedState) e |= 1;
		G(L, e & 1);
		if (null === a) {
			Eg(b);
			a = b.memoizedState;
			if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
			g = d.children;
			a = d.fallback;
			return f ? (d = b.mode, f = b.child, g = {
				mode: "hidden",
				children: g
			}, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
		}
		e = a.memoizedState;
		if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
		if (f) {
			f = d.fallback;
			g = b.mode;
			e = a.child;
			h = e.sibling;
			var k = {
				mode: "hidden",
				children: d.children
			};
			0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
			null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
			f.return = b;
			d.return = b;
			d.sibling = f;
			b.child = d;
			d = f;
			f = b.child;
			g = a.child.memoizedState;
			g = null === g ? nj(c) : {
				baseLanes: g.baseLanes | c,
				cachePool: null,
				transitions: g.transitions
			};
			f.memoizedState = g;
			f.childLanes = a.childLanes & ~c;
			b.memoizedState = mj;
			return d;
		}
		f = a.child;
		a = f.sibling;
		d = Pg(f, {
			mode: "visible",
			children: d.children
		});
		0 === (b.mode & 1) && (d.lanes = c);
		d.return = b;
		d.sibling = null;
		null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
		b.child = d;
		b.memoizedState = null;
		return d;
	}
	function qj(a, b) {
		b = pj({
			mode: "visible",
			children: b
		}, a.mode, 0, null);
		b.return = a;
		return a.child = b;
	}
	function sj(a, b, c, d) {
		null !== d && Jg(d);
		Ug(b, a.child, null, c);
		a = qj(b, b.pendingProps.children);
		a.flags |= 2;
		b.memoizedState = null;
		return a;
	}
	function rj(a, b, c, d, e, f, g) {
		if (c) {
			if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
			if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
			f = d.fallback;
			e = b.mode;
			d = pj({
				mode: "visible",
				children: d.children
			}, e, 0, null);
			f = Tg(f, e, g, null);
			f.flags |= 2;
			d.return = b;
			f.return = b;
			d.sibling = f;
			b.child = d;
			0 !== (b.mode & 1) && Ug(b, a.child, null, g);
			b.child.memoizedState = nj(g);
			b.memoizedState = mj;
			return f;
		}
		if (0 === (b.mode & 1)) return sj(a, b, g, null);
		if ("$!" === e.data) {
			d = e.nextSibling && e.nextSibling.dataset;
			if (d) var h = d.dgst;
			d = h;
			f = Error(p(419));
			d = Ki(f, d, void 0);
			return sj(a, b, g, d);
		}
		h = 0 !== (g & a.childLanes);
		if (dh || h) {
			d = Q;
			if (null !== d) {
				switch (g & -g) {
					case 4:
						e = 2;
						break;
					case 16:
						e = 8;
						break;
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						e = 32;
						break;
					case 536870912:
						e = 268435456;
						break;
					default: e = 0;
				}
				e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
				0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
			}
			tj();
			d = Ki(Error(p(421)));
			return sj(a, b, g, d);
		}
		if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
		a = f.treeContext;
		yg = Lf(e.nextSibling);
		xg = b;
		I = !0;
		zg = null;
		null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
		b = qj(b, d.children);
		b.flags |= 4096;
		return b;
	}
	function vj(a, b, c) {
		a.lanes |= b;
		var d = a.alternate;
		null !== d && (d.lanes |= b);
		bh(a.return, b, c);
	}
	function wj(a, b, c, d, e) {
		var f = a.memoizedState;
		null === f ? a.memoizedState = {
			isBackwards: b,
			rendering: null,
			renderingStartTime: 0,
			last: d,
			tail: c,
			tailMode: e
		} : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
	}
	function xj(a, b, c) {
		var d = b.pendingProps, e = d.revealOrder, f = d.tail;
		Xi(a, b, d.children, c);
		d = L.current;
		if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
		else {
			if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
				if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
				else if (19 === a.tag) vj(a, c, b);
				else if (null !== a.child) {
					a.child.return = a;
					a = a.child;
					continue;
				}
				if (a === b) break a;
				for (; null === a.sibling;) {
					if (null === a.return || a.return === b) break a;
					a = a.return;
				}
				a.sibling.return = a.return;
				a = a.sibling;
			}
			d &= 1;
		}
		G(L, d);
		if (0 === (b.mode & 1)) b.memoizedState = null;
		else switch (e) {
			case "forwards":
				c = b.child;
				for (e = null; null !== c;) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
				c = e;
				null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
				wj(b, !1, e, c, f);
				break;
			case "backwards":
				c = null;
				e = b.child;
				for (b.child = null; null !== e;) {
					a = e.alternate;
					if (null !== a && null === Ch(a)) {
						b.child = e;
						break;
					}
					a = e.sibling;
					e.sibling = c;
					c = e;
					e = a;
				}
				wj(b, !0, c, null, f);
				break;
			case "together":
				wj(b, !1, null, null, void 0);
				break;
			default: b.memoizedState = null;
		}
		return b.child;
	}
	function ij(a, b) {
		0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	}
	function Zi(a, b, c) {
		null !== a && (b.dependencies = a.dependencies);
		rh |= b.lanes;
		if (0 === (c & b.childLanes)) return null;
		if (null !== a && b.child !== a.child) throw Error(p(153));
		if (null !== b.child) {
			a = b.child;
			c = Pg(a, a.pendingProps);
			b.child = c;
			for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
			c.sibling = null;
		}
		return b.child;
	}
	function yj(a, b, c) {
		switch (b.tag) {
			case 3:
				kj(b);
				Ig();
				break;
			case 5:
				Ah(b);
				break;
			case 1:
				Zf(b.type) && cg(b);
				break;
			case 4:
				yh(b, b.stateNode.containerInfo);
				break;
			case 10:
				var d = b.type._context, e = b.memoizedProps.value;
				G(Wg, d._currentValue);
				d._currentValue = e;
				break;
			case 13:
				d = b.memoizedState;
				if (null !== d) {
					if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
					if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
					G(L, L.current & 1);
					a = Zi(a, b, c);
					return null !== a ? a.sibling : null;
				}
				G(L, L.current & 1);
				break;
			case 19:
				d = 0 !== (c & b.childLanes);
				if (0 !== (a.flags & 128)) {
					if (d) return xj(a, b, c);
					b.flags |= 128;
				}
				e = b.memoizedState;
				null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
				G(L, L.current);
				if (d) break;
				else return null;
			case 22:
			case 23: return b.lanes = 0, dj(a, b, c);
		}
		return Zi(a, b, c);
	}
	var zj = function(a, b) {
		for (var c = b.child; null !== c;) {
			if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
			else if (4 !== c.tag && null !== c.child) {
				c.child.return = c;
				c = c.child;
				continue;
			}
			if (c === b) break;
			for (; null === c.sibling;) {
				if (null === c.return || c.return === b) return;
				c = c.return;
			}
			c.sibling.return = c.return;
			c = c.sibling;
		}
	}, Bj = function(a, b, c, d) {
		var e = a.memoizedProps;
		if (e !== d) {
			a = b.stateNode;
			xh(uh.current);
			var f = null;
			switch (c) {
				case "input":
					e = Ya(a, e);
					d = Ya(a, d);
					f = [];
					break;
				case "select":
					e = A({}, e, { value: void 0 });
					d = A({}, d, { value: void 0 });
					f = [];
					break;
				case "textarea":
					e = gb(a, e);
					d = gb(a, d);
					f = [];
					break;
				default: "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
			}
			ub(c, d);
			var g;
			c = null;
			for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
				var h = e[l];
				for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
			} else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
			for (l in d) {
				var k = d[l];
				h = null != e ? e[l] : void 0;
				if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
					for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
					for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
				} else c || (f || (f = []), f.push(l, c)), c = k;
				else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
			}
			c && (f = f || []).push("style", c);
			var l = f;
			if (b.updateQueue = l) b.flags |= 4;
		}
	}, Cj = function(a, b, c, d) {
		c !== d && (b.flags |= 4);
	};
	function Dj(a, b) {
		if (!I) switch (a.tailMode) {
			case "hidden":
				b = a.tail;
				for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
				null === c ? a.tail = null : c.sibling = null;
				break;
			case "collapsed":
				c = a.tail;
				for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
				null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
		}
	}
	function S(a) {
		var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
		if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
		else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
		a.subtreeFlags |= d;
		a.childLanes = c;
		return b;
	}
	function Ej(a, b, c) {
		var d = b.pendingProps;
		wg(b);
		switch (b.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return S(b), null;
			case 1: return Zf(b.type) && $f(), S(b), null;
			case 3:
				d = b.stateNode;
				zh();
				E(Wf);
				E(H);
				Eh();
				d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
				if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
				S(b);
				return null;
			case 5:
				Bh(b);
				var e = xh(wh.current);
				c = b.type;
				if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
				else {
					if (!d) {
						if (null === b.stateNode) throw Error(p(166));
						S(b);
						return null;
					}
					a = xh(uh.current);
					if (Gg(b)) {
						d = b.stateNode;
						c = b.type;
						var f = b.memoizedProps;
						d[Of] = b;
						d[Pf] = f;
						a = 0 !== (b.mode & 1);
						switch (c) {
							case "dialog":
								D("cancel", d);
								D("close", d);
								break;
							case "iframe":
							case "object":
							case "embed":
								D("load", d);
								break;
							case "video":
							case "audio":
								for (e = 0; e < lf.length; e++) D(lf[e], d);
								break;
							case "source":
								D("error", d);
								break;
							case "img":
							case "image":
							case "link":
								D("error", d);
								D("load", d);
								break;
							case "details":
								D("toggle", d);
								break;
							case "input":
								Za(d, f);
								D("invalid", d);
								break;
							case "select":
								d._wrapperState = { wasMultiple: !!f.multiple };
								D("invalid", d);
								break;
							case "textarea": hb(d, f), D("invalid", d);
						}
						ub(c, f);
						e = null;
						for (var g in f) if (f.hasOwnProperty(g)) {
							var h = f[g];
							"children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
						}
						switch (c) {
							case "input":
								Va(d);
								db(d, f, !0);
								break;
							case "textarea":
								Va(d);
								jb(d);
								break;
							case "select":
							case "option": break;
							default: "function" === typeof f.onClick && (d.onclick = Bf);
						}
						d = e;
						b.updateQueue = d;
						null !== d && (b.flags |= 4);
					} else {
						g = 9 === e.nodeType ? e : e.ownerDocument;
						"http://www.w3.org/1999/xhtml" === a && (a = kb(c));
						"http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
						a[Of] = b;
						a[Pf] = d;
						zj(a, b, !1, !1);
						b.stateNode = a;
						a: {
							g = vb(c, d);
							switch (c) {
								case "dialog":
									D("cancel", a);
									D("close", a);
									e = d;
									break;
								case "iframe":
								case "object":
								case "embed":
									D("load", a);
									e = d;
									break;
								case "video":
								case "audio":
									for (e = 0; e < lf.length; e++) D(lf[e], a);
									e = d;
									break;
								case "source":
									D("error", a);
									e = d;
									break;
								case "img":
								case "image":
								case "link":
									D("error", a);
									D("load", a);
									e = d;
									break;
								case "details":
									D("toggle", a);
									e = d;
									break;
								case "input":
									Za(a, d);
									e = Ya(a, d);
									D("invalid", a);
									break;
								case "option":
									e = d;
									break;
								case "select":
									a._wrapperState = { wasMultiple: !!d.multiple };
									e = A({}, d, { value: void 0 });
									D("invalid", a);
									break;
								case "textarea":
									hb(a, d);
									e = gb(a, d);
									D("invalid", a);
									break;
								default: e = d;
							}
							ub(c, e);
							h = e;
							for (f in h) if (h.hasOwnProperty(f)) {
								var k = h[f];
								"style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
							}
							switch (c) {
								case "input":
									Va(a);
									db(a, d, !1);
									break;
								case "textarea":
									Va(a);
									jb(a);
									break;
								case "option":
									null != d.value && a.setAttribute("value", "" + Sa(d.value));
									break;
								case "select":
									a.multiple = !!d.multiple;
									f = d.value;
									null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
									break;
								default: "function" === typeof e.onClick && (a.onclick = Bf);
							}
							switch (c) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									d = !!d.autoFocus;
									break a;
								case "img":
									d = !0;
									break a;
								default: d = !1;
							}
						}
						d && (b.flags |= 4);
					}
					null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
				}
				S(b);
				return null;
			case 6:
				if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
				else {
					if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
					c = xh(wh.current);
					xh(uh.current);
					if (Gg(b)) {
						d = b.stateNode;
						c = b.memoizedProps;
						d[Of] = b;
						if (f = d.nodeValue !== c) {
							if (a = xg, null !== a) switch (a.tag) {
								case 3:
									Af(d.nodeValue, c, 0 !== (a.mode & 1));
									break;
								case 5: !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
							}
						}
						f && (b.flags |= 4);
					} else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
				}
				S(b);
				return null;
			case 13:
				E(L);
				d = b.memoizedState;
				if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
					if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = !1;
					else if (f = Gg(b), null !== d && null !== d.dehydrated) {
						if (null === a) {
							if (!f) throw Error(p(318));
							f = b.memoizedState;
							f = null !== f ? f.dehydrated : null;
							if (!f) throw Error(p(317));
							f[Of] = b;
						} else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
						S(b);
						f = !1;
					} else null !== zg && (Fj(zg), zg = null), f = !0;
					if (!f) return b.flags & 65536 ? b : null;
				}
				if (0 !== (b.flags & 128)) return b.lanes = c, b;
				d = null !== d;
				d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
				null !== b.updateQueue && (b.flags |= 4);
				S(b);
				return null;
			case 4: return zh(), null === a && sf(b.stateNode.containerInfo), S(b), null;
			case 10: return ah(b.type._context), S(b), null;
			case 17: return Zf(b.type) && $f(), S(b), null;
			case 19:
				E(L);
				f = b.memoizedState;
				if (null === f) return S(b), null;
				d = 0 !== (b.flags & 128);
				g = f.rendering;
				if (null === g) if (d) Dj(f, !1);
				else {
					if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
						g = Ch(a);
						if (null !== g) {
							b.flags |= 128;
							Dj(f, !1);
							d = g.updateQueue;
							null !== d && (b.updateQueue = d, b.flags |= 4);
							b.subtreeFlags = 0;
							d = c;
							for (c = b.child; null !== c;) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
								lanes: a.lanes,
								firstContext: a.firstContext
							}), c = c.sibling;
							G(L, L.current & 1 | 2);
							return b.child;
						}
						a = a.sibling;
					}
					null !== f.tail && B() > Gj && (b.flags |= 128, d = !0, Dj(f, !1), b.lanes = 4194304);
				}
				else {
					if (!d) if (a = Ch(g), null !== a) {
						if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
					} else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = !0, Dj(f, !1), b.lanes = 4194304);
					f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
				}
				if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
				S(b);
				return null;
			case 22:
			case 23: return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(p(156, b.tag));
	}
	function Ij(a, b) {
		wg(b);
		switch (b.tag) {
			case 1: return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
			case 3: return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
			case 5: return Bh(b), null;
			case 13:
				E(L);
				a = b.memoizedState;
				if (null !== a && null !== a.dehydrated) {
					if (null === b.alternate) throw Error(p(340));
					Ig();
				}
				a = b.flags;
				return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
			case 19: return E(L), null;
			case 4: return zh(), null;
			case 10: return ah(b.type._context), null;
			case 22:
			case 23: return Hj(), null;
			case 24: return null;
			default: return null;
		}
	}
	var Jj = !1, U = !1, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
	function Lj(a, b) {
		var c = a.ref;
		if (null !== c) if ("function" === typeof c) try {
			c(null);
		} catch (d) {
			W(a, b, d);
		}
		else c.current = null;
	}
	function Mj(a, b, c) {
		try {
			c();
		} catch (d) {
			W(a, b, d);
		}
	}
	var Nj = !1;
	function Oj(a, b) {
		Cf = dd;
		a = Me();
		if (Ne(a)) {
			if ("selectionStart" in a) var c = {
				start: a.selectionStart,
				end: a.selectionEnd
			};
			else a: {
				c = (c = a.ownerDocument) && c.defaultView || window;
				var d = c.getSelection && c.getSelection();
				if (d && 0 !== d.rangeCount) {
					c = d.anchorNode;
					var e = d.anchorOffset, f = d.focusNode;
					d = d.focusOffset;
					try {
						c.nodeType, f.nodeType;
					} catch (F) {
						c = null;
						break a;
					}
					var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
					b: for (;;) {
						for (var y;;) {
							q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
							q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
							3 === q.nodeType && (g += q.nodeValue.length);
							if (null === (y = q.firstChild)) break;
							r = q;
							q = y;
						}
						for (;;) {
							if (q === a) break b;
							r === c && ++l === e && (h = g);
							r === f && ++m === d && (k = g);
							if (null !== (y = q.nextSibling)) break;
							q = r;
							r = q.parentNode;
						}
						q = y;
					}
					c = -1 === h || -1 === k ? null : {
						start: h,
						end: k
					};
				} else c = null;
			}
			c = c || {
				start: 0,
				end: 0
			};
		} else c = null;
		Df = {
			focusedElem: a,
			selectionRange: c
		};
		dd = !1;
		for (V = b; null !== V;) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
		else for (; null !== V;) {
			b = V;
			try {
				var n = b.alternate;
				if (0 !== (b.flags & 1024)) switch (b.tag) {
					case 0:
					case 11:
					case 15: break;
					case 1:
						if (null !== n) {
							var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode;
							x.__reactInternalSnapshotBeforeUpdate = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
						}
						break;
					case 3:
						var u = b.stateNode.containerInfo;
						1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
						break;
					case 5:
					case 6:
					case 4:
					case 17: break;
					default: throw Error(p(163));
				}
			} catch (F) {
				W(b, b.return, F);
			}
			a = b.sibling;
			if (null !== a) {
				a.return = b.return;
				V = a;
				break;
			}
			V = b.return;
		}
		n = Nj;
		Nj = !1;
		return n;
	}
	function Pj(a, b, c) {
		var d = b.updateQueue;
		d = null !== d ? d.lastEffect : null;
		if (null !== d) {
			var e = d = d.next;
			do {
				if ((e.tag & a) === a) {
					var f = e.destroy;
					e.destroy = void 0;
					void 0 !== f && Mj(b, c, f);
				}
				e = e.next;
			} while (e !== d);
		}
	}
	function Qj(a, b) {
		b = b.updateQueue;
		b = null !== b ? b.lastEffect : null;
		if (null !== b) {
			var c = b = b.next;
			do {
				if ((c.tag & a) === a) {
					var d = c.create;
					c.destroy = d();
				}
				c = c.next;
			} while (c !== b);
		}
	}
	function Rj(a) {
		var b = a.ref;
		if (null !== b) {
			var c = a.stateNode;
			switch (a.tag) {
				case 5:
					a = c;
					break;
				default: a = c;
			}
			"function" === typeof b ? b(a) : b.current = a;
		}
	}
	function Sj(a) {
		var b = a.alternate;
		null !== b && (a.alternate = null, Sj(b));
		a.child = null;
		a.deletions = null;
		a.sibling = null;
		5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
		a.stateNode = null;
		a.return = null;
		a.dependencies = null;
		a.memoizedProps = null;
		a.memoizedState = null;
		a.pendingProps = null;
		a.stateNode = null;
		a.updateQueue = null;
	}
	function Tj(a) {
		return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}
	function Uj(a) {
		a: for (;;) {
			for (; null === a.sibling;) {
				if (null === a.return || Tj(a.return)) return null;
				a = a.return;
			}
			a.sibling.return = a.return;
			for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
				if (a.flags & 2) continue a;
				if (null === a.child || 4 === a.tag) continue a;
				else a.child.return = a, a = a.child;
			}
			if (!(a.flags & 2)) return a.stateNode;
		}
	}
	function Vj(a, b, c) {
		var d = a.tag;
		if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
		else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a;) Vj(a, b, c), a = a.sibling;
	}
	function Wj(a, b, c) {
		var d = a.tag;
		if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
		else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
	}
	var X = null, Xj = !1;
	function Yj(a, b, c) {
		for (c = c.child; null !== c;) Zj(a, b, c), c = c.sibling;
	}
	function Zj(a, b, c) {
		if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
			lc.onCommitFiberUnmount(kc, c);
		} catch (h) {}
		switch (c.tag) {
			case 5: U || Lj(c, b);
			case 6:
				var d = X, e = Xj;
				X = null;
				Yj(a, b, c);
				X = d;
				Xj = e;
				null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
				break;
			case 18:
				null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
				break;
			case 4:
				d = X;
				e = Xj;
				X = c.stateNode.containerInfo;
				Xj = !0;
				Yj(a, b, c);
				X = d;
				Xj = e;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
					e = d = d.next;
					do {
						var f = e, g = f.destroy;
						f = f.tag;
						void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
						e = e.next;
					} while (e !== d);
				}
				Yj(a, b, c);
				break;
			case 1:
				if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
					d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
				} catch (h) {
					W(c, b, h);
				}
				Yj(a, b, c);
				break;
			case 21:
				Yj(a, b, c);
				break;
			case 22:
				c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
				break;
			default: Yj(a, b, c);
		}
	}
	function ak(a) {
		var b = a.updateQueue;
		if (null !== b) {
			a.updateQueue = null;
			var c = a.stateNode;
			null === c && (c = a.stateNode = new Kj());
			b.forEach(function(b) {
				var d = bk.bind(null, a, b);
				c.has(b) || (c.add(b), b.then(d, d));
			});
		}
	}
	function ck(a, b) {
		var c = b.deletions;
		if (null !== c) for (var d = 0; d < c.length; d++) {
			var e = c[d];
			try {
				var f = a, g = b, h = g;
				a: for (; null !== h;) {
					switch (h.tag) {
						case 5:
							X = h.stateNode;
							Xj = !1;
							break a;
						case 3:
							X = h.stateNode.containerInfo;
							Xj = !0;
							break a;
						case 4:
							X = h.stateNode.containerInfo;
							Xj = !0;
							break a;
					}
					h = h.return;
				}
				if (null === X) throw Error(p(160));
				Zj(f, g, e);
				X = null;
				Xj = !1;
				var k = e.alternate;
				null !== k && (k.return = null);
				e.return = null;
			} catch (l) {
				W(e, b, l);
			}
		}
		if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) dk(b, a), b = b.sibling;
	}
	function dk(a, b) {
		var c = a.alternate, d = a.flags;
		switch (a.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				ck(b, a);
				ek(a);
				if (d & 4) {
					try {
						Pj(3, a, a.return), Qj(3, a);
					} catch (t) {
						W(a, a.return, t);
					}
					try {
						Pj(5, a, a.return);
					} catch (t) {
						W(a, a.return, t);
					}
				}
				break;
			case 1:
				ck(b, a);
				ek(a);
				d & 512 && null !== c && Lj(c, c.return);
				break;
			case 5:
				ck(b, a);
				ek(a);
				d & 512 && null !== c && Lj(c, c.return);
				if (a.flags & 32) {
					var e = a.stateNode;
					try {
						ob(e, "");
					} catch (t) {
						W(a, a.return, t);
					}
				}
				if (d & 4 && (e = a.stateNode, null != e)) {
					var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
					a.updateQueue = null;
					if (null !== k) try {
						"input" === h && "radio" === f.type && null != f.name && ab(e, f);
						vb(h, g);
						var l = vb(h, f);
						for (g = 0; g < k.length; g += 2) {
							var m = k[g], q = k[g + 1];
							"style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
						}
						switch (h) {
							case "input":
								bb(e, f);
								break;
							case "textarea":
								ib(e, f);
								break;
							case "select":
								var r = e._wrapperState.wasMultiple;
								e._wrapperState.wasMultiple = !!f.multiple;
								var y = f.value;
								null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
						}
						e[Pf] = f;
					} catch (t) {
						W(a, a.return, t);
					}
				}
				break;
			case 6:
				ck(b, a);
				ek(a);
				if (d & 4) {
					if (null === a.stateNode) throw Error(p(162));
					e = a.stateNode;
					f = a.memoizedProps;
					try {
						e.nodeValue = f;
					} catch (t) {
						W(a, a.return, t);
					}
				}
				break;
			case 3:
				ck(b, a);
				ek(a);
				if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
					bd(b.containerInfo);
				} catch (t) {
					W(a, a.return, t);
				}
				break;
			case 4:
				ck(b, a);
				ek(a);
				break;
			case 13:
				ck(b, a);
				ek(a);
				e = a.child;
				e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
				d & 4 && ak(a);
				break;
			case 22:
				m = null !== c && null !== c.memoizedState;
				a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
				ek(a);
				if (d & 8192) {
					l = null !== a.memoizedState;
					if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m;) {
						for (q = V = m; null !== V;) {
							r = V;
							y = r.child;
							switch (r.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									Pj(4, r, r.return);
									break;
								case 1:
									Lj(r, r.return);
									var n = r.stateNode;
									if ("function" === typeof n.componentWillUnmount) {
										d = r;
										c = r.return;
										try {
											b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
										} catch (t) {
											W(d, c, t);
										}
									}
									break;
								case 5:
									Lj(r, r.return);
									break;
								case 22: if (null !== r.memoizedState) {
									gk(q);
									continue;
								}
							}
							null !== y ? (y.return = r, V = y) : gk(q);
						}
						m = m.sibling;
					}
					a: for (m = null, q = a;;) {
						if (5 === q.tag) {
							if (null === m) {
								m = q;
								try {
									e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
								} catch (t) {
									W(a, a.return, t);
								}
							}
						} else if (6 === q.tag) {
							if (null === m) try {
								q.stateNode.nodeValue = l ? "" : q.memoizedProps;
							} catch (t) {
								W(a, a.return, t);
							}
						} else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
							q.child.return = q;
							q = q.child;
							continue;
						}
						if (q === a) break a;
						for (; null === q.sibling;) {
							if (null === q.return || q.return === a) break a;
							m === q && (m = null);
							q = q.return;
						}
						m === q && (m = null);
						q.sibling.return = q.return;
						q = q.sibling;
					}
				}
				break;
			case 19:
				ck(b, a);
				ek(a);
				d & 4 && ak(a);
				break;
			case 21: break;
			default: ck(b, a), ek(a);
		}
	}
	function ek(a) {
		var b = a.flags;
		if (b & 2) {
			try {
				a: {
					for (var c = a.return; null !== c;) {
						if (Tj(c)) {
							var d = c;
							break a;
						}
						c = c.return;
					}
					throw Error(p(160));
				}
				switch (d.tag) {
					case 5:
						var e = d.stateNode;
						d.flags & 32 && (ob(e, ""), d.flags &= -33);
						Wj(a, Uj(a), e);
						break;
					case 3:
					case 4:
						var g = d.stateNode.containerInfo;
						Vj(a, Uj(a), g);
						break;
					default: throw Error(p(161));
				}
			} catch (k) {
				W(a, a.return, k);
			}
			a.flags &= -3;
		}
		b & 4096 && (a.flags &= -4097);
	}
	function hk(a, b, c) {
		V = a;
		ik(a, b, c);
	}
	function ik(a, b, c) {
		for (var d = 0 !== (a.mode & 1); null !== V;) {
			var e = V, f = e.child;
			if (22 === e.tag && d) {
				var g = null !== e.memoizedState || Jj;
				if (!g) {
					var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
					h = Jj;
					var l = U;
					Jj = g;
					if ((U = k) && !l) for (V = e; null !== V;) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
					for (; null !== f;) V = f, ik(f, b, c), f = f.sibling;
					V = e;
					Jj = h;
					U = l;
				}
				kk(a, b, c);
			} else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a, b, c);
		}
	}
	function kk(a) {
		for (; null !== V;) {
			var b = V;
			if (0 !== (b.flags & 8772)) {
				var c = b.alternate;
				try {
					if (0 !== (b.flags & 8772)) switch (b.tag) {
						case 0:
						case 11:
						case 15:
							U || Qj(5, b);
							break;
						case 1:
							var d = b.stateNode;
							if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
							else {
								var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
								d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
							}
							var f = b.updateQueue;
							null !== f && sh(b, f, d);
							break;
						case 3:
							var g = b.updateQueue;
							if (null !== g) {
								c = null;
								if (null !== b.child) switch (b.child.tag) {
									case 5:
										c = b.child.stateNode;
										break;
									case 1: c = b.child.stateNode;
								}
								sh(b, g, c);
							}
							break;
						case 5:
							var h = b.stateNode;
							if (null === c && b.flags & 4) {
								c = h;
								var k = b.memoizedProps;
								switch (b.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										k.autoFocus && c.focus();
										break;
									case "img": k.src && (c.src = k.src);
								}
							}
							break;
						case 6: break;
						case 4: break;
						case 12: break;
						case 13:
							if (null === b.memoizedState) {
								var l = b.alternate;
								if (null !== l) {
									var m = l.memoizedState;
									if (null !== m) {
										var q = m.dehydrated;
										null !== q && bd(q);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25: break;
						default: throw Error(p(163));
					}
					U || b.flags & 512 && Rj(b);
				} catch (r) {
					W(b, b.return, r);
				}
			}
			if (b === a) {
				V = null;
				break;
			}
			c = b.sibling;
			if (null !== c) {
				c.return = b.return;
				V = c;
				break;
			}
			V = b.return;
		}
	}
	function gk(a) {
		for (; null !== V;) {
			var b = V;
			if (b === a) {
				V = null;
				break;
			}
			var c = b.sibling;
			if (null !== c) {
				c.return = b.return;
				V = c;
				break;
			}
			V = b.return;
		}
	}
	function jk(a) {
		for (; null !== V;) {
			var b = V;
			try {
				switch (b.tag) {
					case 0:
					case 11:
					case 15:
						var c = b.return;
						try {
							Qj(4, b);
						} catch (k) {
							W(b, c, k);
						}
						break;
					case 1:
						var d = b.stateNode;
						if ("function" === typeof d.componentDidMount) {
							var e = b.return;
							try {
								d.componentDidMount();
							} catch (k) {
								W(b, e, k);
							}
						}
						var f = b.return;
						try {
							Rj(b);
						} catch (k) {
							W(b, f, k);
						}
						break;
					case 5:
						var g = b.return;
						try {
							Rj(b);
						} catch (k) {
							W(b, g, k);
						}
				}
			} catch (k) {
				W(b, b.return, k);
			}
			if (b === a) {
				V = null;
				break;
			}
			var h = b.sibling;
			if (null !== h) {
				h.return = b.return;
				V = h;
				break;
			}
			V = b.return;
		}
	}
	var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = !1, Pi = null, Ri = null, vk = !1, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
	function R() {
		return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
	}
	function yi(a) {
		if (0 === (a.mode & 1)) return 1;
		if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
		if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
		a = C;
		if (0 !== a) return a;
		a = window.event;
		a = void 0 === a ? 16 : jd(a.type);
		return a;
	}
	function gi(a, b, c, d) {
		if (50 < yk) throw yk = 0, zk = null, Error(p(185));
		Ac(a, c, d);
		if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
	}
	function Dk(a, b) {
		var c = a.callbackNode;
		wc(a, b);
		var d = uc(a, a === Q ? Z : 0);
		if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
		else if (b = d & -d, a.callbackPriority !== b) {
			null != c && bc(c);
			if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
				0 === (K & 6) && jg();
			}), c = null;
			else {
				switch (Dc(d)) {
					case 1:
						c = fc;
						break;
					case 4:
						c = gc;
						break;
					case 16:
						c = hc;
						break;
					case 536870912:
						c = jc;
						break;
					default: c = hc;
				}
				c = Fk(c, Gk.bind(null, a));
			}
			a.callbackPriority = b;
			a.callbackNode = c;
		}
	}
	function Gk(a, b) {
		Ak = -1;
		Bk = 0;
		if (0 !== (K & 6)) throw Error(p(327));
		var c = a.callbackNode;
		if (Hk() && a.callbackNode !== c) return null;
		var d = uc(a, a === Q ? Z : 0);
		if (0 === d) return null;
		if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
		else {
			b = d;
			var e = K;
			K |= 2;
			var f = Jk();
			if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
			do
				try {
					Lk();
					break;
				} catch (h) {
					Mk(a, h);
				}
			while (1);
			$g();
			mk.current = f;
			K = e;
			null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
		}
		if (0 !== b) {
			2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
			if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
			if (6 === b) Ck(a, d);
			else {
				e = a.current.alternate;
				if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
				a.finishedWork = e;
				a.finishedLanes = d;
				switch (b) {
					case 0:
					case 1: throw Error(p(345));
					case 2:
						Pk(a, tk, uk);
						break;
					case 3:
						Ck(a, d);
						if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
							if (0 !== uc(a, 0)) break;
							e = a.suspendedLanes;
							if ((e & d) !== d) {
								R();
								a.pingedLanes |= a.suspendedLanes & e;
								break;
							}
							a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
							break;
						}
						Pk(a, tk, uk);
						break;
					case 4:
						Ck(a, d);
						if ((d & 4194240) === d) break;
						b = a.eventTimes;
						for (e = -1; 0 < d;) {
							var g = 31 - oc(d);
							f = 1 << g;
							g = b[g];
							g > e && (e = g);
							d &= ~f;
						}
						d = e;
						d = B() - d;
						d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
						if (10 < d) {
							a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
							break;
						}
						Pk(a, tk, uk);
						break;
					case 5:
						Pk(a, tk, uk);
						break;
					default: throw Error(p(329));
				}
			}
		}
		Dk(a, B());
		return a.callbackNode === c ? Gk.bind(null, a) : null;
	}
	function Nk(a, b) {
		var c = sk;
		a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
		a = Ik(a, b);
		2 !== a && (b = tk, tk = c, null !== b && Fj(b));
		return a;
	}
	function Fj(a) {
		null === tk ? tk = a : tk.push.apply(tk, a);
	}
	function Ok(a) {
		for (var b = a;;) {
			if (b.flags & 16384) {
				var c = b.updateQueue;
				if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
					var e = c[d], f = e.getSnapshot;
					e = e.value;
					try {
						if (!He(f(), e)) return !1;
					} catch (g) {
						return !1;
					}
				}
			}
			c = b.child;
			if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
			else {
				if (b === a) break;
				for (; null === b.sibling;) {
					if (null === b.return || b.return === a) return !0;
					b = b.return;
				}
				b.sibling.return = b.return;
				b = b.sibling;
			}
		}
		return !0;
	}
	function Ck(a, b) {
		b &= ~rk;
		b &= ~qk;
		a.suspendedLanes |= b;
		a.pingedLanes &= ~b;
		for (a = a.expirationTimes; 0 < b;) {
			var c = 31 - oc(b), d = 1 << c;
			a[c] = -1;
			b &= ~d;
		}
	}
	function Ek(a) {
		if (0 !== (K & 6)) throw Error(p(327));
		Hk();
		var b = uc(a, 0);
		if (0 === (b & 1)) return Dk(a, B()), null;
		var c = Ik(a, b);
		if (0 !== a.tag && 2 === c) {
			var d = xc(a);
			0 !== d && (b = d, c = Nk(a, d));
		}
		if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
		if (6 === c) throw Error(p(345));
		a.finishedWork = a.current.alternate;
		a.finishedLanes = b;
		Pk(a, tk, uk);
		Dk(a, B());
		return null;
	}
	function Qk(a, b) {
		var c = K;
		K |= 1;
		try {
			return a(b);
		} finally {
			K = c, 0 === K && (Gj = B() + 500, fg && jg());
		}
	}
	function Rk(a) {
		null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
		var b = K;
		K |= 1;
		var c = ok.transition, d = C;
		try {
			if (ok.transition = null, C = 1, a) return a();
		} finally {
			C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
		}
	}
	function Hj() {
		fj = ej.current;
		E(ej);
	}
	function Kk(a, b) {
		a.finishedWork = null;
		a.finishedLanes = 0;
		var c = a.timeoutHandle;
		-1 !== c && (a.timeoutHandle = -1, Gf(c));
		if (null !== Y) for (c = Y.return; null !== c;) {
			var d = c;
			wg(d);
			switch (d.tag) {
				case 1:
					d = d.type.childContextTypes;
					null !== d && void 0 !== d && $f();
					break;
				case 3:
					zh();
					E(Wf);
					E(H);
					Eh();
					break;
				case 5:
					Bh(d);
					break;
				case 4:
					zh();
					break;
				case 13:
					E(L);
					break;
				case 19:
					E(L);
					break;
				case 10:
					ah(d.type._context);
					break;
				case 22:
				case 23: Hj();
			}
			c = c.return;
		}
		Q = a;
		Y = a = Pg(a.current, null);
		Z = fj = b;
		T = 0;
		pk = null;
		rk = qk = rh = 0;
		tk = sk = null;
		if (null !== fh) {
			for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
				c.interleaved = null;
				var e = d.next, f = c.pending;
				if (null !== f) {
					var g = f.next;
					f.next = e;
					d.next = g;
				}
				c.pending = d;
			}
			fh = null;
		}
		return a;
	}
	function Mk(a, b) {
		do {
			var c = Y;
			try {
				$g();
				Fh.current = Rh;
				if (Ih) {
					for (var d = M.memoizedState; null !== d;) {
						var e = d.queue;
						null !== e && (e.pending = null);
						d = d.next;
					}
					Ih = !1;
				}
				Hh = 0;
				O = N = M = null;
				Jh = !1;
				Kh = 0;
				nk.current = null;
				if (null === c || null === c.return) {
					T = 1;
					pk = b;
					Y = null;
					break;
				}
				a: {
					var f = a, g = c.return, h = c, k = b;
					b = Z;
					h.flags |= 32768;
					if (null !== k && "object" === typeof k && "function" === typeof k.then) {
						var l = k, m = h, q = m.tag;
						if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
							var r = m.alternate;
							r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
						}
						var y = Ui(g);
						if (null !== y) {
							y.flags &= -257;
							Vi(y, g, h, f, b);
							y.mode & 1 && Si(f, l, b);
							b = y;
							k = l;
							var n = b.updateQueue;
							if (null === n) {
								var t = /* @__PURE__ */ new Set();
								t.add(k);
								b.updateQueue = t;
							} else n.add(k);
							break a;
						} else {
							if (0 === (b & 1)) {
								Si(f, l, b);
								tj();
								break a;
							}
							k = Error(p(426));
						}
					} else if (I && h.mode & 1) {
						var J = Ui(g);
						if (null !== J) {
							0 === (J.flags & 65536) && (J.flags |= 256);
							Vi(J, g, h, f, b);
							Jg(Ji(k, h));
							break a;
						}
					}
					f = k = Ji(k, h);
					4 !== T && (T = 2);
					null === sk ? sk = [f] : sk.push(f);
					f = g;
					do {
						switch (f.tag) {
							case 3:
								f.flags |= 65536;
								b &= -b;
								f.lanes |= b;
								var x = Ni(f, k, b);
								ph(f, x);
								break a;
							case 1:
								h = k;
								var w = f.type, u = f.stateNode;
								if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
									f.flags |= 65536;
									b &= -b;
									f.lanes |= b;
									var F = Qi(f, h, b);
									ph(f, F);
									break a;
								}
						}
						f = f.return;
					} while (null !== f);
				}
				Sk(c);
			} catch (na) {
				b = na;
				Y === c && null !== c && (Y = c = c.return);
				continue;
			}
			break;
		} while (1);
	}
	function Jk() {
		var a = mk.current;
		mk.current = Rh;
		return null === a ? Rh : a;
	}
	function tj() {
		if (0 === T || 3 === T || 2 === T) T = 4;
		null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
	}
	function Ik(a, b) {
		var c = K;
		K |= 2;
		var d = Jk();
		if (Q !== a || Z !== b) uk = null, Kk(a, b);
		do
			try {
				Tk();
				break;
			} catch (e) {
				Mk(a, e);
			}
		while (1);
		$g();
		K = c;
		mk.current = d;
		if (null !== Y) throw Error(p(261));
		Q = null;
		Z = 0;
		return T;
	}
	function Tk() {
		for (; null !== Y;) Uk(Y);
	}
	function Lk() {
		for (; null !== Y && !cc();) Uk(Y);
	}
	function Uk(a) {
		var b = Vk(a.alternate, a, fj);
		a.memoizedProps = a.pendingProps;
		null === b ? Sk(a) : Y = b;
		nk.current = null;
	}
	function Sk(a) {
		var b = a;
		do {
			var c = b.alternate;
			a = b.return;
			if (0 === (b.flags & 32768)) {
				if (c = Ej(c, b, fj), null !== c) {
					Y = c;
					return;
				}
			} else {
				c = Ij(c, b);
				if (null !== c) {
					c.flags &= 32767;
					Y = c;
					return;
				}
				if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
				else {
					T = 6;
					Y = null;
					return;
				}
			}
			b = b.sibling;
			if (null !== b) {
				Y = b;
				return;
			}
			Y = b = a;
		} while (null !== b);
		0 === T && (T = 5);
	}
	function Pk(a, b, c) {
		var d = C, e = ok.transition;
		try {
			ok.transition = null, C = 1, Wk(a, b, c, d);
		} finally {
			ok.transition = e, C = d;
		}
		return null;
	}
	function Wk(a, b, c, d) {
		do
			Hk();
		while (null !== wk);
		if (0 !== (K & 6)) throw Error(p(327));
		c = a.finishedWork;
		var e = a.finishedLanes;
		if (null === c) return null;
		a.finishedWork = null;
		a.finishedLanes = 0;
		if (c === a.current) throw Error(p(177));
		a.callbackNode = null;
		a.callbackPriority = 0;
		var f = c.lanes | c.childLanes;
		Bc(a, f);
		a === Q && (Y = Q = null, Z = 0);
		0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = !0, Fk(hc, function() {
			Hk();
			return null;
		}));
		f = 0 !== (c.flags & 15990);
		if (0 !== (c.subtreeFlags & 15990) || f) {
			f = ok.transition;
			ok.transition = null;
			var g = C;
			C = 1;
			var h = K;
			K |= 4;
			nk.current = null;
			Oj(a, c);
			dk(c, a);
			Oe(Df);
			dd = !!Cf;
			Df = Cf = null;
			a.current = c;
			hk(c, a, e);
			dc();
			K = h;
			C = g;
			ok.transition = f;
		} else a.current = c;
		vk && (vk = !1, wk = a, xk = e);
		f = a.pendingLanes;
		0 === f && (Ri = null);
		mc(c.stateNode, d);
		Dk(a, B());
		if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
			componentStack: e.stack,
			digest: e.digest
		});
		if (Oi) throw Oi = !1, a = Pi, Pi = null, a;
		0 !== (xk & 1) && 0 !== a.tag && Hk();
		f = a.pendingLanes;
		0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
		jg();
		return null;
	}
	function Hk() {
		if (null !== wk) {
			var a = Dc(xk), b = ok.transition, c = C;
			try {
				ok.transition = null;
				C = 16 > a ? 16 : a;
				if (null === wk) var d = !1;
				else {
					a = wk;
					wk = null;
					xk = 0;
					if (0 !== (K & 6)) throw Error(p(331));
					var e = K;
					K |= 4;
					for (V = a.current; null !== V;) {
						var f = V, g = f.child;
						if (0 !== (V.flags & 16)) {
							var h = f.deletions;
							if (null !== h) {
								for (var k = 0; k < h.length; k++) {
									var l = h[k];
									for (V = l; null !== V;) {
										var m = V;
										switch (m.tag) {
											case 0:
											case 11:
											case 15: Pj(8, m, f);
										}
										var q = m.child;
										if (null !== q) q.return = m, V = q;
										else for (; null !== V;) {
											m = V;
											var r = m.sibling, y = m.return;
											Sj(m);
											if (m === l) {
												V = null;
												break;
											}
											if (null !== r) {
												r.return = y;
												V = r;
												break;
											}
											V = y;
										}
									}
								}
								var n = f.alternate;
								if (null !== n) {
									var t = n.child;
									if (null !== t) {
										n.child = null;
										do {
											var J = t.sibling;
											t.sibling = null;
											t = J;
										} while (null !== t);
									}
								}
								V = f;
							}
						}
						if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
						else b: for (; null !== V;) {
							f = V;
							if (0 !== (f.flags & 2048)) switch (f.tag) {
								case 0:
								case 11:
								case 15: Pj(9, f, f.return);
							}
							var x = f.sibling;
							if (null !== x) {
								x.return = f.return;
								V = x;
								break b;
							}
							V = f.return;
						}
					}
					var w = a.current;
					for (V = w; null !== V;) {
						g = V;
						var u = g.child;
						if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
						else b: for (g = w; null !== V;) {
							h = V;
							if (0 !== (h.flags & 2048)) try {
								switch (h.tag) {
									case 0:
									case 11:
									case 15: Qj(9, h);
								}
							} catch (na) {
								W(h, h.return, na);
							}
							if (h === g) {
								V = null;
								break b;
							}
							var F = h.sibling;
							if (null !== F) {
								F.return = h.return;
								V = F;
								break b;
							}
							V = h.return;
						}
					}
					K = e;
					jg();
					if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
						lc.onPostCommitFiberRoot(kc, a);
					} catch (na) {}
					d = !0;
				}
				return d;
			} finally {
				C = c, ok.transition = b;
			}
		}
		return !1;
	}
	function Xk(a, b, c) {
		b = Ji(c, b);
		b = Ni(a, b, 1);
		a = nh(a, b, 1);
		b = R();
		null !== a && (Ac(a, 1, b), Dk(a, b));
	}
	function W(a, b, c) {
		if (3 === a.tag) Xk(a, a, c);
		else for (; null !== b;) {
			if (3 === b.tag) {
				Xk(b, a, c);
				break;
			} else if (1 === b.tag) {
				var d = b.stateNode;
				if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
					a = Ji(c, a);
					a = Qi(b, a, 1);
					b = nh(b, a, 1);
					a = R();
					null !== b && (Ac(b, 1, a), Dk(b, a));
					break;
				}
			}
			b = b.return;
		}
	}
	function Ti(a, b, c) {
		var d = a.pingCache;
		null !== d && d.delete(b);
		b = R();
		a.pingedLanes |= a.suspendedLanes & c;
		Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
		Dk(a, b);
	}
	function Yk(a, b) {
		0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
		var c = R();
		a = ih(a, b);
		null !== a && (Ac(a, b, c), Dk(a, c));
	}
	function uj(a) {
		var b = a.memoizedState, c = 0;
		null !== b && (c = b.retryLane);
		Yk(a, c);
	}
	function bk(a, b) {
		var c = 0;
		switch (a.tag) {
			case 13:
				var d = a.stateNode;
				var e = a.memoizedState;
				null !== e && (c = e.retryLane);
				break;
			case 19:
				d = a.stateNode;
				break;
			default: throw Error(p(314));
		}
		null !== d && d.delete(b);
		Yk(a, c);
	}
	var Vk = function(a, b, c) {
		if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = !0;
		else {
			if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = !1, yj(a, b, c);
			dh = 0 !== (a.flags & 131072) ? !0 : !1;
		}
		else dh = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
		b.lanes = 0;
		switch (b.tag) {
			case 2:
				var d = b.type;
				ij(a, b);
				a = b.pendingProps;
				var e = Yf(b, H.current);
				ch(b, c);
				e = Nh(null, b, d, a, e, c);
				var f = Sh();
				b.flags |= 1;
				"object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, !0, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
				return b;
			case 16:
				d = b.elementType;
				a: {
					ij(a, b);
					a = b.pendingProps;
					e = d._init;
					d = e(d._payload);
					b.type = d;
					e = b.tag = Zk(d);
					a = Ci(d, a);
					switch (e) {
						case 0:
							b = cj(null, b, d, a, c);
							break a;
						case 1:
							b = hj(null, b, d, a, c);
							break a;
						case 11:
							b = Yi(null, b, d, a, c);
							break a;
						case 14:
							b = $i(null, b, d, Ci(d.type, a), c);
							break a;
					}
					throw Error(p(306, d, ""));
				}
				return b;
			case 0: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
			case 1: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
			case 3:
				a: {
					kj(b);
					if (null === a) throw Error(p(387));
					d = b.pendingProps;
					f = b.memoizedState;
					e = f.element;
					lh(a, b);
					qh(b, d, null, c);
					var g = b.memoizedState;
					d = g.element;
					if (f.isDehydrated) if (f = {
						element: d,
						isDehydrated: !1,
						cache: g.cache,
						pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
						transitions: g.transitions
					}, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
						e = Ji(Error(p(423)), b);
						b = lj(a, b, d, c, e);
						break a;
					} else if (d !== e) {
						e = Ji(Error(p(424)), b);
						b = lj(a, b, d, c, e);
						break a;
					} else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, c = Vg(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
					else {
						Ig();
						if (d === e) {
							b = Zi(a, b, c);
							break a;
						}
						Xi(a, b, d, c);
					}
					b = b.child;
				}
				return b;
			case 5: return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
			case 6: return null === a && Eg(b), null;
			case 13: return oj(a, b, c);
			case 4: return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
			case 11: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
			case 7: return Xi(a, b, b.pendingProps, c), b.child;
			case 8: return Xi(a, b, b.pendingProps.children, c), b.child;
			case 12: return Xi(a, b, b.pendingProps.children, c), b.child;
			case 10:
				a: {
					d = b.type._context;
					e = b.pendingProps;
					f = b.memoizedProps;
					g = e.value;
					G(Wg, d._currentValue);
					d._currentValue = g;
					if (null !== f) if (He(f.value, g)) {
						if (f.children === e.children && !Wf.current) {
							b = Zi(a, b, c);
							break a;
						}
					} else for (f = b.child, null !== f && (f.return = b); null !== f;) {
						var h = f.dependencies;
						if (null !== h) {
							g = f.child;
							for (var k = h.firstContext; null !== k;) {
								if (k.context === d) {
									if (1 === f.tag) {
										k = mh(-1, c & -c);
										k.tag = 2;
										var l = f.updateQueue;
										if (null !== l) {
											l = l.shared;
											var m = l.pending;
											null === m ? k.next = k : (k.next = m.next, m.next = k);
											l.pending = k;
										}
									}
									f.lanes |= c;
									k = f.alternate;
									null !== k && (k.lanes |= c);
									bh(f.return, c, b);
									h.lanes |= c;
									break;
								}
								k = k.next;
							}
						} else if (10 === f.tag) g = f.type === b.type ? null : f.child;
						else if (18 === f.tag) {
							g = f.return;
							if (null === g) throw Error(p(341));
							g.lanes |= c;
							h = g.alternate;
							null !== h && (h.lanes |= c);
							bh(g, c, b);
							g = f.sibling;
						} else g = f.child;
						if (null !== g) g.return = f;
						else for (g = f; null !== g;) {
							if (g === b) {
								g = null;
								break;
							}
							f = g.sibling;
							if (null !== f) {
								f.return = g.return;
								g = f;
								break;
							}
							g = g.return;
						}
						f = g;
					}
					Xi(a, b, e.children, c);
					b = b.child;
				}
				return b;
			case 9: return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
			case 14: return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
			case 15: return bj(a, b, b.type, b.pendingProps, c);
			case 17: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, !0, a, c);
			case 19: return xj(a, b, c);
			case 22: return dj(a, b, c);
		}
		throw Error(p(156, b.tag));
	};
	function Fk(a, b) {
		return ac(a, b);
	}
	function $k(a, b, c, d) {
		this.tag = a;
		this.key = c;
		this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
		this.index = 0;
		this.ref = null;
		this.pendingProps = b;
		this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
		this.mode = d;
		this.subtreeFlags = this.flags = 0;
		this.deletions = null;
		this.childLanes = this.lanes = 0;
		this.alternate = null;
	}
	function Bg(a, b, c, d) {
		return new $k(a, b, c, d);
	}
	function aj(a) {
		a = a.prototype;
		return !(!a || !a.isReactComponent);
	}
	function Zk(a) {
		if ("function" === typeof a) return aj(a) ? 1 : 0;
		if (void 0 !== a && null !== a) {
			a = a.$$typeof;
			if (a === Da) return 11;
			if (a === Ga) return 14;
		}
		return 2;
	}
	function Pg(a, b) {
		var c = a.alternate;
		null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
		c.flags = a.flags & 14680064;
		c.childLanes = a.childLanes;
		c.lanes = a.lanes;
		c.child = a.child;
		c.memoizedProps = a.memoizedProps;
		c.memoizedState = a.memoizedState;
		c.updateQueue = a.updateQueue;
		b = a.dependencies;
		c.dependencies = null === b ? null : {
			lanes: b.lanes,
			firstContext: b.firstContext
		};
		c.sibling = a.sibling;
		c.index = a.index;
		c.ref = a.ref;
		return c;
	}
	function Rg(a, b, c, d, e, f) {
		var g = 2;
		d = a;
		if ("function" === typeof a) aj(a) && (g = 1);
		else if ("string" === typeof a) g = 5;
		else a: switch (a) {
			case ya: return Tg(c.children, e, f, b);
			case za:
				g = 8;
				e |= 8;
				break;
			case Aa: return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
			case Ea: return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
			case Fa: return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
			case Ia: return pj(c, e, f, b);
			default:
				if ("object" === typeof a && null !== a) switch (a.$$typeof) {
					case Ba:
						g = 10;
						break a;
					case Ca:
						g = 9;
						break a;
					case Da:
						g = 11;
						break a;
					case Ga:
						g = 14;
						break a;
					case Ha:
						g = 16;
						d = null;
						break a;
				}
				throw Error(p(130, null == a ? a : typeof a, ""));
		}
		b = Bg(g, c, b, e);
		b.elementType = a;
		b.type = d;
		b.lanes = f;
		return b;
	}
	function Tg(a, b, c, d) {
		a = Bg(7, a, d, b);
		a.lanes = c;
		return a;
	}
	function pj(a, b, c, d) {
		a = Bg(22, a, d, b);
		a.elementType = Ia;
		a.lanes = c;
		a.stateNode = { isHidden: !1 };
		return a;
	}
	function Qg(a, b, c) {
		a = Bg(6, a, null, b);
		a.lanes = c;
		return a;
	}
	function Sg(a, b, c) {
		b = Bg(4, null !== a.children ? a.children : [], a.key, b);
		b.lanes = c;
		b.stateNode = {
			containerInfo: a.containerInfo,
			pendingChildren: null,
			implementation: a.implementation
		};
		return b;
	}
	function al(a, b, c, d, e) {
		this.tag = b;
		this.containerInfo = a;
		this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
		this.timeoutHandle = -1;
		this.callbackNode = this.pendingContext = this.context = null;
		this.callbackPriority = 0;
		this.eventTimes = zc(0);
		this.expirationTimes = zc(-1);
		this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
		this.entanglements = zc(0);
		this.identifierPrefix = d;
		this.onRecoverableError = e;
		this.mutableSourceEagerHydrationData = null;
	}
	function bl(a, b, c, d, e, f, g, h, k) {
		a = new al(a, b, c, h, k);
		1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
		f = Bg(3, null, null, b);
		a.current = f;
		f.stateNode = a;
		f.memoizedState = {
			element: d,
			isDehydrated: c,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		};
		kh(f);
		return a;
	}
	function cl(a, b, c) {
		var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: wa,
			key: null == d ? null : "" + d,
			children: a,
			containerInfo: b,
			implementation: c
		};
	}
	function dl(a) {
		if (!a) return Vf;
		a = a._reactInternals;
		a: {
			if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
			var b = a;
			do {
				switch (b.tag) {
					case 3:
						b = b.stateNode.context;
						break a;
					case 1: if (Zf(b.type)) {
						b = b.stateNode.__reactInternalMemoizedMergedChildContext;
						break a;
					}
				}
				b = b.return;
			} while (null !== b);
			throw Error(p(171));
		}
		if (1 === a.tag) {
			var c = a.type;
			if (Zf(c)) return bg(a, c, b);
		}
		return b;
	}
	function el(a, b, c, d, e, f, g, h, k) {
		a = bl(c, d, !0, a, e, f, g, h, k);
		a.context = dl(null);
		c = a.current;
		d = R();
		e = yi(c);
		f = mh(d, e);
		f.callback = void 0 !== b && null !== b ? b : null;
		nh(c, f, e);
		a.current.lanes = e;
		Ac(a, e, d);
		Dk(a, d);
		return a;
	}
	function fl(a, b, c, d) {
		var e = b.current, f = R(), g = yi(e);
		c = dl(c);
		null === b.context ? b.context = c : b.pendingContext = c;
		b = mh(f, g);
		b.payload = { element: a };
		d = void 0 === d ? null : d;
		null !== d && (b.callback = d);
		a = nh(e, b, g);
		null !== a && (gi(a, e, g, f), oh(a, e, g));
		return g;
	}
	function gl(a) {
		a = a.current;
		if (!a.child) return null;
		switch (a.child.tag) {
			case 5: return a.child.stateNode;
			default: return a.child.stateNode;
		}
	}
	function hl(a, b) {
		a = a.memoizedState;
		if (null !== a && null !== a.dehydrated) {
			var c = a.retryLane;
			a.retryLane = 0 !== c && c < b ? c : b;
		}
	}
	function il(a, b) {
		hl(a, b);
		(a = a.alternate) && hl(a, b);
	}
	function jl() {
		return null;
	}
	var kl = "function" === typeof reportError ? reportError : function(a) {
		console.error(a);
	};
	function ll(a) {
		this._internalRoot = a;
	}
	ml.prototype.render = ll.prototype.render = function(a) {
		var b = this._internalRoot;
		if (null === b) throw Error(p(409));
		fl(a, b, null, null);
	};
	ml.prototype.unmount = ll.prototype.unmount = function() {
		var a = this._internalRoot;
		if (null !== a) {
			this._internalRoot = null;
			var b = a.containerInfo;
			Rk(function() {
				fl(null, a, null, null);
			});
			b[uf] = null;
		}
	};
	function ml(a) {
		this._internalRoot = a;
	}
	ml.prototype.unstable_scheduleHydration = function(a) {
		if (a) {
			var b = Hc();
			a = {
				blockedOn: null,
				target: a,
				priority: b
			};
			for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
			Qc.splice(c, 0, a);
			0 === c && Vc(a);
		}
	};
	function nl(a) {
		return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
	}
	function ol(a) {
		return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}
	function pl() {}
	function ql(a, b, c, d, e) {
		if (e) {
			if ("function" === typeof d) {
				var f = d;
				d = function() {
					var a = gl(g);
					f.call(a);
				};
			}
			var g = el(b, d, a, 0, null, !1, !1, "", pl);
			a._reactRootContainer = g;
			a[uf] = g.current;
			sf(8 === a.nodeType ? a.parentNode : a);
			Rk();
			return g;
		}
		for (; e = a.lastChild;) a.removeChild(e);
		if ("function" === typeof d) {
			var h = d;
			d = function() {
				var a = gl(k);
				h.call(a);
			};
		}
		var k = bl(a, 0, !1, null, null, !1, !1, "", pl);
		a._reactRootContainer = k;
		a[uf] = k.current;
		sf(8 === a.nodeType ? a.parentNode : a);
		Rk(function() {
			fl(b, k, c, d);
		});
		return k;
	}
	function rl(a, b, c, d, e) {
		var f = c._reactRootContainer;
		if (f) {
			var g = f;
			if ("function" === typeof e) {
				var h = e;
				e = function() {
					var a = gl(g);
					h.call(a);
				};
			}
			fl(b, g, a, e);
		} else g = ql(c, b, a, e, d);
		return gl(g);
	}
	Ec = function(a) {
		switch (a.tag) {
			case 3:
				var b = a.stateNode;
				if (b.current.memoizedState.isDehydrated) {
					var c = tc(b.pendingLanes);
					0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
				}
				break;
			case 13: Rk(function() {
				var b = ih(a, 1);
				if (null !== b) gi(b, a, 1, R());
			}), il(a, 1);
		}
	};
	Fc = function(a) {
		if (13 === a.tag) {
			var b = ih(a, 134217728);
			if (null !== b) gi(b, a, 134217728, R());
			il(a, 134217728);
		}
	};
	Gc = function(a) {
		if (13 === a.tag) {
			var b = yi(a), c = ih(a, b);
			if (null !== c) gi(c, a, b, R());
			il(a, b);
		}
	};
	Hc = function() {
		return C;
	};
	Ic = function(a, b) {
		var c = C;
		try {
			return C = a, b();
		} finally {
			C = c;
		}
	};
	yb = function(a, b, c) {
		switch (b) {
			case "input":
				bb(a, c);
				b = c.name;
				if ("radio" === c.type && null != b) {
					for (c = a; c.parentNode;) c = c.parentNode;
					c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + "][type=\"radio\"]");
					for (b = 0; b < c.length; b++) {
						var d = c[b];
						if (d !== a && d.form === a.form) {
							var e = Db(d);
							if (!e) throw Error(p(90));
							Wa(d);
							bb(d, e);
						}
					}
				}
				break;
			case "textarea":
				ib(a, c);
				break;
			case "select": b = c.value, null != b && fb(a, !!c.multiple, b, !1);
		}
	};
	Gb = Qk;
	Hb = Rk;
	var sl = {
		usingClientEntryPoint: !1,
		Events: [
			Cb,
			ue,
			Db,
			Eb,
			Fb,
			Qk
		]
	}, tl = {
		findFiberByHostInstance: Wc,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom"
	};
	var ul = {
		bundleType: tl.bundleType,
		version: tl.version,
		rendererPackageName: tl.rendererPackageName,
		rendererConfig: tl.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: ua.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(a) {
			a = Zb(a);
			return null === a ? null : a.stateNode;
		},
		findFiberByHostInstance: tl.findFiberByHostInstance || jl,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
		var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!vl.isDisabled && vl.supportsFiber) try {
			kc = vl.inject(ul), lc = vl;
		} catch (a) {}
	}
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
	exports.createPortal = function(a, b) {
		var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!nl(b)) throw Error(p(200));
		return cl(a, b, null, c);
	};
	exports.createRoot = function(a, b) {
		if (!nl(a)) throw Error(p(299));
		var c = !1, d = "", e = kl;
		null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
		b = bl(a, 1, !1, null, null, c, !1, d, e);
		a[uf] = b.current;
		sf(8 === a.nodeType ? a.parentNode : a);
		return new ll(b);
	};
	exports.findDOMNode = function(a) {
		if (null == a) return null;
		if (1 === a.nodeType) return a;
		var b = a._reactInternals;
		if (void 0 === b) {
			if ("function" === typeof a.render) throw Error(p(188));
			a = Object.keys(a).join(",");
			throw Error(p(268, a));
		}
		a = Zb(b);
		a = null === a ? null : a.stateNode;
		return a;
	};
	exports.flushSync = function(a) {
		return Rk(a);
	};
	exports.hydrate = function(a, b, c) {
		if (!ol(b)) throw Error(p(200));
		return rl(null, a, b, !0, c);
	};
	exports.hydrateRoot = function(a, b, c) {
		if (!nl(a)) throw Error(p(405));
		var d = null != c && c.hydratedSources || null, e = !1, f = "", g = kl;
		null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
		b = el(b, null, a, 1, null != c ? c : null, e, !1, f, g);
		a[uf] = b.current;
		sf(a);
		if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
		return new ml(b);
	};
	exports.render = function(a, b, c) {
		if (!ol(b)) throw Error(p(200));
		return rl(null, a, b, !1, c);
	};
	exports.unmountComponentAtNode = function(a) {
		if (!ol(a)) throw Error(p(40));
		return a._reactRootContainer ? (Rk(function() {
			rl(null, null, a, !1, function() {
				a._reactRootContainer = null;
				a[uf] = null;
			});
		}), !0) : !1;
	};
	exports.unstable_batchedUpdates = Qk;
	exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
		if (!ol(c)) throw Error(p(200));
		if (null == a || void 0 === a._reactInternals) throw Error(p(38));
		return rl(a, b, c, !1, d);
	};
	exports.version = "18.3.1-next-f1338f8080-20240426";
}));
//#endregion
//#region node_modules/react-dom/index.js
var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_production_min();
}));
//#endregion
//#region node_modules/react-dom/client.js
var require_client = /* @__PURE__ */ __commonJSMin(((exports) => {
	var m = require_react_dom();
	exports.createRoot = m.createRoot;
	exports.hydrateRoot = m.hydrateRoot;
}));
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/constants.js
var TSS_FORMDATA_CONTEXT = "__TSS_CONTEXT";
var TSS_SERVER_FUNCTION = Symbol.for("TSS_SERVER_FUNCTION");
/** Content-Type for multiplexed framed responses (RawStream support) */
var TSS_CONTENT_TYPE_FRAMED = "application/x-tss-framed";
/**
* Frame types for binary multiplexing protocol.
*/
var FrameType = {
	/** Seroval JSON chunk (NDJSON line) */
	JSON: 0,
	/** Raw stream data chunk */
	CHUNK: 1,
	/** Raw stream end (EOF) */
	END: 2,
	/** Raw stream error */
	ERROR: 3
};
`${TSS_CONTENT_TYPE_FRAMED}`;
/**
* Parses the version parameter from a framed Content-Type header.
* Returns undefined if no version parameter is present.
*/
var FRAMED_VERSION_REGEX = /;\s*v=(\d+)/;
function parseFramedProtocolVersion(contentType) {
	const match = contentType.match(FRAMED_VERSION_REGEX);
	return match ? parseInt(match[1], 10) : void 0;
}
/**
* Validates that the server's protocol version is compatible with this client.
* Throws an error if versions are incompatible.
*/
function validateFramedProtocolVersion(contentType) {
	const serverVersion = parseFramedProtocolVersion(contentType);
	if (serverVersion === void 0) return;
	if (serverVersion !== 1) throw new Error(`Incompatible framed protocol version: server=${serverVersion}, client=1. Please ensure client and server are using compatible versions.`);
}
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/getStartOptions.js
var getStartOptions = () => window.__TSS_START_OPTIONS__;
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/utils.js
/**
* Return the last element of an array.
* Intended for non-empty arrays used within router internals.
*/
function last(arr) {
	return arr[arr.length - 1];
}
function isFunction(d) {
	return typeof d === "function";
}
/**
* Apply a value-or-updater to a previous value.
* Accepts either a literal value or a function of the previous value.
*/
function functionalUpdate$1(updater, previous) {
	if (isFunction(updater)) return updater(previous);
	return updater;
}
var hasOwn$1 = Object.prototype.hasOwnProperty;
var isEnumerable = Object.prototype.propertyIsEnumerable;
function hasKeys(obj) {
	for (const key in obj) if (hasOwn$1.call(obj, key)) return true;
	return false;
}
var createNull = () => Object.create(null);
var nullReplaceEqualDeep = (prev, next) => replaceEqualDeep$1(prev, next, createNull);
/**
* This function returns `prev` if `_next` is deeply equal.
* If not, it will replace any deeply equal children of `b` with those of `a`.
* This can be used for structural sharing between immutable JSON values for example.
* Do not use this with signals
*/
function replaceEqualDeep$1(prev, _next, _makeObj = () => ({}), _depth = 0) {
	if (prev === _next) return prev;
	if (_depth > 500) return _next;
	const next = _next;
	const array = isPlainArray$1(prev) && isPlainArray$1(next);
	if (!array && !(isPlainObject$1(prev) && isPlainObject$1(next))) return next;
	const prevItems = array ? prev : getEnumerableOwnKeys(prev);
	if (!prevItems) return next;
	const nextItems = array ? next : getEnumerableOwnKeys(next);
	if (!nextItems) return next;
	const prevSize = prevItems.length;
	const nextSize = nextItems.length;
	const copy = array ? new Array(nextSize) : _makeObj();
	let equalItems = 0;
	for (let i = 0; i < nextSize; i++) {
		const key = array ? i : nextItems[i];
		const p = prev[key];
		const n = next[key];
		if (p === n) {
			copy[key] = p;
			if (array ? i < prevSize : hasOwn$1.call(prev, key)) equalItems++;
			continue;
		}
		if (p === null || n === null || typeof p !== "object" || typeof n !== "object") {
			copy[key] = n;
			continue;
		}
		const v = replaceEqualDeep$1(p, n, _makeObj, _depth + 1);
		copy[key] = v;
		if (v === p) equalItems++;
	}
	return prevSize === nextSize && equalItems === prevSize ? prev : copy;
}
/**
* Equivalent to `Reflect.ownKeys`, but ensures that objects are "clone-friendly":
* will return false if object has any non-enumerable properties.
*
* Optimized for the common case where objects have no symbol properties.
*/
function getEnumerableOwnKeys(o) {
	const names = Object.getOwnPropertyNames(o);
	for (const name of names) if (!isEnumerable.call(o, name)) return false;
	const symbols = Object.getOwnPropertySymbols(o);
	if (symbols.length === 0) return names;
	const keys = names;
	for (const symbol of symbols) {
		if (!isEnumerable.call(o, symbol)) return false;
		keys.push(symbol);
	}
	return keys;
}
function isPlainObject$1(o) {
	if (!hasObjectPrototype$1(o)) return false;
	const ctor = o.constructor;
	if (typeof ctor === "undefined") return true;
	const prot = ctor.prototype;
	if (!hasObjectPrototype$1(prot)) return false;
	if (!prot.hasOwnProperty("isPrototypeOf")) return false;
	return true;
}
function hasObjectPrototype$1(o) {
	return Object.prototype.toString.call(o) === "[object Object]";
}
/**
* Check if a value is a "plain" array (no extra enumerable keys).
*/
function isPlainArray$1(value) {
	return Array.isArray(value) && value.length === Object.keys(value).length;
}
/**
* Perform a deep equality check with options for partial comparison and
* ignoring `undefined` values. Optimized for router state comparisons.
*/
function deepEqual(a, b, opts) {
	if (a === b) return true;
	if (typeof a !== typeof b) return false;
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false;
		for (let i = 0, l = a.length; i < l; i++) if (!deepEqual(a[i], b[i], opts)) return false;
		return true;
	}
	if (isPlainObject$1(a) && isPlainObject$1(b)) {
		const ignoreUndefined = opts?.ignoreUndefined ?? true;
		if (opts?.partial) {
			for (const k in b) if (!ignoreUndefined || b[k] !== void 0) {
				if (!deepEqual(a[k], b[k], opts)) return false;
			}
			return true;
		}
		let aCount = 0;
		if (!ignoreUndefined) aCount = Object.keys(a).length;
		else for (const k in a) if (a[k] !== void 0) aCount++;
		let bCount = 0;
		for (const k in b) if (!ignoreUndefined || b[k] !== void 0) {
			bCount++;
			if (bCount > aCount || !deepEqual(a[k], b[k], opts)) return false;
		}
		return aCount === bCount;
	}
	return false;
}
/**
* Create a promise with exposed resolve/reject and status fields.
* Useful for coordinating async router lifecycle operations.
*/
function createControlledPromise(onResolve) {
	let resolveLoadPromise;
	let rejectLoadPromise;
	const controlledPromise = new Promise((resolve, reject) => {
		resolveLoadPromise = resolve;
		rejectLoadPromise = reject;
	});
	controlledPromise.status = "pending";
	controlledPromise.resolve = (value) => {
		controlledPromise.status = "resolved";
		controlledPromise.value = value;
		resolveLoadPromise(value);
		onResolve?.(value);
	};
	controlledPromise.reject = (e) => {
		controlledPromise.status = "rejected";
		rejectLoadPromise(e);
	};
	return controlledPromise;
}
/**
* Heuristically detect dynamic import "module not found" errors
* across major browsers for lazy route component handling.
*/
function isModuleNotFoundError(error) {
	if (typeof error?.message !== "string") return false;
	return error.message.startsWith("Failed to fetch dynamically imported module") || error.message.startsWith("error loading dynamically imported module") || error.message.startsWith("Importing a module script failed");
}
function isPromise(value) {
	return Boolean(value && typeof value === "object" && typeof value.then === "function");
}
/**
* Re-encode characters that are unsafe in URL paths.
* Includes ASCII control characters (0x00-0x1F, 0x7F) and a subset of the
* WHATWG URL "path percent-encode set" (", <, >, `, {, }).
*
* Space (0x20) is intentionally excluded — decodeURI decodes %20 to space
* and the router stores decoded spaces in location.pathname. The existing
* encodePathLikeUrl already handles re-encoding spaces for outgoing URLs.
*
* These characters are decoded by decodeURI but must remain percent-encoded
* in paths to match how upstream layers (CDNs, edge middleware, browsers)
* interpret the URL, preventing infinite redirect loops and path mismatches.
*/
var PATH_UNSAFE_RE = /[\x00-\x1f\x7f"<>`{}]/g;
function sanitizePathSegment(segment) {
	return segment.replace(PATH_UNSAFE_RE, (ch) => "%" + ch.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0"));
}
function decodeSegment(segment) {
	let decoded;
	try {
		decoded = decodeURI(segment);
	} catch {
		decoded = segment.replaceAll(/%[0-9A-F]{2}/gi, (match) => {
			try {
				return decodeURI(match);
			} catch {
				return match;
			}
		});
	}
	return sanitizePathSegment(decoded);
}
/**
* Default list of URL protocols to allow in links, redirects, and navigation.
* Any absolute URL protocol not in this list is treated as dangerous by default.
*/
var DEFAULT_PROTOCOL_ALLOWLIST = [
	"http:",
	"https:",
	"mailto:",
	"tel:"
];
/**
* Check if a URL string uses a protocol that is not in the allowlist.
* Returns true for blocked protocols like javascript:, blob:, data:, etc.
*
* The URL constructor correctly normalizes:
* - Mixed case (JavaScript: → javascript:)
* - Whitespace/control characters (java\nscript: → javascript:)
* - Leading whitespace
*
* For relative URLs (no protocol), returns false (safe).
*
* @param url - The URL string to check
* @param allowlist - Set of protocols to allow
* @returns true if the URL uses a protocol that is not allowed
*/
function isDangerousProtocol(url, allowlist) {
	if (!url) return false;
	try {
		const parsed = new URL(url);
		return !allowlist.has(parsed.protocol);
	} catch {
		return false;
	}
}
var HTML_ESCAPE_LOOKUP = {
	"&": "\\u0026",
	">": "\\u003e",
	"<": "\\u003c",
	"\u2028": "\\u2028",
	"\u2029": "\\u2029"
};
var HTML_ESCAPE_REGEX = /[&><\u2028\u2029]/g;
/**
* Escape HTML special characters in a string to prevent XSS attacks
* when embedding strings in script tags during SSR.
*
* This is essential for preventing XSS vulnerabilities when user-controlled
* content is embedded in inline scripts.
*/
function escapeHtml(str) {
	return str.replace(HTML_ESCAPE_REGEX, (match) => HTML_ESCAPE_LOOKUP[match]);
}
function decodePath(path) {
	if (!path) return {
		path,
		handledProtocolRelativeURL: false
	};
	if (!/[%\\\x00-\x1f\x7f]/.test(path) && !path.startsWith("//")) return {
		path,
		handledProtocolRelativeURL: false
	};
	const re = /%25|%5C/gi;
	let cursor = 0;
	let result = "";
	let match;
	while (null !== (match = re.exec(path))) {
		result += decodeSegment(path.slice(cursor, match.index)) + match[0];
		cursor = re.lastIndex;
	}
	result = result + decodeSegment(cursor ? path.slice(cursor) : path);
	let handledProtocolRelativeURL = false;
	if (result.startsWith("//")) {
		handledProtocolRelativeURL = true;
		result = "/" + result.replace(/^\/+/, "");
	}
	return {
		path: result,
		handledProtocolRelativeURL
	};
}
/**
* Encodes a path the same way `new URL()` would, but without the overhead of full URL parsing.
*
* This function encodes:
* - Whitespace characters (spaces → %20, tabs → %09, etc.)
* - Non-ASCII/Unicode characters (emojis, accented characters, etc.)
*
* It preserves:
* - Already percent-encoded sequences (won't double-encode %2F, %25, etc.)
* - ASCII special characters valid in URL paths (@, $, &, +, etc.)
* - Forward slashes as path separators
*
* Used to generate proper href values for SSR without constructing URL objects.
*
* @example
* encodePathLikeUrl('/path/file name.pdf') // '/path/file%20name.pdf'
* encodePathLikeUrl('/path/日本語') // '/path/%E6%97%A5%E6%9C%AC%E8%AA%9E'
* encodePathLikeUrl('/path/already%20encoded') // '/path/already%20encoded' (preserved)
*/
function encodePathLikeUrl(path) {
	if (!/\s|[^\u0000-\u007F]/.test(path)) return path;
	return path.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent);
}
function arraysEqual(a, b) {
	if (a === b) return true;
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
	return true;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/invariant.js
function invariant() {
	throw new Error("Invariant failed");
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/lru-cache.js
function createLRUCache(max) {
	const cache = /* @__PURE__ */ new Map();
	let oldest;
	let newest;
	const touch = (entry) => {
		if (!entry.next) return;
		if (!entry.prev) {
			entry.next.prev = void 0;
			oldest = entry.next;
			entry.next = void 0;
			if (newest) {
				entry.prev = newest;
				newest.next = entry;
			}
		} else {
			entry.prev.next = entry.next;
			entry.next.prev = entry.prev;
			entry.next = void 0;
			if (newest) {
				newest.next = entry;
				entry.prev = newest;
			}
		}
		newest = entry;
	};
	return {
		get(key) {
			const entry = cache.get(key);
			if (!entry) return void 0;
			touch(entry);
			return entry.value;
		},
		set(key, value) {
			if (cache.size >= max && oldest) {
				const toDelete = oldest;
				cache.delete(toDelete.key);
				if (toDelete.next) {
					oldest = toDelete.next;
					toDelete.next.prev = void 0;
				}
				if (toDelete === newest) newest = void 0;
			}
			const existing = cache.get(key);
			if (existing) {
				existing.value = value;
				touch(existing);
			} else {
				const entry = {
					key,
					value,
					prev: newest
				};
				if (newest) newest.next = entry;
				newest = entry;
				if (!oldest) oldest = entry;
				cache.set(key, entry);
			}
		},
		clear() {
			cache.clear();
			oldest = void 0;
			newest = void 0;
		}
	};
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/new-process-route-tree.js
var SEGMENT_TYPE_INDEX = 4;
var SEGMENT_TYPE_PATHLESS = 5;
function getOpenAndCloseBraces(part) {
	const openBrace = part.indexOf("{");
	if (openBrace === -1) return null;
	const closeBrace = part.indexOf("}", openBrace);
	if (closeBrace === -1) return null;
	if (openBrace + 1 >= part.length) return null;
	return [openBrace, closeBrace];
}
/**
* Populates the `output` array with the parsed representation of the given `segment` string.
*
* Usage:
* ```ts
* let output
* let cursor = 0
* while (cursor < path.length) {
*   output = parseSegment(path, cursor, output)
*   const end = output[5]
*   cursor = end + 1
* ```
*
* `output` is stored outside to avoid allocations during repeated calls. It doesn't need to be typed
* or initialized, it will be done automatically.
*/
function parseSegment(path, start, output = /* @__PURE__ */ new Uint16Array(6)) {
	const next = path.indexOf("/", start);
	const end = next === -1 ? path.length : next;
	const part = path.substring(start, end);
	if (!part || !part.includes("$")) {
		output[0] = 0;
		output[1] = start;
		output[2] = start;
		output[3] = end;
		output[4] = end;
		output[5] = end;
		return output;
	}
	if (part === "$") {
		const total = path.length;
		output[0] = 2;
		output[1] = start;
		output[2] = start;
		output[3] = total;
		output[4] = total;
		output[5] = total;
		return output;
	}
	if (part.charCodeAt(0) === 36) {
		output[0] = 1;
		output[1] = start;
		output[2] = start + 1;
		output[3] = end;
		output[4] = end;
		output[5] = end;
		return output;
	}
	const braces = getOpenAndCloseBraces(part);
	if (braces) {
		const [openBrace, closeBrace] = braces;
		const firstChar = part.charCodeAt(openBrace + 1);
		if (firstChar === 45) {
			if (openBrace + 2 < part.length && part.charCodeAt(openBrace + 2) === 36) {
				const paramStart = openBrace + 3;
				const paramEnd = closeBrace;
				if (paramStart < paramEnd) {
					output[0] = 3;
					output[1] = start + openBrace;
					output[2] = start + paramStart;
					output[3] = start + paramEnd;
					output[4] = start + closeBrace + 1;
					output[5] = end;
					return output;
				}
			}
		} else if (firstChar === 36) {
			const dollarPos = openBrace + 1;
			const afterDollar = openBrace + 2;
			if (afterDollar === closeBrace) {
				output[0] = 2;
				output[1] = start + openBrace;
				output[2] = start + dollarPos;
				output[3] = start + afterDollar;
				output[4] = start + closeBrace + 1;
				output[5] = path.length;
				return output;
			}
			output[0] = 1;
			output[1] = start + openBrace;
			output[2] = start + afterDollar;
			output[3] = start + closeBrace;
			output[4] = start + closeBrace + 1;
			output[5] = end;
			return output;
		}
	}
	output[0] = 0;
	output[1] = start;
	output[2] = start;
	output[3] = end;
	output[4] = end;
	output[5] = end;
	return output;
}
/**
* Recursively parses the segments of the given route tree and populates a segment trie.
*
* @param data A reusable Uint16Array for parsing segments. (non important, we're just avoiding allocations)
* @param route The current route to parse.
* @param start The starting index for parsing within the route's full path.
* @param node The current segment node in the trie to populate.
* @param onRoute Callback invoked for each route processed.
*/
function parseSegments(defaultCaseSensitive, data, route, start, node, depth, onRoute) {
	onRoute?.(route);
	let cursor = start;
	{
		const path = route.fullPath ?? route.from;
		const length = path.length;
		const caseSensitive = route.options?.caseSensitive ?? defaultCaseSensitive;
		const parseParams = route.options?.params?.parse ?? route.options?.parseParams;
		while (cursor < length) {
			const segment = parseSegment(path, cursor, data);
			let nextNode;
			const start = cursor;
			const end = segment[5];
			cursor = end + 1;
			depth++;
			switch (segment[0]) {
				case 0: {
					const value = path.substring(segment[2], segment[3]);
					if (caseSensitive) {
						const existingNode = node.static?.get(value);
						if (existingNode) nextNode = existingNode;
						else {
							node.static ??= /* @__PURE__ */ new Map();
							const next = createStaticNode(route.fullPath ?? route.from);
							next.parent = node;
							next.depth = depth;
							nextNode = next;
							node.static.set(value, next);
						}
					} else {
						const name = value.toLowerCase();
						const existingNode = node.staticInsensitive?.get(name);
						if (existingNode) nextNode = existingNode;
						else {
							node.staticInsensitive ??= /* @__PURE__ */ new Map();
							const next = createStaticNode(route.fullPath ?? route.from);
							next.parent = node;
							next.depth = depth;
							nextNode = next;
							node.staticInsensitive.set(name, next);
						}
					}
					break;
				}
				case 1: {
					const prefix_raw = path.substring(start, segment[1]);
					const suffix_raw = path.substring(segment[4], end);
					const actuallyCaseSensitive = caseSensitive && !!(prefix_raw || suffix_raw);
					const prefix = !prefix_raw ? void 0 : actuallyCaseSensitive ? prefix_raw : prefix_raw.toLowerCase();
					const suffix = !suffix_raw ? void 0 : actuallyCaseSensitive ? suffix_raw : suffix_raw.toLowerCase();
					const existingNode = !parseParams && node.dynamic?.find((s) => !s.parse && s.caseSensitive === actuallyCaseSensitive && s.prefix === prefix && s.suffix === suffix);
					if (existingNode) nextNode = existingNode;
					else {
						const next = createDynamicNode(1, route.fullPath ?? route.from, actuallyCaseSensitive, prefix, suffix);
						nextNode = next;
						next.depth = depth;
						next.parent = node;
						node.dynamic ??= [];
						node.dynamic.push(next);
					}
					break;
				}
				case 3: {
					const prefix_raw = path.substring(start, segment[1]);
					const suffix_raw = path.substring(segment[4], end);
					const actuallyCaseSensitive = caseSensitive && !!(prefix_raw || suffix_raw);
					const prefix = !prefix_raw ? void 0 : actuallyCaseSensitive ? prefix_raw : prefix_raw.toLowerCase();
					const suffix = !suffix_raw ? void 0 : actuallyCaseSensitive ? suffix_raw : suffix_raw.toLowerCase();
					const existingNode = !parseParams && node.optional?.find((s) => !s.parse && s.caseSensitive === actuallyCaseSensitive && s.prefix === prefix && s.suffix === suffix);
					if (existingNode) nextNode = existingNode;
					else {
						const next = createDynamicNode(3, route.fullPath ?? route.from, actuallyCaseSensitive, prefix, suffix);
						nextNode = next;
						next.parent = node;
						next.depth = depth;
						node.optional ??= [];
						node.optional.push(next);
					}
					break;
				}
				case 2: {
					const prefix_raw = path.substring(start, segment[1]);
					const suffix_raw = path.substring(segment[4], end);
					const actuallyCaseSensitive = caseSensitive && !!(prefix_raw || suffix_raw);
					const prefix = !prefix_raw ? void 0 : actuallyCaseSensitive ? prefix_raw : prefix_raw.toLowerCase();
					const suffix = !suffix_raw ? void 0 : actuallyCaseSensitive ? suffix_raw : suffix_raw.toLowerCase();
					const next = createDynamicNode(2, route.fullPath ?? route.from, actuallyCaseSensitive, prefix, suffix);
					nextNode = next;
					next.parent = node;
					next.depth = depth;
					node.wildcard ??= [];
					node.wildcard.push(next);
				}
			}
			node = nextNode;
		}
		if (parseParams && route.children && !route.isRoot && route.id && route.id.charCodeAt(route.id.lastIndexOf("/") + 1) === 95) {
			const pathlessNode = createStaticNode(route.fullPath ?? route.from);
			pathlessNode.kind = SEGMENT_TYPE_PATHLESS;
			pathlessNode.parent = node;
			depth++;
			pathlessNode.depth = depth;
			node.pathless ??= [];
			node.pathless.push(pathlessNode);
			node = pathlessNode;
		}
		const isLeaf = (route.path || !route.children) && !route.isRoot;
		if (isLeaf && path.endsWith("/")) {
			const indexNode = createStaticNode(route.fullPath ?? route.from);
			indexNode.kind = SEGMENT_TYPE_INDEX;
			indexNode.parent = node;
			depth++;
			indexNode.depth = depth;
			node.index = indexNode;
			node = indexNode;
		}
		node.parse = parseParams ?? null;
		node.priority = route.options?.params?.priority ?? 0;
		if (isLeaf && !node.route) {
			node.route = route;
			node.fullPath = route.fullPath ?? route.from;
		}
	}
	if (route.children) for (const child of route.children) parseSegments(defaultCaseSensitive, data, child, cursor, node, depth, onRoute);
}
function sortDynamic(a, b) {
	if (a.parse && !b.parse) return -1;
	if (!a.parse && b.parse) return 1;
	if (a.parse && b.parse && (a.priority || b.priority)) return b.priority - a.priority;
	if (a.prefix && b.prefix && a.prefix !== b.prefix) {
		if (a.prefix.startsWith(b.prefix)) return -1;
		if (b.prefix.startsWith(a.prefix)) return 1;
	}
	if (a.suffix && b.suffix && a.suffix !== b.suffix) {
		if (a.suffix.endsWith(b.suffix)) return -1;
		if (b.suffix.endsWith(a.suffix)) return 1;
	}
	if (a.prefix && !b.prefix) return -1;
	if (!a.prefix && b.prefix) return 1;
	if (a.suffix && !b.suffix) return -1;
	if (!a.suffix && b.suffix) return 1;
	if (a.caseSensitive && !b.caseSensitive) return -1;
	if (!a.caseSensitive && b.caseSensitive) return 1;
	return 0;
}
function sortTreeNodes(node) {
	if (node.pathless) for (const child of node.pathless) sortTreeNodes(child);
	if (node.static) for (const child of node.static.values()) sortTreeNodes(child);
	if (node.staticInsensitive) for (const child of node.staticInsensitive.values()) sortTreeNodes(child);
	if (node.dynamic?.length) {
		node.dynamic.sort(sortDynamic);
		for (const child of node.dynamic) sortTreeNodes(child);
	}
	if (node.optional?.length) {
		node.optional.sort(sortDynamic);
		for (const child of node.optional) sortTreeNodes(child);
	}
	if (node.wildcard?.length) {
		node.wildcard.sort(sortDynamic);
		for (const child of node.wildcard) sortTreeNodes(child);
	}
}
function createStaticNode(fullPath) {
	return {
		kind: 0,
		depth: 0,
		pathless: null,
		index: null,
		static: null,
		staticInsensitive: null,
		dynamic: null,
		optional: null,
		wildcard: null,
		route: null,
		fullPath,
		parent: null,
		parse: null,
		priority: 0
	};
}
/**
* Keys must be declared in the same order as in `SegmentNode` type,
* to ensure they are represented as the same object class in the engine.
*/
function createDynamicNode(kind, fullPath, caseSensitive, prefix, suffix) {
	return {
		kind,
		depth: 0,
		pathless: null,
		index: null,
		static: null,
		staticInsensitive: null,
		dynamic: null,
		optional: null,
		wildcard: null,
		route: null,
		fullPath,
		parent: null,
		parse: null,
		priority: 0,
		caseSensitive,
		prefix,
		suffix
	};
}
function processRouteMasks(routeList, processedTree) {
	const segmentTree = createStaticNode("/");
	const data = /* @__PURE__ */ new Uint16Array(6);
	for (const route of routeList) parseSegments(false, data, route, 1, segmentTree, 0);
	sortTreeNodes(segmentTree);
	processedTree.masksTree = segmentTree;
	processedTree.flatCache = createLRUCache(1e3);
}
/**
* Take an arbitrary list of routes, create a tree from them (if it hasn't been created already), and match a path against it.
*/
function findFlatMatch(path, processedTree) {
	path ||= "/";
	const cached = processedTree.flatCache.get(path);
	if (cached) return cached;
	const result = findMatch(path, processedTree.masksTree);
	processedTree.flatCache.set(path, result);
	return result;
}
/**
* @deprecated keep until v2 so that `router.matchRoute` can keep not caring about the actual route tree
*/
function findSingleMatch(from, caseSensitive, fuzzy, path, processedTree) {
	from ||= "/";
	path ||= "/";
	const key = caseSensitive ? `case\0${from}` : from;
	let tree = processedTree.singleCache.get(key);
	if (!tree) {
		tree = createStaticNode("/");
		parseSegments(caseSensitive, /* @__PURE__ */ new Uint16Array(6), { from }, 1, tree, 0);
		processedTree.singleCache.set(key, tree);
	}
	return findMatch(path, tree, fuzzy);
}
function findRouteMatch(path, processedTree, fuzzy = false) {
	const key = fuzzy ? path : `nofuzz\0${path}`;
	const cached = processedTree.matchCache.get(key);
	if (cached !== void 0) return cached;
	path ||= "/";
	let result;
	try {
		result = findMatch(path, processedTree.segmentTree, fuzzy);
	} catch (err) {
		if (err instanceof URIError) result = null;
		else throw err;
	}
	if (result) result.branch = buildRouteBranch(result.route);
	processedTree.matchCache.set(key, result);
	return result;
}
/** Trim trailing slashes (except preserving root '/'). */
function trimPathRight$1(path) {
	return path === "/" ? path : path.replace(/\/{1,}$/, "");
}
/**
* Processes a route tree into a segment trie for efficient path matching.
* Also builds lookup maps for routes by ID and by trimmed full path.
*/
function processRouteTree(routeTree, caseSensitive = false, initRoute) {
	const segmentTree = createStaticNode(routeTree.fullPath);
	const data = /* @__PURE__ */ new Uint16Array(6);
	const routesById = {};
	const routesByPath = {};
	let index = 0;
	parseSegments(caseSensitive, data, routeTree, 1, segmentTree, 0, (route) => {
		initRoute?.(route, index);
		if (route.id in routesById) invariant();
		routesById[route.id] = route;
		if (index !== 0 && route.path) {
			const trimmedFullPath = trimPathRight$1(route.fullPath);
			if (!routesByPath[trimmedFullPath] || route.fullPath.endsWith("/")) routesByPath[trimmedFullPath] = route;
		}
		index++;
	});
	sortTreeNodes(segmentTree);
	return {
		processedTree: {
			segmentTree,
			singleCache: createLRUCache(1e3),
			matchCache: createLRUCache(1e3),
			flatCache: null,
			masksTree: null
		},
		routesById,
		routesByPath
	};
}
function findMatch(path, segmentTree, fuzzy = false) {
	const parts = path.split("/");
	const leaf = getNodeMatch(path, parts, segmentTree, fuzzy);
	if (!leaf) return null;
	const [rawParams] = extractParams(path, parts, leaf);
	return {
		route: leaf.node.route,
		rawParams
	};
}
/**
* This function is "resumable":
* - the `leaf` input can contain `extract` and `rawParams` properties from a previous `extractParams` call
* - the returned `state` can be passed back as `extract` in a future call to continue extracting params from where we left off
*
* Inputs are *not* mutated.
*/
function extractParams(path, parts, leaf) {
	const list = buildBranch(leaf.node);
	let nodeParts = null;
	const rawParams = Object.create(null);
	/** which segment of the path we're currently processing */
	let partIndex = leaf.extract?.part ?? 0;
	/** which node of the route tree branch we're currently processing */
	let nodeIndex = leaf.extract?.node ?? 0;
	/** index of the 1st character of the segment we're processing in the path string */
	let pathIndex = leaf.extract?.path ?? 0;
	/** which fullPath segment we're currently processing */
	let segmentCount = leaf.extract?.segment ?? 0;
	for (; nodeIndex < list.length; partIndex++, nodeIndex++, pathIndex++, segmentCount++) {
		const node = list[nodeIndex];
		if (node.kind === SEGMENT_TYPE_INDEX) break;
		if (node.kind === SEGMENT_TYPE_PATHLESS) {
			segmentCount--;
			partIndex--;
			pathIndex--;
			continue;
		}
		const part = parts[partIndex];
		const currentPathIndex = pathIndex;
		if (part) pathIndex += part.length;
		if (node.kind === 1) {
			nodeParts ??= leaf.node.fullPath.split("/");
			const nodePart = nodeParts[segmentCount];
			const preLength = node.prefix?.length ?? 0;
			if (nodePart.charCodeAt(preLength) === 123) {
				const sufLength = node.suffix?.length ?? 0;
				const name = nodePart.substring(preLength + 2, nodePart.length - sufLength - 1);
				const value = part.substring(preLength, part.length - sufLength);
				rawParams[name] = decodeURIComponent(value);
			} else {
				const name = nodePart.substring(1);
				rawParams[name] = decodeURIComponent(part);
			}
		} else if (node.kind === 3) {
			if (leaf.skipped & 1 << nodeIndex) {
				partIndex--;
				pathIndex = currentPathIndex - 1;
				continue;
			}
			nodeParts ??= leaf.node.fullPath.split("/");
			const nodePart = nodeParts[segmentCount];
			const preLength = node.prefix?.length ?? 0;
			const sufLength = node.suffix?.length ?? 0;
			const name = nodePart.substring(preLength + 3, nodePart.length - sufLength - 1);
			const value = node.suffix || node.prefix ? part.substring(preLength, part.length - sufLength) : part;
			if (value) rawParams[name] = decodeURIComponent(value);
		} else if (node.kind === 2) {
			const n = node;
			const value = path.substring(currentPathIndex + (n.prefix?.length ?? 0), path.length - (n.suffix?.length ?? 0));
			const splat = decodeURIComponent(value);
			rawParams["*"] = splat;
			rawParams._splat = splat;
			break;
		}
	}
	if (leaf.rawParams) Object.assign(rawParams, leaf.rawParams);
	return [rawParams, {
		part: partIndex,
		node: nodeIndex,
		path: pathIndex,
		segment: segmentCount
	}];
}
function buildRouteBranch(route) {
	const list = [route];
	while (route.parentRoute) {
		route = route.parentRoute;
		list.push(route);
	}
	list.reverse();
	return list;
}
function buildBranch(node) {
	const list = Array(node.depth + 1);
	do {
		list[node.depth] = node;
		node = node.parent;
	} while (node);
	return list;
}
function getNodeMatch(path, parts, segmentTree, fuzzy) {
	if (path === "/" && segmentTree.index) return {
		node: segmentTree.index,
		skipped: 0
	};
	const trailingSlash = !last(parts);
	const pathIsIndex = trailingSlash && path !== "/";
	const partsLength = parts.length - (trailingSlash ? 1 : 0);
	const stack = [{
		node: segmentTree,
		index: 1,
		skipped: 0,
		depth: 1,
		statics: 0,
		dynamics: 0,
		optionals: 0
	}];
	let bestFuzzy = null;
	let bestMatch = null;
	while (stack.length) {
		const frame = stack.pop();
		const { node, index, skipped, depth, statics, dynamics, optionals } = frame;
		let { extract, rawParams } = frame;
		if (node.kind === 2 && node.route && !isFrameMoreSpecific(bestMatch, frame)) continue;
		if (node.parse) {
			if (!validateParseParams(path, parts, frame)) continue;
			rawParams = frame.rawParams;
			extract = frame.extract;
		}
		if (fuzzy && node.route && node.kind !== SEGMENT_TYPE_INDEX && isFrameMoreSpecific(bestFuzzy, frame)) bestFuzzy = frame;
		const isBeyondPath = index === partsLength;
		if (isBeyondPath) {
			if (node.route && (!pathIsIndex || node.kind === SEGMENT_TYPE_INDEX || node.kind === 2) && isFrameMoreSpecific(bestMatch, frame)) bestMatch = frame;
			if (!node.optional && !node.wildcard && !node.index && !node.pathless) continue;
		}
		const part = isBeyondPath ? void 0 : parts[index];
		let lowerPart;
		if (isBeyondPath && node.index) {
			const indexFrame = {
				node: node.index,
				index,
				skipped,
				depth: depth + 1,
				statics,
				dynamics,
				optionals,
				extract,
				rawParams
			};
			let indexValid = true;
			if (node.index.parse) {
				if (!validateParseParams(path, parts, indexFrame)) indexValid = false;
			}
			if (indexValid) {
				if (!dynamics && !optionals && !skipped && isPerfectStaticMatch(statics, partsLength)) return indexFrame;
				if (isFrameMoreSpecific(bestMatch, indexFrame)) bestMatch = indexFrame;
			}
		}
		if (node.wildcard) for (let i = node.wildcard.length - 1; i >= 0; i--) {
			const segment = node.wildcard[i];
			const { prefix, suffix } = segment;
			if (prefix) {
				if (isBeyondPath) continue;
				if (!(segment.caseSensitive ? part : lowerPart ??= part.toLowerCase()).startsWith(prefix)) continue;
			}
			if (suffix) {
				if (isBeyondPath) continue;
				const end = parts.slice(index).join("/").slice(-suffix.length);
				if ((segment.caseSensitive ? end : end.toLowerCase()) !== suffix) continue;
			}
			stack.push({
				node: segment,
				index: partsLength,
				skipped,
				depth: depth + 1,
				statics,
				dynamics,
				optionals,
				extract,
				rawParams
			});
		}
		if (node.optional) {
			const nextSkipped = skipped | 1 << depth;
			const nextDepth = depth + 1;
			for (let i = node.optional.length - 1; i >= 0; i--) {
				const segment = node.optional[i];
				stack.push({
					node: segment,
					index,
					skipped: nextSkipped,
					depth: nextDepth,
					statics,
					dynamics,
					optionals,
					extract,
					rawParams
				});
			}
			if (!isBeyondPath) for (let i = node.optional.length - 1; i >= 0; i--) {
				const segment = node.optional[i];
				const { prefix, suffix } = segment;
				if (prefix || suffix) {
					const casePart = segment.caseSensitive ? part : lowerPart ??= part.toLowerCase();
					if (prefix && !casePart.startsWith(prefix)) continue;
					if (suffix && !casePart.endsWith(suffix)) continue;
				}
				stack.push({
					node: segment,
					index: index + 1,
					skipped,
					depth: nextDepth,
					statics,
					dynamics,
					optionals: optionals + segmentScore(partsLength, index),
					extract,
					rawParams
				});
			}
		}
		if (!isBeyondPath && node.dynamic && part) for (let i = node.dynamic.length - 1; i >= 0; i--) {
			const segment = node.dynamic[i];
			const { prefix, suffix } = segment;
			if (prefix || suffix) {
				const casePart = segment.caseSensitive ? part : lowerPart ??= part.toLowerCase();
				if (prefix && !casePart.startsWith(prefix)) continue;
				if (suffix && !casePart.endsWith(suffix)) continue;
			}
			stack.push({
				node: segment,
				index: index + 1,
				skipped,
				depth: depth + 1,
				statics,
				dynamics: dynamics + segmentScore(partsLength, index),
				optionals,
				extract,
				rawParams
			});
		}
		if (!isBeyondPath && node.staticInsensitive) {
			const match = node.staticInsensitive.get(lowerPart ??= part.toLowerCase());
			if (match) stack.push({
				node: match,
				index: index + 1,
				skipped,
				depth: depth + 1,
				statics: statics + segmentScore(partsLength, index),
				dynamics,
				optionals,
				extract,
				rawParams
			});
		}
		if (!isBeyondPath && node.static) {
			const match = node.static.get(part);
			if (match) stack.push({
				node: match,
				index: index + 1,
				skipped,
				depth: depth + 1,
				statics: statics + segmentScore(partsLength, index),
				dynamics,
				optionals,
				extract,
				rawParams
			});
		}
		if (node.pathless) {
			const nextDepth = depth + 1;
			for (let i = node.pathless.length - 1; i >= 0; i--) {
				const segment = node.pathless[i];
				stack.push({
					node: segment,
					index,
					skipped,
					depth: nextDepth,
					statics,
					dynamics,
					optionals,
					extract,
					rawParams
				});
			}
		}
	}
	if (bestMatch) return bestMatch;
	if (fuzzy && bestFuzzy) {
		let sliceIndex = bestFuzzy.index;
		for (let i = 0; i < bestFuzzy.index; i++) sliceIndex += parts[i].length;
		const splat = sliceIndex === path.length ? "/" : path.slice(sliceIndex);
		bestFuzzy.rawParams ??= Object.create(null);
		bestFuzzy.rawParams["**"] = decodeURIComponent(splat);
		return bestFuzzy;
	}
	return null;
}
function segmentScore(partsLength, index) {
	return 2 ** (partsLength - index - 1);
}
function isPerfectStaticMatch(statics, partsLength) {
	return statics === 2 ** (partsLength - 1) - 1;
}
function validateParseParams(path, parts, frame) {
	let rawParams;
	let state;
	try {
		[rawParams, state] = extractParams(path, parts, frame);
	} catch {
		return null;
	}
	frame.rawParams = rawParams;
	frame.extract = state;
	if (!frame.node.parse) return true;
	try {
		if (frame.node.parse(rawParams) === false) return null;
	} catch {}
	return true;
}
function isFrameMoreSpecific(prev, next) {
	if (!prev) return true;
	return next.statics > prev.statics || next.statics === prev.statics && (next.dynamics > prev.dynamics || next.dynamics === prev.dynamics && (next.optionals > prev.optionals || next.optionals === prev.optionals && ((next.node.kind === SEGMENT_TYPE_INDEX) > (prev.node.kind === SEGMENT_TYPE_INDEX) || next.node.kind === SEGMENT_TYPE_INDEX === (prev.node.kind === SEGMENT_TYPE_INDEX) && next.depth > prev.depth)));
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/path.js
/** Join path segments, cleaning duplicate slashes between parts. */
function joinPaths(paths) {
	return cleanPath(paths.filter((val) => {
		return val !== void 0;
	}).join("/"));
}
/** Remove repeated slashes from a path string. */
function cleanPath(path) {
	return path.replace(/\/{2,}/g, "/");
}
/** Trim leading slashes (except preserving root '/'). */
function trimPathLeft(path) {
	return path === "/" ? path : path.replace(/^\/{1,}/, "");
}
/** Trim trailing slashes (except preserving root '/'). */
function trimPathRight(path) {
	const len = path.length;
	return len > 1 && path[len - 1] === "/" ? path.replace(/\/{1,}$/, "") : path;
}
/** Trim both leading and trailing slashes. */
function trimPath(path) {
	return trimPathRight(trimPathLeft(path));
}
/** Remove a trailing slash from value when appropriate for comparisons. */
function removeTrailingSlash(value, basepath) {
	if (value?.endsWith("/") && value !== "/" && value !== `${basepath}/`) return value.slice(0, -1);
	return value;
}
/**
* Compare two pathnames for exact equality after normalizing trailing slashes
* relative to the provided `basepath`.
*/
function exactPathTest(pathName1, pathName2, basepath) {
	return removeTrailingSlash(pathName1, basepath) === removeTrailingSlash(pathName2, basepath);
}
/**
* Resolve a destination path against a base, honoring trailing-slash policy
* and supporting relative segments (`.`/`..`) and absolute `to` values.
*/
function resolvePath({ base, to, trailingSlash = "never", cache }) {
	const isAbsolute = to.startsWith("/");
	const isBase = !isAbsolute && to === ".";
	let key;
	if (cache) {
		key = isAbsolute ? to : isBase ? base : base + "\0" + to;
		const cached = cache.get(key);
		if (cached) return cached;
	}
	let baseSegments;
	if (isBase) baseSegments = base.split("/");
	else if (isAbsolute) baseSegments = to.split("/");
	else {
		baseSegments = base.split("/");
		while (baseSegments.length > 1 && last(baseSegments) === "") baseSegments.pop();
		const toSegments = to.split("/");
		for (let index = 0, length = toSegments.length; index < length; index++) {
			const value = toSegments[index];
			if (value === "") {
				if (!index) baseSegments = [value];
				else if (index === length - 1) baseSegments.push(value);
			} else if (value === "..") baseSegments.pop();
			else if (value === ".") {} else baseSegments.push(value);
		}
	}
	if (baseSegments.length > 1) {
		if (last(baseSegments) === "") {
			if (trailingSlash === "never") baseSegments.pop();
		} else if (trailingSlash === "always") baseSegments.push("");
	}
	const result = cleanPath(baseSegments.join("/")) || "/";
	if (key && cache) cache.set(key, result);
	return result;
}
/**
* Create a pre-compiled decode config from allowed characters.
* This should be called once at router initialization.
*/
function compileDecodeCharMap(pathParamsAllowedCharacters) {
	const charMap = new Map(pathParamsAllowedCharacters.map((char) => [encodeURIComponent(char), char]));
	const pattern = Array.from(charMap.keys()).map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
	const regex = new RegExp(pattern, "g");
	return (encoded) => encoded.replace(regex, (match) => charMap.get(match) ?? match);
}
function encodeParam(key, params, decoder) {
	const value = params[key];
	if (typeof value !== "string") return value;
	if (key === "_splat") {
		if (/^[a-zA-Z0-9\-._~!/]*$/.test(value)) return value;
		return value.split("/").map((segment) => encodePathParam(segment, decoder)).join("/");
	} else return encodePathParam(value, decoder);
}
/**
* Interpolate params and wildcards into a route path template.
*
* - Encodes params safely (configurable allowed characters)
* - Supports `{-$optional}` segments, `{prefix{$id}suffix}` and `{$}` wildcards
*/
function interpolatePath({ path, params, decoder, ...rest }) {
	let isMissingParams = false;
	const usedParams = Object.create(null);
	if (!path || path === "/") return {
		interpolatedPath: "/",
		usedParams,
		isMissingParams
	};
	if (!path.includes("$")) return {
		interpolatedPath: path,
		usedParams,
		isMissingParams
	};
	const length = path.length;
	let cursor = 0;
	let segment;
	let joined = "";
	while (cursor < length) {
		const start = cursor;
		segment = parseSegment(path, start, segment);
		const end = segment[5];
		cursor = end + 1;
		if (start === end) continue;
		const kind = segment[0];
		if (kind === 0) {
			joined += "/" + path.substring(start, end);
			continue;
		}
		if (kind === 2) {
			const splat = params._splat;
			usedParams._splat = splat;
			usedParams["*"] = splat;
			const prefix = path.substring(start, segment[1]);
			const suffix = path.substring(segment[4], end);
			if (!splat) {
				isMissingParams = true;
				if (prefix || suffix) joined += "/" + prefix + suffix;
				continue;
			}
			const value = encodeParam("_splat", params, decoder);
			joined += "/" + prefix + value + suffix;
			continue;
		}
		if (kind === 1) {
			const key = path.substring(segment[2], segment[3]);
			if (!isMissingParams && !(key in params)) isMissingParams = true;
			usedParams[key] = params[key];
			const prefix = path.substring(start, segment[1]);
			const suffix = path.substring(segment[4], end);
			const value = encodeParam(key, params, decoder) ?? "undefined";
			joined += "/" + prefix + value + suffix;
			continue;
		}
		if (kind === 3) {
			const key = path.substring(segment[2], segment[3]);
			const valueRaw = params[key];
			if (valueRaw == null) continue;
			usedParams[key] = valueRaw;
			const prefix = path.substring(start, segment[1]);
			const suffix = path.substring(segment[4], end);
			const value = encodeParam(key, params, decoder) ?? "";
			joined += "/" + prefix + value + suffix;
			continue;
		}
	}
	if (path.endsWith("/")) joined += "/";
	return {
		usedParams,
		interpolatedPath: joined || "/",
		isMissingParams
	};
}
function encodePathParam(value, decoder) {
	const encoded = encodeURIComponent(value);
	return decoder?.(encoded) ?? encoded;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/not-found.js
/** Determine if a value is a TanStack Router not-found error. */
function isNotFound(obj) {
	return obj?.isNotFound === true;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/qss.js
/**
* Program is a reimplementation of the `qss` package:
* Copyright (c) Luke Edwards luke.edwards05@gmail.com, MIT License
* https://github.com/lukeed/qss/blob/master/license.md
*
* This reimplementation uses modern browser APIs
* (namely URLSearchParams) and TypeScript while still
* maintaining the original functionality and interface.
*
* Update: this implementation has also been mangled to
* fit exactly our use-case (single value per key in encoding).
*/
/**
* Encodes an object into a query string.
* @param obj - The object to encode into a query string.
* @param stringify - An optional custom stringify function.
* @returns The encoded query string.
* @example
* ```
* // Example input: encode({ token: 'foo', key: 'value' })
* // Expected output: "token=foo&key=value"
* ```
*/
function encode(obj, stringify = String) {
	const result = new URLSearchParams();
	for (const key in obj) {
		const val = obj[key];
		if (val !== void 0) result.set(key, stringify(val));
	}
	return result.toString();
}
/**
* Converts a string value to its appropriate type (string, number, boolean).
* @param mix - The string value to convert.
* @returns The converted value.
* @example
* // Example input: toValue("123")
* // Expected output: 123
*/
function toValue(str) {
	if (!str) return "";
	if (str === "false") return false;
	if (str === "true") return true;
	return +str * 0 === 0 && +str + "" === str ? +str : str;
}
/**
* Decodes a query string into an object.
* @param str - The query string to decode.
* @returns The decoded key-value pairs in an object format.
* @example
* // Example input: decode("token=foo&key=value")
* // Expected output: { "token": "foo", "key": "value" }
*/
function decode(str) {
	const searchParams = new URLSearchParams(str);
	const result = Object.create(null);
	for (const [key, value] of searchParams.entries()) {
		const previousValue = result[key];
		if (previousValue == null) result[key] = toValue(value);
		else if (Array.isArray(previousValue)) previousValue.push(toValue(value));
		else result[key] = [previousValue, toValue(value)];
	}
	return result;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/searchParams.js
/** Default `parseSearch` that strips leading '?' and JSON-parses values. */
var defaultParseSearch = parseSearchWith(JSON.parse);
/** Default `stringifySearch` using JSON.stringify for complex values. */
var defaultStringifySearch = stringifySearchWith(JSON.stringify, JSON.parse);
/**
* Build a `parseSearch` function using a provided JSON-like parser.
*
* The returned function strips a leading `?`, decodes values, and attempts to
* JSON-parse string values using the given `parser`.
*
* @param parser Function to parse a string value (e.g. `JSON.parse`).
* @returns A `parseSearch` function compatible with `Router` options.
* @link https://tanstack.com/router/latest/docs/framework/react/guide/custom-search-param-serialization
*/
function parseSearchWith(parser) {
	return (searchStr) => {
		if (searchStr[0] === "?") searchStr = searchStr.substring(1);
		const query = decode(searchStr);
		for (const key in query) {
			const value = query[key];
			if (typeof value === "string") try {
				query[key] = parser(value);
			} catch (_err) {}
		}
		return query;
	};
}
/**
* Build a `stringifySearch` function using a provided serializer.
*
* Non-primitive values are serialized with `stringify`. If a `parser` is
* supplied, string values that are parseable are re-serialized to ensure
* symmetry with `parseSearch`.
*
* @param stringify Function to serialize a value (e.g. `JSON.stringify`).
* @param parser Optional parser to detect parseable strings.
* @returns A `stringifySearch` function compatible with `Router` options.
* @link https://tanstack.com/router/latest/docs/framework/react/guide/custom-search-param-serialization
*/
function stringifySearchWith(stringify, parser) {
	const hasParser = typeof parser === "function";
	function stringifyValue(val) {
		if (typeof val === "object" && val !== null) try {
			return stringify(val);
		} catch (_err) {}
		else if (hasParser && typeof val === "string") try {
			parser(val);
			return stringify(val);
		} catch (_err) {}
		return val;
	}
	return (search) => {
		const searchStr = encode(search, stringifyValue);
		return searchStr ? `?${searchStr}` : "";
	};
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/root.js
/** Stable identifier used for the root route in a route tree. */
var rootRouteId = "__root__";
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/redirect.js
/**
* Create a redirect Response understood by TanStack Router.
*
* Use from route `loader`/`beforeLoad` or server functions to trigger a
* navigation. If `throw: true` is set, the redirect is thrown instead of
* returned. When an absolute `href` is supplied and `reloadDocument` is not
* set, a full-document navigation is inferred.
*
* @param opts Options for the redirect. Common fields:
* - `href`: absolute URL for external redirects; infers `reloadDocument`.
* - `statusCode`: HTTP status code to use (defaults to 307).
* - `headers`: additional headers to include on the Response.
* - Standard navigation options like `to`, `params`, `search`, `replace`,
*   and `reloadDocument` for internal redirects.
* @returns A Response augmented with router navigation options.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/redirectFunction
*/
function redirect(opts) {
	opts.statusCode = opts.statusCode || opts.code || 307;
	if (!opts._builtLocation && !opts.reloadDocument && typeof opts.href === "string") try {
		new URL(opts.href);
		opts.reloadDocument = true;
	} catch {}
	const headers = new Headers(opts.headers);
	if (opts.href && headers.get("Location") === null) headers.set("Location", opts.href);
	const response = new Response(null, {
		status: opts.statusCode,
		headers
	});
	response.options = opts;
	if (opts.throw) throw response;
	return response;
}
/** Check whether a value is a TanStack Router redirect Response. */
/** Check whether a value is a TanStack Router redirect Response. */
function isRedirect(obj) {
	return obj instanceof Response && !!obj.options;
}
/** Parse a serialized redirect object back into a redirect Response. */
/** Parse a serialized redirect object back into a redirect Response. */
function parseRedirect(obj) {
	if (obj !== null && typeof obj === "object" && obj.isSerializedRedirect) return redirect(obj);
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/load-matches.js
var triggerOnReady = (inner) => {
	if (!inner.rendered) {
		inner.rendered = true;
		return inner.onReady?.();
	}
};
var hasForcePendingActiveMatch = (router) => {
	return router.stores.matchesId.get().some((matchId) => {
		return router.stores.matchStores.get(matchId)?.get()._forcePending;
	});
};
var resolvePreload = (inner, matchId) => {
	return !!(inner.preload && !inner.router.stores.matchStores.has(matchId));
};
/**
* Builds the accumulated context from router options and all matches up to (and optionally including) the given index.
* Merges __routeContext and __beforeLoadContext from each match.
*/
var buildMatchContext = (inner, index, includeCurrentMatch = true) => {
	const context = { ...inner.router.options.context ?? {} };
	const end = includeCurrentMatch ? index : index - 1;
	for (let i = 0; i <= end; i++) {
		const innerMatch = inner.matches[i];
		if (!innerMatch) continue;
		const m = inner.router.getMatch(innerMatch.id);
		if (!m) continue;
		Object.assign(context, m.__routeContext, m.__beforeLoadContext);
	}
	return context;
};
var getNotFoundBoundaryIndex = (inner, err) => {
	if (!inner.matches.length) return;
	const requestedRouteId = err.routeId;
	const matchedRootIndex = inner.matches.findIndex((m) => m.routeId === inner.router.routeTree.id);
	const rootIndex = matchedRootIndex >= 0 ? matchedRootIndex : 0;
	let startIndex = requestedRouteId ? inner.matches.findIndex((match) => match.routeId === requestedRouteId) : inner.firstBadMatchIndex ?? inner.matches.length - 1;
	if (startIndex < 0) startIndex = rootIndex;
	for (let i = startIndex; i >= 0; i--) {
		const match = inner.matches[i];
		if (inner.router.looseRoutesById[match.routeId].options.notFoundComponent) return i;
	}
	return requestedRouteId ? startIndex : rootIndex;
};
var handleRedirectAndNotFound = (inner, match, err) => {
	if (!isRedirect(err) && !isNotFound(err)) return;
	if (isRedirect(err) && err.redirectHandled && !err.options.reloadDocument) throw err;
	if (match) {
		match._nonReactive.beforeLoadPromise?.resolve();
		match._nonReactive.loaderPromise?.resolve();
		match._nonReactive.beforeLoadPromise = void 0;
		match._nonReactive.loaderPromise = void 0;
		match._nonReactive.error = err;
		inner.updateMatch(match.id, (prev) => ({
			...prev,
			status: isRedirect(err) ? "redirected" : isNotFound(err) ? "notFound" : prev.status === "pending" ? "success" : prev.status,
			context: buildMatchContext(inner, match.index),
			isFetching: false,
			error: err
		}));
		if (isNotFound(err) && !err.routeId) err.routeId = match.routeId;
		match._nonReactive.loadPromise?.resolve();
	}
	if (isRedirect(err)) {
		inner.rendered = true;
		err.options._fromLocation = inner.location;
		err.redirectHandled = true;
		err = inner.router.resolveRedirect(err);
	}
	throw err;
};
var shouldSkipLoader = (inner, matchId) => {
	const match = inner.router.getMatch(matchId);
	if (!match) return true;
	if (match._nonReactive.dehydrated) return true;
	return false;
};
var syncMatchContext = (inner, matchId, index) => {
	const nextContext = buildMatchContext(inner, index);
	inner.updateMatch(matchId, (prev) => {
		return {
			...prev,
			context: nextContext
		};
	});
};
var handleSerialError = (inner, index, err) => {
	const { id: matchId, routeId } = inner.matches[index];
	const route = inner.router.looseRoutesById[routeId];
	if (err instanceof Promise) throw err;
	inner.firstBadMatchIndex ??= index;
	handleRedirectAndNotFound(inner, inner.router.getMatch(matchId), err);
	try {
		route.options.onError?.(err);
	} catch (errorHandlerErr) {
		err = errorHandlerErr;
		handleRedirectAndNotFound(inner, inner.router.getMatch(matchId), err);
	}
	inner.updateMatch(matchId, (prev) => {
		prev._nonReactive.beforeLoadPromise?.resolve();
		prev._nonReactive.beforeLoadPromise = void 0;
		prev._nonReactive.loadPromise?.resolve();
		return {
			...prev,
			error: err,
			status: "error",
			isFetching: false,
			updatedAt: Date.now(),
			abortController: new AbortController()
		};
	});
	if (!inner.preload && !isRedirect(err) && !isNotFound(err)) inner.serialError ??= err;
};
var setupPendingTimeout = (inner, matchId, route, match) => {
	if (match._nonReactive.pendingTimeout !== void 0) return;
	const pendingMs = route.options.pendingMs ?? inner.router.options.defaultPendingMs;
	if (!!(inner.onReady && !resolvePreload(inner, matchId) && (route.options.loader || route.options.beforeLoad || routeNeedsPreload(route)) && typeof pendingMs === "number" && pendingMs !== Infinity && (route.options.pendingComponent ?? inner.router.options?.defaultPendingComponent))) {
		const pendingTimeout = setTimeout(() => {
			triggerOnReady(inner);
		}, pendingMs);
		match._nonReactive.pendingTimeout = pendingTimeout;
	}
};
var preBeforeLoadSetup = (inner, matchId, route) => {
	const existingMatch = inner.router.getMatch(matchId);
	if (!existingMatch._nonReactive.beforeLoadPromise && !existingMatch._nonReactive.loaderPromise) return;
	setupPendingTimeout(inner, matchId, route, existingMatch);
	const then = () => {
		const match = inner.router.getMatch(matchId);
		if (match.preload && (match.status === "redirected" || match.status === "notFound")) handleRedirectAndNotFound(inner, match, match.error);
	};
	return existingMatch._nonReactive.beforeLoadPromise ? existingMatch._nonReactive.beforeLoadPromise.then(then) : then();
};
var executeBeforeLoad = (inner, matchId, index, route) => {
	const match = inner.router.getMatch(matchId);
	let prevLoadPromise = match._nonReactive.loadPromise;
	match._nonReactive.loadPromise = createControlledPromise(() => {
		prevLoadPromise?.resolve();
		prevLoadPromise = void 0;
	});
	const { paramsError, searchError } = match;
	if (paramsError) handleSerialError(inner, index, paramsError);
	if (searchError) handleSerialError(inner, index, searchError);
	setupPendingTimeout(inner, matchId, route, match);
	const abortController = new AbortController();
	let isPending = false;
	const pending = () => {
		if (isPending) return;
		isPending = true;
		inner.updateMatch(matchId, (prev) => ({
			...prev,
			isFetching: "beforeLoad",
			fetchCount: prev.fetchCount + 1,
			abortController
		}));
	};
	const resolve = () => {
		match._nonReactive.beforeLoadPromise?.resolve();
		match._nonReactive.beforeLoadPromise = void 0;
		inner.updateMatch(matchId, (prev) => ({
			...prev,
			isFetching: false
		}));
	};
	if (!route.options.beforeLoad) {
		inner.router.batch(() => {
			pending();
			resolve();
		});
		return;
	}
	match._nonReactive.beforeLoadPromise = createControlledPromise();
	const context = {
		...buildMatchContext(inner, index, false),
		...match.__routeContext
	};
	const { search, params, cause } = match;
	const preload = resolvePreload(inner, matchId);
	const beforeLoadFnContext = {
		search,
		abortController,
		params,
		preload,
		context,
		location: inner.location,
		navigate: (opts) => inner.router.navigate({
			...opts,
			_fromLocation: inner.location
		}),
		buildLocation: inner.router.buildLocation,
		cause: preload ? "preload" : cause,
		matches: inner.matches,
		routeId: route.id,
		...inner.router.options.additionalContext
	};
	const updateContext = (beforeLoadContext) => {
		if (beforeLoadContext === void 0) {
			inner.router.batch(() => {
				pending();
				resolve();
			});
			return;
		}
		if (isRedirect(beforeLoadContext) || isNotFound(beforeLoadContext)) {
			pending();
			handleSerialError(inner, index, beforeLoadContext);
		}
		inner.router.batch(() => {
			pending();
			inner.updateMatch(matchId, (prev) => ({
				...prev,
				__beforeLoadContext: beforeLoadContext
			}));
			resolve();
		});
	};
	let beforeLoadContext;
	try {
		beforeLoadContext = route.options.beforeLoad(beforeLoadFnContext);
		if (isPromise(beforeLoadContext)) {
			pending();
			return beforeLoadContext.catch((err) => {
				handleSerialError(inner, index, err);
			}).then(updateContext);
		}
	} catch (err) {
		pending();
		handleSerialError(inner, index, err);
	}
	updateContext(beforeLoadContext);
};
var handleBeforeLoad = (inner, index) => {
	const { id: matchId, routeId } = inner.matches[index];
	const route = inner.router.looseRoutesById[routeId];
	const serverSsr = () => {
		return queueExecution();
	};
	const execute = () => executeBeforeLoad(inner, matchId, index, route);
	const queueExecution = () => {
		if (shouldSkipLoader(inner, matchId)) return;
		const result = preBeforeLoadSetup(inner, matchId, route);
		return isPromise(result) ? result.then(execute) : execute();
	};
	return serverSsr();
};
var executeHead = (inner, matchId, route) => {
	const match = inner.router.getMatch(matchId);
	if (!match) return;
	if (!route.options.head && !route.options.scripts && !route.options.headers) return;
	const assetContext = {
		ssr: inner.router.options.ssr,
		matches: inner.matches,
		match,
		params: match.params,
		loaderData: match.loaderData
	};
	return Promise.all([
		route.options.head?.(assetContext),
		route.options.scripts?.(assetContext),
		route.options.headers?.(assetContext)
	]).then(([headFnContent, scripts, headers]) => {
		return {
			meta: headFnContent?.meta,
			links: headFnContent?.links,
			headScripts: headFnContent?.scripts,
			headers,
			scripts,
			styles: headFnContent?.styles
		};
	});
};
var getLoaderContext = (inner, matchPromises, matchId, index, route) => {
	const parentMatchPromise = matchPromises[index - 1];
	const { params, loaderDeps, abortController, cause } = inner.router.getMatch(matchId);
	const context = buildMatchContext(inner, index);
	const preload = resolvePreload(inner, matchId);
	return {
		params,
		deps: loaderDeps,
		preload: !!preload,
		parentMatchPromise,
		abortController,
		context,
		location: inner.location,
		navigate: (opts) => inner.router.navigate({
			...opts,
			_fromLocation: inner.location
		}),
		cause: preload ? "preload" : cause,
		route,
		...inner.router.options.additionalContext
	};
};
var runLoader = async (inner, matchPromises, matchId, index, route) => {
	try {
		const match = inner.router.getMatch(matchId);
		try {
			loadRouteChunk(route);
			const routeLoader = route.options.loader;
			const loader = typeof routeLoader === "function" ? routeLoader : routeLoader?.handler;
			const loaderResult = loader?.(getLoaderContext(inner, matchPromises, matchId, index, route));
			const loaderResultIsPromise = !!loader && isPromise(loaderResult);
			if (!!(loaderResultIsPromise || route._lazyPromise || route._componentsPromise || route.options.head || route.options.scripts || route.options.headers || match._nonReactive.minPendingPromise)) inner.updateMatch(matchId, (prev) => ({
				...prev,
				isFetching: "loader"
			}));
			if (loader) {
				const loaderData = loaderResultIsPromise ? await loaderResult : loaderResult;
				handleRedirectAndNotFound(inner, inner.router.getMatch(matchId), loaderData);
				if (loaderData !== void 0) inner.updateMatch(matchId, (prev) => ({
					...prev,
					loaderData
				}));
			}
			if (route._lazyPromise) await route._lazyPromise;
			const pendingPromise = match._nonReactive.minPendingPromise;
			if (pendingPromise) await pendingPromise;
			if (route._componentsPromise) await route._componentsPromise;
			inner.updateMatch(matchId, (prev) => ({
				...prev,
				error: void 0,
				context: buildMatchContext(inner, index),
				status: "success",
				isFetching: false,
				updatedAt: Date.now()
			}));
		} catch (e) {
			let error = e;
			if (error?.name === "AbortError") {
				if (match.abortController.signal.aborted) {
					match._nonReactive.loaderPromise?.resolve();
					match._nonReactive.loaderPromise = void 0;
					return;
				}
				inner.updateMatch(matchId, (prev) => ({
					...prev,
					status: prev.status === "pending" ? "success" : prev.status,
					isFetching: false,
					context: buildMatchContext(inner, index)
				}));
				return;
			}
			const pendingPromise = match._nonReactive.minPendingPromise;
			if (pendingPromise) await pendingPromise;
			if (isNotFound(e)) await route.options.notFoundComponent?.preload?.();
			handleRedirectAndNotFound(inner, inner.router.getMatch(matchId), e);
			try {
				route.options.onError?.(e);
			} catch (onErrorError) {
				error = onErrorError;
				handleRedirectAndNotFound(inner, inner.router.getMatch(matchId), onErrorError);
			}
			if (!isRedirect(error) && !isNotFound(error)) await loadRouteChunk(route, ["errorComponent"]);
			inner.updateMatch(matchId, (prev) => ({
				...prev,
				error,
				context: buildMatchContext(inner, index),
				status: "error",
				isFetching: false
			}));
		}
	} catch (err) {
		const match = inner.router.getMatch(matchId);
		if (match) match._nonReactive.loaderPromise = void 0;
		handleRedirectAndNotFound(inner, match, err);
	}
};
var loadRouteMatch = async (inner, matchPromises, index) => {
	async function handleLoader(preload, prevMatch, previousRouteMatchId, match, route) {
		const age = Date.now() - prevMatch.updatedAt;
		const staleAge = preload ? route.options.preloadStaleTime ?? inner.router.options.defaultPreloadStaleTime ?? 3e4 : route.options.staleTime ?? inner.router.options.defaultStaleTime ?? 0;
		const shouldReloadOption = route.options.shouldReload;
		const shouldReload = typeof shouldReloadOption === "function" ? shouldReloadOption(getLoaderContext(inner, matchPromises, matchId, index, route)) : shouldReloadOption;
		const { status, invalid } = match;
		const staleMatchShouldReload = age >= staleAge && (!!inner.forceStaleReload || match.cause === "enter" || previousRouteMatchId !== void 0 && previousRouteMatchId !== match.id);
		loaderShouldRunAsync = status === "success" && (invalid || (shouldReload ?? staleMatchShouldReload));
		if (preload && route.options.preload === false) {} else if (loaderShouldRunAsync && !inner.sync && shouldReloadInBackground) {
			loaderIsRunningAsync = true;
			(async () => {
				try {
					await runLoader(inner, matchPromises, matchId, index, route);
					const match = inner.router.getMatch(matchId);
					match._nonReactive.loaderPromise?.resolve();
					match._nonReactive.loadPromise?.resolve();
					match._nonReactive.loaderPromise = void 0;
					match._nonReactive.loadPromise = void 0;
				} catch (err) {
					if (isRedirect(err)) await inner.router.navigate(err.options);
				}
			})();
		} else if (status !== "success" || loaderShouldRunAsync) await runLoader(inner, matchPromises, matchId, index, route);
		else syncMatchContext(inner, matchId, index);
	}
	const { id: matchId, routeId } = inner.matches[index];
	let loaderShouldRunAsync = false;
	let loaderIsRunningAsync = false;
	const route = inner.router.looseRoutesById[routeId];
	const routeLoader = route.options.loader;
	const shouldReloadInBackground = ((typeof routeLoader === "function" ? void 0 : routeLoader?.staleReloadMode) ?? inner.router.options.defaultStaleReloadMode) !== "blocking";
	if (shouldSkipLoader(inner, matchId)) {
		if (!inner.router.getMatch(matchId)) return inner.matches[index];
		syncMatchContext(inner, matchId, index);
	} else {
		const prevMatch = inner.router.getMatch(matchId);
		const activeIdAtIndex = inner.router.stores.matchesId.get()[index];
		const previousRouteMatchId = (activeIdAtIndex && inner.router.stores.matchStores.get(activeIdAtIndex) || null)?.routeId === routeId ? activeIdAtIndex : inner.router.stores.matches.get().find((d) => d.routeId === routeId)?.id;
		const preload = resolvePreload(inner, matchId);
		if (prevMatch._nonReactive.loaderPromise) {
			if (prevMatch.status === "success" && !inner.sync && !prevMatch.preload && shouldReloadInBackground) return prevMatch;
			await prevMatch._nonReactive.loaderPromise;
			const match = inner.router.getMatch(matchId);
			const error = match._nonReactive.error || match.error;
			if (error) handleRedirectAndNotFound(inner, match, error);
			if (match.status === "pending") await handleLoader(preload, prevMatch, previousRouteMatchId, match, route);
		} else {
			const nextPreload = preload && !inner.router.stores.matchStores.has(matchId);
			const match = inner.router.getMatch(matchId);
			match._nonReactive.loaderPromise = createControlledPromise();
			if (nextPreload !== match.preload) inner.updateMatch(matchId, (prev) => ({
				...prev,
				preload: nextPreload
			}));
			await handleLoader(preload, prevMatch, previousRouteMatchId, match, route);
		}
	}
	const match = inner.router.getMatch(matchId);
	if (!loaderIsRunningAsync) {
		match._nonReactive.loaderPromise?.resolve();
		match._nonReactive.loadPromise?.resolve();
		match._nonReactive.loadPromise = void 0;
	}
	clearTimeout(match._nonReactive.pendingTimeout);
	match._nonReactive.pendingTimeout = void 0;
	if (!loaderIsRunningAsync) match._nonReactive.loaderPromise = void 0;
	match._nonReactive.dehydrated = void 0;
	const nextIsFetching = loaderIsRunningAsync ? match.isFetching : false;
	if (nextIsFetching !== match.isFetching || match.invalid !== false) {
		inner.updateMatch(matchId, (prev) => ({
			...prev,
			isFetching: nextIsFetching,
			invalid: false
		}));
		return inner.router.getMatch(matchId);
	} else return match;
};
async function loadMatches(arg) {
	const inner = arg;
	const matchPromises = [];
	if (hasForcePendingActiveMatch(inner.router)) triggerOnReady(inner);
	let beforeLoadNotFound;
	for (let i = 0; i < inner.matches.length; i++) {
		try {
			const beforeLoad = handleBeforeLoad(inner, i);
			if (isPromise(beforeLoad)) await beforeLoad;
		} catch (err) {
			if (isRedirect(err)) throw err;
			if (isNotFound(err)) beforeLoadNotFound = err;
			else if (!inner.preload) throw err;
			break;
		}
		if (inner.serialError || inner.firstBadMatchIndex != null) break;
	}
	const baseMaxIndexExclusive = inner.firstBadMatchIndex ?? inner.matches.length;
	const boundaryIndex = beforeLoadNotFound && !inner.preload ? getNotFoundBoundaryIndex(inner, beforeLoadNotFound) : void 0;
	const maxIndexExclusive = beforeLoadNotFound && inner.preload ? 0 : boundaryIndex !== void 0 ? Math.min(boundaryIndex + 1, baseMaxIndexExclusive) : baseMaxIndexExclusive;
	let firstNotFound;
	let firstUnhandledRejection;
	for (let i = 0; i < maxIndexExclusive; i++) matchPromises.push(loadRouteMatch(inner, matchPromises, i));
	try {
		await Promise.all(matchPromises);
	} catch {
		const settled = await Promise.allSettled(matchPromises);
		for (const result of settled) {
			if (result.status !== "rejected") continue;
			const reason = result.reason;
			if (isRedirect(reason)) throw reason;
			if (isNotFound(reason)) firstNotFound ??= reason;
			else firstUnhandledRejection ??= reason;
		}
		if (firstUnhandledRejection !== void 0) throw firstUnhandledRejection;
	}
	const notFoundToThrow = firstNotFound ?? (beforeLoadNotFound && !inner.preload ? beforeLoadNotFound : void 0);
	let headMaxIndex = inner.firstBadMatchIndex !== void 0 ? inner.firstBadMatchIndex : inner.matches.length - 1;
	if (!notFoundToThrow && beforeLoadNotFound && inner.preload) return inner.matches;
	if (notFoundToThrow) {
		const renderedBoundaryIndex = getNotFoundBoundaryIndex(inner, notFoundToThrow);
		if (renderedBoundaryIndex === void 0) invariant();
		const boundaryMatch = inner.matches[renderedBoundaryIndex];
		const boundaryRoute = inner.router.looseRoutesById[boundaryMatch.routeId];
		const defaultNotFoundComponent = inner.router.options?.defaultNotFoundComponent;
		if (!boundaryRoute.options.notFoundComponent && defaultNotFoundComponent) boundaryRoute.options.notFoundComponent = defaultNotFoundComponent;
		notFoundToThrow.routeId = boundaryMatch.routeId;
		const boundaryIsRoot = boundaryMatch.routeId === inner.router.routeTree.id;
		inner.updateMatch(boundaryMatch.id, (prev) => ({
			...prev,
			...boundaryIsRoot ? {
				status: "success",
				globalNotFound: true,
				error: void 0
			} : {
				status: "notFound",
				error: notFoundToThrow
			},
			isFetching: false
		}));
		headMaxIndex = renderedBoundaryIndex;
		await loadRouteChunk(boundaryRoute, ["notFoundComponent"]);
	} else if (!inner.preload) {
		const rootMatch = inner.matches[0];
		if (!rootMatch.globalNotFound) {
			if (inner.router.getMatch(rootMatch.id)?.globalNotFound) inner.updateMatch(rootMatch.id, (prev) => ({
				...prev,
				globalNotFound: false,
				error: void 0
			}));
		}
	}
	if (inner.serialError && inner.firstBadMatchIndex !== void 0) {
		const errorRoute = inner.router.looseRoutesById[inner.matches[inner.firstBadMatchIndex].routeId];
		await loadRouteChunk(errorRoute, ["errorComponent"]);
	}
	for (let i = 0; i <= headMaxIndex; i++) {
		const { id: matchId, routeId } = inner.matches[i];
		const route = inner.router.looseRoutesById[routeId];
		try {
			const headResult = executeHead(inner, matchId, route);
			if (headResult) {
				const head = await headResult;
				inner.updateMatch(matchId, (prev) => ({
					...prev,
					...head
				}));
			}
		} catch (err) {
			console.error(`Error executing head for route ${routeId}:`, err);
		}
	}
	const readyPromise = triggerOnReady(inner);
	if (isPromise(readyPromise)) await readyPromise;
	if (notFoundToThrow) throw notFoundToThrow;
	if (inner.serialError && !inner.preload && !inner.onReady) throw inner.serialError;
	return inner.matches;
}
function preloadRouteComponents(route, componentTypesToLoad) {
	const preloads = componentTypesToLoad.map((type) => route.options[type]?.preload?.()).filter(Boolean);
	if (preloads.length === 0) return void 0;
	return Promise.all(preloads);
}
function loadRouteChunk(route, componentTypesToLoad = componentTypes) {
	if (!route._lazyLoaded && route._lazyPromise === void 0) if (route.lazyFn) route._lazyPromise = route.lazyFn().then((lazyRoute) => {
		const { id: _id, ...options } = lazyRoute.options;
		Object.assign(route.options, options);
		route._lazyLoaded = true;
		route._lazyPromise = void 0;
	});
	else route._lazyLoaded = true;
	const runAfterLazy = () => route._componentsLoaded ? void 0 : componentTypesToLoad === componentTypes ? (() => {
		if (route._componentsPromise === void 0) {
			const componentsPromise = preloadRouteComponents(route, componentTypes);
			if (componentsPromise) route._componentsPromise = componentsPromise.then(() => {
				route._componentsLoaded = true;
				route._componentsPromise = void 0;
			});
			else route._componentsLoaded = true;
		}
		return route._componentsPromise;
	})() : preloadRouteComponents(route, componentTypesToLoad);
	return route._lazyPromise ? route._lazyPromise.then(runAfterLazy) : runAfterLazy();
}
function routeNeedsPreload(route) {
	for (const componentType of componentTypes) if (route.options[componentType]?.preload) return true;
	return false;
}
var componentTypes = [
	"component",
	"errorComponent",
	"pendingComponent",
	"notFoundComponent"
];
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/rewrite.js
/** Compose multiple rewrite pairs into a single in/out rewrite. */
function composeRewrites(rewrites) {
	return {
		input: ({ url }) => {
			for (const rewrite of rewrites) url = executeRewriteInput(rewrite, url);
			return url;
		},
		output: ({ url }) => {
			for (let i = rewrites.length - 1; i >= 0; i--) url = executeRewriteOutput(rewrites[i], url);
			return url;
		}
	};
}
/** Create a rewrite pair that strips/adds a basepath on input/output. */
function rewriteBasepath(opts) {
	const trimmedBasepath = trimPath(opts.basepath);
	const normalizedBasepath = `/${trimmedBasepath}`;
	const checkBasepath = opts.caseSensitive ? normalizedBasepath : normalizedBasepath.toLowerCase();
	const checkBasepathWithSlash = `${checkBasepath}/`;
	return {
		input: ({ url }) => {
			const pathname = opts.caseSensitive ? url.pathname : url.pathname.toLowerCase();
			if (pathname === checkBasepath) url.pathname = "/";
			else if (pathname.startsWith(checkBasepathWithSlash)) url.pathname = url.pathname.slice(normalizedBasepath.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = joinPaths([
				"/",
				trimmedBasepath,
				url.pathname
			]);
			return url;
		}
	};
}
/** Execute a location input rewrite if provided. */
function executeRewriteInput(rewrite, url) {
	const res = rewrite?.input?.({ url });
	if (res) {
		if (typeof res === "string") return new URL(res);
		else if (res instanceof URL) return res;
	}
	return url;
}
/** Execute a location output rewrite if provided. */
function executeRewriteOutput(rewrite, url) {
	const res = rewrite?.output?.({ url });
	if (res) {
		if (typeof res === "string") return new URL(res);
		else if (res instanceof URL) return res;
	}
	return url;
}
function createRouterStores(initialState, config) {
	const { createMutableStore, createReadonlyStore, batch, init } = config;
	const matchStores = /* @__PURE__ */ new Map();
	const pendingMatchStores = /* @__PURE__ */ new Map();
	const cachedMatchStores = /* @__PURE__ */ new Map();
	const status = createMutableStore(initialState.status);
	const loadedAt = createMutableStore(initialState.loadedAt);
	const isLoading = createMutableStore(initialState.isLoading);
	const isTransitioning = createMutableStore(initialState.isTransitioning);
	const location = createMutableStore(initialState.location);
	const resolvedLocation = createMutableStore(initialState.resolvedLocation);
	const statusCode = createMutableStore(initialState.statusCode);
	const redirect = createMutableStore(initialState.redirect);
	const matchesId = createMutableStore([]);
	const pendingIds = createMutableStore([]);
	const cachedIds = createMutableStore([]);
	const matches = createReadonlyStore(() => readPoolMatches(matchStores, matchesId.get()));
	const pendingMatches = createReadonlyStore(() => readPoolMatches(pendingMatchStores, pendingIds.get()));
	const cachedMatches = createReadonlyStore(() => readPoolMatches(cachedMatchStores, cachedIds.get()));
	const firstId = createReadonlyStore(() => matchesId.get()[0]);
	const hasPending = createReadonlyStore(() => matchesId.get().some((matchId) => {
		return matchStores.get(matchId)?.get().status === "pending";
	}));
	const matchRouteDeps = createReadonlyStore(() => ({
		locationHref: location.get().href,
		resolvedLocationHref: resolvedLocation.get()?.href,
		status: status.get()
	}));
	const __store = createReadonlyStore(() => ({
		status: status.get(),
		loadedAt: loadedAt.get(),
		isLoading: isLoading.get(),
		isTransitioning: isTransitioning.get(),
		matches: matches.get(),
		location: location.get(),
		resolvedLocation: resolvedLocation.get(),
		statusCode: statusCode.get(),
		redirect: redirect.get()
	}));
	const matchStoreByRouteIdCache = createLRUCache(64);
	function getRouteMatchStore(routeId) {
		let cached = matchStoreByRouteIdCache.get(routeId);
		if (!cached) {
			cached = createReadonlyStore(() => {
				const ids = matchesId.get();
				for (const id of ids) {
					const matchStore = matchStores.get(id);
					if (matchStore && matchStore.routeId === routeId) return matchStore.get();
				}
			});
			matchStoreByRouteIdCache.set(routeId, cached);
		}
		return cached;
	}
	const store = {
		status,
		loadedAt,
		isLoading,
		isTransitioning,
		location,
		resolvedLocation,
		statusCode,
		redirect,
		matchesId,
		pendingIds,
		cachedIds,
		matches,
		pendingMatches,
		cachedMatches,
		firstId,
		hasPending,
		matchRouteDeps,
		matchStores,
		pendingMatchStores,
		cachedMatchStores,
		__store,
		getRouteMatchStore,
		setMatches,
		setPending,
		setCached
	};
	setMatches(initialState.matches);
	init?.(store);
	function setMatches(nextMatches) {
		reconcileMatchPool(nextMatches, matchStores, matchesId, createMutableStore, batch);
	}
	function setPending(nextMatches) {
		reconcileMatchPool(nextMatches, pendingMatchStores, pendingIds, createMutableStore, batch);
	}
	function setCached(nextMatches) {
		reconcileMatchPool(nextMatches, cachedMatchStores, cachedIds, createMutableStore, batch);
	}
	return store;
}
function readPoolMatches(pool, ids) {
	const matches = [];
	for (const id of ids) {
		const matchStore = pool.get(id);
		if (matchStore) matches.push(matchStore.get());
	}
	return matches;
}
function reconcileMatchPool(nextMatches, pool, idStore, createMutableStore, batch) {
	const nextIds = nextMatches.map((d) => d.id);
	const nextIdSet = new Set(nextIds);
	batch(() => {
		for (const id of pool.keys()) if (!nextIdSet.has(id)) pool.delete(id);
		for (const nextMatch of nextMatches) {
			const existing = pool.get(nextMatch.id);
			if (!existing) {
				const matchStore = createMutableStore(nextMatch);
				matchStore.routeId = nextMatch.routeId;
				pool.set(nextMatch.id, matchStore);
				continue;
			}
			existing.routeId = nextMatch.routeId;
			if (existing.get() !== nextMatch) existing.set(nextMatch);
		}
		if (!arraysEqual(idStore.get(), nextIds)) idStore.set(nextIds);
	});
}
//#endregion
//#region node_modules/@tanstack/history/dist/esm/index.js
var stateIndexKey = "__TSR_index";
var popStateEvent = "popstate";
var beforeUnloadEvent = "beforeunload";
function createHistory(opts) {
	let location = opts.getLocation();
	const subscribers = /* @__PURE__ */ new Set();
	const notify = (action) => {
		location = opts.getLocation();
		subscribers.forEach((subscriber) => subscriber({
			location,
			action
		}));
	};
	const handleIndexChange = (action) => {
		if (opts.notifyOnIndexChange ?? true) notify(action);
		else location = opts.getLocation();
	};
	const tryNavigation = async ({ task, navigateOpts, ...actionInfo }) => {
		if (navigateOpts?.ignoreBlocker ?? false) {
			task();
			return;
		}
		const blockers = opts.getBlockers?.() ?? [];
		const isPushOrReplace = actionInfo.type === "PUSH" || actionInfo.type === "REPLACE";
		if (typeof document !== "undefined" && blockers.length && isPushOrReplace) for (const blocker of blockers) {
			const nextLocation = parseHref(actionInfo.path, actionInfo.state);
			if (await blocker.blockerFn({
				currentLocation: location,
				nextLocation,
				action: actionInfo.type
			})) {
				opts.onBlocked?.();
				return;
			}
		}
		task();
	};
	return {
		get location() {
			return location;
		},
		get length() {
			return opts.getLength();
		},
		subscribers,
		subscribe: (cb) => {
			subscribers.add(cb);
			return () => {
				subscribers.delete(cb);
			};
		},
		push: (path, state, navigateOpts) => {
			const currentIndex = location.state[stateIndexKey];
			state = assignKeyAndIndex(currentIndex + 1, state);
			tryNavigation({
				task: () => {
					opts.pushState(path, state);
					notify({ type: "PUSH" });
				},
				navigateOpts,
				type: "PUSH",
				path,
				state
			});
		},
		replace: (path, state, navigateOpts) => {
			const currentIndex = location.state[stateIndexKey];
			state = assignKeyAndIndex(currentIndex, state);
			tryNavigation({
				task: () => {
					opts.replaceState(path, state);
					notify({ type: "REPLACE" });
				},
				navigateOpts,
				type: "REPLACE",
				path,
				state
			});
		},
		go: (index, navigateOpts) => {
			tryNavigation({
				task: () => {
					opts.go(index);
					handleIndexChange({
						type: "GO",
						index
					});
				},
				navigateOpts,
				type: "GO"
			});
		},
		back: (navigateOpts) => {
			tryNavigation({
				task: () => {
					opts.back(navigateOpts?.ignoreBlocker ?? false);
					handleIndexChange({ type: "BACK" });
				},
				navigateOpts,
				type: "BACK"
			});
		},
		forward: (navigateOpts) => {
			tryNavigation({
				task: () => {
					opts.forward(navigateOpts?.ignoreBlocker ?? false);
					handleIndexChange({ type: "FORWARD" });
				},
				navigateOpts,
				type: "FORWARD"
			});
		},
		canGoBack: () => location.state[stateIndexKey] !== 0,
		createHref: (str) => opts.createHref(str),
		block: (blocker) => {
			if (!opts.setBlockers) return () => {};
			const blockers = opts.getBlockers?.() ?? [];
			opts.setBlockers([...blockers, blocker]);
			return () => {
				const blockers = opts.getBlockers?.() ?? [];
				opts.setBlockers?.(blockers.filter((b) => b !== blocker));
			};
		},
		flush: () => opts.flush?.(),
		destroy: () => opts.destroy?.(),
		notify
	};
}
function assignKeyAndIndex(index, state) {
	if (!state) state = {};
	const key = createRandomKey();
	return {
		...state,
		key,
		__TSR_key: key,
		[stateIndexKey]: index
	};
}
/**
* Creates a history object that can be used to interact with the browser's
* navigation. This is a lightweight API wrapping the browser's native methods.
* It is designed to work with TanStack Router, but could be used as a standalone API as well.
* IMPORTANT: This API implements history throttling via a microtask to prevent
* excessive calls to the history API. In some browsers, calling history.pushState or
* history.replaceState in quick succession can cause the browser to ignore subsequent
* calls. This API smooths out those differences and ensures that your application
* state will *eventually* match the browser state. In most cases, this is not a problem,
* but if you need to ensure that the browser state is up to date, you can use the
* `history.flush` method to immediately flush all pending state changes to the browser URL.
* @param opts
* @param opts.getHref A function that returns the current href (path + search + hash)
* @param opts.createHref A function that takes a path and returns a href (path + search + hash)
* @returns A history instance
*/
function createBrowserHistory(opts) {
	const win = opts?.window ?? (typeof document !== "undefined" ? window : void 0);
	const originalPushState = win.history.pushState;
	const originalReplaceState = win.history.replaceState;
	let blockers = [];
	const _getBlockers = () => blockers;
	const _setBlockers = (newBlockers) => blockers = newBlockers;
	const createHref = opts?.createHref ?? ((path) => path);
	const parseLocation = opts?.parseLocation ?? (() => parseHref(`${win.location.pathname}${win.location.search}${win.location.hash}`, win.history.state));
	if (!win.history.state?.__TSR_key && !win.history.state?.key) {
		const addedKey = createRandomKey();
		win.history.replaceState({
			[stateIndexKey]: 0,
			key: addedKey,
			__TSR_key: addedKey
		}, "");
	}
	let currentLocation = parseLocation();
	let rollbackLocation;
	let nextPopIsGo = false;
	let ignoreNextPop = false;
	let skipBlockerNextPop = false;
	let ignoreNextBeforeUnload = false;
	const getLocation = () => currentLocation;
	let next;
	let scheduled;
	const flush = () => {
		if (!next) return;
		history._ignoreSubscribers = true;
		(next.isPush ? win.history.pushState : win.history.replaceState)(next.state, "", next.href);
		history._ignoreSubscribers = false;
		next = void 0;
		scheduled = void 0;
		rollbackLocation = void 0;
	};
	const queueHistoryAction = (type, destHref, state) => {
		const href = createHref(destHref);
		if (!scheduled) rollbackLocation = currentLocation;
		currentLocation = parseHref(destHref, state);
		next = {
			href,
			state,
			isPush: next?.isPush || type === "push"
		};
		if (!scheduled) scheduled = Promise.resolve().then(() => flush());
	};
	const onPushPop = (type) => {
		currentLocation = parseLocation();
		history.notify({ type });
	};
	const onPushPopEvent = async () => {
		if (ignoreNextPop) {
			ignoreNextPop = false;
			return;
		}
		const nextLocation = parseLocation();
		const delta = nextLocation.state[stateIndexKey] - currentLocation.state[stateIndexKey];
		const isForward = delta === 1;
		const isBack = delta === -1;
		const isGo = !isForward && !isBack || nextPopIsGo;
		nextPopIsGo = false;
		const action = isGo ? "GO" : isBack ? "BACK" : "FORWARD";
		const notify = isGo ? {
			type: "GO",
			index: delta
		} : { type: isBack ? "BACK" : "FORWARD" };
		if (skipBlockerNextPop) skipBlockerNextPop = false;
		else {
			const blockers = _getBlockers();
			if (typeof document !== "undefined" && blockers.length) {
				for (const blocker of blockers) if (await blocker.blockerFn({
					currentLocation,
					nextLocation,
					action
				})) {
					ignoreNextPop = true;
					win.history.go(1);
					history.notify(notify);
					return;
				}
			}
		}
		currentLocation = parseLocation();
		history.notify(notify);
	};
	const onBeforeUnload = (e) => {
		if (ignoreNextBeforeUnload) {
			ignoreNextBeforeUnload = false;
			return;
		}
		let shouldBlock = false;
		const blockers = _getBlockers();
		if (typeof document !== "undefined" && blockers.length) for (const blocker of blockers) {
			const shouldHaveBeforeUnload = blocker.enableBeforeUnload ?? true;
			if (shouldHaveBeforeUnload === true) {
				shouldBlock = true;
				break;
			}
			if (typeof shouldHaveBeforeUnload === "function" && shouldHaveBeforeUnload() === true) {
				shouldBlock = true;
				break;
			}
		}
		if (shouldBlock) {
			e.preventDefault();
			return e.returnValue = "";
		}
	};
	const history = createHistory({
		getLocation,
		getLength: () => win.history.length,
		pushState: (href, state) => queueHistoryAction("push", href, state),
		replaceState: (href, state) => queueHistoryAction("replace", href, state),
		back: (ignoreBlocker) => {
			if (ignoreBlocker) skipBlockerNextPop = true;
			ignoreNextBeforeUnload = true;
			return win.history.back();
		},
		forward: (ignoreBlocker) => {
			if (ignoreBlocker) skipBlockerNextPop = true;
			ignoreNextBeforeUnload = true;
			win.history.forward();
		},
		go: (n) => {
			nextPopIsGo = true;
			win.history.go(n);
		},
		createHref: (href) => createHref(href),
		flush,
		destroy: () => {
			win.history.pushState = originalPushState;
			win.history.replaceState = originalReplaceState;
			win.removeEventListener(beforeUnloadEvent, onBeforeUnload, { capture: true });
			win.removeEventListener(popStateEvent, onPushPopEvent);
		},
		onBlocked: () => {
			if (rollbackLocation && currentLocation !== rollbackLocation) currentLocation = rollbackLocation;
		},
		getBlockers: _getBlockers,
		setBlockers: _setBlockers,
		notifyOnIndexChange: false
	});
	win.addEventListener(beforeUnloadEvent, onBeforeUnload, { capture: true });
	win.addEventListener(popStateEvent, onPushPopEvent);
	win.history.pushState = function(...args) {
		const res = originalPushState.apply(win.history, args);
		if (!history._ignoreSubscribers) onPushPop("PUSH");
		return res;
	};
	win.history.replaceState = function(...args) {
		const res = originalReplaceState.apply(win.history, args);
		if (!history._ignoreSubscribers) onPushPop("REPLACE");
		return res;
	};
	return history;
}
/**
* Sanitize a path to prevent open redirect vulnerabilities.
* Removes control characters and collapses leading double slashes.
*/
function sanitizePath(path) {
	let sanitized = path.replace(/[\x00-\x1f\x7f]/g, "");
	if (sanitized.startsWith("//")) sanitized = "/" + sanitized.replace(/^\/+/, "");
	return sanitized;
}
function parseHref(href, state) {
	const sanitizedHref = sanitizePath(href);
	const hashIndex = sanitizedHref.indexOf("#");
	const searchIndex = sanitizedHref.indexOf("?");
	const addedKey = createRandomKey();
	return {
		href: sanitizedHref,
		pathname: sanitizedHref.substring(0, hashIndex > 0 ? searchIndex > 0 ? Math.min(hashIndex, searchIndex) : hashIndex : searchIndex > 0 ? searchIndex : sanitizedHref.length),
		hash: hashIndex > -1 ? sanitizedHref.substring(hashIndex) : "",
		search: searchIndex > -1 ? sanitizedHref.slice(searchIndex, hashIndex === -1 ? void 0 : hashIndex) : "",
		state: state || {
			[stateIndexKey]: 0,
			key: addedKey,
			__TSR_key: addedKey
		}
	};
}
function createRandomKey() {
	return (Math.random() + 1).toString(36).substring(7);
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/router.js
/**
* Convert an unknown error into a minimal, serializable object.
* Includes name and message (and stack in development).
*/
function defaultSerializeError(err) {
	if (err instanceof Error) return {
		name: err.name,
		message: err.message
	};
	return { data: err };
}
/**
* Compute whether path, href or hash changed between previous and current
* resolved locations.
*/
function getLocationChangeInfo(location, resolvedLocation) {
	const fromLocation = resolvedLocation;
	const toLocation = location;
	return {
		fromLocation,
		toLocation,
		pathChanged: fromLocation?.pathname !== toLocation.pathname,
		hrefChanged: fromLocation?.href !== toLocation.href,
		hashChanged: fromLocation?.hash !== toLocation.hash
	};
}
var locationHistoryActions = /* @__PURE__ */ new WeakMap();
/**
* Core, framework-agnostic router engine that powers TanStack Router.
*
* Provides navigation, matching, loading, preloading, caching and event APIs
* used by framework adapters (React/Solid). Prefer framework helpers like
* `createRouter` in app code.
*
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/RouterType
*/
var RouterCore = class {
	/**
	* @deprecated Use the `createRouter` function instead
	*/
	constructor(options, getStoreConfig) {
		this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`;
		this._scroll = { next: true };
		this.shouldViewTransition = void 0;
		this.isViewTransitionTypesSupported = void 0;
		this.subscribers = /* @__PURE__ */ new Set();
		this.routeBranchCache = /* @__PURE__ */ new WeakMap();
		this.lightweightCache = /* @__PURE__ */ new WeakMap();
		this.startTransition = (fn) => fn();
		this.update = (newOptions) => {
			const prevOptions = this.options;
			const prevBasepath = this.basepath ?? prevOptions?.basepath ?? "/";
			const basepathWasUnset = this.basepath === void 0;
			const prevRewriteOption = prevOptions?.rewrite;
			this.options = {
				...prevOptions,
				...newOptions
			};
			this.isServer = this.options.isServer ?? typeof document === "undefined";
			this.protocolAllowlist = new Set(this.options.protocolAllowlist);
			if (this.options.pathParamsAllowedCharacters) this.pathParamsDecoder = compileDecodeCharMap(this.options.pathParamsAllowedCharacters);
			if (!this.history || this.options.history && this.options.history !== this.history) if (!this.options.history) this.history = createBrowserHistory();
			else this.history = this.options.history;
			this.origin = this.options.origin;
			if (!this.origin) if (window?.origin && window.origin !== "null") this.origin = window.origin;
			else this.origin = "http://localhost";
			if (this.history) this.updateLatestLocation();
			if (this.options.routeTree !== this.routeTree) {
				this.routeTree = this.options.routeTree;
				let processRouteTreeResult;
				this.resolvePathCache = createLRUCache(1e3);
				processRouteTreeResult = this.buildRouteTree();
				this.setRoutes(processRouteTreeResult);
			}
			if (!this.stores && this.latestLocation) {
				const config = this.getStoreConfig(this);
				this.batch = config.batch;
				this.stores = createRouterStores(getInitialRouterState(this.latestLocation), config);
				setupScrollRestoration(this);
			}
			let needsLocationUpdate = false;
			const nextBasepath = this.options.basepath ?? "/";
			const nextRewriteOption = this.options.rewrite;
			if (basepathWasUnset || prevBasepath !== nextBasepath || prevRewriteOption !== nextRewriteOption) {
				this.basepath = nextBasepath;
				const rewrites = [];
				const trimmed = trimPath(nextBasepath);
				if (trimmed && trimmed !== "/") rewrites.push(rewriteBasepath({ basepath: nextBasepath }));
				if (nextRewriteOption) rewrites.push(nextRewriteOption);
				this.rewrite = rewrites.length === 0 ? void 0 : rewrites.length === 1 ? rewrites[0] : composeRewrites(rewrites);
				if (this.history) this.updateLatestLocation();
				needsLocationUpdate = true;
			}
			if (needsLocationUpdate && this.stores) this.stores.location.set(this.latestLocation);
			if (typeof window !== "undefined" && "CSS" in window && typeof window.CSS?.supports === "function") this.isViewTransitionTypesSupported = window.CSS.supports("selector(:active-view-transition-type(a))");
		};
		this.updateLatestLocation = () => {
			this.latestLocation = this.parseLocation(this.history.location, this.latestLocation);
		};
		this.buildRouteTree = () => {
			const result = processRouteTree(this.routeTree, this.options.caseSensitive, (route, i) => {
				route.init({ originalIndex: i });
			});
			if (this.options.routeMasks) processRouteMasks(this.options.routeMasks, result.processedTree);
			return result;
		};
		this.subscribe = (eventType, fn) => {
			const listener = {
				eventType,
				fn
			};
			this.subscribers.add(listener);
			return () => {
				this.subscribers.delete(listener);
			};
		};
		this.emit = (routerEvent) => {
			this.subscribers.forEach((listener) => {
				if (listener.eventType === routerEvent.type) listener.fn(routerEvent);
			});
		};
		this.parseLocation = (locationToParse, previousLocation) => {
			const parse = ({ pathname, search, hash, href, state }) => {
				if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(pathname)) {
					const parsedSearch = this.options.parseSearch(search);
					const searchStr = this.options.stringifySearch(parsedSearch);
					return {
						href: pathname + searchStr + hash,
						publicHref: pathname + searchStr + hash,
						pathname: decodePath(pathname).path,
						external: false,
						searchStr,
						search: nullReplaceEqualDeep(previousLocation?.search, parsedSearch),
						hash: decodePath(hash.slice(1)).path,
						state: replaceEqualDeep$1(previousLocation?.state, state)
					};
				}
				const fullUrl = new URL(href, this.origin);
				const url = executeRewriteInput(this.rewrite, fullUrl);
				const parsedSearch = this.options.parseSearch(url.search);
				const searchStr = this.options.stringifySearch(parsedSearch);
				url.search = searchStr;
				return {
					href: url.href.replace(url.origin, ""),
					publicHref: href,
					pathname: decodePath(url.pathname).path,
					external: !!this.rewrite && url.origin !== this.origin,
					searchStr,
					search: nullReplaceEqualDeep(previousLocation?.search, parsedSearch),
					hash: decodePath(url.hash.slice(1)).path,
					state: replaceEqualDeep$1(previousLocation?.state, state)
				};
			};
			const location = parse(locationToParse);
			const { __tempLocation, __tempKey } = location.state;
			if (__tempLocation && (!__tempKey || __tempKey === this.tempLocationKey)) {
				const parsedTempLocation = parse(__tempLocation);
				parsedTempLocation.state.key = location.state.key;
				parsedTempLocation.state.__TSR_key = location.state.__TSR_key;
				delete parsedTempLocation.state.__tempLocation;
				return {
					...parsedTempLocation,
					maskedLocation: location
				};
			}
			return location;
		};
		this.resolvePathWithBase = (from, path) => {
			return resolvePath({
				base: from,
				to: path.includes("//") ? cleanPath(path) : path,
				trailingSlash: this.options.trailingSlash,
				cache: this.resolvePathCache
			});
		};
		this.matchRoutes = (pathnameOrNext, locationSearchOrOpts, opts) => {
			if (typeof pathnameOrNext === "string") return this.matchRoutesInternal({
				pathname: pathnameOrNext,
				search: locationSearchOrOpts
			}, opts);
			return this.matchRoutesInternal(pathnameOrNext, locationSearchOrOpts);
		};
		this.getMatchedRoutes = (pathname) => {
			return getMatchedRoutes({
				pathname,
				routesById: this.routesById,
				processedTree: this.processedTree
			});
		};
		this.cancelMatch = (id) => {
			const match = this.getMatch(id);
			if (!match) return;
			match.abortController.abort();
			clearTimeout(match._nonReactive.pendingTimeout);
			match._nonReactive.pendingTimeout = void 0;
		};
		this.cancelMatches = () => {
			this.stores.pendingIds.get().forEach((matchId) => {
				this.cancelMatch(matchId);
			});
			this.stores.matchesId.get().forEach((matchId) => {
				if (this.stores.pendingMatchStores.has(matchId)) return;
				const match = this.stores.matchStores.get(matchId)?.get();
				if (!match) return;
				if (match.status === "pending" || match.isFetching === "loader") this.cancelMatch(matchId);
			});
		};
		this.buildLocation = (opts) => {
			const build = (dest = {}) => {
				const currentLocation = dest._fromLocation || this.pendingBuiltLocation || this.latestLocation;
				const lightweightResult = this.matchRoutesLightweight(currentLocation);
				if (dest.from && false);
				const defaultedFromPath = dest.unsafeRelative === "path" ? currentLocation.pathname : dest.from ?? lightweightResult.fullPath;
				const destTo = dest.to ? `${dest.to}` : void 0;
				const fromSearch = lightweightResult.search;
				const fromParams = Object.assign(Object.create(null), lightweightResult.params);
				const sourcePath = destTo?.charCodeAt(0) === 47 ? "/" : this.resolvePathWithBase(defaultedFromPath, ".");
				const nextTo = destTo ? this.resolvePathWithBase(sourcePath, destTo) : sourcePath;
				const nextParams = dest.params === false || dest.params === null ? Object.create(null) : (dest.params ?? true) === true ? fromParams : Object.assign(fromParams, functionalUpdate$1(dest.params, fromParams));
				const destRoute = this.routesByPath[trimPathRight(nextTo)];
				let destRoutes;
				if (destRoute) destRoutes = this.getRouteBranch(destRoute);
				else if (nextTo.includes("$")) destRoutes = [];
				else {
					const destMatchResult = this.getMatchedRoutes(nextTo);
					destRoutes = destMatchResult.matchedRoutes;
					if (this.options.notFoundRoute && (!destMatchResult.foundRoute || destMatchResult.foundRoute.path !== "/" && destMatchResult.routeParams["**"])) destRoutes = [...destRoutes, this.options.notFoundRoute];
				}
				if (destRoutes.length && hasKeys(nextParams)) for (const route of destRoutes) {
					const fn = route.options.params?.stringify ?? route.options.stringifyParams;
					if (fn) try {
						Object.assign(nextParams, fn(nextParams));
					} catch {}
				}
				const nextPathname = opts.leaveParams ? nextTo : decodePath(interpolatePath({
					path: nextTo,
					params: nextParams,
					decoder: this.pathParamsDecoder,
					server: this.isServer
				}).interpolatedPath).path;
				let nextSearch = fromSearch;
				if (opts._includeValidateSearch && this.options.search?.strict) {
					const validatedSearch = {};
					destRoutes.forEach((route) => {
						if (route.options.validateSearch) try {
							Object.assign(validatedSearch, validateSearch(route.options.validateSearch, {
								...validatedSearch,
								...nextSearch
							}));
						} catch {}
					});
					nextSearch = validatedSearch;
				}
				nextSearch = applySearchMiddleware({
					search: nextSearch,
					dest,
					destRoutes,
					_includeValidateSearch: opts._includeValidateSearch
				});
				nextSearch = nullReplaceEqualDeep(fromSearch, nextSearch);
				const searchStr = this.options.stringifySearch(nextSearch);
				const hash = dest.hash === true ? currentLocation.hash : dest.hash ? functionalUpdate$1(dest.hash, currentLocation.hash) : void 0;
				const hashStr = hash ? `#${hash}` : "";
				let nextState = dest.state === true ? currentLocation.state : dest.state ? functionalUpdate$1(dest.state, currentLocation.state) : {};
				nextState = replaceEqualDeep$1(currentLocation.state, nextState);
				const fullPath = `${nextPathname}${searchStr}${hashStr}`;
				let href;
				let publicHref;
				let external = false;
				if (this.rewrite) {
					const url = new URL(fullPath, this.origin);
					const rewrittenUrl = executeRewriteOutput(this.rewrite, url);
					href = url.href.replace(url.origin, "");
					if (rewrittenUrl.origin !== this.origin) {
						publicHref = rewrittenUrl.href;
						external = true;
					} else publicHref = rewrittenUrl.pathname + rewrittenUrl.search + rewrittenUrl.hash;
				} else {
					href = encodePathLikeUrl(fullPath);
					publicHref = href;
				}
				return {
					publicHref,
					href,
					pathname: nextPathname,
					search: nextSearch,
					searchStr,
					state: nextState,
					hash: hash ?? "",
					external,
					unmaskOnReload: dest.unmaskOnReload
				};
			};
			const buildWithMatches = (dest = {}, maskedDest) => {
				const next = build(dest);
				let maskedNext = maskedDest ? build(maskedDest) : void 0;
				if (!maskedNext) {
					const params = Object.create(null);
					if (this.options.routeMasks) {
						const match = findFlatMatch(next.pathname, this.processedTree);
						if (match) {
							Object.assign(params, match.rawParams);
							const { from: _from, params: maskParams, ...maskProps } = match.route;
							const nextParams = maskParams === false || maskParams === null ? Object.create(null) : (maskParams ?? true) === true ? params : Object.assign(params, functionalUpdate$1(maskParams, params));
							maskedDest = {
								from: opts.from,
								...maskProps,
								params: nextParams
							};
							maskedNext = build(maskedDest);
						}
					}
				}
				if (maskedNext) next.maskedLocation = maskedNext;
				return next;
			};
			if (opts.mask) return buildWithMatches(opts, {
				from: opts.from,
				...opts.mask
			});
			return buildWithMatches(opts);
		};
		this.commitLocation = async ({ viewTransition, ignoreBlocker, ...next }) => {
			let historyAction;
			const isSameState = () => {
				const ignoredProps = [
					"key",
					"__TSR_key",
					"__TSR_index",
					"__hashScrollIntoViewOptions"
				];
				ignoredProps.forEach((prop) => {
					next.state[prop] = this.latestLocation.state[prop];
				});
				const isEqual = deepEqual(next.state, this.latestLocation.state);
				ignoredProps.forEach((prop) => {
					delete next.state[prop];
				});
				return isEqual;
			};
			const isSameUrl = trimPathRight(this.latestLocation.href) === trimPathRight(next.href);
			let previousCommitPromise = this.commitLocationPromise;
			this.commitLocationPromise = createControlledPromise(() => {
				previousCommitPromise?.resolve();
				previousCommitPromise = void 0;
			});
			if (isSameUrl && isSameState()) this.load();
			else {
				let { maskedLocation, hashScrollIntoView, ...nextHistory } = next;
				if (maskedLocation) {
					nextHistory = {
						...maskedLocation,
						state: {
							...maskedLocation.state,
							__tempKey: void 0,
							__tempLocation: {
								...nextHistory,
								search: nextHistory.searchStr,
								state: {
									...nextHistory.state,
									__tempKey: void 0,
									__tempLocation: void 0,
									__TSR_key: void 0,
									key: void 0
								}
							}
						}
					};
					if (nextHistory.unmaskOnReload ?? this.options.unmaskOnReload ?? false) nextHistory.state.__tempKey = this.tempLocationKey;
				}
				nextHistory.state.__hashScrollIntoViewOptions = hashScrollIntoView ?? this.options.defaultHashScrollIntoView ?? true;
				this.shouldViewTransition = viewTransition;
				historyAction = next.replace ? "REPLACE" : "PUSH";
				this.history[historyAction === "REPLACE" ? "replace" : "push"](nextHistory.publicHref, nextHistory.state, { ignoreBlocker });
			}
			this._scroll.next = next.resetScroll ?? true;
			if (!this.history.subscribers.size) this.load(historyAction ? { action: { type: historyAction } } : void 0);
			return this.commitLocationPromise;
		};
		this.buildAndCommitLocation = ({ replace, resetScroll, hashScrollIntoView, viewTransition, ignoreBlocker, href, ...rest } = {}) => {
			if (href) {
				const currentIndex = this.history.location.state.__TSR_index;
				const parsed = parseHref(href, { __TSR_index: replace ? currentIndex : currentIndex + 1 });
				const hrefUrl = new URL(parsed.pathname, this.origin);
				rest.to = executeRewriteInput(this.rewrite, hrefUrl).pathname;
				rest.search = this.options.parseSearch(parsed.search);
				rest.hash = parsed.hash.slice(1);
			}
			const location = this.buildLocation({
				...rest,
				_includeValidateSearch: true
			});
			this.pendingBuiltLocation = location;
			const commitPromise = this.commitLocation({
				...location,
				viewTransition,
				replace,
				resetScroll,
				hashScrollIntoView,
				ignoreBlocker
			});
			queueMicrotask(() => {
				if (this.pendingBuiltLocation === location) this.pendingBuiltLocation = void 0;
			});
			return commitPromise;
		};
		this.navigate = async ({ to, reloadDocument, href, publicHref, ...rest }) => {
			let hrefIsUrl = false;
			if (href) try {
				new URL(`${href}`);
				hrefIsUrl = true;
			} catch {}
			if (hrefIsUrl && !reloadDocument) reloadDocument = true;
			if (reloadDocument) {
				if (to !== void 0 || !href) {
					const location = this.buildLocation({
						to,
						...rest
					});
					href = href ?? location.publicHref;
					publicHref = publicHref ?? location.publicHref;
				}
				const reloadHref = !hrefIsUrl && publicHref ? publicHref : href;
				if (isDangerousProtocol(reloadHref, this.protocolAllowlist)) return;
				if (!rest.ignoreBlocker) {
					const blockers = this.history.getBlockers?.() ?? [];
					for (const blocker of blockers) if (blocker?.blockerFn) {
						if (await blocker.blockerFn({
							currentLocation: this.latestLocation,
							nextLocation: this.latestLocation,
							action: "PUSH"
						})) return;
					}
				}
				if (rest.replace) window.location.replace(reloadHref);
				else window.location.href = reloadHref;
				return;
			}
			return this.buildAndCommitLocation({
				...rest,
				href,
				to,
				_isNavigate: true
			});
		};
		this.beforeLoad = () => {
			this.cancelMatches();
			this.updateLatestLocation();
			const pendingMatches = this.matchRoutes(this.latestLocation);
			const nextCachedMatches = this.stores.cachedMatches.get().filter((d) => !pendingMatches.some((e) => e.id === d.id));
			this.batch(() => {
				this.stores.status.set("pending");
				this.stores.statusCode.set(200);
				this.stores.isLoading.set(true);
				this.stores.location.set(this.latestLocation);
				this.stores.setPending(pendingMatches);
				this.stores.setCached(nextCachedMatches);
			});
		};
		this.load = async (opts) => {
			const historyAction = opts?.action?.type;
			let redirect;
			let notFound;
			let loadPromise;
			const previousLocation = this.stores.resolvedLocation.get() ?? this.stores.location.get();
			loadPromise = new Promise((resolve) => {
				this.startTransition(async () => {
					try {
						this.beforeLoad();
						if (historyAction) locationHistoryActions.set(this.latestLocation, historyAction);
						else locationHistoryActions.delete(this.latestLocation);
						const next = this.latestLocation;
						const locationChangeInfo = getLocationChangeInfo(next, this.stores.resolvedLocation.get());
						if (!this.stores.redirect.get()) this.emit({
							type: "onBeforeNavigate",
							...locationChangeInfo
						});
						this.emit({
							type: "onBeforeLoad",
							...locationChangeInfo
						});
						await loadMatches({
							router: this,
							sync: opts?.sync,
							forceStaleReload: previousLocation.href === next.href,
							matches: this.stores.pendingMatches.get(),
							location: next,
							updateMatch: this.updateMatch,
							onReady: async () => {
								this.startTransition(() => {
									this.startViewTransition(async () => {
										let exitingMatches = null;
										let hookExitingMatches = null;
										let hookEnteringMatches = null;
										let hookStayingMatches = null;
										this.batch(() => {
											const pendingMatches = this.stores.pendingMatches.get();
											const mountPending = pendingMatches.length;
											const currentMatches = this.stores.matches.get();
											exitingMatches = mountPending ? currentMatches.filter((match) => !this.stores.pendingMatchStores.has(match.id)) : null;
											const pendingRouteIds = /* @__PURE__ */ new Set();
											for (const s of this.stores.pendingMatchStores.values()) if (s.routeId) pendingRouteIds.add(s.routeId);
											const activeRouteIds = /* @__PURE__ */ new Set();
											for (const s of this.stores.matchStores.values()) if (s.routeId) activeRouteIds.add(s.routeId);
											hookExitingMatches = mountPending ? currentMatches.filter((match) => !pendingRouteIds.has(match.routeId)) : null;
											hookEnteringMatches = mountPending ? pendingMatches.filter((match) => !activeRouteIds.has(match.routeId)) : null;
											hookStayingMatches = mountPending ? pendingMatches.filter((match) => activeRouteIds.has(match.routeId)) : currentMatches;
											this.stores.isLoading.set(false);
											this.stores.loadedAt.set(Date.now());
											/**
											* When committing new matches, cache any exiting matches that are still usable.
											* Routes that resolved with `status: 'error'` or `status: 'notFound'` are
											* deliberately excluded from `cachedMatches` so that subsequent invalidations
											* or reloads re-run their loaders instead of reusing the failed/not-found data.
											*/
											if (mountPending) {
												this.stores.setMatches(pendingMatches);
												this.stores.setPending([]);
												this.stores.setCached([...this.stores.cachedMatches.get(), ...exitingMatches.filter((d) => d.status !== "error" && d.status !== "notFound" && d.status !== "redirected")]);
												this.clearExpiredCache();
											}
										});
										for (const [matches, hook] of [
											[hookExitingMatches, "onLeave"],
											[hookEnteringMatches, "onEnter"],
											[hookStayingMatches, "onStay"]
										]) {
											if (!matches) continue;
											for (const match of matches) this.looseRoutesById[match.routeId].options[hook]?.(match);
										}
									});
								});
							}
						});
					} catch (err) {
						if (isRedirect(err)) {
							redirect = err;
							this.navigate({
								...redirect.options,
								replace: true,
								ignoreBlocker: true
							});
						} else if (isNotFound(err)) notFound = err;
						const nextStatusCode = redirect ? redirect.status : notFound ? 404 : this.stores.matches.get().some((d) => d.status === "error") ? 500 : 200;
						this.batch(() => {
							this.stores.statusCode.set(nextStatusCode);
							this.stores.redirect.set(redirect);
						});
					}
					if (this.latestLoadPromise === loadPromise) {
						this.commitLocationPromise?.resolve();
						this.latestLoadPromise = void 0;
						this.commitLocationPromise = void 0;
					}
					resolve();
				});
			});
			this.latestLoadPromise = loadPromise;
			await loadPromise;
			while (this.latestLoadPromise && loadPromise !== this.latestLoadPromise) await this.latestLoadPromise;
			let newStatusCode = void 0;
			if (this.hasNotFoundMatch()) newStatusCode = 404;
			else if (this.stores.matches.get().some((d) => d.status === "error")) newStatusCode = 500;
			if (newStatusCode !== void 0) this.stores.statusCode.set(newStatusCode);
		};
		this.startViewTransition = (fn) => {
			const shouldViewTransition = this.shouldViewTransition ?? this.options.defaultViewTransition;
			this.shouldViewTransition = void 0;
			if (shouldViewTransition && typeof document !== "undefined" && "startViewTransition" in document && typeof document.startViewTransition === "function") {
				let startViewTransitionParams;
				if (typeof shouldViewTransition === "object" && this.isViewTransitionTypesSupported) {
					const next = this.latestLocation;
					const prevLocation = this.stores.resolvedLocation.get();
					const resolvedViewTransitionTypes = typeof shouldViewTransition.types === "function" ? shouldViewTransition.types(getLocationChangeInfo(next, prevLocation)) : shouldViewTransition.types;
					if (resolvedViewTransitionTypes === false) {
						fn();
						return;
					}
					startViewTransitionParams = {
						update: fn,
						types: resolvedViewTransitionTypes
					};
				} else startViewTransitionParams = fn;
				document.startViewTransition(startViewTransitionParams);
			} else fn();
		};
		this.updateMatch = (id, updater) => {
			this.startTransition(() => {
				const pendingMatch = this.stores.pendingMatchStores.get(id);
				if (pendingMatch) {
					pendingMatch.set(updater);
					return;
				}
				const activeMatch = this.stores.matchStores.get(id);
				if (activeMatch) {
					activeMatch.set(updater);
					return;
				}
				const cachedMatch = this.stores.cachedMatchStores.get(id);
				if (cachedMatch) {
					const next = updater(cachedMatch.get());
					if (next.status === "redirected") {
						if (this.stores.cachedMatchStores.delete(id)) this.stores.cachedIds.set((prev) => prev.filter((matchId) => matchId !== id));
					} else cachedMatch.set(next);
				}
			});
		};
		this.getMatch = (matchId) => {
			return this.stores.cachedMatchStores.get(matchId)?.get() ?? this.stores.pendingMatchStores.get(matchId)?.get() ?? this.stores.matchStores.get(matchId)?.get();
		};
		this.invalidate = (opts) => {
			const invalidate = (d) => {
				if (opts?.filter?.(d) ?? true) return {
					...d,
					invalid: true,
					...opts?.forcePending || d.status === "error" || d.status === "notFound" ? {
						status: "pending",
						error: void 0
					} : void 0
				};
				return d;
			};
			this.batch(() => {
				this.stores.setMatches(this.stores.matches.get().map(invalidate));
				this.stores.setCached(this.stores.cachedMatches.get().map(invalidate));
				this.stores.setPending(this.stores.pendingMatches.get().map(invalidate));
			});
			this.shouldViewTransition = false;
			return this.load({ sync: opts?.sync });
		};
		this.getParsedLocationHref = (location) => {
			return location.publicHref || "/";
		};
		this.resolveRedirect = (redirect) => {
			const locationHeader = redirect.headers.get("Location");
			if (!redirect.options.href || redirect.options._builtLocation) {
				const location = redirect.options._builtLocation ?? this.buildLocation(redirect.options);
				const href = this.getParsedLocationHref(location);
				redirect.options.href = href;
				redirect.headers.set("Location", href);
			} else if (locationHeader) try {
				const url = new URL(locationHeader);
				if (this.origin && url.origin === this.origin) {
					const href = url.pathname + url.search + url.hash;
					redirect.options.href = href;
					redirect.headers.set("Location", href);
				}
			} catch {}
			if (redirect.options.href && !redirect.options._builtLocation && isDangerousProtocol(redirect.options.href, this.protocolAllowlist)) throw new Error("Redirect blocked: unsafe protocol");
			if (!redirect.headers.get("Location")) redirect.headers.set("Location", redirect.options.href);
			return redirect;
		};
		this.clearCache = (opts) => {
			const filter = opts?.filter;
			if (filter !== void 0) this.stores.setCached(this.stores.cachedMatches.get().filter((m) => !filter(m)));
			else this.stores.setCached([]);
		};
		this.clearExpiredCache = () => {
			const now = Date.now();
			const filter = (d) => {
				const route = this.looseRoutesById[d.routeId];
				if (!route.options.loader) return true;
				const gcTime = (d.preload ? route.options.preloadGcTime ?? this.options.defaultPreloadGcTime : route.options.gcTime ?? this.options.defaultGcTime) ?? 300 * 1e3;
				if (d.status === "error") return true;
				return now - d.updatedAt >= gcTime;
			};
			this.clearCache({ filter });
		};
		this.loadRouteChunk = loadRouteChunk;
		this.preloadRoute = async (opts) => {
			const next = opts._builtLocation ?? this.buildLocation(opts);
			let matches = this.matchRoutes(next, {
				throwOnError: true,
				preload: true,
				dest: opts
			});
			const activeMatchIds = /* @__PURE__ */ new Set([...this.stores.matchesId.get(), ...this.stores.pendingIds.get()]);
			const loadedMatchIds = /* @__PURE__ */ new Set([...activeMatchIds, ...this.stores.cachedIds.get()]);
			const matchesToCache = matches.filter((match) => !loadedMatchIds.has(match.id));
			if (matchesToCache.length) {
				const cachedMatches = this.stores.cachedMatches.get();
				this.stores.setCached([...cachedMatches, ...matchesToCache]);
			}
			try {
				matches = await loadMatches({
					router: this,
					matches,
					location: next,
					preload: true,
					updateMatch: (id, updater) => {
						if (activeMatchIds.has(id)) matches = matches.map((d) => d.id === id ? updater(d) : d);
						else this.updateMatch(id, updater);
					}
				});
				return matches;
			} catch (err) {
				if (isRedirect(err)) {
					if (err.options.reloadDocument) return;
					return await this.preloadRoute({
						...err.options,
						_fromLocation: next
					});
				}
				if (!isNotFound(err)) console.error(err);
				return;
			}
		};
		this.matchRoute = (location, opts) => {
			const matchLocation = {
				...location,
				to: location.to ? this.resolvePathWithBase(location.from || "", location.to) : void 0,
				params: location.params || {},
				leaveParams: true
			};
			const next = this.buildLocation(matchLocation);
			if (opts?.pending && this.stores.status.get() !== "pending") return false;
			const baseLocation = (opts?.pending === void 0 ? !this.stores.isLoading.get() : opts.pending) ? this.latestLocation : this.stores.resolvedLocation.get() || this.stores.location.get();
			const match = findSingleMatch(next.pathname, opts?.caseSensitive ?? false, opts?.fuzzy ?? false, baseLocation.pathname, this.processedTree);
			if (!match) return false;
			if (location.params) {
				if (!deepEqual(match.rawParams, location.params, { partial: true })) return false;
			}
			if (opts?.includeSearch ?? true) return deepEqual(baseLocation.search, next.search, { partial: true }) ? match.rawParams : false;
			return match.rawParams;
		};
		this.hasNotFoundMatch = () => {
			return this.stores.matches.get().some((d) => d.status === "notFound" || d.globalNotFound);
		};
		this.getStoreConfig = getStoreConfig;
		this.update({
			defaultPreloadDelay: 50,
			defaultPendingMs: 1e3,
			defaultPendingMinMs: 500,
			context: void 0,
			...options,
			caseSensitive: options.caseSensitive ?? false,
			notFoundMode: options.notFoundMode ?? "fuzzy",
			stringifySearch: options.stringifySearch ?? defaultStringifySearch,
			parseSearch: options.parseSearch ?? defaultParseSearch,
			protocolAllowlist: options.protocolAllowlist ?? DEFAULT_PROTOCOL_ALLOWLIST
		});
		if (typeof document !== "undefined") self.__TSR_ROUTER__ = this;
	}
	isShell() {
		return !!this.options.isShell;
	}
	isPrerendering() {
		return !!this.options.isPrerendering;
	}
	get state() {
		return this.stores.__store.get();
	}
	setRoutes({ routesById, routesByPath, processedTree }) {
		this.routesById = routesById;
		this.routesByPath = routesByPath;
		this.processedTree = processedTree;
		const notFoundRoute = this.options.notFoundRoute;
		if (notFoundRoute) {
			notFoundRoute.init({ originalIndex: 99999999999 });
			this.routesById[notFoundRoute.id] = notFoundRoute;
		}
	}
	getRouteBranch(route) {
		let branch = this.routeBranchCache.get(route);
		if (!branch) {
			branch = buildRouteBranch(route);
			this.routeBranchCache.set(route, branch);
		}
		return branch;
	}
	get looseRoutesById() {
		return this.routesById;
	}
	getParentContext(parentMatch) {
		return !parentMatch?.id ? this.options.context ?? void 0 : parentMatch.context ?? this.options.context ?? void 0;
	}
	matchRoutesInternal(next, opts) {
		const matchedRoutesResult = this.getMatchedRoutes(next.pathname);
		const { foundRoute, routeParams } = matchedRoutesResult;
		let { matchedRoutes } = matchedRoutesResult;
		let isGlobalNotFound = false;
		if (foundRoute ? foundRoute.path !== "/" && routeParams["**"] : trimPathRight(next.pathname)) if (this.options.notFoundRoute) matchedRoutes = [...matchedRoutes, this.options.notFoundRoute];
		else isGlobalNotFound = true;
		const globalNotFoundRouteId = isGlobalNotFound ? findGlobalNotFoundRouteId(this.options.notFoundMode, matchedRoutes) : void 0;
		const matches = new Array(matchedRoutes.length);
		const previousActiveMatchesByRouteId = /* @__PURE__ */ new Map();
		for (const store of this.stores.matchStores.values()) if (store.routeId) previousActiveMatchesByRouteId.set(store.routeId, store.get());
		for (let index = 0; index < matchedRoutes.length; index++) {
			const route = matchedRoutes[index];
			const parentMatch = matches[index - 1];
			let preMatchSearch;
			let strictMatchSearch;
			let searchError;
			{
				const parentSearch = parentMatch?.search ?? next.search;
				const parentStrictSearch = parentMatch?._strictSearch ?? void 0;
				try {
					const strictSearch = validateSearch(route.options.validateSearch, { ...parentSearch }) ?? void 0;
					preMatchSearch = {
						...parentSearch,
						...strictSearch
					};
					strictMatchSearch = {
						...parentStrictSearch,
						...strictSearch
					};
					searchError = void 0;
				} catch (err) {
					let searchParamError = err;
					if (!(err instanceof SearchParamError)) searchParamError = new SearchParamError(err.message, { cause: err });
					if (opts?.throwOnError) throw searchParamError;
					preMatchSearch = parentSearch;
					strictMatchSearch = {};
					searchError = searchParamError;
				}
			}
			const loaderDeps = route.options.loaderDeps?.({ search: preMatchSearch }) ?? "";
			const loaderDepsHash = loaderDeps ? JSON.stringify(loaderDeps) : "";
			const { interpolatedPath, usedParams } = interpolatePath({
				path: route.fullPath,
				params: routeParams,
				decoder: this.pathParamsDecoder,
				server: this.isServer
			});
			const matchId = route.id + interpolatedPath + loaderDepsHash;
			const existingMatch = this.getMatch(matchId);
			const previousMatch = previousActiveMatchesByRouteId.get(route.id);
			const strictParams = existingMatch?._strictParams ?? usedParams;
			let paramsError = void 0;
			if (!existingMatch) try {
				extractStrictParams(route, strictParams);
			} catch (err) {
				if (isNotFound(err) || isRedirect(err)) paramsError = err;
				else paramsError = new PathParamError(err.message, { cause: err });
				if (opts?.throwOnError) throw paramsError;
			}
			Object.assign(routeParams, strictParams);
			const cause = previousMatch ? "stay" : "enter";
			let match;
			if (existingMatch) match = {
				...existingMatch,
				cause,
				params: previousMatch?.params ?? routeParams,
				_strictParams: strictParams,
				search: previousMatch ? nullReplaceEqualDeep(previousMatch.search, preMatchSearch) : nullReplaceEqualDeep(existingMatch.search, preMatchSearch),
				_strictSearch: strictMatchSearch
			};
			else {
				const status = route.options.loader || route.options.beforeLoad || route.lazyFn || routeNeedsPreload(route) ? "pending" : "success";
				match = {
					id: matchId,
					ssr: route.options.ssr,
					index,
					routeId: route.id,
					params: previousMatch?.params ?? routeParams,
					_strictParams: strictParams,
					pathname: interpolatedPath,
					updatedAt: Date.now(),
					search: previousMatch ? nullReplaceEqualDeep(previousMatch.search, preMatchSearch) : preMatchSearch,
					_strictSearch: strictMatchSearch,
					searchError: void 0,
					status,
					isFetching: false,
					error: void 0,
					paramsError,
					__routeContext: void 0,
					_nonReactive: { loadPromise: createControlledPromise() },
					__beforeLoadContext: void 0,
					context: {},
					abortController: new AbortController(),
					fetchCount: 0,
					cause,
					loaderDeps: previousMatch ? replaceEqualDeep$1(previousMatch.loaderDeps, loaderDeps) : loaderDeps,
					invalid: false,
					preload: false,
					links: void 0,
					scripts: void 0,
					headScripts: void 0,
					meta: void 0,
					staticData: route.options.staticData || {},
					fullPath: route.fullPath
				};
			}
			if (!opts?.preload) match.globalNotFound = globalNotFoundRouteId === route.id;
			match.searchError = searchError;
			const parentContext = this.getParentContext(parentMatch);
			match.context = {
				...parentContext,
				...match.__routeContext,
				...match.__beforeLoadContext
			};
			matches[index] = match;
		}
		for (let index = 0; index < matches.length; index++) {
			const match = matches[index];
			const route = this.looseRoutesById[match.routeId];
			const existingMatch = this.getMatch(match.id);
			const previousMatch = previousActiveMatchesByRouteId.get(match.routeId);
			match.params = previousMatch ? nullReplaceEqualDeep(previousMatch.params, routeParams) : routeParams;
			if (!existingMatch) {
				const parentMatch = matches[index - 1];
				const parentContext = this.getParentContext(parentMatch);
				if (route.options.context) {
					const contextFnContext = {
						deps: match.loaderDeps,
						params: match.params,
						context: parentContext ?? {},
						location: next,
						navigate: (opts) => this.navigate({
							...opts,
							_fromLocation: next
						}),
						buildLocation: this.buildLocation,
						cause: match.cause,
						abortController: match.abortController,
						preload: !!match.preload,
						matches,
						routeId: route.id
					};
					match.__routeContext = route.options.context(contextFnContext) ?? void 0;
				}
				match.context = {
					...parentContext,
					...match.__routeContext,
					...match.__beforeLoadContext
				};
			}
		}
		return matches;
	}
	/**
	* Lightweight route matching for buildLocation.
	* Only computes fullPath, accumulated search, and params - skipping expensive
	* operations like AbortController, ControlledPromise, loaderDeps, and full match objects.
	*/
	matchRoutesLightweight(location) {
		const lastStateMatchId = last(this.stores.matchesId.get());
		const cached = this.lightweightCache.get(location);
		if (cached && cached[0] === lastStateMatchId) return cached[1];
		const { matchedRoutes, routeParams } = this.getMatchedRoutes(location.pathname);
		const lastRoute = last(matchedRoutes);
		const accumulatedSearch = { ...location.search };
		for (const route of matchedRoutes) try {
			Object.assign(accumulatedSearch, validateSearch(route.options.validateSearch, accumulatedSearch));
		} catch {}
		const lastStateMatch = lastStateMatchId && this.stores.matchStores.get(lastStateMatchId)?.get();
		const canReuseParams = lastStateMatch && lastStateMatch.routeId === lastRoute.id && lastStateMatch.pathname === location.pathname;
		let params;
		if (canReuseParams) params = lastStateMatch.params;
		else {
			const strictParams = Object.assign(Object.create(null), routeParams);
			for (const route of matchedRoutes) try {
				extractStrictParams(route, strictParams);
			} catch {}
			params = strictParams;
		}
		const result = {
			matchedRoutes,
			fullPath: lastRoute.fullPath,
			search: accumulatedSearch,
			params
		};
		this.lightweightCache.set(location, [lastStateMatchId, result]);
		return result;
	}
};
/** Error thrown when search parameter validation fails. */
var SearchParamError = class extends Error {};
/** Error thrown when path parameter parsing/validation fails. */
var PathParamError = class extends Error {};
/** Create an initial RouterState from a parsed location. */
function getInitialRouterState(location) {
	return {
		loadedAt: 0,
		isLoading: false,
		isTransitioning: false,
		status: "idle",
		resolvedLocation: void 0,
		location,
		matches: [],
		statusCode: 200
	};
}
function validateSearch(validateSearch, input) {
	if (validateSearch == null) return {};
	if ("~standard" in validateSearch) {
		const result = validateSearch["~standard"].validate(input);
		if (result instanceof Promise) throw new SearchParamError("Async validation not supported");
		if (result.issues) throw new SearchParamError(JSON.stringify(result.issues, void 0, 2), { cause: result });
		return result.value;
	}
	if ("parse" in validateSearch) return validateSearch.parse(input);
	if (typeof validateSearch === "function") return validateSearch(input);
	return {};
}
/**
* Build the matched route chain and extract params for a pathname.
* Falls back to the root route if no specific route is found.
*/
function getMatchedRoutes({ pathname, routesById, processedTree }) {
	const routeParams = Object.create(null);
	const trimmedPath = trimPathRight(pathname);
	let foundRoute = void 0;
	const match = findRouteMatch(trimmedPath, processedTree, true);
	if (match) {
		foundRoute = match.route;
		Object.assign(routeParams, match.rawParams);
	}
	return {
		matchedRoutes: match?.branch || [routesById["__root__"]],
		routeParams,
		foundRoute
	};
}
/**
* TODO: once caches are persisted across requests on the server,
* we can cache the built middleware chain using `last(destRoutes)` as the key
*/
function applySearchMiddleware({ search, dest, destRoutes, _includeValidateSearch }) {
	return buildMiddlewareChain(destRoutes)(search, dest, _includeValidateSearch ?? false);
}
function buildMiddlewareChain(destRoutes) {
	let dest;
	let includeValidateSearch;
	const middlewares = [];
	for (const route of destRoutes) {
		const routeOptions = route.options;
		if ("search" in routeOptions) {
			if (routeOptions.search?.middlewares) middlewares.push(...routeOptions.search.middlewares);
		} else if (routeOptions.preSearchFilters || routeOptions.postSearchFilters) {
			const legacyMiddleware = ({ search, next }) => {
				const result = next(routeOptions.preSearchFilters ? routeOptions.preSearchFilters.reduce((prev, next) => next(prev), search) : search);
				return routeOptions.postSearchFilters ? routeOptions.postSearchFilters.reduce((prev, next) => next(prev), result) : result;
			};
			middlewares.push(legacyMiddleware);
		}
		const routeValidateSearch = routeOptions.validateSearch;
		if (routeValidateSearch) {
			const validate = ({ search, next, meta }) => {
				const result = next(search);
				if (includeValidateSearch) try {
					const validated = validateSearch(routeValidateSearch, result);
					if (meta && validated) {
						for (const key in validated) if (!(key in result)) (meta.defaulted ||= /* @__PURE__ */ new Map()).set(key, validated[key]);
					}
					return {
						...result,
						...validated
					};
				} catch {}
				return result;
			};
			middlewares.push(validate);
		}
	}
	const applyNext = (index, currentSearch, meta) => {
		if (index >= middlewares.length) {
			if (!dest.search) return {};
			if (dest.search === true) return currentSearch;
			const result = functionalUpdate$1(dest.search, currentSearch);
			if (meta) meta.explicit = result;
			return result;
		}
		const next = (newSearch, collectMeta) => {
			if (collectMeta) {
				const nextMeta = meta || {};
				return {
					search: applyNext(index + 1, newSearch, nextMeta),
					meta: nextMeta
				};
			}
			return applyNext(index + 1, newSearch, meta);
		};
		return middlewares[index]({
			search: currentSearch,
			next,
			meta
		});
	};
	return function middleware(search, nextDest, _includeValidateSearch) {
		dest = nextDest;
		includeValidateSearch = _includeValidateSearch;
		return applyNext(0, search);
	};
}
function findGlobalNotFoundRouteId(notFoundMode, routes) {
	if (notFoundMode !== "root") for (let i = routes.length - 1; i >= 0; i--) {
		const route = routes[i];
		if (route.children) return route.id;
	}
	return rootRouteId;
}
function extractStrictParams(route, accumulatedParams) {
	const parseParams = route.options.params?.parse ?? route.options.parseParams;
	if (parseParams) {
		const result = parseParams(accumulatedParams);
		if (result === false) throw new Error("Route params.parse returned false for a matched route");
		Object.assign(accumulatedParams, result);
	}
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/scroll-restoration.js
function getSafeSessionStorage() {
	try {
		return sessionStorage;
	} catch {
		return;
	}
}
var storageKey = "tsr-scroll-restoration-v1_3";
var safeSessionStorage = getSafeSessionStorage();
function createScrollRestorationCache() {
	try {
		return JSON.parse(safeSessionStorage?.getItem("tsr-scroll-restoration-v1_3") || "{}");
	} catch {
		return {};
	}
}
function persistScrollRestorationCache() {
	try {
		safeSessionStorage?.setItem(storageKey, JSON.stringify(scrollRestorationCache));
	} catch {}
}
var scrollRestorationCache = /* @__PURE__ */ createScrollRestorationCache();
var scrollRestorationIdAttribute = "data-scroll-restoration-id";
/**
* The default `getKey` function for `useScrollRestoration`.
* It returns the `key` from the location state or the `href` of the location.
*
* The `location.href` is used as a fallback to support the use case where the location state is not available like the initial render.
*/
var defaultGetScrollRestorationKey = (location) => {
	return location.state.__TSR_key || location.href;
};
function getScrollRestorationSelector(element) {
	const attrId = element.getAttribute(scrollRestorationIdAttribute);
	if (attrId) return `[${scrollRestorationIdAttribute}="${attrId}"]`;
	let selector = "";
	let el = element;
	let parent;
	while (parent = el.parentNode) {
		let index = 1;
		let sibling = el;
		while (sibling = sibling.previousElementSibling) index++;
		const part = `${el.localName}:nth-child(${index})`;
		selector = selector ? `${part} > ${selector}` : part;
		el = parent;
	}
	return selector;
}
var ignoreScroll = false;
var windowScrollTarget = "window";
function getElement(selector) {
	try {
		return typeof selector === "function" ? selector() : document.querySelector(selector);
	} catch {}
}
function getScrollToTopElements(scrollToTopSelectors) {
	const elements = [];
	for (const selector of scrollToTopSelectors) {
		if (selector === windowScrollTarget) continue;
		const element = getElement(selector);
		if (element) elements.push(element);
	}
	return elements;
}
function setupScrollRestoration(router, force) {
	const shouldSetupScrollRestoration = force ?? router.options.scrollRestoration;
	const scroll = router._scroll;
	if (shouldSetupScrollRestoration) scroll.restoring = true;
	const getKey = router.options.getScrollRestorationKey || defaultGetScrollRestorationKey;
	const trackedScrollEntries = /* @__PURE__ */ new Map();
	const setTrackedScrollEntry = (target, scrollX, scrollY) => {
		const entry = trackedScrollEntries.get(target) || {};
		entry.scrollX = scrollX;
		entry.scrollY = scrollY;
		trackedScrollEntries.set(target, entry);
	};
	const onScroll = (event) => {
		if (ignoreScroll || !scroll.restoring) return;
		if (event.target === document) setTrackedScrollEntry(windowScrollTarget, scrollX, scrollY);
		else {
			const target = event.target;
			setTrackedScrollEntry(target, target.scrollLeft, target.scrollTop);
		}
	};
	const snapshotCurrentScrollTargets = (restoreKey) => {
		if (!scroll.restoring) return;
		const keyEntry = scrollRestorationCache[restoreKey] ||= {};
		for (const [target, position] of trackedScrollEntries) if (target === windowScrollTarget) keyEntry[windowScrollTarget] = position;
		else if (target.isConnected) keyEntry[getScrollRestorationSelector(target)] = position;
	};
	if (shouldSetupScrollRestoration && !scroll.restoration) {
		scroll.restoration = true;
		ignoreScroll = false;
		history.scrollRestoration = "manual";
		document.addEventListener("scroll", onScroll, true);
		router.subscribe("onBeforeLoad", (event) => {
			if (event.fromLocation) snapshotCurrentScrollTargets(getKey(event.fromLocation));
			trackedScrollEntries.clear();
		});
		addEventListener("pagehide", () => {
			snapshotCurrentScrollTargets(getKey(router.stores.resolvedLocation.get() ?? router.stores.location.get()));
			persistScrollRestorationCache();
		});
	}
	if (scroll.reset) return;
	scroll.reset = true;
	router.subscribe("onRendered", (event) => {
		const behavior = router.options.scrollRestorationBehavior;
		const scrollToTopSelectors = router.options.scrollToTopSelectors;
		const shouldResetScroll = scroll.next;
		let scrollToTopElements;
		trackedScrollEntries.clear();
		if (!shouldResetScroll) scroll.next = true;
		if (typeof router.options.scrollRestoration === "function" && !router.options.scrollRestoration({ location: router.latestLocation })) return;
		const cacheKey = getKey(event.toLocation);
		const fromCacheKey = event.fromLocation && getKey(event.fromLocation);
		if (scroll.restoring && fromCacheKey && fromCacheKey !== cacheKey) {
			const fromElementEntries = scrollRestorationCache[fromCacheKey];
			if (fromElementEntries) {
				let toElementEntries = scrollRestorationCache[cacheKey];
				for (const elementSelector in fromElementEntries) {
					if (elementSelector === windowScrollTarget) {
						if (shouldResetScroll) continue;
					} else {
						const element = getElement(elementSelector);
						if (!element) continue;
						if (shouldResetScroll && scrollToTopSelectors) {
							scrollToTopElements ??= getScrollToTopElements(scrollToTopSelectors);
							if (scrollToTopElements.includes(element)) continue;
						}
					}
					if (!toElementEntries) toElementEntries = scrollRestorationCache[cacheKey] = {};
					toElementEntries[elementSelector] ??= fromElementEntries[elementSelector];
				}
			}
		}
		ignoreScroll = true;
		try {
			const hash = event.toLocation.hash;
			const hashScrollIntoViewOptions = event.toLocation.state.__hashScrollIntoViewOptions ?? true;
			let windowRestored = false;
			if (shouldResetScroll) {
				const action = locationHistoryActions.get(event.toLocation);
				const skipWindowRestore = hash && hashScrollIntoViewOptions && (action === "PUSH" || action === "REPLACE");
				const elementEntries = scroll.restoring ? scrollRestorationCache[cacheKey] : void 0;
				if (elementEntries) for (const elementSelector in elementEntries) {
					const { scrollX, scrollY } = elementEntries[elementSelector];
					if (elementSelector === windowScrollTarget) {
						if (skipWindowRestore) continue;
						scrollTo({
							top: scrollY,
							left: scrollX,
							behavior
						});
						windowRestored = true;
					} else {
						const element = getElement(elementSelector);
						if (element) {
							element.scrollLeft = scrollX;
							element.scrollTop = scrollY;
						}
					}
				}
				if (!windowRestored && !hash) {
					const scrollOptions = {
						top: 0,
						left: 0,
						behavior
					};
					scrollTo(scrollOptions);
					if (scrollToTopSelectors) {
						scrollToTopElements ??= getScrollToTopElements(scrollToTopSelectors);
						for (const element of scrollToTopElements) element.scrollTo(scrollOptions);
					}
				}
			}
			if (!windowRestored && hash && hashScrollIntoViewOptions) document.getElementById(hash)?.scrollIntoView(hashScrollIntoViewOptions);
		} finally {
			ignoreScroll = false;
		}
	});
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/defer.js
/**
* Well-known symbol used by {@link defer} to tag a promise with
* its deferred state. Consumers can read `promise[TSR_DEFERRED_PROMISE]`
* to access `status`, `data`, or `error`.
*/
var TSR_DEFERRED_PROMISE = Symbol.for("TSR_DEFERRED_PROMISE");
/**
* Wrap a promise with a deferred state for use with `<Await>` and `useAwaited`.
*
* The returned promise is augmented with internal state (status/data/error)
* so UI can read progress or suspend until it settles.
*
* @param _promise The promise to wrap.
* @param options Optional config. Provide `serializeError` to customize how
* errors are serialized for transfer.
* @returns The same promise with attached deferred metadata.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/deferFunction
*/
function defer(_promise, options) {
	const promise = _promise;
	if (promise[TSR_DEFERRED_PROMISE]) return promise;
	promise[TSR_DEFERRED_PROMISE] = { status: "pending" };
	promise.then((data) => {
		promise[TSR_DEFERRED_PROMISE].status = "success";
		promise[TSR_DEFERRED_PROMISE].data = data;
	}).catch((error) => {
		promise[TSR_DEFERRED_PROMISE].status = "error";
		promise[TSR_DEFERRED_PROMISE].error = {
			data: (options?.serializeError ?? defaultSerializeError)(error),
			__isServerError: true
		};
	});
	return promise;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/link.js
var preloadWarning = "Error preloading route! ☝️";
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/manifest.js
function getAssetCrossOrigin(assetCrossOrigin, kind) {
	if (!assetCrossOrigin) return;
	if (typeof assetCrossOrigin === "string") return assetCrossOrigin;
	return assetCrossOrigin[kind];
}
function getManifestScriptFormat(manifest) {
	return manifest?.scriptFormat ?? "module";
}
function getScriptPreloadAttrs(manifest, link, assetCrossOrigin) {
	const preloadLink = resolveManifestAssetLink(link);
	const crossOrigin = getAssetCrossOrigin(assetCrossOrigin, "script") ?? preloadLink.crossOrigin;
	return {
		...getManifestScriptFormat(manifest) === "iife" ? {
			rel: "preload",
			as: "script"
		} : { rel: "modulepreload" },
		href: preloadLink.href,
		...crossOrigin ? { crossOrigin } : {}
	};
}
function resolveManifestAssetLink(link) {
	if (typeof link === "string") return {
		href: link,
		crossOrigin: void 0
	};
	return link;
}
function appendUniqueUserTags(target, tags) {
	if (tags.length === 0) return;
	if (tags.length === 1) {
		target.push(tags[0]);
		return;
	}
	const seen = /* @__PURE__ */ new Set();
	for (const tag of tags) {
		const key = JSON.stringify(tag);
		if (seen.has(key)) continue;
		seen.add(key);
		target.push(tag);
	}
}
function resolveManifestCssLink(link) {
	if (typeof link === "string") return {
		href: link,
		crossOrigin: void 0
	};
	return link;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/route.js
var BaseRoute = class {
	get to() {
		return this._to;
	}
	get id() {
		return this._id;
	}
	get path() {
		return this._path;
	}
	get fullPath() {
		return this._fullPath;
	}
	constructor(options) {
		this.init = (opts) => {
			this.originalIndex = opts.originalIndex;
			const options = this.options;
			const isRoot = !options?.path && !options?.id;
			this.parentRoute = this.options.getParentRoute?.();
			if (isRoot) this._path = rootRouteId;
			else if (!this.parentRoute) invariant();
			let path = isRoot ? rootRouteId : options?.path;
			if (path && path !== "/") path = trimPathLeft(path);
			const customId = options?.id || path;
			let id = isRoot ? rootRouteId : joinPaths([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, customId]);
			if (path === "__root__") path = "/";
			if (id !== "__root__") id = joinPaths(["/", id]);
			const fullPath = id === "__root__" ? "/" : joinPaths([this.parentRoute.fullPath, path]);
			this._path = path;
			this._id = id;
			this._fullPath = fullPath;
			this._to = trimPathRight(fullPath);
		};
		this.addChildren = (children) => {
			return this._addFileChildren(children);
		};
		this._addFileChildren = (children) => {
			if (Array.isArray(children)) this.children = children;
			if (typeof children === "object" && children !== null) this.children = Object.values(children);
			return this;
		};
		this._addFileTypes = () => {
			return this;
		};
		this.updateLoader = (options) => {
			Object.assign(this.options, options);
			return this;
		};
		this.update = (options) => {
			Object.assign(this.options, options);
			return this;
		};
		this.lazy = (lazyFn) => {
			this.lazyFn = lazyFn;
			return this;
		};
		this.redirect = (opts) => redirect({
			from: this.fullPath,
			...opts
		});
		this.options = options || {};
		this.isRoot = !options?.getParentRoute;
		if (options?.id && options?.path) throw new Error(`Route cannot have both an 'id' and a 'path' option.`);
	}
};
var BaseRootRoute = class extends BaseRoute {
	constructor(options) {
		super(options);
	}
};
//#endregion
//#region node_modules/seroval/dist/esm/production/index.mjs
var M = ((i) => (i[i.AggregateError = 1] = "AggregateError", i[i.ArrowFunction = 2] = "ArrowFunction", i[i.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", i[i.ObjectAssign = 8] = "ObjectAssign", i[i.BigIntTypedArray = 16] = "BigIntTypedArray", i[i.RegExp = 32] = "RegExp", i))(M || {});
var v$1 = Symbol.asyncIterator, pr = Symbol.hasInstance, R = Symbol.isConcatSpreadable, C = Symbol.iterator, dr = Symbol.match, gr = Symbol.matchAll, yr = Symbol.replace, Nr = Symbol.search, br = Symbol.species, vr = Symbol.split, Cr = Symbol.toPrimitive, P$1 = Symbol.toStringTag, Ar = Symbol.unscopables, ve = {
	[v$1]: 0,
	[pr]: 1,
	[R]: 2,
	[C]: 3,
	[dr]: 4,
	[gr]: 5,
	[yr]: 6,
	[Nr]: 7,
	[br]: 8,
	[vr]: 9,
	[Cr]: 10,
	[P$1]: 11,
	[Ar]: 12
}, nt = {
	0: v$1,
	1: pr,
	2: R,
	3: C,
	4: dr,
	5: gr,
	6: yr,
	7: Nr,
	8: br,
	9: vr,
	10: Cr,
	11: P$1,
	12: Ar
}, o$1 = void 0, at = {
	2: !0,
	3: !1,
	1: o$1,
	0: null,
	4: -0,
	5: Number.POSITIVE_INFINITY,
	6: Number.NEGATIVE_INFINITY,
	7: NaN
};
var Ce = {
	0: "Error",
	1: "EvalError",
	2: "RangeError",
	3: "ReferenceError",
	4: "SyntaxError",
	5: "TypeError",
	6: "URIError"
}, st = {
	0: Error,
	1: EvalError,
	2: RangeError,
	3: ReferenceError,
	4: SyntaxError,
	5: TypeError,
	6: URIError
};
function c$1(e, r, t, n, a, s, i, u, l, g, S, d) {
	return {
		t: e,
		i: r,
		s: t,
		c: n,
		m: a,
		p: s,
		e: i,
		a: u,
		f: l,
		b: g,
		o: S,
		l: d
	};
}
function B$1(e) {
	return c$1(2, o$1, e, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
var H = B$1(2), J = B$1(3), Ae = B$1(1), Ee = B$1(0), it = B$1(4), ut = B$1(5), lt = B$1(6), ct = B$1(7);
function mn(e) {
	switch (e) {
		case "\"": return "\\\"";
		case "\\": return "\\\\";
		case `
`: return "\\n";
		case "\r": return "\\r";
		case "\b": return "\\b";
		case "	": return "\\t";
		case "\f": return "\\f";
		case "<": return "\\x3C";
		case "\u2028": return "\\u2028";
		case "\u2029": return "\\u2029";
		default: return o$1;
	}
}
function y$1(e) {
	let r = "", t = 0, n;
	for (let a = 0, s = e.length; a < s; a++) n = mn(e[a]), n && (r += e.slice(t, a) + n, t = a + 1);
	return t === 0 ? r = e : r += e.slice(t), r;
}
function pn(e) {
	switch (e) {
		case "\\\\": return "\\";
		case "\\\"": return "\"";
		case "\\n": return `
`;
		case "\\r": return "\r";
		case "\\b": return "\b";
		case "\\t": return "	";
		case "\\f": return "\f";
		case "\\x3C": return "<";
		case "\\u2028": return "\u2028";
		case "\\u2029": return "\u2029";
		default: return e;
	}
}
function D$1(e) {
	return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, pn);
}
var L$1 = "__SEROVAL_REFS__";
var Er = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map();
function Ir(e) {
	return Er.has(e);
}
function yn(e) {
	return U.has(e);
}
function ft(e) {
	if (Ir(e)) return Er.get(e);
	throw new Re(e);
}
function St(e) {
	if (yn(e)) return U.get(e);
	throw new Pe(e);
}
typeof globalThis != "undefined" ? Object.defineProperty(globalThis, L$1, {
	value: U,
	configurable: !0,
	writable: !1,
	enumerable: !1
}) : typeof window != "undefined" ? Object.defineProperty(window, L$1, {
	value: U,
	configurable: !0,
	writable: !1,
	enumerable: !1
}) : typeof self != "undefined" ? Object.defineProperty(self, L$1, {
	value: U,
	configurable: !0,
	writable: !1,
	enumerable: !1
}) : typeof global != "undefined" && Object.defineProperty(global, L$1, {
	value: U,
	configurable: !0,
	writable: !1,
	enumerable: !1
});
function xe(e) {
	return e instanceof EvalError ? 1 : e instanceof RangeError ? 2 : e instanceof ReferenceError ? 3 : e instanceof SyntaxError ? 4 : e instanceof TypeError ? 5 : e instanceof URIError ? 6 : 0;
}
function Nn(e) {
	let r = Ce[xe(e)];
	return e.name !== r ? { name: e.name } : e.constructor.name !== r ? { name: e.constructor.name } : {};
}
function Z(e, r) {
	let t = Nn(e), n = Object.getOwnPropertyNames(e);
	for (let a = 0, s = n.length, i; a < s; a++) i = n[a], i !== "name" && i !== "message" && (i === "stack" ? r & 4 && (t = t || {}, t[i] = e[i]) : (t = t || {}, t[i] = e[i]));
	return t;
}
function Te(e) {
	return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : Object.isExtensible(e) ? 0 : 1;
}
function Oe(e) {
	switch (e) {
		case Number.POSITIVE_INFINITY: return ut;
		case Number.NEGATIVE_INFINITY: return lt;
	}
	return e !== e ? ct : Object.is(e, -0) ? it : c$1(0, o$1, e, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function $$1(e) {
	return c$1(1, o$1, y$1(e), o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function we(e) {
	return c$1(3, o$1, "" + e, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function pt(e) {
	return c$1(4, e, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function he(e, r) {
	let t = r.valueOf();
	return c$1(5, e, t !== t ? "" : r.toISOString(), o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function ze(e, r) {
	return c$1(6, e, o$1, y$1(r.source), r.flags, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function dt(e, r) {
	return c$1(17, e, ve[r], o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function gt(e, r) {
	return c$1(18, e, y$1(ft(r)), o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function ce(e, r, t) {
	return c$1(25, e, t, y$1(r), o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function _e(e, r, t) {
	return c$1(9, e, o$1, o$1, o$1, o$1, o$1, t, o$1, o$1, Te(r), o$1);
}
function ke(e, r) {
	return c$1(21, e, o$1, o$1, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1);
}
function De(e, r, t) {
	return c$1(15, e, o$1, r.constructor.name, o$1, o$1, o$1, o$1, t, r.byteOffset, o$1, r.length);
}
function Fe(e, r, t) {
	return c$1(16, e, o$1, r.constructor.name, o$1, o$1, o$1, o$1, t, r.byteOffset, o$1, r.byteLength);
}
function Be(e, r, t) {
	return c$1(20, e, o$1, o$1, o$1, o$1, o$1, o$1, t, r.byteOffset, o$1, r.byteLength);
}
function Ve(e, r, t) {
	return c$1(13, e, xe(r), o$1, y$1(r.message), t, o$1, o$1, o$1, o$1, o$1, o$1);
}
function Me(e, r, t) {
	return c$1(14, e, xe(r), o$1, y$1(r.message), t, o$1, o$1, o$1, o$1, o$1, o$1);
}
function Le(e, r) {
	return c$1(7, e, o$1, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1, o$1);
}
function Ue(e, r) {
	return c$1(28, o$1, o$1, o$1, o$1, o$1, o$1, [e, r], o$1, o$1, o$1, o$1);
}
function je(e, r) {
	return c$1(30, o$1, o$1, o$1, o$1, o$1, o$1, [e, r], o$1, o$1, o$1, o$1);
}
function Ye(e, r, t) {
	return c$1(31, e, o$1, o$1, o$1, o$1, o$1, t, r, o$1, o$1, o$1);
}
function qe(e, r) {
	return c$1(32, e, o$1, o$1, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1);
}
function We(e, r) {
	return c$1(33, e, o$1, o$1, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1);
}
function Ge(e, r) {
	return c$1(34, e, o$1, o$1, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1);
}
function Ke(e, r, t, n) {
	return c$1(35, e, t, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1, n);
}
var { toString: bs } = Object.prototype;
var bn = {
	parsing: 1,
	serialization: 2,
	deserialization: 3
};
function vn(e) {
	return `Seroval Error (step: ${bn[e]})`;
}
var Cn = (e, r) => vn(e), fe$1 = class extends Error {
	constructor(t, n) {
		super(Cn(t, n));
		this.cause = n;
	}
}, z = class extends fe$1 {
	constructor(r) {
		super("parsing", r);
	}
}, He = class extends fe$1 {
	constructor(r) {
		super("deserialization", r);
	}
};
function _(e) {
	return `Seroval Error (specific: ${e})`;
}
var x$1 = class extends Error {
	constructor(t) {
		super(_(1));
		this.value = t;
	}
}, h$1 = class extends Error {
	constructor(r) {
		super(_(2));
	}
}, X = class extends Error {
	constructor(r) {
		super(_(3));
	}
}, V = class extends Error {
	constructor(r) {
		super(_(4));
	}
}, Re = class extends Error {
	constructor(t) {
		super(_(5));
		this.value = t;
	}
}, Pe = class extends Error {
	constructor(r) {
		super(_(6));
	}
}, Je = class extends Error {
	constructor(r) {
		super(_(7));
	}
}, O$1 = class extends Error {
	constructor(r) {
		super(_(8));
	}
}, Q = class extends Error {
	constructor(r) {
		super(_(9));
	}
}, j = class {
	constructor(r, t) {
		this.value = r;
		this.replacement = t;
	}
}, ee = () => {
	let e = {
		p: 0,
		s: 0,
		f: 0
	};
	return e.p = new Promise((r, t) => {
		e.s = r, e.f = t;
	}), e;
}, An = (e, r) => {
	e.s(r), e.p.s = 1, e.p.v = r;
}, En = (e, r) => {
	e.f(r), e.p.s = 2, e.p.v = r;
};
ee.toString();
An.toString();
En.toString();
var Pr = () => {
	let e = [], r = [], t = !0, n = !1, a = 0, s = (l, g, S) => {
		for (S = 0; S < a; S++) r[S] && r[S][g](l);
	}, i = (l, g, S, d) => {
		for (g = 0, S = e.length; g < S; g++) d = e[g], !t && g === S - 1 ? l[n ? "return" : "throw"](d) : l.next(d);
	}, u = (l, g) => (t && (g = a++, r[g] = l), i(l), () => {
		t && (r[g] = r[a], r[a--] = void 0);
	});
	return {
		__SEROVAL_STREAM__: !0,
		on: (l) => u(l),
		next: (l) => {
			t && (e.push(l), s(l, "next"));
		},
		throw: (l) => {
			t && (e.push(l), s(l, "throw"), t = !1, n = !1, r.length = 0);
		},
		return: (l) => {
			t && (e.push(l), s(l, "return"), t = !1, n = !0, r.length = 0);
		}
	};
};
Pr.toString();
var xr = (e) => (r) => () => {
	let t = 0, n = {
		[e]: () => n,
		next: () => {
			if (t > r.d) return {
				done: !0,
				value: void 0
			};
			let a = t++, s = r.v[a];
			if (a === r.t) throw s;
			return {
				done: a === r.d,
				value: s
			};
		}
	};
	return n;
};
xr.toString();
var Tr = (e, r) => (t) => () => {
	let n = 0, a = -1, s = !1, i = [], u = [], l = (S = 0, d = u.length) => {
		for (; S < d; S++) u[S].s({
			done: !0,
			value: void 0
		});
	};
	t.on({
		next: (S) => {
			let d = u.shift();
			d && d.s({
				done: !1,
				value: S
			}), i.push(S);
		},
		throw: (S) => {
			let d = u.shift();
			d && d.f(S), l(), a = i.length, s = !0, i.push(S);
		},
		return: (S) => {
			let d = u.shift();
			d && d.s({
				done: !0,
				value: S
			}), l(), a = i.length, i.push(S);
		}
	});
	let g = {
		[e]: () => g,
		next: () => {
			if (a === -1) {
				let G = n++;
				if (G >= i.length) {
					let rt = r();
					return u.push(rt), rt.p;
				}
				return {
					done: !1,
					value: i[G]
				};
			}
			if (n > a) return {
				done: !0,
				value: void 0
			};
			let S = n++, d = i[S];
			if (S !== a) return {
				done: !1,
				value: d
			};
			if (s) throw d;
			return {
				done: !0,
				value: d
			};
		}
	};
	return g;
};
Tr.toString();
var Or = (e) => {
	let r = atob(e), t = r.length, n = new Uint8Array(t);
	for (let a = 0; a < t; a++) n[a] = r.charCodeAt(a);
	return n.buffer;
};
Or.toString();
function Ze(e) {
	return "__SEROVAL_SEQUENCE__" in e;
}
function wr(e, r, t) {
	return {
		__SEROVAL_SEQUENCE__: !0,
		v: e,
		t: r,
		d: t
	};
}
function $e(e) {
	let r = [], t = -1, n = -1, a = e[C]();
	for (;;) try {
		let s = a.next();
		if (r.push(s.value), s.done) {
			n = r.length - 1;
			break;
		}
	} catch (s) {
		t = r.length, r.push(s);
	}
	return wr(r, t, n);
}
var In = xr(C);
function Rt(e) {
	return In(e);
}
var Pt = {}, xt = {}, Tt = {
	0: {},
	1: {},
	2: {},
	3: {},
	4: {},
	5: {}
};
function Xe(e) {
	return "__SEROVAL_STREAM__" in e;
}
function re() {
	return Pr();
}
function Qe(e) {
	let r = re(), t = e[v$1]();
	async function n() {
		try {
			let a = await t.next();
			a.done ? r.return(a.value) : (r.next(a.value), await n());
		} catch (a) {
			r.throw(a);
		}
	}
	return n().catch(() => {}), r;
}
var Rn = Tr(v$1, ee);
function wt(e) {
	return Rn(e);
}
async function hr(e) {
	try {
		return [1, await e];
	} catch (r) {
		return [0, r];
	}
}
function me(e, r) {
	return {
		plugins: r.plugins,
		mode: e,
		marked: /* @__PURE__ */ new Set(),
		features: 63 ^ (r.disabledFeatures || 0),
		refs: r.refs || /* @__PURE__ */ new Map(),
		depthLimit: r.depthLimit || 1e3
	};
}
function pe$1(e, r) {
	e.marked.add(r);
}
function zr(e, r) {
	let t = e.refs.size;
	return e.refs.set(r, t), t;
}
function er(e, r) {
	let t = e.refs.get(r);
	return t != null ? (pe$1(e, t), {
		type: 1,
		value: pt(t)
	}) : {
		type: 0,
		value: zr(e, r)
	};
}
function Y$1(e, r) {
	let t = er(e, r);
	return t.type === 1 ? t : Ir(r) ? {
		type: 2,
		value: gt(t.value, r)
	} : t;
}
function I(e, r) {
	let t = Y$1(e, r);
	if (t.type !== 0) return t.value;
	if (r in ve) return dt(t.value, r);
	throw new x$1(r);
}
function k(e, r) {
	let t = er(e, Tt[r]);
	return t.type === 1 ? t.value : c$1(26, t.value, r, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function rr(e) {
	let r = er(e, Pt);
	return r.type === 1 ? r.value : c$1(27, r.value, o$1, o$1, o$1, o$1, o$1, o$1, I(e, C), o$1, o$1, o$1);
}
function tr(e) {
	let r = er(e, xt);
	return r.type === 1 ? r.value : c$1(29, r.value, o$1, o$1, o$1, o$1, o$1, [k(e, 1), I(e, v$1)], o$1, o$1, o$1, o$1);
}
function nr(e, r, t, n) {
	return c$1(t ? 11 : 10, e, o$1, o$1, o$1, n, o$1, o$1, o$1, o$1, Te(r), o$1);
}
function or(e, r, t, n) {
	return c$1(8, r, o$1, o$1, o$1, o$1, {
		k: t,
		v: n
	}, o$1, k(e, 0), o$1, o$1, o$1);
}
function ar(e, r, t) {
	let n = new Uint8Array(t), a = "";
	for (let s = 0, i = n.length; s < i; s++) a += String.fromCharCode(n[s]);
	return c$1(19, r, y$1(btoa(a)), o$1, o$1, o$1, o$1, o$1, k(e, 5), o$1, o$1, o$1);
}
function te$1(e, r) {
	return {
		base: me(e, r),
		child: void 0
	};
}
var kr = class {
	constructor(r, t) {
		this._p = r;
		this.depth = t;
	}
	parse(r) {
		return N$1(this._p, this.depth, r);
	}
};
async function xn(e, r, t) {
	let n = [];
	for (let a = 0, s = t.length; a < s; a++) a in t ? n[a] = await N$1(e, r, t[a]) : n[a] = 0;
	return n;
}
async function Tn(e, r, t, n) {
	return _e(t, n, await xn(e, r, n));
}
async function Dr(e, r, t) {
	let n = Object.entries(t), a = [], s = [];
	for (let i = 0, u = n.length; i < u; i++) a.push(y$1(n[i][0])), s.push(await N$1(e, r, n[i][1]));
	return C in t && (a.push(I(e.base, C)), s.push(Ue(rr(e.base), await N$1(e, r, $e(t))))), v$1 in t && (a.push(I(e.base, v$1)), s.push(je(tr(e.base), await N$1(e, r, Qe(t))))), P$1 in t && (a.push(I(e.base, P$1)), s.push($$1(t[P$1]))), R in t && (a.push(I(e.base, R)), s.push(t[R] ? H : J)), {
		k: a,
		v: s
	};
}
async function _r(e, r, t, n, a) {
	return nr(t, n, a, await Dr(e, r, n));
}
async function On(e, r, t, n) {
	return ke(t, await N$1(e, r, n.valueOf()));
}
async function wn(e, r, t, n) {
	return De(t, n, await N$1(e, r, n.buffer));
}
async function hn(e, r, t, n) {
	return Fe(t, n, await N$1(e, r, n.buffer));
}
async function zn(e, r, t, n) {
	return Be(t, n, await N$1(e, r, n.buffer));
}
async function _t(e, r, t, n) {
	let a = Z(n, e.base.features);
	return Ve(t, n, a ? await Dr(e, r, a) : o$1);
}
async function _n(e, r, t, n) {
	let a = Z(n, e.base.features);
	return Me(t, n, a ? await Dr(e, r, a) : o$1);
}
async function kn(e, r, t, n) {
	let a = [], s = [];
	for (let [i, u] of n.entries()) a.push(await N$1(e, r, i)), s.push(await N$1(e, r, u));
	return or(e.base, t, a, s);
}
async function Dn(e, r, t, n) {
	let a = [];
	for (let s of n.keys()) a.push(await N$1(e, r, s));
	return Le(t, a);
}
async function kt(e, r, t, n) {
	let a = e.base.plugins;
	if (a) for (let s = 0, i = a.length; s < i; s++) {
		let u = a[s];
		if (u.parse.async && u.test(n)) return ce(t, u.tag, await u.parse.async(n, new kr(e, r), { id: t }));
	}
	return o$1;
}
async function Fn(e, r, t, n) {
	let [a, s] = await hr(n);
	return c$1(12, t, a, o$1, o$1, o$1, o$1, o$1, await N$1(e, r, s), o$1, o$1, o$1);
}
function Bn(e, r, t, n, a) {
	let s = [], i = t.on({
		next: (u) => {
			pe$1(this.base, r), N$1(this, e, u).then((l) => {
				s.push(qe(r, l));
			}, (l) => {
				a(l), i();
			});
		},
		throw: (u) => {
			pe$1(this.base, r), N$1(this, e, u).then((l) => {
				s.push(We(r, l)), n(s), i();
			}, (l) => {
				a(l), i();
			});
		},
		return: (u) => {
			pe$1(this.base, r), N$1(this, e, u).then((l) => {
				s.push(Ge(r, l)), n(s), i();
			}, (l) => {
				a(l), i();
			});
		}
	});
}
async function Vn(e, r, t, n) {
	return Ye(t, k(e.base, 4), await new Promise(Bn.bind(e, r, t, n)));
}
async function Mn(e, r, t, n) {
	let a = [];
	for (let s = 0, i = n.v.length; s < i; s++) a[s] = await N$1(e, r, n.v[s]);
	return Ke(t, a, n.t, n.d);
}
async function Ln(e, r, t, n) {
	if (Array.isArray(n)) return Tn(e, r, t, n);
	if (Xe(n)) return Vn(e, r, t, n);
	if (Ze(n)) return Mn(e, r, t, n);
	let a = n.constructor;
	if (a === j) return N$1(e, r, n.replacement);
	let s = await kt(e, r, t, n);
	if (s) return s;
	switch (a) {
		case Object: return _r(e, r, t, n, !1);
		case o$1: return _r(e, r, t, n, !0);
		case Date: return he(t, n);
		case Error:
		case EvalError:
		case RangeError:
		case ReferenceError:
		case SyntaxError:
		case TypeError:
		case URIError: return _t(e, r, t, n);
		case Number:
		case Boolean:
		case String:
		case BigInt: return On(e, r, t, n);
		case ArrayBuffer: return ar(e.base, t, n);
		case Int8Array:
		case Int16Array:
		case Int32Array:
		case Uint8Array:
		case Uint16Array:
		case Uint32Array:
		case Uint8ClampedArray:
		case Float32Array:
		case Float64Array: return wn(e, r, t, n);
		case DataView: return zn(e, r, t, n);
		case Map: return kn(e, r, t, n);
		case Set: return Dn(e, r, t, n);
		default: break;
	}
	if (a === Promise || n instanceof Promise) return Fn(e, r, t, n);
	let i = e.base.features;
	if (i & 32 && a === RegExp) return ze(t, n);
	if (i & 16) switch (a) {
		case BigInt64Array:
		case BigUint64Array: return hn(e, r, t, n);
		default: break;
	}
	if (i & 1 && typeof AggregateError != "undefined" && (a === AggregateError || n instanceof AggregateError)) return _n(e, r, t, n);
	if (n instanceof Error) return _t(e, r, t, n);
	if (C in n || v$1 in n) return _r(e, r, t, n, !!a);
	throw new x$1(n);
}
async function Un(e, r, t) {
	let n = Y$1(e.base, t);
	if (n.type !== 0) return n.value;
	let a = await kt(e, r, n.value, t);
	if (a) return a;
	throw new x$1(t);
}
async function N$1(e, r, t) {
	switch (typeof t) {
		case "boolean": return t ? H : J;
		case "undefined": return Ae;
		case "string": return $$1(t);
		case "number": return Oe(t);
		case "bigint": return we(t);
		case "object":
			if (t) {
				let n = Y$1(e.base, t);
				return n.type === 0 ? await Ln(e, r + 1, n.value, t) : n.value;
			}
			return Ee;
		case "symbol": return I(e.base, t);
		case "function": return Un(e, r, t);
		default: throw new x$1(t);
	}
}
async function ne$1(e, r) {
	try {
		return await N$1(e, 0, r);
	} catch (t) {
		throw t instanceof z ? t : new z(t);
	}
}
var oe = ((t) => (t[t.Vanilla = 1] = "Vanilla", t[t.Cross = 2] = "Cross", t))(oe || {});
function ai(e) {
	return e;
}
function Dt(e, r) {
	for (let t = 0, n = r.length; t < n; t++) {
		let a = r[t];
		e.has(a) || (e.add(a), a.extends && Dt(e, a.extends));
	}
}
function A(e) {
	if (e) {
		let r = /* @__PURE__ */ new Set();
		return Dt(r, e), [...r];
	}
}
function Ft(e) {
	switch (e) {
		case "Int8Array": return Int8Array;
		case "Int16Array": return Int16Array;
		case "Int32Array": return Int32Array;
		case "Uint8Array": return Uint8Array;
		case "Uint16Array": return Uint16Array;
		case "Uint32Array": return Uint32Array;
		case "Uint8ClampedArray": return Uint8ClampedArray;
		case "Float32Array": return Float32Array;
		case "Float64Array": return Float64Array;
		case "BigInt64Array": return BigInt64Array;
		case "BigUint64Array": return BigUint64Array;
		default: throw new Je(e);
	}
}
var jn = 1e6, Yn = 1e4, qn = 2e4;
function Vt(e, r) {
	switch (r) {
		case 3: return Object.freeze(e);
		case 1: return Object.preventExtensions(e);
		case 2: return Object.seal(e);
		default: return e;
	}
}
var Wn = 1e3;
function Mt(e, r) {
	var n;
	let t = r.refs || /* @__PURE__ */ new Map();
	return "types" in t || Object.assign(t, { types: /* @__PURE__ */ new Map() }), {
		mode: e,
		plugins: r.plugins,
		refs: t,
		features: (n = r.features) != null ? n : 63 ^ (r.disabledFeatures || 0),
		depthLimit: r.depthLimit || Wn
	};
}
function Ut(e) {
	return {
		mode: 2,
		base: Mt(2, e),
		child: o$1
	};
}
var Fr = class {
	constructor(r, t) {
		this._p = r;
		this.depth = t;
	}
	deserialize(r) {
		return p$1(this._p, this.depth, r);
	}
};
function jt(e, r) {
	if (r < 0 || !Number.isFinite(r) || !Number.isInteger(r)) throw new O$1({
		t: 4,
		i: r
	});
	if (e.refs.has(r)) throw new Error("Conflicted ref id: " + r);
}
function Gn(e, r, t) {
	return jt(e.base, r), e.state.marked.has(r) && e.base.refs.set(r, t), t;
}
function Kn(e, r, t) {
	return jt(e.base, r), e.base.refs.set(r, t), t;
}
function b(e, r, t) {
	return e.mode === 1 ? Gn(e, r, t) : Kn(e, r, t);
}
function Br(e, r, t) {
	if (Object.hasOwn(r, t)) return r[t];
	throw new O$1(e);
}
function Hn(e, r) {
	return b(e, r.i, St(D$1(r.s)));
}
function Jn(e, r, t) {
	let n = t.a, a = n.length, s = b(e, t.i, new Array(a));
	for (let i = 0, u; i < a; i++) u = n[i], u && (s[i] = p$1(e, r, u));
	return Vt(s, t.o), s;
}
function Zn(e) {
	switch (e) {
		case "constructor":
		case "__proto__":
		case "prototype":
		case "__defineGetter__":
		case "__defineSetter__":
		case "__lookupGetter__":
		case "__lookupSetter__": return !1;
		default: return !0;
	}
}
function $n(e) {
	switch (e) {
		case v$1:
		case R:
		case P$1:
		case C: return !0;
		default: return !1;
	}
}
function Bt(e, r, t) {
	Zn(r) ? e[r] = t : Object.defineProperty(e, r, {
		value: t,
		configurable: !0,
		enumerable: !0,
		writable: !0
	});
}
function Xn(e, r, t, n, a) {
	if (typeof n == "string") Bt(t, D$1(n), p$1(e, r, a));
	else {
		let s = p$1(e, r, n);
		switch (typeof s) {
			case "string":
				Bt(t, s, p$1(e, r, a));
				break;
			case "symbol":
				$n(s) && (t[s] = p$1(e, r, a));
				break;
			default: throw new O$1(n);
		}
	}
}
function Yt(e, r, t) {
	e.base.refs.types.set(r, t);
}
function de(e, r, t, n) {
	if (e.base.refs.types.get(t) !== n) throw new O$1(r);
}
function qt(e, r, t, n) {
	let a = t.k;
	if (a.length > 0) for (let i = 0, u = t.v, l = a.length; i < l; i++) Xn(e, r, n, a[i], u[i]);
	return n;
}
function Qn(e, r, t) {
	let n = b(e, t.i, t.t === 10 ? {} : Object.create(null));
	return qt(e, r, t.p, n), Vt(n, t.o), n;
}
function eo(e, r) {
	return b(e, r.i, new Date(r.s));
}
function ro(e, r) {
	if (e.base.features & 32) {
		let t = D$1(r.c);
		if (t.length > qn) throw new O$1(r);
		return b(e, r.i, new RegExp(t, r.m));
	}
	throw new h$1(r);
}
function to(e, r, t) {
	let n = b(e, t.i, /* @__PURE__ */ new Set());
	for (let a = 0, s = t.a, i = s.length; a < i; a++) n.add(p$1(e, r, s[a]));
	return n;
}
function no(e, r, t) {
	let n = b(e, t.i, /* @__PURE__ */ new Map());
	for (let a = 0, s = t.e.k, i = t.e.v, u = s.length; a < u; a++) n.set(p$1(e, r, s[a]), p$1(e, r, i[a]));
	return n;
}
function oo(e, r) {
	if (r.s.length > jn) throw new O$1(r);
	return b(e, r.i, Or(D$1(r.s)));
}
function ao(e, r, t) {
	var u;
	let n = Ft(t.c), a = p$1(e, r, t.f), s = (u = t.b) != null ? u : 0;
	if (s < 0 || s > a.byteLength) throw new O$1(t);
	return b(e, t.i, new n(a, s, t.l));
}
function so(e, r, t) {
	var i;
	let n = p$1(e, r, t.f), a = (i = t.b) != null ? i : 0;
	if (a < 0 || a > n.byteLength) throw new O$1(t);
	return b(e, t.i, new DataView(n, a, t.l));
}
function Wt(e, r, t, n) {
	if (t.p) {
		let a = qt(e, r, t.p, {});
		Object.defineProperties(n, Object.getOwnPropertyDescriptors(a));
	}
	return n;
}
function io(e, r, t) {
	return Wt(e, r, t, b(e, t.i, new AggregateError([], D$1(t.m))));
}
function uo(e, r, t) {
	let n = Br(t, st, t.s);
	return Wt(e, r, t, b(e, t.i, new n(D$1(t.m))));
}
function lo(e, r, t) {
	let n = ee(), a = b(e, t.i, n.p), s = p$1(e, r, t.f);
	return t.s ? n.s(s) : n.f(s), a;
}
function co(e, r, t) {
	return b(e, t.i, Object(p$1(e, r, t.f)));
}
function fo(e, r, t) {
	let n = e.base.plugins;
	if (n) {
		let a = D$1(t.c);
		for (let s = 0, i = n.length; s < i; s++) {
			let u = n[s];
			if (u.tag === a) return b(e, t.i, u.deserialize(t.s, new Fr(e, r), { id: t.i }));
		}
	}
	throw new X(t.c);
}
function So(e, r) {
	let t = b(e, r.i, b(e, r.s, ee()).p);
	return Yt(e, r.s, 22), t;
}
function mo(e, r, t) {
	let n = e.base.refs.get(t.i);
	if (n) return de(e, t, t.i, 22), n.s(p$1(e, r, t.a[1])), o$1;
	throw new V("Promise");
}
function po(e, r, t) {
	let n = e.base.refs.get(t.i);
	if (n) return de(e, t, t.i, 22), n.f(p$1(e, r, t.a[1])), o$1;
	throw new V("Promise");
}
function go(e, r, t) {
	p$1(e, r, t.a[0]);
	return Rt(p$1(e, r, t.a[1]));
}
function yo(e, r, t) {
	p$1(e, r, t.a[0]);
	return wt(p$1(e, r, t.a[1]));
}
function No(e, r, t) {
	let n = b(e, t.i, re());
	Yt(e, t.i, 31);
	let a = t.a, s = a.length;
	if (s) for (let i = 0; i < s; i++) p$1(e, r, a[i]);
	return n;
}
function bo(e, r, t) {
	let n = e.base.refs.get(t.i);
	if (n) return de(e, t, t.i, 31), n.next(p$1(e, r, t.f)), o$1;
	throw new V("Stream");
}
function vo(e, r, t) {
	let n = e.base.refs.get(t.i);
	if (n) return de(e, t, t.i, 31), n.throw(p$1(e, r, t.f)), o$1;
	throw new V("Stream");
}
function Co(e, r, t) {
	let n = e.base.refs.get(t.i);
	if (n) return de(e, t, t.i, 31), n.return(p$1(e, r, t.f)), o$1;
	throw new V("Stream");
}
function Ao(e, r, t) {
	return p$1(e, r, t.f), o$1;
}
function Eo(e, r, t) {
	return p$1(e, r, t.a[1]), o$1;
}
function Io(e, r, t) {
	let n = b(e, t.i, wr([], t.s, t.l));
	for (let a = 0, s = t.a.length; a < s; a++) n.v[a] = p$1(e, r, t.a[a]);
	return n;
}
function p$1(e, r, t) {
	if (r > e.base.depthLimit) throw new Q(e.base.depthLimit);
	switch (r += 1, t.t) {
		case 2: return Br(t, at, t.s);
		case 0: return Number(t.s);
		case 1: return D$1(String(t.s));
		case 3:
			if (String(t.s).length > Yn) throw new O$1(t);
			return BigInt(t.s);
		case 4: return e.base.refs.get(t.i);
		case 18: return Hn(e, t);
		case 9: return Jn(e, r, t);
		case 10:
		case 11: return Qn(e, r, t);
		case 5: return eo(e, t);
		case 6: return ro(e, t);
		case 7: return to(e, r, t);
		case 8: return no(e, r, t);
		case 19: return oo(e, t);
		case 16:
		case 15: return ao(e, r, t);
		case 20: return so(e, r, t);
		case 14: return io(e, r, t);
		case 13: return uo(e, r, t);
		case 12: return lo(e, r, t);
		case 17: return Br(t, nt, t.s);
		case 21: return co(e, r, t);
		case 25: return fo(e, r, t);
		case 22: return So(e, t);
		case 23: return mo(e, r, t);
		case 24: return po(e, r, t);
		case 28: return go(e, r, t);
		case 30: return yo(e, r, t);
		case 31: return No(e, r, t);
		case 32: return bo(e, r, t);
		case 33: return vo(e, r, t);
		case 34: return Co(e, r, t);
		case 27: return Ao(e, r, t);
		case 29: return Eo(e, r, t);
		case 35: return Io(e, r, t);
		default: throw new h$1(t);
	}
}
function sr(e, r) {
	try {
		return p$1(e, 0, r);
	} catch (t) {
		throw new He(t);
	}
}
var Ro = () => T, Po = Ro.toString();
/=>/.test(Po);
function uu(e, r) {
	return sr(Ut({
		plugins: A(r.plugins),
		refs: r.refs,
		features: r.features,
		disabledFeatures: r.disabledFeatures,
		depthLimit: r.depthLimit
	}), e);
}
async function Iu(e, r = {}) {
	let n = te$1(1, {
		plugins: A(r.plugins),
		disabledFeatures: r.disabledFeatures
	});
	return {
		t: await ne$1(n, e),
		f: n.base.features,
		m: Array.from(n.base.marked)
	};
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/transformer.js
/**
* Create a strongly-typed serialization adapter for SSR hydration.
* Use to register custom types with the router serializer.
*/
function createSerializationAdapter(opts) {
	return opts;
}
/** Create a Seroval plugin for client/server symmetric (de)serialization. */
/* @__NO_SIDE_EFFECTS__ */
function makeSerovalPlugin(serializationAdapter) {
	return /* @__PURE__ */ ai({
		tag: "$TSR/t/" + serializationAdapter.key,
		test: serializationAdapter.test,
		parse: {
			sync(value, ctx, _data) {
				return { v: ctx.parse(serializationAdapter.toSerializable(value)) };
			},
			async async(value, ctx, _data) {
				return { v: await ctx.parse(serializationAdapter.toSerializable(value)) };
			},
			stream(value, ctx, _data) {
				return { v: ctx.parse(serializationAdapter.toSerializable(value)) };
			}
		},
		serialize: void 0,
		deserialize(node, ctx, _data) {
			return serializationAdapter.fromSerializable(ctx.deserialize(node.v));
		}
	});
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/RawStream.js
/**
* Marker class for ReadableStream<Uint8Array> that should be serialized
* with base64 encoding (SSR) or binary framing (server functions).
*
* Wrap your binary streams with this to get efficient serialization:
* ```ts
* // For binary data (files, images, etc.)
* return { data: new RawStream(file.stream()) }
*
* // For text-heavy data (RSC payloads, etc.)
* return { data: new RawStream(rscStream, { hint: 'text' }) }
* ```
*/
var RawStream = class {
	constructor(stream, options) {
		this.stream = stream;
		this.hint = options?.hint ?? "binary";
	}
};
var BufferCtor = globalThis.Buffer;
var hasNodeBuffer = !!BufferCtor && typeof BufferCtor.from === "function";
function uint8ArrayToBase64(bytes) {
	if (bytes.length === 0) return "";
	if (hasNodeBuffer) return BufferCtor.from(bytes).toString("base64");
	const CHUNK_SIZE = 32768;
	const chunks = [];
	for (let i = 0; i < bytes.length; i += CHUNK_SIZE) {
		const chunk = bytes.subarray(i, i + CHUNK_SIZE);
		chunks.push(String.fromCharCode.apply(null, chunk));
	}
	return btoa(chunks.join(""));
}
function base64ToUint8Array(base64) {
	if (base64.length === 0) return /* @__PURE__ */ new Uint8Array(0);
	if (hasNodeBuffer) {
		const buf = BufferCtor.from(base64, "base64");
		return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
	}
	const binary = atob(base64);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
	return bytes;
}
var RAW_STREAM_FACTORY_BINARY = Object.create(null);
var RAW_STREAM_FACTORY_TEXT = Object.create(null);
var RAW_STREAM_FACTORY_CONSTRUCTOR_BINARY = (stream) => new ReadableStream({ start(controller) {
	stream.on({
		next(base64) {
			try {
				controller.enqueue(base64ToUint8Array(base64));
			} catch {}
		},
		throw(error) {
			controller.error(error);
		},
		return() {
			try {
				controller.close();
			} catch {}
		}
	});
} });
var textEncoderForFactory = new TextEncoder();
var RAW_STREAM_FACTORY_CONSTRUCTOR_TEXT = (stream) => {
	return new ReadableStream({ start(controller) {
		stream.on({
			next(value) {
				try {
					if (typeof value === "string") controller.enqueue(textEncoderForFactory.encode(value));
					else controller.enqueue(base64ToUint8Array(value.$b64));
				} catch {}
			},
			throw(error) {
				controller.error(error);
			},
			return() {
				try {
					controller.close();
				} catch {}
			}
		});
	} });
};
var FACTORY_BINARY = `(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))`;
var FACTORY_TEXT = `(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})`;
function toBinaryStream(readable) {
	const stream = re();
	const reader = readable.getReader();
	(async () => {
		try {
			while (true) {
				const { done, value } = await reader.read();
				if (done) {
					stream.return(void 0);
					break;
				}
				stream.next(uint8ArrayToBase64(value));
			}
		} catch (error) {
			stream.throw(error);
		} finally {
			reader.releaseLock();
		}
	})();
	return stream;
}
function toTextStream(readable) {
	const stream = re();
	const reader = readable.getReader();
	const decoder = new TextDecoder("utf-8", { fatal: true });
	(async () => {
		try {
			while (true) {
				const { done, value } = await reader.read();
				if (done) {
					try {
						const remaining = decoder.decode();
						if (remaining.length > 0) stream.next(remaining);
					} catch {}
					stream.return(void 0);
					break;
				}
				try {
					const text = decoder.decode(value, { stream: true });
					if (text.length > 0) stream.next(text);
				} catch {
					stream.next({ $b64: uint8ArrayToBase64(value) });
				}
			}
		} catch (error) {
			stream.throw(error);
		} finally {
			reader.releaseLock();
		}
	})();
	return stream;
}
/**
* SSR Plugin - uses base64 or UTF-8+base64 encoding for chunks, delegates to seroval's stream mechanism.
* Used during SSR when serializing to JavaScript code for HTML injection.
*
* Supports two modes based on RawStream hint:
* - 'binary': Always base64 encode (default)
* - 'text': Try UTF-8 first, fallback to base64 for invalid UTF-8
*/
var RawStreamSSRPlugin = /* @__PURE__ */ ai({
	tag: "tss/RawStream",
	extends: [/* @__PURE__ */ ai({
		tag: "tss/RawStreamFactory",
		test(value) {
			return value === RAW_STREAM_FACTORY_BINARY;
		},
		parse: {
			sync(_value, _ctx, _data) {
				return {};
			},
			async async(_value, _ctx, _data) {
				return {};
			},
			stream(_value, _ctx, _data) {
				return {};
			}
		},
		serialize(_node, _ctx, _data) {
			return FACTORY_BINARY;
		},
		deserialize(_node, _ctx, _data) {
			return RAW_STREAM_FACTORY_BINARY;
		}
	}), /* @__PURE__ */ ai({
		tag: "tss/RawStreamFactoryText",
		test(value) {
			return value === RAW_STREAM_FACTORY_TEXT;
		},
		parse: {
			sync(_value, _ctx, _data) {
				return {};
			},
			async async(_value, _ctx, _data) {
				return {};
			},
			stream(_value, _ctx, _data) {
				return {};
			}
		},
		serialize(_node, _ctx, _data) {
			return FACTORY_TEXT;
		},
		deserialize(_node, _ctx, _data) {
			return RAW_STREAM_FACTORY_TEXT;
		}
	})],
	test(value) {
		return value instanceof RawStream;
	},
	parse: {
		sync(value, ctx, _data) {
			const factory = value.hint === "text" ? RAW_STREAM_FACTORY_TEXT : RAW_STREAM_FACTORY_BINARY;
			return {
				hint: ctx.parse(value.hint),
				factory: ctx.parse(factory),
				stream: ctx.parse(re())
			};
		},
		async async(value, ctx, _data) {
			const factory = value.hint === "text" ? RAW_STREAM_FACTORY_TEXT : RAW_STREAM_FACTORY_BINARY;
			const encodedStream = value.hint === "text" ? toTextStream(value.stream) : toBinaryStream(value.stream);
			return {
				hint: await ctx.parse(value.hint),
				factory: await ctx.parse(factory),
				stream: await ctx.parse(encodedStream)
			};
		},
		stream(value, ctx, _data) {
			const factory = value.hint === "text" ? RAW_STREAM_FACTORY_TEXT : RAW_STREAM_FACTORY_BINARY;
			const encodedStream = value.hint === "text" ? toTextStream(value.stream) : toBinaryStream(value.stream);
			return {
				hint: ctx.parse(value.hint),
				factory: ctx.parse(factory),
				stream: ctx.parse(encodedStream)
			};
		}
	},
	serialize(node, ctx, _data) {
		return "(" + ctx.serialize(node.factory) + ")(" + ctx.serialize(node.stream) + ")";
	},
	deserialize(node, ctx, _data) {
		const stream = ctx.deserialize(node.stream);
		return ctx.deserialize(node.hint) === "text" ? RAW_STREAM_FACTORY_CONSTRUCTOR_TEXT(stream) : RAW_STREAM_FACTORY_CONSTRUCTOR_BINARY(stream);
	}
});
/**
* Creates a deserialize-only plugin for client-side stream reconstruction.
* Used in serverFnFetcher to wire up streams from frame decoder.
*
* @param getOrCreateStream Function to get/create a stream by ID from frame decoder
*/
function createRawStreamDeserializePlugin(getOrCreateStream) {
	return /* @__PURE__ */ ai({
		tag: "tss/RawStream",
		test: () => false,
		parse: {},
		serialize() {
			throw new Error("RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.");
		},
		deserialize(node, ctx, _data) {
			return getOrCreateStream(typeof ctx?.deserialize === "function" ? ctx.deserialize(node.streamId) : node.streamId);
		}
	});
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/ShallowErrorPlugin.js
/**
* this plugin serializes only the `message` part of an Error
* this helps with serializing e.g. a ZodError which has functions attached that cannot be serialized
*/
var ShallowErrorPlugin = /* @__PURE__ */ ai({
	tag: "$TSR/Error",
	test(value) {
		return value instanceof Error;
	},
	parse: {
		sync(value, ctx) {
			return { message: ctx.parse(value.message) };
		},
		async async(value, ctx) {
			return { message: await ctx.parse(value.message) };
		},
		stream(value, ctx) {
			return { message: ctx.parse(value.message) };
		}
	},
	serialize(node, ctx) {
		return "new Error(" + ctx.serialize(node.message) + ")";
	},
	deserialize(node, ctx) {
		return new Error(ctx.deserialize(node.message));
	}
});
var n = {}, P = (e) => new ReadableStream({ start: (r) => {
	e.on({
		next: (a) => {
			try {
				r.enqueue(a);
			} catch (t) {}
		},
		throw: (a) => {
			r.error(a);
		},
		return: () => {
			try {
				r.close();
			} catch (a) {}
		}
	});
} }), x = ai({
	tag: "seroval-plugins/web/ReadableStreamFactory",
	test(e) {
		return e === n;
	},
	parse: {
		sync() {
			return n;
		},
		async async() {
			return await Promise.resolve(n);
		},
		stream() {
			return n;
		}
	},
	serialize() {
		return P.toString();
	},
	deserialize() {
		return n;
	}
});
function w(e) {
	let r = re(), a = e.getReader();
	async function t() {
		try {
			let s = await a.read();
			s.done ? r.return(s.value) : (r.next(s.value), await t());
		} catch (s) {
			r.throw(s);
		}
	}
	return t().catch(() => {}), r;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/seroval-plugins.js
var defaultSerovalPlugins = [
	ShallowErrorPlugin,
	RawStreamSSRPlugin,
	ai({
		tag: "seroval/plugins/web/ReadableStream",
		extends: [x],
		test(e) {
			return typeof ReadableStream == "undefined" ? !1 : e instanceof ReadableStream;
		},
		parse: {
			sync(e, r) {
				return {
					factory: r.parse(n),
					stream: r.parse(re())
				};
			},
			async async(e, r) {
				return {
					factory: await r.parse(n),
					stream: await r.parse(w(e))
				};
			},
			stream(e, r) {
				return {
					factory: r.parse(n),
					stream: r.parse(w(e))
				};
			}
		},
		serialize(e, r) {
			return "(" + r.serialize(e.factory) + ")(" + r.serialize(e.stream) + ")";
		},
		deserialize(e, r) {
			return P(r.deserialize(e.stream));
		}
	})
];
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/getDefaultSerovalPlugins.js
function getDefaultSerovalPlugins() {
	return [...(getStartOptions()?.serializationAdapters)?.map(makeSerovalPlugin) ?? [], ...defaultSerovalPlugins];
}
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/client-rpc/frame-decoder.js
/**
* Client-side frame decoder for multiplexed responses.
*
* Decodes binary frame protocol and reconstructs:
* - JSON stream (NDJSON lines for seroval)
* - Raw streams (binary data as ReadableStream<Uint8Array>)
*/
/** Cached TextDecoder for frame decoding */
var textDecoder = new TextDecoder();
/** Shared empty buffer for empty buffer case - avoids allocation */
var EMPTY_BUFFER = /* @__PURE__ */ new Uint8Array(0);
/** Hardening limits to prevent memory/CPU DoS */
var MAX_FRAME_PAYLOAD_SIZE = 16 * 1024 * 1024;
var MAX_BUFFERED_BYTES = 32 * 1024 * 1024;
var MAX_STREAMS = 1024;
var MAX_FRAMES = 1e5;
/**
* Creates a frame decoder that processes a multiplexed response stream.
*
* @param input The raw response body stream
* @returns Decoded JSON stream and stream getter function
*/
function createFrameDecoder(input) {
	const streamControllers = /* @__PURE__ */ new Map();
	const streams = /* @__PURE__ */ new Map();
	const cancelledStreamIds = /* @__PURE__ */ new Set();
	let cancelled = false;
	let inputReader = null;
	let frameCount = 0;
	let jsonController;
	const jsonChunks = new ReadableStream({
		start(controller) {
			jsonController = controller;
		},
		cancel() {
			cancelled = true;
			try {
				inputReader?.cancel();
			} catch {}
			streamControllers.forEach((ctrl) => {
				try {
					ctrl.error(/* @__PURE__ */ new Error("Framed response cancelled"));
				} catch {}
			});
			streamControllers.clear();
			streams.clear();
			cancelledStreamIds.clear();
		}
	});
	/**
	* Gets or creates a stream for a given stream ID.
	* Called by deserialize plugin when it encounters a RawStream reference.
	*/
	function getOrCreateStream(id) {
		const existing = streams.get(id);
		if (existing) return existing;
		if (cancelledStreamIds.has(id)) return new ReadableStream({ start(controller) {
			controller.close();
		} });
		if (streams.size >= MAX_STREAMS) throw new Error(`Too many raw streams in framed response (max ${MAX_STREAMS})`);
		const stream = new ReadableStream({
			start(ctrl) {
				streamControllers.set(id, ctrl);
			},
			cancel() {
				cancelledStreamIds.add(id);
				streamControllers.delete(id);
				streams.delete(id);
			}
		});
		streams.set(id, stream);
		return stream;
	}
	/**
	* Ensures stream exists and returns its controller for enqueuing data.
	* Used for CHUNK frames where we need to ensure stream is created.
	*/
	function ensureController(id) {
		getOrCreateStream(id);
		return streamControllers.get(id);
	}
	(async () => {
		const reader = input.getReader();
		inputReader = reader;
		const bufferList = [];
		let totalLength = 0;
		/**
		* Reads header bytes from buffer chunks without flattening.
		* Returns header data or null if not enough bytes available.
		*/
		function readHeader() {
			if (totalLength < 9) return null;
			const first = bufferList[0];
			if (first.length >= 9) return {
				type: first[0],
				streamId: (first[1] << 24 | first[2] << 16 | first[3] << 8 | first[4]) >>> 0,
				length: (first[5] << 24 | first[6] << 16 | first[7] << 8 | first[8]) >>> 0
			};
			const headerBytes = /* @__PURE__ */ new Uint8Array(9);
			let offset = 0;
			let remaining = 9;
			for (let i = 0; i < bufferList.length && remaining > 0; i++) {
				const chunk = bufferList[i];
				const toCopy = Math.min(chunk.length, remaining);
				headerBytes.set(chunk.subarray(0, toCopy), offset);
				offset += toCopy;
				remaining -= toCopy;
			}
			return {
				type: headerBytes[0],
				streamId: (headerBytes[1] << 24 | headerBytes[2] << 16 | headerBytes[3] << 8 | headerBytes[4]) >>> 0,
				length: (headerBytes[5] << 24 | headerBytes[6] << 16 | headerBytes[7] << 8 | headerBytes[8]) >>> 0
			};
		}
		/**
		* Flattens buffer list into single Uint8Array and removes from list.
		*/
		function extractFlattened(count) {
			if (count === 0) return EMPTY_BUFFER;
			const first = bufferList[0];
			if (first && first.length >= count) {
				const result = first.subarray(0, count);
				if (first.length === count) bufferList.shift();
				else bufferList[0] = first.subarray(count);
				totalLength -= count;
				return result;
			}
			const result = new Uint8Array(count);
			let offset = 0;
			let remaining = count;
			while (remaining > 0 && bufferList.length > 0) {
				const chunk = bufferList[0];
				if (!chunk) break;
				const toCopy = Math.min(chunk.length, remaining);
				result.set(chunk.subarray(0, toCopy), offset);
				offset += toCopy;
				remaining -= toCopy;
				if (toCopy === chunk.length) bufferList.shift();
				else bufferList[0] = chunk.subarray(toCopy);
			}
			totalLength -= count;
			return result;
		}
		try {
			while (true) {
				const { done, value } = await reader.read();
				if (cancelled) break;
				if (done) break;
				if (!value) continue;
				if (totalLength + value.length > MAX_BUFFERED_BYTES) throw new Error(`Framed response buffer exceeded ${MAX_BUFFERED_BYTES} bytes`);
				bufferList.push(value);
				totalLength += value.length;
				while (true) {
					const header = readHeader();
					if (!header) break;
					const { type, streamId, length } = header;
					if (type !== FrameType.JSON && type !== FrameType.CHUNK && type !== FrameType.END && type !== FrameType.ERROR) throw new Error(`Unknown frame type: ${type}`);
					if (type === FrameType.JSON) {
						if (streamId !== 0) throw new Error("Invalid JSON frame streamId (expected 0)");
					} else if (streamId === 0) throw new Error("Invalid raw frame streamId (expected non-zero)");
					if (length > MAX_FRAME_PAYLOAD_SIZE) throw new Error(`Frame payload too large: ${length} bytes (max ${MAX_FRAME_PAYLOAD_SIZE})`);
					const frameSize = 9 + length;
					if (totalLength < frameSize) break;
					if (++frameCount > MAX_FRAMES) throw new Error(`Too many frames in framed response (max ${MAX_FRAMES})`);
					extractFlattened(9);
					const payload = extractFlattened(length);
					switch (type) {
						case FrameType.JSON:
							try {
								jsonController.enqueue(textDecoder.decode(payload));
							} catch {}
							break;
						case FrameType.CHUNK: {
							const ctrl = ensureController(streamId);
							if (ctrl) ctrl.enqueue(payload);
							break;
						}
						case FrameType.END: {
							const ctrl = ensureController(streamId);
							cancelledStreamIds.add(streamId);
							if (ctrl) {
								try {
									ctrl.close();
								} catch {}
								streamControllers.delete(streamId);
							}
							break;
						}
						case FrameType.ERROR: {
							const ctrl = ensureController(streamId);
							cancelledStreamIds.add(streamId);
							if (ctrl) {
								const message = textDecoder.decode(payload);
								ctrl.error(new Error(message));
								streamControllers.delete(streamId);
							}
							break;
						}
					}
				}
			}
			if (totalLength !== 0) throw new Error("Incomplete frame at end of framed response");
			try {
				jsonController.close();
			} catch {}
			streamControllers.forEach((ctrl) => {
				try {
					ctrl.close();
				} catch {}
			});
			streamControllers.clear();
		} catch (error) {
			try {
				jsonController.error(error);
			} catch {}
			streamControllers.forEach((ctrl) => {
				try {
					ctrl.error(error);
				} catch {}
			});
			streamControllers.clear();
		} finally {
			try {
				reader.releaseLock();
			} catch {}
			inputReader = null;
		}
	})();
	return {
		getOrCreateStream,
		jsonChunks
	};
}
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/client-rpc/serverFnFetcher.js
var serovalPlugins = null;
/**
* Helper to await all post-processing promises.
* Uses Promise.allSettled to ensure all promises complete even if some reject.
*/
async function awaitPostProcessPromises(promises) {
	if (promises.length > 0) await Promise.allSettled(promises);
}
/**
* Checks if an object has at least one own enumerable property.
* More efficient than Object.keys(obj).length > 0 as it short-circuits on first property.
*/
var hop = Object.prototype.hasOwnProperty;
function hasOwnProperties(obj) {
	for (const _ in obj) if (hop.call(obj, _)) return true;
	return false;
}
async function serverFnFetcher(url, args, handler) {
	if (!serovalPlugins) serovalPlugins = getDefaultSerovalPlugins();
	const first = args[0];
	const fetchImpl = first.fetch ?? handler;
	const type = first.data instanceof FormData ? "formData" : "payload";
	const headers = first.headers ? new Headers(first.headers) : new Headers();
	headers.set("x-tsr-serverFn", "true");
	if (type === "payload") headers.set("accept", `${TSS_CONTENT_TYPE_FRAMED}, application/x-ndjson, application/json`);
	if (first.method === "GET") {
		if (type === "formData") throw new Error("FormData is not supported with GET requests");
		const serializedPayload = await serializePayload(first);
		if (serializedPayload !== void 0) {
			const encodedPayload = encode({ payload: serializedPayload });
			if (url.includes("?")) url += `&${encodedPayload}`;
			else url += `?${encodedPayload}`;
		}
	}
	let body = void 0;
	if (first.method === "POST") {
		const fetchBody = await getFetchBody(first);
		if (fetchBody?.contentType) headers.set("content-type", fetchBody.contentType);
		body = fetchBody?.body;
	}
	return await getResponse(async () => fetchImpl(url, {
		method: first.method,
		headers,
		signal: first.signal,
		body
	}));
}
async function serializePayload(opts) {
	let payloadAvailable = false;
	const payloadToSerialize = {};
	if (opts.data !== void 0) {
		payloadAvailable = true;
		payloadToSerialize["data"] = opts.data;
	}
	if (opts.context && hasOwnProperties(opts.context)) {
		payloadAvailable = true;
		payloadToSerialize["context"] = opts.context;
	}
	if (payloadAvailable) return serialize(payloadToSerialize);
}
async function serialize(data) {
	return JSON.stringify(await Promise.resolve(Iu(data, { plugins: serovalPlugins })));
}
async function getFetchBody(opts) {
	if (opts.data instanceof FormData) {
		let serializedContext = void 0;
		if (opts.context && hasOwnProperties(opts.context)) serializedContext = await serialize(opts.context);
		if (serializedContext !== void 0) opts.data.set(TSS_FORMDATA_CONTEXT, serializedContext);
		return { body: opts.data };
	}
	const serializedBody = await serializePayload(opts);
	if (serializedBody) return {
		body: serializedBody,
		contentType: "application/json"
	};
}
/**
* Retrieves a response from a given function and manages potential errors
* and special response types including redirects and not found errors.
*
* @param fn - The function to execute for obtaining the response.
* @returns The processed response from the function.
* @throws If the response is invalid or an error occurs during processing.
*/
async function getResponse(fn) {
	let response;
	try {
		response = await fn();
	} catch (error) {
		if (error instanceof Response) response = error;
		else {
			console.log(error);
			throw error;
		}
	}
	if (response.headers.get("x-tss-raw") === "true") return response;
	const contentType = response.headers.get("content-type");
	if (!contentType) invariant();
	if (!!response.headers.get("x-tss-serialized")) {
		let result;
		if (contentType.includes("application/x-tss-framed")) {
			validateFramedProtocolVersion(contentType);
			if (!response.body) throw new Error("No response body for framed response");
			const { getOrCreateStream, jsonChunks } = createFrameDecoder(response.body);
			const plugins = [createRawStreamDeserializePlugin(getOrCreateStream), ...serovalPlugins || []];
			const refs = /* @__PURE__ */ new Map();
			result = await processFramedResponse({
				jsonStream: jsonChunks,
				onMessage: (msg) => uu(msg, {
					refs,
					plugins
				}),
				onError(msg, error) {
					console.error(msg, error);
				}
			});
		} else if (contentType.includes("application/json")) {
			const jsonPayload = await response.json();
			const postProcessPromises = [];
			try {
				result = uu(jsonPayload, { plugins: serovalPlugins });
			} finally {}
			await awaitPostProcessPromises(postProcessPromises);
		}
		if (!result) invariant();
		if (result instanceof Error) throw result;
		return result;
	}
	if (contentType.includes("application/json")) {
		const jsonPayload = await response.json();
		const redirect = parseRedirect(jsonPayload);
		if (redirect) throw redirect;
		if (isNotFound(jsonPayload)) throw jsonPayload;
		return jsonPayload;
	}
	if (!response.ok) throw new Error(await response.text());
	return response;
}
/**
* Processes a framed response where each JSON chunk is a complete JSON string
* (already decoded by frame decoder).
*
* Uses per-chunk post-processing context to ensure async deserialization work
* completes before the next chunk is processed. This prevents issues when
* streaming values require async post-processing (e.g., RSC decoding).
*/
async function processFramedResponse({ jsonStream, onMessage, onError }) {
	const reader = jsonStream.getReader();
	const { value: firstValue, done: firstDone } = await reader.read();
	if (firstDone || !firstValue) throw new Error("Stream ended before first object");
	const firstObject = JSON.parse(firstValue);
	let drainCancelled = false;
	const drain = (async () => {
		try {
			while (true) {
				const { value, done } = await reader.read();
				if (done) break;
				if (value) try {
					const chunkPostProcessPromises = [];
					try {
						onMessage(JSON.parse(value));
					} finally {}
					await awaitPostProcessPromises(chunkPostProcessPromises);
				} catch (e) {
					onError?.(`Invalid JSON: ${value}`, e);
				}
			}
		} catch (err) {
			if (!drainCancelled) onError?.("Stream processing error:", err);
		}
	})();
	let result;
	const initialPostProcessPromises = [];
	try {
		result = onMessage(firstObject);
	} catch (err) {
		drainCancelled = true;
		reader.cancel().catch(() => {});
		throw err;
	}
	await awaitPostProcessPromises(initialPostProcessPromises);
	Promise.resolve(result).catch(() => {
		drainCancelled = true;
		reader.cancel().catch(() => {});
	});
	drain.finally(() => {
		try {
			reader.releaseLock();
		} catch {}
	});
	return result;
}
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/client-rpc/createClientRpc.js
function createClientRpc(functionId) {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const clientFn = (...args) => {
		const startFetch = getStartOptions()?.serverFns?.fetch;
		return serverFnFetcher(url, args, startFetch ?? fetch);
	};
	return Object.assign(clientFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
}
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/client/ServerFunctionSerializationAdapter.js
var ServerFunctionSerializationAdapter = createSerializationAdapter({
	key: "$TSS/serverfn",
	test: (v) => {
		if (typeof v !== "function") return false;
		if (!(TSS_SERVER_FUNCTION in v)) return false;
		return !!v[TSS_SERVER_FUNCTION];
	},
	toSerializable: ({ serverFnMeta }) => ({ functionId: serverFnMeta.id }),
	fromSerializable: ({ functionId }) => createClientRpc(functionId)
});
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/ssr-match-id.js
function hydrateSsrMatchId(id) {
	return id.replaceAll("\0", "/").replaceAll("�", "/");
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/ssr-client.js
function hydrateMatch(match, deyhydratedMatch) {
	match.id = deyhydratedMatch.i;
	match.__beforeLoadContext = deyhydratedMatch.b;
	match.loaderData = deyhydratedMatch.l;
	match.status = deyhydratedMatch.s;
	match.ssr = deyhydratedMatch.ssr;
	match.updatedAt = deyhydratedMatch.u;
	match.error = deyhydratedMatch.e;
	if (deyhydratedMatch.g !== void 0) match.globalNotFound = deyhydratedMatch.g;
}
async function hydrate(router) {
	if (!window.$_TSR) invariant();
	const serializationAdapters = router.options.serializationAdapters;
	if (serializationAdapters?.length) {
		const fromSerializableMap = /* @__PURE__ */ new Map();
		serializationAdapters.forEach((adapter) => {
			fromSerializableMap.set(adapter.key, adapter.fromSerializable);
		});
		window.$_TSR.t = fromSerializableMap;
		window.$_TSR.buffer.forEach((script) => script());
	}
	window.$_TSR.initialized = true;
	if (!window.$_TSR.router) invariant();
	const dehydratedRouter = window.$_TSR.router;
	dehydratedRouter.matches.forEach((dehydratedMatch) => {
		dehydratedMatch.i = hydrateSsrMatchId(dehydratedMatch.i);
	});
	if (dehydratedRouter.lastMatchId) dehydratedRouter.lastMatchId = hydrateSsrMatchId(dehydratedRouter.lastMatchId);
	const { manifest, dehydratedData, lastMatchId } = dehydratedRouter;
	router.ssr = { manifest };
	const nonce = document.querySelector("meta[property=\"csp-nonce\"]")?.content;
	router.options.ssr = { nonce };
	await router.options.hydrate?.(dehydratedData);
	const matches = router.matchRoutes(router.stores.location.get());
	const routeChunkPromise = Promise.all(matches.map((match) => router.loadRouteChunk(router.looseRoutesById[match.routeId])));
	function setMatchForcePending(match) {
		const pendingMinMs = router.looseRoutesById[match.routeId].options.pendingMinMs ?? router.options.defaultPendingMinMs;
		if (pendingMinMs) {
			const minPendingPromise = createControlledPromise();
			match._nonReactive.minPendingPromise = minPendingPromise;
			match._forcePending = true;
			setTimeout(() => {
				minPendingPromise.resolve();
				router.updateMatch(match.id, (prev) => {
					prev._nonReactive.minPendingPromise = void 0;
					return {
						...prev,
						_forcePending: void 0
					};
				});
			}, pendingMinMs);
		}
	}
	function setRouteSsr(match) {
		const route = router.looseRoutesById[match.routeId];
		if (route) route.options.ssr = match.ssr;
	}
	let firstNonSsrMatchIndex = void 0;
	matches.forEach((match) => {
		const dehydratedMatch = dehydratedRouter.matches.find((d) => d.i === match.id);
		if (!dehydratedMatch) {
			match._nonReactive.dehydrated = false;
			match.ssr = false;
			setRouteSsr(match);
			return;
		}
		hydrateMatch(match, dehydratedMatch);
		setRouteSsr(match);
		match._nonReactive.dehydrated = match.ssr !== false;
		if (match.ssr === "data-only" || match.ssr === false) {
			if (firstNonSsrMatchIndex === void 0) {
				firstNonSsrMatchIndex = match.index;
				setMatchForcePending(match);
			}
		}
	});
	router.stores.setMatches(matches);
	const activeMatches = router.stores.matches.get();
	const location = router.stores.location.get();
	await Promise.all(activeMatches.map(async (match) => {
		try {
			const route = router.looseRoutesById[match.routeId];
			const parentContext = activeMatches[match.index - 1]?.context ?? router.options.context;
			if (route.options.context) {
				const contextFnContext = {
					deps: match.loaderDeps,
					params: match.params,
					context: parentContext ?? {},
					location,
					navigate: (opts) => router.navigate({
						...opts,
						_fromLocation: location
					}),
					buildLocation: router.buildLocation,
					cause: match.cause,
					abortController: match.abortController,
					preload: false,
					matches,
					routeId: route.id
				};
				match.__routeContext = route.options.context(contextFnContext) ?? void 0;
			}
			match.context = {
				...parentContext,
				...match.__routeContext,
				...match.__beforeLoadContext
			};
			const assetContext = {
				ssr: router.options.ssr,
				matches: activeMatches,
				match,
				params: match.params,
				loaderData: match.loaderData
			};
			const headFnContent = await route.options.head?.(assetContext);
			const scripts = await route.options.scripts?.(assetContext);
			match.meta = headFnContent?.meta;
			match.links = headFnContent?.links;
			match.headScripts = headFnContent?.scripts;
			match.styles = headFnContent?.styles;
			match.scripts = scripts;
		} catch (err) {
			if (isNotFound(err)) {
				match.error = { isNotFound: true };
				console.error(`NotFound error during hydration for routeId: ${match.routeId}`, err);
			} else {
				match.error = err;
				console.error(`Error during hydration for route ${match.routeId}:`, err);
				throw err;
			}
		}
	}));
	const isSpaMode = matches[matches.length - 1].id !== lastMatchId;
	if (!matches.some((m) => m.ssr === false) && !isSpaMode) {
		matches.forEach((match) => {
			match._nonReactive.dehydrated = void 0;
		});
		router.stores.resolvedLocation.set(router.stores.location.get());
		return routeChunkPromise;
	}
	const loadPromise = Promise.resolve().then(() => router.load()).catch((err) => {
		console.error("Error during router hydration:", err);
	});
	if (isSpaMode) {
		const match = matches[1];
		if (!match) invariant();
		setMatchForcePending(match);
		match._displayPending = true;
		match._nonReactive.displayPendingPromise = loadPromise;
		loadPromise.then(() => {
			router.batch(() => {
				if (router.stores.status.get() === "pending") {
					router.stores.status.set("idle");
					router.stores.resolvedLocation.set(router.stores.location.get());
				}
				router.updateMatch(match.id, (prev) => ({
					...prev,
					_displayPending: void 0,
					displayPendingPromise: void 0
				}));
			});
		});
	}
	return routeChunkPromise;
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/utils.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* React.use if available (React 19+), undefined otherwise.
* Use dynamic lookup to avoid Webpack compilation errors with React 18.
*/
var reactUse = import_react["use"];
var useLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
/**
* Taken from https://www.developerway.com/posts/implementing-advanced-use-previous-hook#part3
*/
function usePrevious(value) {
	const ref = import_react.useRef({
		value,
		prev: null
	});
	const current = ref.current.value;
	if (value !== current) ref.current = {
		value,
		prev: current
	};
	return ref.current.prev;
}
/**
* React hook to wrap `IntersectionObserver`.
*
* This hook will create an `IntersectionObserver` and observe the ref passed to it.
*
* When the intersection changes, the callback will be called with the `IntersectionObserverEntry`.
*
* @param ref - The ref to observe
* @param intersectionObserverOptions - The options to pass to the IntersectionObserver
* @param options - The options to pass to the hook
* @param callback - The callback to call when the intersection changes
* @returns The IntersectionObserver instance
* @example
* ```tsx
* const MyComponent = () => {
* const ref = React.useRef<HTMLDivElement>(null)
* useIntersectionObserver(
*  ref,
*  (entry) => { doSomething(entry) },
*  { rootMargin: '10px' },
*  { disabled: false }
* )
* return <div ref={ref} />
* ```
*/
function useIntersectionObserver(ref, callback, intersectionObserverOptions = {}, options = {}) {
	import_react.useEffect(() => {
		if (!ref.current || options.disabled || typeof IntersectionObserver !== "function") return;
		const observer = new IntersectionObserver(([entry]) => {
			callback(entry);
		}, intersectionObserverOptions);
		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, [
		callback,
		intersectionObserverOptions,
		options.disabled,
		ref
	]);
}
/**
* React hook to take a `React.ForwardedRef` and returns a `ref` that can be used on a DOM element.
*
* @param ref - The forwarded ref
* @returns The inner ref returned by `useRef`
* @example
* ```tsx
* const MyComponent = React.forwardRef((props, ref) => {
*  const innerRef = useForwardedRef(ref)
*  return <div ref={innerRef} />
* })
* ```
*/
function useForwardedRef(ref) {
	const innerRef = import_react.useRef(null);
	import_react.useImperativeHandle(ref, () => innerRef.current, []);
	return innerRef;
}
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.production.min.js
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var f = require_react(), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function q(c, a, g) {
		var b, d = {}, e = null, h = null;
		void 0 !== g && (e = "" + g);
		void 0 !== a.key && (e = "" + a.key);
		void 0 !== a.ref && (h = a.ref);
		for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
		if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
		return {
			$$typeof: k,
			type: c,
			key: e,
			ref: h,
			props: d,
			_owner: n.current
		};
	}
	exports.Fragment = l;
	exports.jsx = q;
	exports.jsxs = q;
}));
//#endregion
//#region node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production_min();
}));
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/awaited.js
var import_jsx_runtime = require_jsx_runtime();
/** Suspend until a deferred promise resolves or rejects and return its data. */
function useAwaited({ promise: _promise }) {
	if (reactUse) return reactUse(_promise);
	const promise = defer(_promise);
	if (promise[TSR_DEFERRED_PROMISE].status === "pending") throw promise;
	if (promise[TSR_DEFERRED_PROMISE].status === "error") throw promise[TSR_DEFERRED_PROMISE].error;
	return promise[TSR_DEFERRED_PROMISE].data;
}
/**
* Component that suspends on a deferred promise and renders its child with
* the resolved value. Optionally provides a Suspense fallback.
*/
function Await(props) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AwaitInner, { ...props });
	if (props.fallback) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: props.fallback,
		children: inner
	});
	return inner;
}
function AwaitInner(props) {
	const data = useAwaited(props);
	return props.children(data);
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/CatchBoundary.js
function CatchBoundary(props) {
	const errorComponent = props.errorComponent ?? ErrorComponent$1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatchBoundaryImpl, {
		getResetKey: props.getResetKey,
		onCatch: props.onCatch,
		children: ({ error, reset }) => {
			if (error) return import_react.createElement(errorComponent, {
				error,
				reset
			});
			return props.children;
		}
	});
}
var CatchBoundaryImpl = class extends import_react.Component {
	constructor(..._args) {
		super(..._args);
		this.state = { error: null };
	}
	static getDerivedStateFromProps(props, state) {
		const resetKey = props.getResetKey();
		if (state.error && state.resetKey !== resetKey) return {
			resetKey,
			error: null
		};
		return { resetKey };
	}
	static getDerivedStateFromError(error) {
		return { error };
	}
	reset() {
		this.setState({ error: null });
	}
	componentDidCatch(error, errorInfo) {
		if (this.props.onCatch) this.props.onCatch(error, errorInfo);
	}
	render() {
		return this.props.children({
			error: this.state.error,
			reset: () => {
				this.reset();
			}
		});
	}
};
function ErrorComponent$1({ error }) {
	const [show, setShow] = import_react.useState(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			padding: ".5rem",
			maxWidth: "100%"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: ".5rem"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					style: { fontSize: "1rem" },
					children: "Something went wrong!"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					style: {
						appearance: "none",
						fontSize: ".6em",
						border: "1px solid currentColor",
						padding: ".1rem .2rem",
						fontWeight: "bold",
						borderRadius: ".25rem"
					},
					onClick: () => setShow((d) => !d),
					children: show ? "Hide Error" : "Show Error"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: ".25rem" } }),
			show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				style: {
					fontSize: ".7em",
					border: "1px solid red",
					borderRadius: ".25rem",
					padding: ".3rem",
					color: "red",
					overflow: "auto"
				},
				children: error.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: error.message }) : null
			}) }) : null
		]
	});
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/ClientOnly.js
/**
* Render the children only after the JS has loaded client-side. Use an optional
* fallback component if the JS is not yet loaded.
*
* @example
* Render a Chart component if JS loads, renders a simple FakeChart
* component server-side or if there is no JS. The FakeChart can have only the
* UI without the behavior or be a loading spinner or skeleton.
*
* ```tsx
* return (
*   <ClientOnly fallback={<FakeChart />}>
*     <Chart />
*   </ClientOnly>
* )
* ```
*/
function ClientOnly({ children, fallback = null }) {
	return useHydrated() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: fallback });
}
/**
* Return a boolean indicating if the JS has been hydrated already.
* When doing Server-Side Rendering, the result will always be false.
* When doing Client-Side Rendering, the result will always be false on the
* first render and true from then on. Even if a new component renders it will
* always start with true.
*
* @example
* ```tsx
* // Disable a button that needs JS to work.
* let hydrated = useHydrated()
* return (
*   <button type="button" disabled={!hydrated} onClick={doSomethingCustom}>
*     Click me
*   </button>
* )
* ```
* @returns True if the JS has been hydrated already, false otherwise.
*/
function useHydrated() {
	return import_react.useSyncExternalStore(subscribe, () => true, () => false);
}
function subscribe() {
	return () => {};
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/routerContext.js
var routerContext = import_react.createContext(null);
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useRouter.js
/**
* Access the current TanStack Router instance from React context.
* Must be used within a `RouterProvider`.
*
* Options:
* - `warn`: Log a warning if no router context is found (default: true).
*
* @returns The registered router instance.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useRouterHook
*/
function useRouter(opts) {
	return import_react.useContext(routerContext);
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/matchContext.js
var matchContext = import_react.createContext(void 0);
var dummyMatchContext = import_react.createContext(void 0);
//#endregion
//#region node_modules/@tanstack/store/dist/esm/alien.js
var ReactiveFlags = /* @__PURE__ */ ((ReactiveFlags2) => {
	ReactiveFlags2[ReactiveFlags2["None"] = 0] = "None";
	ReactiveFlags2[ReactiveFlags2["Mutable"] = 1] = "Mutable";
	ReactiveFlags2[ReactiveFlags2["Watching"] = 2] = "Watching";
	ReactiveFlags2[ReactiveFlags2["RecursedCheck"] = 4] = "RecursedCheck";
	ReactiveFlags2[ReactiveFlags2["Recursed"] = 8] = "Recursed";
	ReactiveFlags2[ReactiveFlags2["Dirty"] = 16] = "Dirty";
	ReactiveFlags2[ReactiveFlags2["Pending"] = 32] = "Pending";
	return ReactiveFlags2;
})(ReactiveFlags || {});
// @__NO_SIDE_EFFECTS__
function createReactiveSystem({ update, notify, unwatched }) {
	return {
		link,
		unlink,
		propagate,
		checkDirty,
		shallowPropagate
	};
	function link(dep, sub, version) {
		const prevDep = sub.depsTail;
		if (prevDep !== void 0 && prevDep.dep === dep) return;
		const nextDep = prevDep !== void 0 ? prevDep.nextDep : sub.deps;
		if (nextDep !== void 0 && nextDep.dep === dep) {
			nextDep.version = version;
			sub.depsTail = nextDep;
			return;
		}
		const prevSub = dep.subsTail;
		if (prevSub !== void 0 && prevSub.version === version && prevSub.sub === sub) return;
		const newLink = sub.depsTail = dep.subsTail = {
			version,
			dep,
			sub,
			prevDep,
			nextDep,
			prevSub,
			nextSub: void 0
		};
		if (nextDep !== void 0) nextDep.prevDep = newLink;
		if (prevDep !== void 0) prevDep.nextDep = newLink;
		else sub.deps = newLink;
		if (prevSub !== void 0) prevSub.nextSub = newLink;
		else dep.subs = newLink;
	}
	function unlink(link2, sub = link2.sub) {
		const dep = link2.dep;
		const prevDep = link2.prevDep;
		const nextDep = link2.nextDep;
		const nextSub = link2.nextSub;
		const prevSub = link2.prevSub;
		if (nextDep !== void 0) nextDep.prevDep = prevDep;
		else sub.depsTail = prevDep;
		if (prevDep !== void 0) prevDep.nextDep = nextDep;
		else sub.deps = nextDep;
		if (nextSub !== void 0) nextSub.prevSub = prevSub;
		else dep.subsTail = prevSub;
		if (prevSub !== void 0) prevSub.nextSub = nextSub;
		else if ((dep.subs = nextSub) === void 0) unwatched(dep);
		return nextDep;
	}
	function propagate(link2) {
		let next = link2.nextSub;
		let stack;
		top: do {
			const sub = link2.sub;
			let flags = sub.flags;
			if (!(flags & 60)) sub.flags = flags | 32;
			else if (!(flags & 12)) flags = 0;
			else if (!(flags & 4)) sub.flags = flags & -9 | 32;
			else if (!(flags & 48) && isValidLink(link2, sub)) {
				sub.flags = flags | 40;
				flags &= 1;
			} else flags = 0;
			if (flags & 2) notify(sub);
			if (flags & 1) {
				const subSubs = sub.subs;
				if (subSubs !== void 0) {
					const nextSub = (link2 = subSubs).nextSub;
					if (nextSub !== void 0) {
						stack = {
							value: next,
							prev: stack
						};
						next = nextSub;
					}
					continue;
				}
			}
			if ((link2 = next) !== void 0) {
				next = link2.nextSub;
				continue;
			}
			while (stack !== void 0) {
				link2 = stack.value;
				stack = stack.prev;
				if (link2 !== void 0) {
					next = link2.nextSub;
					continue top;
				}
			}
			break;
		} while (true);
	}
	function checkDirty(link2, sub) {
		let stack;
		let checkDepth = 0;
		let dirty = false;
		top: do {
			const dep = link2.dep;
			const flags = dep.flags;
			if (sub.flags & 16) dirty = true;
			else if ((flags & 17) === 17) {
				if (update(dep)) {
					const subs = dep.subs;
					if (subs.nextSub !== void 0) shallowPropagate(subs);
					dirty = true;
				}
			} else if ((flags & 33) === 33) {
				if (link2.nextSub !== void 0 || link2.prevSub !== void 0) stack = {
					value: link2,
					prev: stack
				};
				link2 = dep.deps;
				sub = dep;
				++checkDepth;
				continue;
			}
			if (!dirty) {
				const nextDep = link2.nextDep;
				if (nextDep !== void 0) {
					link2 = nextDep;
					continue;
				}
			}
			while (checkDepth--) {
				const firstSub = sub.subs;
				const hasMultipleSubs = firstSub.nextSub !== void 0;
				if (hasMultipleSubs) {
					link2 = stack.value;
					stack = stack.prev;
				} else link2 = firstSub;
				if (dirty) {
					if (update(sub)) {
						if (hasMultipleSubs) shallowPropagate(firstSub);
						sub = link2.sub;
						continue;
					}
					dirty = false;
				} else sub.flags &= -33;
				sub = link2.sub;
				const nextDep = link2.nextDep;
				if (nextDep !== void 0) {
					link2 = nextDep;
					continue top;
				}
			}
			return dirty;
		} while (true);
	}
	function shallowPropagate(link2) {
		do {
			const sub = link2.sub;
			const flags = sub.flags;
			if ((flags & 48) === 32) {
				sub.flags = flags | 16;
				if ((flags & 6) === 2) notify(sub);
			}
		} while ((link2 = link2.nextSub) !== void 0);
	}
	function isValidLink(checkLink, sub) {
		let link2 = sub.depsTail;
		while (link2 !== void 0) {
			if (link2 === checkLink) return true;
			link2 = link2.prevDep;
		}
		return false;
	}
}
//#endregion
//#region node_modules/@tanstack/store/dist/esm/atom.js
function toObserver(nextHandler, errorHandler, completionHandler) {
	const isObserver = typeof nextHandler === "object";
	const self = isObserver ? nextHandler : void 0;
	return {
		next: (isObserver ? nextHandler.next : nextHandler)?.bind(self),
		error: (isObserver ? nextHandler.error : errorHandler)?.bind(self),
		complete: (isObserver ? nextHandler.complete : completionHandler)?.bind(self)
	};
}
var queuedEffects = [];
var cycle = 0;
var { link, unlink, propagate, checkDirty, shallowPropagate } = /* @__PURE__ */ createReactiveSystem({
	update(atom) {
		return atom._update();
	},
	notify(effect2) {
		queuedEffects[queuedEffectsLength++] = effect2;
		effect2.flags &= ~ReactiveFlags.Watching;
	},
	unwatched(atom) {
		if (atom.depsTail !== void 0) {
			atom.depsTail = void 0;
			atom.flags = ReactiveFlags.Mutable | ReactiveFlags.Dirty;
			purgeDeps(atom);
		}
	}
});
var notifyIndex = 0;
var queuedEffectsLength = 0;
var activeSub;
var batchDepth = 0;
function batch(fn) {
	try {
		++batchDepth;
		fn();
	} finally {
		if (!--batchDepth) flush();
	}
}
function purgeDeps(sub) {
	const depsTail = sub.depsTail;
	let dep = depsTail !== void 0 ? depsTail.nextDep : sub.deps;
	while (dep !== void 0) dep = unlink(dep, sub);
}
function flush() {
	if (batchDepth > 0) return;
	while (notifyIndex < queuedEffectsLength) {
		const effect2 = queuedEffects[notifyIndex];
		queuedEffects[notifyIndex++] = void 0;
		effect2.notify();
	}
	notifyIndex = 0;
	queuedEffectsLength = 0;
}
function createAtom(valueOrFn, options) {
	const isComputed = typeof valueOrFn === "function";
	const getter = valueOrFn;
	const atom = {
		_snapshot: isComputed ? void 0 : valueOrFn,
		subs: void 0,
		subsTail: void 0,
		deps: void 0,
		depsTail: void 0,
		flags: isComputed ? ReactiveFlags.None : ReactiveFlags.Mutable,
		get() {
			if (activeSub !== void 0) link(atom, activeSub, cycle);
			return atom._snapshot;
		},
		subscribe(observerOrFn) {
			const obs = toObserver(observerOrFn);
			const observed = { current: false };
			const e = effect(() => {
				atom.get();
				if (!observed.current) observed.current = true;
				else obs.next?.(atom._snapshot);
			});
			return { unsubscribe: () => {
				e.stop();
			} };
		},
		_update(getValue) {
			const prevSub = activeSub;
			const compare = options?.compare ?? Object.is;
			if (isComputed) {
				activeSub = atom;
				++cycle;
				atom.depsTail = void 0;
			} else if (getValue === void 0) return false;
			if (isComputed) atom.flags = ReactiveFlags.Mutable | ReactiveFlags.RecursedCheck;
			try {
				const oldValue = atom._snapshot;
				const newValue = typeof getValue === "function" ? getValue(oldValue) : getValue === void 0 && isComputed ? getter(oldValue) : getValue;
				if (oldValue === void 0 || !compare(oldValue, newValue)) {
					atom._snapshot = newValue;
					return true;
				}
				return false;
			} finally {
				activeSub = prevSub;
				if (isComputed) atom.flags &= ~ReactiveFlags.RecursedCheck;
				purgeDeps(atom);
			}
		}
	};
	if (isComputed) {
		atom.flags = ReactiveFlags.Mutable | ReactiveFlags.Dirty;
		atom.get = function() {
			const flags = atom.flags;
			if (flags & ReactiveFlags.Dirty || flags & ReactiveFlags.Pending && checkDirty(atom.deps, atom)) {
				if (atom._update()) {
					const subs = atom.subs;
					if (subs !== void 0) shallowPropagate(subs);
				}
			} else if (flags & ReactiveFlags.Pending) atom.flags = flags & ~ReactiveFlags.Pending;
			if (activeSub !== void 0) link(atom, activeSub, cycle);
			return atom._snapshot;
		};
	} else atom.set = function(valueOrFn2) {
		if (atom._update(valueOrFn2)) {
			const subs = atom.subs;
			if (subs !== void 0) {
				propagate(subs);
				shallowPropagate(subs);
				flush();
			}
		}
	};
	return atom;
}
function effect(fn) {
	const run = () => {
		const prevSub = activeSub;
		activeSub = effectObj;
		++cycle;
		effectObj.depsTail = void 0;
		effectObj.flags = ReactiveFlags.Watching | ReactiveFlags.RecursedCheck;
		try {
			return fn();
		} finally {
			activeSub = prevSub;
			effectObj.flags &= ~ReactiveFlags.RecursedCheck;
			purgeDeps(effectObj);
		}
	};
	const effectObj = {
		deps: void 0,
		depsTail: void 0,
		subs: void 0,
		subsTail: void 0,
		flags: ReactiveFlags.Watching | ReactiveFlags.RecursedCheck,
		notify() {
			const flags = this.flags;
			if (flags & ReactiveFlags.Dirty || flags & ReactiveFlags.Pending && checkDirty(this.deps, this)) run();
			else this.flags = ReactiveFlags.Watching;
		},
		stop() {
			this.flags = ReactiveFlags.None;
			this.depsTail = void 0;
			purgeDeps(this);
		}
	};
	run();
	return effectObj;
}
//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_shim_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
		var value = getSnapshot(), _useState = useState({ inst: {
			value,
			getSnapshot
		} }), inst = _useState[0].inst, forceUpdate = _useState[1];
		useLayoutEffect(function() {
			inst.value = value;
			inst.getSnapshot = getSnapshot;
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
		}, [
			subscribe,
			value,
			getSnapshot
		]);
		useEffect(function() {
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			return subscribe(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			});
		}, [subscribe]);
		useDebugValue(value);
		return value;
	}
	function checkIfSnapshotChanged(inst) {
		var latestGetSnapshot = inst.getSnapshot;
		inst = inst.value;
		try {
			var nextValue = latestGetSnapshot();
			return !objectIs(inst, nextValue);
		} catch (error) {
			return !0;
		}
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
		return getSnapshot();
	}
	var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
	exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
}));
//#endregion
//#region node_modules/use-sync-external-store/shim/index.js
var require_shim = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_use_sync_external_store_shim_production();
}));
//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js
/**
* @license React
* use-sync-external-store-shim/with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_with_selector_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react(), shim = require_shim();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
	exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
		var instRef = useRef(null);
		if (null === instRef.current) {
			var inst = {
				hasValue: !1,
				value: null
			};
			instRef.current = inst;
		} else inst = instRef.current;
		instRef = useMemo(function() {
			function memoizedSelector(nextSnapshot) {
				if (!hasMemo) {
					hasMemo = !0;
					memoizedSnapshot = nextSnapshot;
					nextSnapshot = selector(nextSnapshot);
					if (void 0 !== isEqual && inst.hasValue) {
						var currentSelection = inst.value;
						if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
					}
					return memoizedSelection = nextSnapshot;
				}
				currentSelection = memoizedSelection;
				if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
				var nextSelection = selector(nextSnapshot);
				if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
				memoizedSnapshot = nextSnapshot;
				return memoizedSelection = nextSelection;
			}
			var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
			return [function() {
				return memoizedSelector(getSnapshot());
			}, null === maybeGetServerSnapshot ? void 0 : function() {
				return memoizedSelector(maybeGetServerSnapshot());
			}];
		}, [
			getSnapshot,
			getServerSnapshot,
			selector,
			isEqual
		]);
		var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
		useEffect(function() {
			inst.hasValue = !0;
			inst.value = value;
		}, [value]);
		useDebugValue(value);
		return value;
	};
}));
//#endregion
//#region node_modules/@tanstack/react-store/dist/esm/useStore.js
var import_with_selector = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_with_selector_production();
})))();
function defaultCompare(a, b) {
	return a === b;
}
function useStore(atom, selector, compare = defaultCompare) {
	const subscribe = (0, import_react.useCallback)((handleStoreChange) => {
		if (!atom) return () => {};
		const { unsubscribe } = atom.subscribe(handleStoreChange);
		return unsubscribe;
	}, [atom]);
	const boundGetSnapshot = (0, import_react.useCallback)(() => atom?.get(), [atom]);
	return (0, import_with_selector.useSyncExternalStoreWithSelector)(subscribe, boundGetSnapshot, boundGetSnapshot, selector, compare);
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useMatch.js
var dummyStore = {
	get() {},
	subscribe() {
		return { unsubscribe() {} };
	}
};
function useStructuralSharing(opts, router) {
	const previousResult = import_react.useRef();
	return (slice) => {
		const selected = opts?.select ? opts.select(slice) : slice;
		if (opts?.structuralSharing ?? router.options.defaultStructuralSharing) return previousResult.current = replaceEqualDeep$1(previousResult.current, selected);
		return selected;
	};
}
/**
* Read and select the nearest or targeted route match.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useMatchHook
*/
function useMatch(opts) {
	const router = useRouter();
	const nearestMatchId = import_react.useContext(opts.from ? dummyMatchContext : matchContext);
	const matchStore = opts.from ? router.stores.getRouteMatchStore(opts.from) : router.stores.matchStores.get(nearestMatchId);
	const selector = useStructuralSharing(opts, router);
	const matchSelection = useStore(matchStore ?? dummyStore, (match) => match ? selector(match) : dummyStore);
	if (matchSelection !== dummyStore) return matchSelection;
	if (opts.shouldThrow ?? true) invariant();
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useLoaderData.js
/**
* Read and select the current route's loader data with type‑safety.
*
* Options:
* - `from`/`strict`: Choose which route's data to read and strictness
* - `select`: Map the loader data to a derived value
* - `structuralSharing`: Enable structural sharing for stable references
*
* @returns The loader data (or selected value) for the matched route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useLoaderDataHook
*/
function useLoaderData(opts) {
	return useMatch({
		from: opts.from,
		strict: opts.strict,
		structuralSharing: opts.structuralSharing,
		select: (match) => {
			return opts.select ? opts.select(match.loaderData) : match.loaderData;
		}
	});
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useLoaderDeps.js
/**
* Read and select the current route's loader dependencies object.
*
* Options:
* - `from`: Choose which route's loader deps to read
* - `select`: Map the deps to a derived value
* - `structuralSharing`: Enable structural sharing for stable references
*
* @returns The loader deps (or selected value) for the matched route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useLoaderDepsHook
*/
function useLoaderDeps(opts) {
	const { select, ...rest } = opts;
	return useMatch({
		...rest,
		select: (match) => {
			return select ? select(match.loaderDeps) : match.loaderDeps;
		}
	});
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useParams.js
/**
* Access the current route's path parameters with type-safety.
*
* Options:
* - `from`/`strict`: Specify the matched route and whether to enforce strict typing
* - `select`: Project the params object to a derived value for memoized renders
* - `structuralSharing`: Enable structural sharing for stable references
* - `shouldThrow`: Throw if the route is not found in strict contexts
*
* @returns The params object (or selected value) for the matched route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useParamsHook
*/
function useParams(opts) {
	return useMatch({
		from: opts.from,
		shouldThrow: opts.shouldThrow,
		structuralSharing: opts.structuralSharing,
		strict: opts.strict,
		select: (match) => {
			const params = opts.strict === false ? match.params : match._strictParams;
			return opts.select ? opts.select(params) : params;
		}
	});
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useSearch.js
/**
* Read and select the current route's search parameters with type-safety.
*
* Options:
* - `from`/`strict`: Control which route's search is read and how strictly it's typed
* - `select`: Map the search object to a derived value for render optimization
* - `structuralSharing`: Enable structural sharing for stable references
* - `shouldThrow`: Throw when the route is not found (strict contexts)
*
* @returns The search object (or selected value) for the matched route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useSearchHook
*/
function useSearch(opts) {
	return useMatch({
		from: opts.from,
		strict: opts.strict,
		shouldThrow: opts.shouldThrow,
		structuralSharing: opts.structuralSharing,
		select: (match) => {
			return opts.select ? opts.select(match.search) : match.search;
		}
	});
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useNavigate.js
/**
* Imperative navigation hook.
*
* Returns a stable `navigate(options)` function to change the current location
* programmatically. Prefer the `Link` component for user-initiated navigation,
* and use this hook from effects, callbacks, or handlers where imperative
* navigation is required.
*
* Options:
* - `from`: Optional route base used to resolve relative `to` paths.
*
* @returns A function that accepts `NavigateOptions`.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useNavigateHook
*/
function useNavigate(_defaultOpts) {
	const router = useRouter();
	return import_react.useCallback((options) => {
		return router.navigate({
			...options,
			from: options.from ?? _defaultOpts?.from
		});
	}, [_defaultOpts?.from, router]);
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useRouteContext.js
function useRouteContext(opts) {
	return useMatch({
		...opts,
		select: (match) => opts.select ? opts.select(match.context) : match.context
	});
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/link.js
var import_react_dom = require_react_dom();
/**
* Build anchor-like props for declarative navigation and preloading.
*
* Returns stable `href`, event handlers and accessibility props derived from
* router options and active state. Used internally by `Link` and custom links.
*
* Options cover `to`, `params`, `search`, `hash`, `state`, `preload`,
* `activeProps`, `inactiveProps`, and more.
*
* @returns React anchor props suitable for `<a>` or custom components.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useLinkPropsHook
*/
function useLinkProps(options, forwardedRef) {
	const router = useRouter();
	const innerRef = useForwardedRef(forwardedRef);
	const { activeProps, inactiveProps, activeOptions, to, preload: userPreload, preloadDelay: userPreloadDelay, preloadIntentProximity: _preloadIntentProximity, hashScrollIntoView, replace, startTransition, resetScroll, viewTransition, children, target, disabled, style, className, onClick, onBlur, onFocus, onMouseEnter, onMouseLeave, onTouchStart, ignoreBlocker, params: _params, search: _search, hash: _hash, state: _state, mask: _mask, reloadDocument: _reloadDocument, unsafeRelative: _unsafeRelative, from: _from, _fromLocation, ...propsSafeToSpread } = options;
	const isHydrated = useHydrated();
	const _options = import_react.useMemo(() => options, [
		router,
		options.from,
		options._fromLocation,
		options.hash,
		options.to,
		options.search,
		options.params,
		options.state,
		options.mask,
		options.unsafeRelative
	]);
	const currentLocation = useStore(router.stores.location, (l) => l, (prev, next) => prev.href === next.href);
	const next = import_react.useMemo(() => {
		const opts = {
			_fromLocation: currentLocation,
			..._options
		};
		return router.buildLocation(opts);
	}, [
		router,
		currentLocation,
		_options
	]);
	const hrefOptionPublicHref = next.maskedLocation ? next.maskedLocation.publicHref : next.publicHref;
	const hrefOptionExternal = next.maskedLocation ? next.maskedLocation.external : next.external;
	const hrefOption = import_react.useMemo(() => getHrefOption(hrefOptionPublicHref, hrefOptionExternal, router.history, disabled), [
		disabled,
		hrefOptionExternal,
		hrefOptionPublicHref,
		router.history
	]);
	const externalLink = import_react.useMemo(() => {
		if (hrefOption?.external) {
			if (isDangerousProtocol(hrefOption.href, router.protocolAllowlist)) return;
			return hrefOption.href;
		}
		if (isSafeInternal(to)) return void 0;
		if (typeof to !== "string" || to.indexOf(":") === -1) return void 0;
		try {
			new URL(to);
			if (isDangerousProtocol(to, router.protocolAllowlist)) return;
			return to;
		} catch {}
	}, [
		to,
		hrefOption,
		router.protocolAllowlist
	]);
	const isActive = import_react.useMemo(() => {
		if (externalLink) return false;
		if (activeOptions?.exact) {
			if (!exactPathTest(currentLocation.pathname, next.pathname, router.basepath)) return false;
		} else {
			const currentPathSplit = removeTrailingSlash(currentLocation.pathname, router.basepath);
			const nextPathSplit = removeTrailingSlash(next.pathname, router.basepath);
			if (!(currentPathSplit.startsWith(nextPathSplit) && (currentPathSplit.length === nextPathSplit.length || currentPathSplit[nextPathSplit.length] === "/"))) return false;
		}
		if (activeOptions?.includeSearch ?? true) {
			if (!deepEqual(currentLocation.search, next.search, {
				partial: !activeOptions?.exact,
				ignoreUndefined: !activeOptions?.explicitUndefined
			})) return false;
		}
		if (activeOptions?.includeHash) return isHydrated && currentLocation.hash === next.hash;
		return true;
	}, [
		activeOptions?.exact,
		activeOptions?.explicitUndefined,
		activeOptions?.includeHash,
		activeOptions?.includeSearch,
		currentLocation,
		externalLink,
		isHydrated,
		next.hash,
		next.pathname,
		next.search,
		router.basepath
	]);
	const resolvedActiveProps = isActive ? functionalUpdate$1(activeProps, {}) ?? STATIC_ACTIVE_OBJECT : STATIC_EMPTY_OBJECT;
	const resolvedInactiveProps = isActive ? STATIC_EMPTY_OBJECT : functionalUpdate$1(inactiveProps, {}) ?? STATIC_EMPTY_OBJECT;
	const resolvedClassName = [
		className,
		resolvedActiveProps.className,
		resolvedInactiveProps.className
	].filter(Boolean).join(" ");
	const resolvedStyle = (style || resolvedActiveProps.style || resolvedInactiveProps.style) && {
		...style,
		...resolvedActiveProps.style,
		...resolvedInactiveProps.style
	};
	const [isTransitioning, setIsTransitioning] = import_react.useState(false);
	const hasRenderFetched = import_react.useRef(false);
	const preload = options.reloadDocument || externalLink ? false : userPreload ?? router.options.defaultPreload;
	const preloadDelay = userPreloadDelay ?? router.options.defaultPreloadDelay ?? 0;
	const doPreload = import_react.useCallback(() => {
		router.preloadRoute({
			..._options,
			_builtLocation: next
		}).catch((err) => {
			console.warn(err);
			console.warn(preloadWarning);
		});
	}, [
		router,
		_options,
		next
	]);
	useIntersectionObserver(innerRef, import_react.useCallback((entry) => {
		if (entry?.isIntersecting) doPreload();
	}, [doPreload]), intersectionObserverOptions, { disabled: !!disabled || !(preload === "viewport") });
	import_react.useEffect(() => {
		if (hasRenderFetched.current) return;
		if (!disabled && preload === "render") {
			doPreload();
			hasRenderFetched.current = true;
		}
	}, [
		disabled,
		doPreload,
		preload
	]);
	const handleClick = (e) => {
		const elementTarget = e.currentTarget.getAttribute("target");
		const effectiveTarget = target !== void 0 ? target : elementTarget;
		if (!disabled && !isCtrlEvent(e) && !e.defaultPrevented && (!effectiveTarget || effectiveTarget === "_self") && e.button === 0) {
			e.preventDefault();
			(0, import_react_dom.flushSync)(() => {
				setIsTransitioning(true);
			});
			const unsub = router.subscribe("onResolved", () => {
				unsub();
				setIsTransitioning(false);
			});
			router.navigate({
				..._options,
				replace,
				resetScroll,
				hashScrollIntoView,
				startTransition,
				viewTransition,
				ignoreBlocker
			});
		}
	};
	if (externalLink) return {
		...propsSafeToSpread,
		ref: innerRef,
		href: externalLink,
		...children && { children },
		...target && { target },
		...disabled && { disabled },
		...style && { style },
		...className && { className },
		...onClick && { onClick },
		...onBlur && { onBlur },
		...onFocus && { onFocus },
		...onMouseEnter && { onMouseEnter },
		...onMouseLeave && { onMouseLeave },
		...onTouchStart && { onTouchStart }
	};
	const enqueueIntentPreload = (e) => {
		if (disabled || preload !== "intent") return;
		if (!preloadDelay) {
			doPreload();
			return;
		}
		const eventTarget = e.currentTarget;
		if (timeoutMap.has(eventTarget)) return;
		const id = setTimeout(() => {
			timeoutMap.delete(eventTarget);
			doPreload();
		}, preloadDelay);
		timeoutMap.set(eventTarget, id);
	};
	const handleTouchStart = (_) => {
		if (disabled || preload !== "intent") return;
		doPreload();
	};
	const handleLeave = (e) => {
		if (disabled || !preload || !preloadDelay) return;
		const eventTarget = e.currentTarget;
		const id = timeoutMap.get(eventTarget);
		if (id) {
			clearTimeout(id);
			timeoutMap.delete(eventTarget);
		}
	};
	return {
		...propsSafeToSpread,
		...resolvedActiveProps,
		...resolvedInactiveProps,
		href: hrefOption?.href,
		ref: innerRef,
		onClick: composeHandlers([onClick, handleClick]),
		onBlur: composeHandlers([onBlur, handleLeave]),
		onFocus: composeHandlers([onFocus, enqueueIntentPreload]),
		onMouseEnter: composeHandlers([onMouseEnter, enqueueIntentPreload]),
		onMouseLeave: composeHandlers([onMouseLeave, handleLeave]),
		onTouchStart: composeHandlers([onTouchStart, handleTouchStart]),
		disabled: !!disabled,
		target,
		...resolvedStyle && { style: resolvedStyle },
		...resolvedClassName && { className: resolvedClassName },
		...disabled && STATIC_DISABLED_PROPS,
		...isActive && STATIC_ACTIVE_PROPS,
		...isHydrated && isTransitioning && STATIC_TRANSITIONING_PROPS
	};
}
var STATIC_EMPTY_OBJECT = {};
var STATIC_ACTIVE_OBJECT = { className: "active" };
var STATIC_DISABLED_PROPS = {
	role: "link",
	"aria-disabled": true
};
var STATIC_ACTIVE_PROPS = {
	"data-status": "active",
	"aria-current": "page"
};
var STATIC_TRANSITIONING_PROPS = { "data-transitioning": "transitioning" };
var timeoutMap = /* @__PURE__ */ new WeakMap();
var intersectionObserverOptions = { rootMargin: "100px" };
var composeHandlers = (handlers) => (e) => {
	for (const handler of handlers) {
		if (!handler) continue;
		if (e.defaultPrevented) return;
		handler(e);
	}
};
function getHrefOption(publicHref, external, history, disabled) {
	if (disabled) return void 0;
	if (external) return {
		href: publicHref,
		external: true
	};
	return {
		href: history.createHref(publicHref) || "/",
		external: false
	};
}
function isSafeInternal(to) {
	if (typeof to !== "string") return false;
	const zero = to.charCodeAt(0);
	if (zero === 47) return to.charCodeAt(1) !== 47;
	return zero === 46;
}
/**
* A strongly-typed anchor component for declarative navigation.
* Handles path, search, hash and state updates with optional route preloading
* and active-state styling.
*
* Props:
* - `preload`: Controls route preloading (eg. 'intent', 'render', 'viewport', true/false)
* - `preloadDelay`: Delay in ms before preloading on hover
* - `activeProps`/`inactiveProps`: Additional props merged when link is active/inactive
* - `resetScroll`/`hashScrollIntoView`: Control scroll behavior on navigation
* - `viewTransition`/`startTransition`: Use View Transitions/React transitions for navigation
* - `ignoreBlocker`: Bypass registered blockers
*
* @returns An anchor-like element that navigates without full page reloads.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/linkComponent
*/
var Link = import_react.forwardRef((props, ref) => {
	const { _asChild, ...rest } = props;
	const { type: _type, ...linkProps } = useLinkProps(rest, ref);
	const children = typeof rest.children === "function" ? rest.children({ isActive: linkProps["data-status"] === "active" }) : rest.children;
	if (!_asChild) {
		const { disabled: _, ...rest } = linkProps;
		return import_react.createElement("a", rest, children);
	}
	return import_react.createElement(_asChild, linkProps, children);
});
function isCtrlEvent(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/route.js
var Route$19 = class extends BaseRoute {
	/**
	* @deprecated Use the `createRoute` function instead.
	*/
	constructor(options) {
		super(options);
		this.useMatch = (opts) => {
			return useMatch({
				select: opts?.select,
				from: this.id,
				structuralSharing: opts?.structuralSharing
			});
		};
		this.useRouteContext = (opts) => {
			return useRouteContext({
				...opts,
				from: this.id
			});
		};
		this.useSearch = (opts) => {
			return useSearch({
				select: opts?.select,
				structuralSharing: opts?.structuralSharing,
				from: this.id
			});
		};
		this.useParams = (opts) => {
			return useParams({
				select: opts?.select,
				structuralSharing: opts?.structuralSharing,
				from: this.id
			});
		};
		this.useLoaderDeps = (opts) => {
			return useLoaderDeps({
				...opts,
				from: this.id
			});
		};
		this.useLoaderData = (opts) => {
			return useLoaderData({
				...opts,
				from: this.id
			});
		};
		this.useNavigate = () => {
			return useNavigate({ from: this.fullPath });
		};
		this.Link = import_react.forwardRef((props, ref) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				ref,
				from: this.fullPath,
				...props
			});
		});
	}
};
/**
* Creates a non-root Route instance for code-based routing.
*
* Use this to define a route that will be composed into a route tree
* (typically via a parent route's `addChildren`). If you're using file-based
* routing, prefer `createFileRoute`.
*
* @param options Route options (path, component, loader, context, etc.).
* @returns A Route instance to be attached to the route tree.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createRouteFunction
*/
function createRoute(options) {
	return new Route$19(options);
}
/**
* Creates a root route factory that requires a router context type.
*
* Use when your root route expects `context` to be provided to `createRouter`.
* The returned function behaves like `createRootRoute` but enforces a context type.
*
* @returns A factory function to configure and return a root route.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createRootRouteWithContextFunction
*/
function createRootRouteWithContext() {
	return (options) => {
		return createRootRoute(options);
	};
}
var RootRoute = class extends BaseRootRoute {
	/**
	* @deprecated `RootRoute` is now an internal implementation detail. Use `createRootRoute()` instead.
	*/
	constructor(options) {
		super(options);
		this.useMatch = (opts) => {
			return useMatch({
				select: opts?.select,
				from: this.id,
				structuralSharing: opts?.structuralSharing
			});
		};
		this.useRouteContext = (opts) => {
			return useRouteContext({
				...opts,
				from: this.id
			});
		};
		this.useSearch = (opts) => {
			return useSearch({
				select: opts?.select,
				structuralSharing: opts?.structuralSharing,
				from: this.id
			});
		};
		this.useParams = (opts) => {
			return useParams({
				select: opts?.select,
				structuralSharing: opts?.structuralSharing,
				from: this.id
			});
		};
		this.useLoaderDeps = (opts) => {
			return useLoaderDeps({
				...opts,
				from: this.id
			});
		};
		this.useLoaderData = (opts) => {
			return useLoaderData({
				...opts,
				from: this.id
			});
		};
		this.useNavigate = () => {
			return useNavigate({ from: this.fullPath });
		};
		this.Link = import_react.forwardRef((props, ref) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				ref,
				from: this.fullPath,
				...props
			});
		});
	}
};
/**
* Creates a root Route instance used to build your route tree.
*
* Typically paired with `createRouter({ routeTree })`. If you need to require
* a typed router context, use `createRootRouteWithContext` instead.
*
* @param options Root route options (component, error, pending, etc.).
* @returns A root route instance.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createRootRouteFunction
*/
function createRootRoute(options) {
	return new RootRoute(options);
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/fileRoute.js
/**
* Creates a file-based Route factory for a given path.
*
* Used by TanStack Router's file-based routing to associate a file with a
* route. The returned function accepts standard route options. In normal usage
* the `path` string is inserted and maintained by the `tsr` generator.
*
* @param path File path literal for the route (usually auto-generated).
* @returns A function that accepts Route options and returns a Route instance.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createFileRouteFunction
*/
function createFileRoute(path) {
	return new FileRoute(path, { silent: true }).createRoute;
}
/** 
@deprecated It's no longer recommended to use the `FileRoute` class directly.
Instead, use `createFileRoute('/path/to/file')(options)` to create a file route.
*/
var FileRoute = class {
	constructor(path, _opts) {
		this.path = path;
		this.createRoute = (options) => {
			const route = createRoute(options);
			route.isRoot = false;
			return route;
		};
		this.silent = _opts?.silent;
	}
};
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/lazyRouteComponent.js
/**
* Wrap a dynamic import to create a route component that supports
* `.preload()` and friendly reload-on-module-missing behavior.
*
* @param importer Function returning a module promise
* @param exportName Named export to use (default: `default`)
* @returns A lazy route component compatible with TanStack Router
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/lazyRouteComponentFunction
*/
function lazyRouteComponent(importer, exportName) {
	let loadPromise;
	let comp;
	let error;
	let reload;
	const load = () => {
		if (!loadPromise) loadPromise = importer().then((res) => {
			loadPromise = void 0;
			comp = res[exportName ?? "default"];
		}).catch((err) => {
			error = err;
			if (isModuleNotFoundError(error)) {
				if (error instanceof Error && typeof window !== "undefined" && typeof sessionStorage !== "undefined") {
					const storageKey = `tanstack_router_reload:${error.message}`;
					if (!sessionStorage.getItem(storageKey)) {
						sessionStorage.setItem(storageKey, "1");
						reload = true;
					}
				}
			}
		});
		return loadPromise;
	};
	const lazyComp = function Lazy(props) {
		if (reload) {
			window.location.reload();
			throw new Promise(() => {});
		}
		if (error) throw error;
		if (!comp) if (reactUse) reactUse(load());
		else throw load();
		return import_react.createElement(comp, props);
	};
	lazyComp.preload = load;
	return lazyComp;
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/not-found.js
function CatchNotFound(props) {
	const router = useRouter();
	const resetKey = `not-found-${useStore(router.stores.location, (location) => location.pathname)}-${useStore(router.stores.status, (status) => status)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatchBoundary, {
		getResetKey: () => resetKey,
		onCatch: (error, errorInfo) => {
			if (isNotFound(error)) props.onCatch?.(error, errorInfo);
			else throw error;
		},
		errorComponent: ({ error }) => {
			if (isNotFound(error)) return props.fallback?.(error);
			else throw error;
		},
		children: props.children
	});
}
function DefaultGlobalNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Not Found" });
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/SafeFragment.js
function SafeFragment(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: props.children });
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/renderRouteNotFound.js
/**
* Renders a not found component for a route when no matching route is found.
*
* @param router - The router instance containing the route configuration
* @param route - The route that triggered the not found state
* @param data - Additional data to pass to the not found component
* @returns The rendered not found component or a default fallback component
*/
function renderRouteNotFound(router, route, data) {
	if (!route.options.notFoundComponent) {
		if (router.options.defaultNotFoundComponent) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(router.options.defaultNotFoundComponent, { ...data });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultGlobalNotFound, {});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(route.options.notFoundComponent, { ...data });
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/Match.js
var matchViewFieldsEqual = (a, b) => a.routeId === b.routeId && a._displayPending === b._displayPending;
var outletMatchSelectionEqual = (a, b) => a[0] === b[0] && a[1] === b[1];
var Match = import_react.memo(function MatchImpl({ matchId }) {
	const router = useRouter();
	const matchStore = router.stores.matchStores.get(matchId);
	if (!matchStore) invariant();
	const resetKey = useStore(router.stores.loadedAt, (loadedAt) => loadedAt);
	const match = useStore(matchStore, (value) => value, matchViewFieldsEqual);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatchView, {
		router,
		matchId,
		resetKey,
		matchState: import_react.useMemo(() => {
			const routeId = match.routeId;
			const parentRouteId = router.routesById[routeId].parentRoute?.id;
			return {
				routeId,
				ssr: match.ssr,
				_displayPending: match._displayPending,
				parentRouteId
			};
		}, [
			match._displayPending,
			match.routeId,
			match.ssr,
			router.routesById
		])
	});
});
function MatchView({ router, matchId, resetKey, matchState }) {
	const route = router.routesById[matchState.routeId];
	const PendingComponent = route.options.pendingComponent ?? router.options.defaultPendingComponent;
	const pendingElement = PendingComponent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PendingComponent, {}) : null;
	const routeErrorComponent = route.options.errorComponent ?? router.options.defaultErrorComponent;
	const routeOnCatch = route.options.onCatch ?? router.options.defaultOnCatch;
	const routeNotFoundComponent = route.isRoot ? route.options.notFoundComponent ?? router.options.notFoundRoute?.options.component : route.options.notFoundComponent;
	const resolvedNoSsr = matchState.ssr === false || matchState.ssr === "data-only";
	const ResolvedSuspenseBoundary = (!route.isRoot || route.options.wrapInSuspense || resolvedNoSsr) && (route.options.wrapInSuspense ?? PendingComponent ?? (route.options.errorComponent?.preload || resolvedNoSsr)) ? import_react.Suspense : SafeFragment;
	const ResolvedCatchBoundary = routeErrorComponent ? CatchBoundary : SafeFragment;
	const ResolvedNotFoundBoundary = routeNotFoundComponent ? CatchNotFound : SafeFragment;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(route.isRoot ? route.options.shellComponent ?? SafeFragment : SafeFragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(matchContext.Provider, {
		value: matchId,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResolvedSuspenseBoundary, {
			fallback: pendingElement,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResolvedCatchBoundary, {
				getResetKey: () => resetKey,
				errorComponent: routeErrorComponent || ErrorComponent$1,
				onCatch: (error, errorInfo) => {
					if (isNotFound(error)) {
						error.routeId ??= matchState.routeId;
						throw error;
					}
					routeOnCatch?.(error, errorInfo);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResolvedNotFoundBoundary, {
					fallback: (error) => {
						error.routeId ??= matchState.routeId;
						if (!routeNotFoundComponent || error.routeId && error.routeId !== matchState.routeId || !error.routeId && !route.isRoot) throw error;
						return import_react.createElement(routeNotFoundComponent, error);
					},
					children: resolvedNoSsr || matchState._displayPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, {
						fallback: pendingElement,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatchInner, { matchId })
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatchInner, { matchId })
				})
			})
		})
	}), matchState.parentRouteId === "__root__" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OnRendered, {}), (router.options.scrollRestoration, null)] }) : null] });
}
function OnRendered() {
	const router = useRouter();
	const prevResolvedLocationRef = import_react.useRef();
	useLayoutEffect(() => {
		const currentResolvedLocation = router.stores.resolvedLocation.get();
		const previousResolvedLocation = prevResolvedLocationRef.current;
		if (currentResolvedLocation && (!previousResolvedLocation || previousResolvedLocation.href !== currentResolvedLocation.href)) router.emit({
			type: "onRendered",
			...getLocationChangeInfo(router.stores.location.get(), previousResolvedLocation ?? currentResolvedLocation)
		});
		prevResolvedLocationRef.current = currentResolvedLocation;
	}, [useStore(router.stores.resolvedLocation, (resolvedLocation) => resolvedLocation?.state.__TSR_key), router]);
	return null;
}
var MatchInner = import_react.memo(function MatchInnerImpl({ matchId }) {
	const router = useRouter();
	const getMatchPromise = (match, key) => {
		return router.getMatch(match.id)?._nonReactive[key] ?? match._nonReactive[key];
	};
	const matchStore = router.stores.matchStores.get(matchId);
	if (!matchStore) invariant();
	const match = useStore(matchStore, (value) => value);
	const routeId = match.routeId;
	const route = router.routesById[routeId];
	const key = import_react.useMemo(() => {
		const remountDeps = (router.routesById[routeId].options.remountDeps ?? router.options.defaultRemountDeps)?.({
			routeId,
			loaderDeps: match.loaderDeps,
			params: match._strictParams,
			search: match._strictSearch
		});
		return remountDeps ? JSON.stringify(remountDeps) : void 0;
	}, [
		routeId,
		match.loaderDeps,
		match._strictParams,
		match._strictSearch,
		router.options.defaultRemountDeps,
		router.routesById
	]);
	const out = import_react.useMemo(() => {
		const Comp = route.options.component ?? router.options.defaultComponent;
		if (Comp) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {}, key);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	}, [
		key,
		route.options.component,
		router.options.defaultComponent
	]);
	if (match._displayPending) throw getMatchPromise(match, "displayPendingPromise");
	if (match._forcePending) throw getMatchPromise(match, "minPendingPromise");
	if (match.status === "pending") {
		const pendingMinMs = route.options.pendingMinMs ?? router.options.defaultPendingMinMs;
		if (pendingMinMs) {
			const routerMatch = router.getMatch(match.id);
			if (routerMatch && !routerMatch._nonReactive.minPendingPromise) {
				const minPendingPromise = createControlledPromise();
				routerMatch._nonReactive.minPendingPromise = minPendingPromise;
				setTimeout(() => {
					minPendingPromise.resolve();
					routerMatch._nonReactive.minPendingPromise = void 0;
				}, pendingMinMs);
			}
		}
		throw getMatchPromise(match, "loadPromise");
	}
	if (match.status === "notFound") {
		if (!isNotFound(match.error)) invariant();
		return renderRouteNotFound(router, route, match.error);
	}
	if (match.status === "redirected") {
		if (!isRedirect(match.error)) invariant();
		throw getMatchPromise(match, "loadPromise");
	}
	if (match.status === "error") throw match.error;
	return out;
});
/**
* Render the next child match in the route tree. Typically used inside
* a route component to render nested routes.
*
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/outletComponent
*/
var Outlet = import_react.memo(function OutletImpl() {
	const router = useRouter();
	const matchId = import_react.useContext(matchContext);
	let routeId;
	let parentGlobalNotFound = false;
	let childMatchId;
	{
		const parentMatchStore = matchId ? router.stores.matchStores.get(matchId) : void 0;
		[routeId, parentGlobalNotFound] = useStore(parentMatchStore, (match) => [match?.routeId, match?.globalNotFound ?? false], outletMatchSelectionEqual);
		childMatchId = useStore(router.stores.matchesId, (ids) => {
			return ids[ids.findIndex((id) => id === matchId) + 1];
		});
	}
	const route = routeId ? router.routesById[routeId] : void 0;
	const pendingElement = router.options.defaultPendingComponent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(router.options.defaultPendingComponent, {}) : null;
	if (parentGlobalNotFound) {
		if (!route) invariant();
		return renderRouteNotFound(router, route, void 0);
	}
	if (!childMatchId) return null;
	const nextMatch = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Match, { matchId: childMatchId });
	if (routeId === "__root__") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: pendingElement,
		children: nextMatch
	});
	return nextMatch;
});
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/Transitioner.js
function Transitioner() {
	const router = useRouter();
	const mountLoadForRouter = import_react.useRef({
		router,
		mounted: false
	});
	const [isTransitioning, setIsTransitioning] = import_react.useState(false);
	const isLoading = useStore(router.stores.isLoading, (value) => value);
	const hasPending = useStore(router.stores.hasPending, (value) => value);
	const previousIsLoading = usePrevious(isLoading);
	const isAnyPending = isLoading || isTransitioning || hasPending;
	const previousIsAnyPending = usePrevious(isAnyPending);
	const isPagePending = isLoading || hasPending;
	const previousIsPagePending = usePrevious(isPagePending);
	router.startTransition = (fn) => {
		setIsTransitioning(true);
		import_react.startTransition(() => {
			fn();
			setIsTransitioning(false);
		});
	};
	import_react.useEffect(() => {
		const unsub = router.history.subscribe(router.load);
		const nextLocation = router.buildLocation({
			to: router.latestLocation.pathname,
			search: true,
			params: true,
			hash: true,
			state: true,
			_includeValidateSearch: true
		});
		if (trimPathRight(router.latestLocation.publicHref) !== trimPathRight(nextLocation.publicHref)) router.commitLocation({
			...nextLocation,
			replace: true
		});
		return () => {
			unsub();
		};
	}, [router, router.history]);
	useLayoutEffect(() => {
		if (typeof window !== "undefined" && router.ssr || mountLoadForRouter.current.router === router && mountLoadForRouter.current.mounted) return;
		mountLoadForRouter.current = {
			router,
			mounted: true
		};
		const tryLoad = async () => {
			try {
				await router.load();
			} catch (err) {
				console.error(err);
			}
		};
		tryLoad();
	}, [router]);
	useLayoutEffect(() => {
		if (previousIsLoading && !isLoading) router.emit({
			type: "onLoad",
			...getLocationChangeInfo(router.stores.location.get(), router.stores.resolvedLocation.get())
		});
	}, [
		previousIsLoading,
		router,
		isLoading
	]);
	useLayoutEffect(() => {
		if (previousIsPagePending && !isPagePending) router.emit({
			type: "onBeforeRouteMount",
			...getLocationChangeInfo(router.stores.location.get(), router.stores.resolvedLocation.get())
		});
	}, [
		isPagePending,
		previousIsPagePending,
		router
	]);
	useLayoutEffect(() => {
		if (previousIsAnyPending && !isAnyPending) {
			const changeInfo = getLocationChangeInfo(router.stores.location.get(), router.stores.resolvedLocation.get());
			router.emit({
				type: "onResolved",
				...changeInfo
			});
			batch(() => {
				router.stores.status.set("idle");
				router.stores.resolvedLocation.set(router.stores.location.get());
			});
		}
	}, [
		isAnyPending,
		previousIsAnyPending,
		router
	]);
	return null;
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/Matches.js
/**
* Internal component that renders the router's active match tree with
* suspense, error, and not-found boundaries. Rendered by `RouterProvider`.
*/
function Matches() {
	const router = useRouter();
	const PendingComponent = router.routesById["__root__"].options.pendingComponent ?? router.options.defaultPendingComponent;
	const pendingElement = PendingComponent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PendingComponent, {}) : null;
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(typeof document !== "undefined" && router.ssr ? SafeFragment : import_react.Suspense, {
		fallback: pendingElement,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transitioner, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatchesInner, {})]
	});
	return router.options.InnerWrap ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(router.options.InnerWrap, { children: inner }) : inner;
}
function MatchesInner() {
	const router = useRouter();
	const matchId = useStore(router.stores.firstId, (id) => id);
	const resetKey = useStore(router.stores.loadedAt, (loadedAt) => loadedAt);
	const matchComponent = matchId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Match, { matchId }) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(matchContext.Provider, {
		value: matchId,
		children: router.options.disableGlobalCatchBoundary ? matchComponent : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatchBoundary, {
			getResetKey: () => resetKey,
			errorComponent: ErrorComponent$1,
			onCatch: void 0,
			children: matchComponent
		})
	});
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/routerStores.js
var getStoreFactory = (opts) => {
	return {
		createMutableStore: createAtom,
		createReadonlyStore: createAtom,
		batch
	};
};
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/router.js
/**
* Creates a new Router instance for React.
*
* Pass the returned router to `RouterProvider` to enable routing.
* Notable options: `routeTree` (your route definitions) and `context`
* (required if the root route was created with `createRootRouteWithContext`).
*
* @param options Router options used to configure the router.
* @returns A Router instance to be provided to `RouterProvider`.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createRouterFunction
*/
var createRouter = (options) => {
	return new Router(options);
};
var Router = class extends RouterCore {
	constructor(options) {
		super(options, getStoreFactory);
	}
};
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/RouterProvider.js
/**
* Low-level provider that places the router into React context and optionally
* updates router options from props. Most apps should use `RouterProvider`.
*/
function RouterContextProvider({ router, children, ...rest }) {
	if (hasKeys(rest)) router.update({
		...router.options,
		...rest,
		context: {
			...router.options.context,
			...rest.context
		}
	});
	const provider = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(routerContext.Provider, {
		value: router,
		children
	});
	if (router.options.Wrap) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(router.options.Wrap, { children: provider });
	return provider;
}
/**
* Top-level component that renders the active route matches and provides the
* router to the React tree via context.
*
* Accepts the same options as `createRouter` via props to update the router
* instance after creation.
*
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createRouterFunction
*/
function RouterProvider({ router, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouterContextProvider, {
		router,
		...rest,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Matches, {})
	});
}
function setScriptAttrs(script, attrs) {
	if (!attrs) return;
	for (const [key, value] of Object.entries(attrs)) if (key !== "suppressHydrationWarning" && value !== void 0 && value !== false) script.setAttribute(key, typeof value === "boolean" ? "" : String(value));
}
function Asset(asset) {
	const { attrs, children, nonce, preventScriptHoist } = asset;
	switch (asset.tag) {
		case "title": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
			...attrs,
			suppressHydrationWarning: true,
			children
		});
		case "meta": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
			...attrs,
			suppressHydrationWarning: true
		});
		case "link": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			...attrs,
			precedence: attrs?.precedence ?? (attrs?.rel === "stylesheet" ? "default" : void 0),
			nonce,
			suppressHydrationWarning: true
		});
		case "style":
			if (asset.inlineCss && false);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
				...attrs,
				dangerouslySetInnerHTML: { __html: children },
				nonce
			});
		case "script": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Script, {
			attrs,
			preventScriptHoist,
			children
		});
		default: return null;
	}
}
function Script({ attrs, children, preventScriptHoist }) {
	useRouter();
	const hydrated = useHydrated();
	const dataScript = typeof attrs?.type === "string" && attrs.type !== "" && attrs.type !== "text/javascript" && attrs.type !== "module";
	import_react.useEffect(() => {
		if (dataScript) return;
		if (attrs?.src) {
			const normSrc = (() => {
				try {
					const base = document.baseURI || window.location.href;
					return new URL(attrs.src, base).href;
				} catch {
					return attrs.src;
				}
			})();
			for (const el of document.querySelectorAll("script[src]")) if (el.src === normSrc) return;
			const script = document.createElement("script");
			setScriptAttrs(script, attrs);
			document.head.appendChild(script);
			return () => script.remove();
		}
		if (typeof children === "string") {
			const typeAttr = typeof attrs?.type === "string" ? attrs.type : "text/javascript";
			const nonceAttr = typeof attrs?.nonce === "string" ? attrs.nonce : void 0;
			for (const el of document.querySelectorAll("script:not([src])")) {
				if (!(el instanceof HTMLScriptElement)) continue;
				const sType = el.getAttribute("type") ?? "text/javascript";
				const sNonce = el.getAttribute("nonce") ?? void 0;
				if (el.textContent === children && sType === typeAttr && sNonce === nonceAttr) return;
			}
			const script = document.createElement("script");
			script.textContent = children;
			setScriptAttrs(script, attrs);
			document.head.appendChild(script);
			return () => script.remove();
		}
	}, [
		attrs,
		children,
		dataScript
	]);
	if (dataScript && typeof children === "string") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		...attrs,
		suppressHydrationWarning: true,
		dangerouslySetInnerHTML: { __html: children }
	});
	if (!hydrated) {
		if (attrs?.src) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			...attrs,
			suppressHydrationWarning: true
		});
		if (typeof children === "string") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			...attrs,
			dangerouslySetInnerHTML: { __html: children },
			suppressHydrationWarning: true
		});
	}
	return null;
}
/**
* Build the list of head/link/meta/script tags to render for active matches.
* Used internally by `HeadContent`.
*/
var useTags = (assetCrossOrigin) => {
	const router = useRouter();
	const nonce = router.options.ssr?.nonce;
	const routeMeta = useStore(router.stores.matches, (matches) => {
		return matches.map((match) => match.meta).filter((meta) => meta !== void 0);
	}, deepEqual);
	const meta = import_react.useMemo(() => {
		const resultMeta = [];
		const metaByAttribute = {};
		let title;
		for (let i = routeMeta.length - 1; i >= 0; i--) {
			const metas = routeMeta[i];
			for (let j = metas.length - 1; j >= 0; j--) {
				const m = metas[j];
				if (!m) continue;
				if (m.title) {
					if (!title) title = {
						tag: "title",
						children: m.title
					};
				} else if ("script:ld+json" in m) try {
					const json = JSON.stringify(m["script:ld+json"]);
					resultMeta.push({
						tag: "script",
						attrs: { type: "application/ld+json" },
						children: escapeHtml(json)
					});
				} catch {}
				else {
					const attribute = m.name ?? m.property;
					if (attribute) if (metaByAttribute[attribute]) continue;
					else metaByAttribute[attribute] = true;
					resultMeta.push({
						tag: "meta",
						attrs: {
							...m,
							nonce
						}
					});
				}
			}
		}
		if (title) resultMeta.push(title);
		if (nonce) resultMeta.push({
			tag: "meta",
			attrs: {
				property: "csp-nonce",
				content: nonce
			}
		});
		resultMeta.reverse();
		return resultMeta;
	}, [routeMeta, nonce]);
	const links = useStore(router.stores.matches, (matches) => {
		return matches.flatMap((match) => match.links ?? []).filter((link) => link !== void 0).map((link) => ({
			tag: "link",
			attrs: {
				...link,
				nonce
			}
		}));
	}, deepEqual);
	const manifestCssTags = useStore(router.stores.matches, (matches) => {
		const manifest = router.ssr?.manifest;
		const tags = [];
		if (!manifest) return tags;
		matches.forEach((match) => {
			manifest.routes[match.routeId]?.css?.forEach((link) => {
				const resolvedLink = resolveManifestCssLink(link);
				tags.push({
					tag: "link",
					attrs: {
						rel: "stylesheet",
						...resolvedLink,
						crossOrigin: getAssetCrossOrigin(assetCrossOrigin, "stylesheet") ?? resolvedLink.crossOrigin,
						suppressHydrationWarning: true,
						nonce
					}
				});
			});
		});
		if (manifest.inlineStyle) tags.push({
			tag: "style",
			attrs: {
				...manifest.inlineStyle.attrs,
				nonce
			},
			children: manifest.inlineStyle.children,
			inlineCss: true
		});
		return tags;
	}, deepEqual);
	const preloadLinks = useStore(router.stores.matches, (matches) => {
		const preloadLinks = [];
		const manifest = router.ssr?.manifest;
		if (!manifest) return preloadLinks;
		matches.forEach((match) => {
			manifest.routes[match.routeId]?.preloads?.forEach((preload) => {
				preloadLinks.push({
					tag: "link",
					attrs: {
						...getScriptPreloadAttrs(manifest, preload, assetCrossOrigin),
						nonce
					}
				});
			});
		});
		return preloadLinks;
	}, deepEqual);
	const styles = useStore(router.stores.matches, (matches) => {
		return matches.flatMap((match) => match.styles ?? []).filter((style) => style !== void 0).map(({ children, ...attrs }) => ({
			tag: "style",
			attrs: {
				...attrs,
				nonce
			},
			children
		}));
	}, deepEqual);
	const headScripts = useStore(router.stores.matches, (matches) => {
		return matches.flatMap((match) => match.headScripts ?? []).filter((script) => script !== void 0).map(({ children, ...script }) => ({
			tag: "script",
			attrs: {
				...script,
				nonce
			},
			children
		}));
	}, deepEqual);
	const tags = [];
	appendUniqueUserTags(tags, meta);
	tags.push(...preloadLinks);
	appendUniqueUserTags(tags, links);
	tags.push(...manifestCssTags);
	appendUniqueUserTags(tags, styles);
	appendUniqueUserTags(tags, headScripts);
	return tags;
};
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/HeadContent.js
/**
* Render route-managed head tags (title, meta, links, styles, head scripts).
* Place inside the document head of your app shell.
* @link https://tanstack.com/router/latest/docs/framework/react/guide/document-head-management
*/
function HeadContent(props) {
	const tags = useTags(props.assetCrossOrigin);
	const nonce = useRouter().options.ssr?.nonce;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: tags.map((tag) => /* @__PURE__ */ (0, import_react.createElement)(Asset, {
		...tag,
		key: `tsr-meta-${JSON.stringify(tag)}`,
		nonce
	})) });
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/Scripts.js
/**
* Render body script tags collected from route matches and SSR manifests.
* Should be placed near the end of the document body.
*/
var Scripts = () => {
	const router = useRouter();
	const nonce = router.options.ssr?.nonce;
	const getAssetScripts = (matches) => {
		const assetScripts = [];
		const manifest = router.ssr?.manifest;
		if (!manifest) return [];
		for (const match of matches) {
			const scripts = manifest.routes[match.routeId]?.scripts;
			if (!scripts) continue;
			for (const asset of scripts) assetScripts.push({
				tag: "script",
				attrs: {
					...asset.attrs,
					nonce
				},
				children: asset.children,
				...typeof asset.attrs?.src === "string" ? { preventScriptHoist: true } : {}
			});
		}
		return assetScripts;
	};
	const getScripts = (matches) => matches.map((match) => match.scripts).flat(1).filter(Boolean).map(({ children, ...script }) => ({
		tag: "script",
		attrs: {
			...script,
			suppressHydrationWarning: true,
			nonce
		},
		children
	}));
	const assetScripts = useStore(router.stores.matches, getAssetScripts, deepEqual);
	return renderScripts(router, useStore(router.stores.matches, getScripts, deepEqual), assetScripts);
};
function renderScripts(router, scripts, assetScripts) {
	const allScripts = [...scripts, ...assetScripts];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: allScripts.map((asset, i) => /* @__PURE__ */ (0, import_react.createElement)(Asset, {
		...asset,
		key: `tsr-scripts-${asset.tag}-${i}`
	})) });
}
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/createMiddleware.js
var createMiddleware = (options, __opts) => {
	const resolvedOptions = {
		type: "request",
		...__opts || options
	};
	const setValidator = (validator) => {
		return createMiddleware({}, Object.assign(resolvedOptions, {
			validator,
			inputValidator: validator
		}));
	};
	return {
		options: resolvedOptions,
		middleware: (middleware) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { middleware }));
		},
		validator: setValidator,
		inputValidator: setValidator,
		client: (client) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { client }));
		},
		server: (server) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { server }));
		}
	};
};
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/createStart.js
function dedupeSerializationAdapters(deduped, serializationAdapters) {
	for (let i = 0, len = serializationAdapters.length; i < len; i++) {
		const current = serializationAdapters[i];
		if (!deduped.has(current)) {
			deduped.add(current);
			if (current.extends) dedupeSerializationAdapters(deduped, current.extends);
		}
	}
}
var createStart = (getOptions) => {
	return {
		getOptions: async () => {
			const options = await getOptions();
			if (options.serializationAdapters) {
				const deduped = /* @__PURE__ */ new Set();
				dedupeSerializationAdapters(deduped, options.serializationAdapters);
				options.serializationAdapters = Array.from(deduped);
			}
			return options;
		},
		createMiddleware
	};
};
//#endregion
//#region src/start.ts
var errorMiddleware = createMiddleware();
var startInstance = createStart(() => ({
	requestMiddleware: [errorMiddleware],
	ssr: false
}));
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/subscribable.js
var Subscribable = class {
	constructor() {
		this.listeners = /* @__PURE__ */ new Set();
		this.subscribe = this.subscribe.bind(this);
	}
	subscribe(listener) {
		this.listeners.add(listener);
		this.onSubscribe();
		return () => {
			this.listeners.delete(listener);
			this.onUnsubscribe();
		};
	}
	hasListeners() {
		return this.listeners.size > 0;
	}
	onSubscribe() {}
	onUnsubscribe() {}
};
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/focusManager.js
var FocusManager = class extends Subscribable {
	#focused;
	#cleanup;
	#setup;
	constructor() {
		super();
		this.#setup = (onFocus) => {
			if (typeof window !== "undefined" && window.addEventListener) {
				const listener = () => onFocus();
				window.addEventListener("visibilitychange", listener, false);
				return () => {
					window.removeEventListener("visibilitychange", listener);
				};
			}
		};
	}
	onSubscribe() {
		if (!this.#cleanup) this.setEventListener(this.#setup);
	}
	onUnsubscribe() {
		if (!this.hasListeners()) {
			this.#cleanup?.();
			this.#cleanup = void 0;
		}
	}
	setEventListener(setup) {
		this.#setup = setup;
		this.#cleanup?.();
		this.#cleanup = setup((focused) => {
			if (typeof focused === "boolean") this.setFocused(focused);
			else this.onFocus();
		});
	}
	setFocused(focused) {
		if (this.#focused !== focused) {
			this.#focused = focused;
			this.onFocus();
		}
	}
	onFocus() {
		const isFocused = this.isFocused();
		this.listeners.forEach((listener) => {
			listener(isFocused);
		});
	}
	isFocused() {
		if (typeof this.#focused === "boolean") return this.#focused;
		return globalThis.document?.visibilityState !== "hidden";
	}
};
var focusManager = new FocusManager();
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/timeoutManager.js
var defaultTimeoutProvider = {
	setTimeout: (callback, delay) => setTimeout(callback, delay),
	clearTimeout: (timeoutId) => clearTimeout(timeoutId),
	setInterval: (callback, delay) => setInterval(callback, delay),
	clearInterval: (intervalId) => clearInterval(intervalId)
};
var TimeoutManager = class {
	#provider = defaultTimeoutProvider;
	#providerCalled = false;
	setTimeoutProvider(provider) {
		this.#provider = provider;
	}
	setTimeout(callback, delay) {
		return this.#provider.setTimeout(callback, delay);
	}
	clearTimeout(timeoutId) {
		this.#provider.clearTimeout(timeoutId);
	}
	setInterval(callback, delay) {
		return this.#provider.setInterval(callback, delay);
	}
	clearInterval(intervalId) {
		this.#provider.clearInterval(intervalId);
	}
};
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
	setTimeout(callback, 0);
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/utils.js
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop() {}
function functionalUpdate(updater, input) {
	return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
	return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
	return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
	return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveQueryBoolean(option, query) {
	return typeof option === "function" ? option(query) : option;
}
function matchQuery(filters, query) {
	const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
	if (queryKey) {
		if (exact) {
			if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) return false;
		} else if (!partialMatchKey(query.queryKey, queryKey)) return false;
	}
	if (type !== "all") {
		const isActive = query.isActive();
		if (type === "active" && !isActive) return false;
		if (type === "inactive" && isActive) return false;
	}
	if (typeof stale === "boolean" && query.isStale() !== stale) return false;
	if (fetchStatus && fetchStatus !== query.state.fetchStatus) return false;
	if (predicate && !predicate(query)) return false;
	return true;
}
function matchMutation(filters, mutation) {
	const { exact, status, predicate, mutationKey } = filters;
	if (mutationKey) {
		if (!mutation.options.mutationKey) return false;
		if (exact) {
			if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) return false;
		} else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) return false;
	}
	if (status && mutation.state.status !== status) return false;
	if (predicate && !predicate(mutation)) return false;
	return true;
}
function hashQueryKeyByOptions(queryKey, options) {
	return (options?.queryKeyHashFn || hashKey)(queryKey);
}
function hashKey(queryKey) {
	return JSON.stringify(queryKey, (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
		result[key] = val[key];
		return result;
	}, {}) : val);
}
function partialMatchKey(a, b) {
	if (a === b) return true;
	if (typeof a !== typeof b) return false;
	if (a && b && typeof a === "object" && typeof b === "object") return Object.keys(b).every((key) => partialMatchKey(a[key], b[key]));
	return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b, depth = 0) {
	if (a === b) return a;
	if (depth > 500) return b;
	const array = isPlainArray(a) && isPlainArray(b);
	if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
	const aSize = (array ? a : Object.keys(a)).length;
	const bItems = array ? b : Object.keys(b);
	const bSize = bItems.length;
	const copy = array ? new Array(bSize) : {};
	let equalItems = 0;
	for (let i = 0; i < bSize; i++) {
		const key = array ? i : bItems[i];
		const aItem = a[key];
		const bItem = b[key];
		if (aItem === bItem) {
			copy[key] = aItem;
			if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
			continue;
		}
		if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
			copy[key] = bItem;
			continue;
		}
		const v = replaceEqualDeep(aItem, bItem, depth + 1);
		copy[key] = v;
		if (v === aItem) equalItems++;
	}
	return aSize === bSize && equalItems === aSize ? a : copy;
}
function isPlainArray(value) {
	return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
	if (!hasObjectPrototype(o)) return false;
	const ctor = o.constructor;
	if (ctor === void 0) return true;
	const prot = ctor.prototype;
	if (!hasObjectPrototype(prot)) return false;
	if (!prot.hasOwnProperty("isPrototypeOf")) return false;
	if (Object.getPrototypeOf(o) !== Object.prototype) return false;
	return true;
}
function hasObjectPrototype(o) {
	return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
	return new Promise((resolve) => {
		timeoutManager.setTimeout(resolve, timeout);
	});
}
function replaceData(prevData, data, options) {
	if (typeof options.structuralSharing === "function") return options.structuralSharing(prevData, data);
	else if (options.structuralSharing !== false) return replaceEqualDeep(prevData, data);
	return data;
}
function addToEnd(items, item, max = 0) {
	const newItems = [...items, item];
	return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
	const newItems = [item, ...items];
	return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = /* @__PURE__ */ Symbol();
function ensureQueryFn(options, fetchOptions) {
	if (!options.queryFn && fetchOptions?.initialPromise) return () => fetchOptions.initialPromise;
	if (!options.queryFn || options.queryFn === skipToken) return () => Promise.reject(/* @__PURE__ */ new Error(`Missing queryFn: '${options.queryHash}'`));
	return options.queryFn;
}
function addConsumeAwareSignal(object, getSignal, onCancelled) {
	let consumed = false;
	let signal;
	Object.defineProperty(object, "signal", {
		enumerable: true,
		get: () => {
			signal ??= getSignal();
			if (consumed) return signal;
			consumed = true;
			if (signal.aborted) onCancelled();
			else signal.addEventListener("abort", onCancelled, { once: true });
			return signal;
		}
	});
	return object;
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/environmentManager.js
var environmentManager = /* @__PURE__ */ (() => {
	let isServerFn = () => isServer;
	return {
		/**
		* Returns whether the current runtime should be treated as a server environment.
		*/
		isServer() {
			return isServerFn();
		},
		/**
		* Overrides the server check globally.
		*/
		setIsServer(isServerValue) {
			isServerFn = isServerValue;
		}
	};
})();
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/thenable.js
function pendingThenable() {
	let resolve;
	let reject;
	const thenable = new Promise((_resolve, _reject) => {
		resolve = _resolve;
		reject = _reject;
	});
	thenable.status = "pending";
	thenable.catch(() => {});
	function finalize(data) {
		Object.assign(thenable, data);
		delete thenable.resolve;
		delete thenable.reject;
	}
	thenable.resolve = (value) => {
		finalize({
			status: "fulfilled",
			value
		});
		resolve(value);
	};
	thenable.reject = (reason) => {
		finalize({
			status: "rejected",
			reason
		});
		reject(reason);
	};
	return thenable;
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/notifyManager.js
var defaultScheduler = systemSetTimeoutZero;
function createNotifyManager() {
	let queue = [];
	let transactions = 0;
	let notifyFn = (callback) => {
		callback();
	};
	let batchNotifyFn = (callback) => {
		callback();
	};
	let scheduleFn = defaultScheduler;
	const schedule = (callback) => {
		if (transactions) queue.push(callback);
		else scheduleFn(() => {
			notifyFn(callback);
		});
	};
	const flush = () => {
		const originalQueue = queue;
		queue = [];
		if (originalQueue.length) scheduleFn(() => {
			batchNotifyFn(() => {
				originalQueue.forEach((callback) => {
					notifyFn(callback);
				});
			});
		});
	};
	return {
		batch: (callback) => {
			let result;
			transactions++;
			try {
				result = callback();
			} finally {
				transactions--;
				if (!transactions) flush();
			}
			return result;
		},
		/**
		* All calls to the wrapped function will be batched.
		*/
		batchCalls: (callback) => {
			return (...args) => {
				schedule(() => {
					callback(...args);
				});
			};
		},
		schedule,
		/**
		* Use this method to set a custom notify function.
		* This can be used to for example wrap notifications with `React.act` while running tests.
		*/
		setNotifyFunction: (fn) => {
			notifyFn = fn;
		},
		/**
		* Use this method to set a custom function to batch notifications together into a single tick.
		* By default React Query will use the batch function provided by ReactDOM or React Native.
		*/
		setBatchNotifyFunction: (fn) => {
			batchNotifyFn = fn;
		},
		setScheduler: (fn) => {
			scheduleFn = fn;
		}
	};
}
var notifyManager = createNotifyManager();
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/onlineManager.js
var OnlineManager = class extends Subscribable {
	#online = true;
	#cleanup;
	#setup;
	constructor() {
		super();
		this.#setup = (onOnline) => {
			if (typeof window !== "undefined" && window.addEventListener) {
				const onlineListener = () => onOnline(true);
				const offlineListener = () => onOnline(false);
				window.addEventListener("online", onlineListener, false);
				window.addEventListener("offline", offlineListener, false);
				return () => {
					window.removeEventListener("online", onlineListener);
					window.removeEventListener("offline", offlineListener);
				};
			}
		};
	}
	onSubscribe() {
		if (!this.#cleanup) this.setEventListener(this.#setup);
	}
	onUnsubscribe() {
		if (!this.hasListeners()) {
			this.#cleanup?.();
			this.#cleanup = void 0;
		}
	}
	setEventListener(setup) {
		this.#setup = setup;
		this.#cleanup?.();
		this.#cleanup = setup(this.setOnline.bind(this));
	}
	setOnline(online) {
		if (this.#online !== online) {
			this.#online = online;
			this.listeners.forEach((listener) => {
				listener(online);
			});
		}
	}
	isOnline() {
		return this.#online;
	}
};
var onlineManager = new OnlineManager();
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/retryer.js
function defaultRetryDelay(failureCount) {
	return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
	return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
}
var CancelledError = class extends Error {
	constructor(options) {
		super("CancelledError");
		this.revert = options?.revert;
		this.silent = options?.silent;
	}
};
function createRetryer(config) {
	let isRetryCancelled = false;
	let failureCount = 0;
	let continueFn;
	const thenable = pendingThenable();
	const isResolved = () => thenable.status !== "pending";
	const cancel = (cancelOptions) => {
		if (!isResolved()) {
			const error = new CancelledError(cancelOptions);
			reject(error);
			config.onCancel?.(error);
		}
	};
	const cancelRetry = () => {
		isRetryCancelled = true;
	};
	const continueRetry = () => {
		isRetryCancelled = false;
	};
	const canContinue = () => focusManager.isFocused() && (config.networkMode === "always" || onlineManager.isOnline()) && config.canRun();
	const canStart = () => canFetch(config.networkMode) && config.canRun();
	const resolve = (value) => {
		if (!isResolved()) {
			continueFn?.();
			thenable.resolve(value);
		}
	};
	const reject = (value) => {
		if (!isResolved()) {
			continueFn?.();
			thenable.reject(value);
		}
	};
	const pause = () => {
		return new Promise((continueResolve) => {
			continueFn = (value) => {
				if (isResolved() || canContinue()) continueResolve(value);
			};
			config.onPause?.();
		}).then(() => {
			continueFn = void 0;
			if (!isResolved()) config.onContinue?.();
		});
	};
	const run = () => {
		if (isResolved()) return;
		let promiseOrValue;
		const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
		try {
			promiseOrValue = initialPromise ?? config.fn();
		} catch (error) {
			promiseOrValue = Promise.reject(error);
		}
		Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
			if (isResolved()) return;
			const retry = config.retry ?? (environmentManager.isServer() ? 0 : 3);
			const retryDelay = config.retryDelay ?? defaultRetryDelay;
			const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
			const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
			if (isRetryCancelled || !shouldRetry) {
				reject(error);
				return;
			}
			failureCount++;
			config.onFail?.(failureCount, error);
			sleep(delay).then(() => {
				return canContinue() ? void 0 : pause();
			}).then(() => {
				if (isRetryCancelled) reject(error);
				else run();
			});
		});
	};
	return {
		promise: thenable,
		status: () => thenable.status,
		cancel,
		continue: () => {
			continueFn?.();
			return thenable;
		},
		cancelRetry,
		continueRetry,
		canStart,
		start: () => {
			if (canStart()) run();
			else pause().then(run);
			return thenable;
		}
	};
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/removable.js
var Removable = class {
	#gcTimeout;
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		this.clearGcTimeout();
		if (isValidTimeout(this.gcTime)) this.#gcTimeout = timeoutManager.setTimeout(() => {
			this.optionalRemove();
		}, this.gcTime);
	}
	updateGcTime(newGcTime) {
		this.gcTime = Math.max(this.gcTime || 0, newGcTime ?? (environmentManager.isServer() ? Infinity : 300 * 1e3));
	}
	clearGcTimeout() {
		if (this.#gcTimeout !== void 0) {
			timeoutManager.clearTimeout(this.#gcTimeout);
			this.#gcTimeout = void 0;
		}
	}
};
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
function infiniteQueryBehavior(pages) {
	return { onFetch: (context, query) => {
		const options = context.options;
		const direction = context.fetchOptions?.meta?.fetchMore?.direction;
		const oldPages = context.state.data?.pages || [];
		const oldPageParams = context.state.data?.pageParams || [];
		let result = {
			pages: [],
			pageParams: []
		};
		let currentPage = 0;
		const fetchFn = async () => {
			let cancelled = false;
			const addSignalProperty = (object) => {
				addConsumeAwareSignal(object, () => context.signal, () => cancelled = true);
			};
			const queryFn = ensureQueryFn(context.options, context.fetchOptions);
			const fetchPage = async (data, param, previous) => {
				if (cancelled) return Promise.reject(context.signal.reason);
				if (param == null && data.pages.length) return Promise.resolve(data);
				const createQueryFnContext = () => {
					const queryFnContext2 = {
						client: context.client,
						queryKey: context.queryKey,
						pageParam: param,
						direction: previous ? "backward" : "forward",
						meta: context.options.meta
					};
					addSignalProperty(queryFnContext2);
					return queryFnContext2;
				};
				const queryFnContext = createQueryFnContext();
				const page = await queryFn(queryFnContext);
				const { maxPages } = context.options;
				const addTo = previous ? addToStart : addToEnd;
				return {
					pages: addTo(data.pages, page, maxPages),
					pageParams: addTo(data.pageParams, param, maxPages)
				};
			};
			if (direction && oldPages.length) {
				const previous = direction === "backward";
				const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
				const oldData = {
					pages: oldPages,
					pageParams: oldPageParams
				};
				result = await fetchPage(oldData, pageParamFn(options, oldData), previous);
			} else {
				const remainingPages = pages ?? oldPages.length;
				do {
					const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
					if (currentPage > 0 && param == null) break;
					result = await fetchPage(result, param);
					currentPage++;
				} while (currentPage < remainingPages);
			}
			return result;
		};
		if (context.options.persister) context.fetchFn = () => {
			return context.options.persister?.(fetchFn, {
				client: context.client,
				queryKey: context.queryKey,
				meta: context.options.meta,
				signal: context.signal
			}, query);
		};
		else context.fetchFn = fetchFn;
	} };
}
function getNextPageParam(options, { pages, pageParams }) {
	const lastIndex = pages.length - 1;
	return pages.length > 0 ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
	return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/query.js
var Query = class extends Removable {
	#queryType;
	#initialState;
	#revertState;
	#cache;
	#client;
	#retryer;
	#defaultOptions;
	#abortSignalConsumed;
	constructor(config) {
		super();
		this.#abortSignalConsumed = false;
		this.#defaultOptions = config.defaultOptions;
		this.setOptions(config.options);
		this.observers = [];
		this.#client = config.client;
		this.#cache = this.#client.getQueryCache();
		this.queryKey = config.queryKey;
		this.queryHash = config.queryHash;
		this.#initialState = getDefaultState$1(this.options);
		this.state = config.state ?? this.#initialState;
		this.scheduleGc();
	}
	get meta() {
		return this.options.meta;
	}
	get queryType() {
		return this.#queryType;
	}
	get promise() {
		return this.#retryer?.promise;
	}
	setOptions(options) {
		this.options = {
			...this.#defaultOptions,
			...options
		};
		if (options?._type) this.#queryType = options._type;
		this.updateGcTime(this.options.gcTime);
		if (this.state && this.state.data === void 0) {
			const defaultState = getDefaultState$1(this.options);
			if (defaultState.data !== void 0) {
				this.setState(successState(defaultState.data, defaultState.dataUpdatedAt));
				this.#initialState = defaultState;
			}
		}
	}
	optionalRemove() {
		if (!this.observers.length && this.state.fetchStatus === "idle") this.#cache.remove(this);
	}
	setData(newData, options) {
		const data = replaceData(this.state.data, newData, this.options);
		this.#dispatch({
			data,
			type: "success",
			dataUpdatedAt: options?.updatedAt,
			manual: options?.manual
		});
		return data;
	}
	setState(state) {
		this.#dispatch({
			type: "setState",
			state
		});
	}
	cancel(options) {
		const promise = this.#retryer?.promise;
		this.#retryer?.cancel(options);
		return promise ? promise.then(noop).catch(noop) : Promise.resolve();
	}
	destroy() {
		super.destroy();
		this.cancel({ silent: true });
	}
	get resetState() {
		return this.#initialState;
	}
	reset() {
		this.destroy();
		this.setState(this.resetState);
	}
	isActive() {
		return this.observers.some((observer) => resolveQueryBoolean(observer.options.enabled, this) !== false);
	}
	isDisabled() {
		if (this.getObserversCount() > 0) return !this.isActive();
		return this.options.queryFn === skipToken || !this.isFetched();
	}
	isFetched() {
		return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
	}
	isStatic() {
		if (this.getObserversCount() > 0) return this.observers.some((observer) => resolveStaleTime(observer.options.staleTime, this) === "static");
		return false;
	}
	isStale() {
		if (this.getObserversCount() > 0) return this.observers.some((observer) => observer.getCurrentResult().isStale);
		return this.state.data === void 0 || this.state.isInvalidated;
	}
	isStaleByTime(staleTime = 0) {
		if (this.state.data === void 0) return true;
		if (staleTime === "static") return false;
		if (this.state.isInvalidated) return true;
		return !timeUntilStale(this.state.dataUpdatedAt, staleTime);
	}
	onFocus() {
		this.observers.find((x) => x.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: false });
		this.#retryer?.continue();
	}
	onOnline() {
		this.observers.find((x) => x.shouldFetchOnReconnect())?.refetch({ cancelRefetch: false });
		this.#retryer?.continue();
	}
	addObserver(observer) {
		if (!this.observers.includes(observer)) {
			this.observers.push(observer);
			this.clearGcTimeout();
			this.#cache.notify({
				type: "observerAdded",
				query: this,
				observer
			});
		}
	}
	removeObserver(observer) {
		if (this.observers.includes(observer)) {
			this.observers = this.observers.filter((x) => x !== observer);
			if (!this.observers.length) {
				if (this.#retryer) if (this.#abortSignalConsumed || this.#isInitialPausedFetch()) this.#retryer.cancel({ revert: true });
				else this.#retryer.cancelRetry();
				this.scheduleGc();
			}
			this.#cache.notify({
				type: "observerRemoved",
				query: this,
				observer
			});
		}
	}
	getObserversCount() {
		return this.observers.length;
	}
	#isInitialPausedFetch() {
		return this.state.fetchStatus === "paused" && this.state.status === "pending";
	}
	invalidate() {
		if (!this.state.isInvalidated) this.#dispatch({ type: "invalidate" });
	}
	async fetch(options, fetchOptions) {
		if (this.state.fetchStatus !== "idle" && this.#retryer?.status() !== "rejected") {
			if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) this.cancel({ silent: true });
			else if (this.#retryer) {
				this.#retryer.continueRetry();
				return this.#retryer.promise;
			}
		}
		if (options) this.setOptions(options);
		if (!this.options.queryFn) {
			const observer = this.observers.find((x) => x.options.queryFn);
			if (observer) this.setOptions(observer.options);
		}
		const abortController = new AbortController();
		const addSignalProperty = (object) => {
			Object.defineProperty(object, "signal", {
				enumerable: true,
				get: () => {
					this.#abortSignalConsumed = true;
					return abortController.signal;
				}
			});
		};
		const fetchFn = () => {
			const queryFn = ensureQueryFn(this.options, fetchOptions);
			const createQueryFnContext = () => {
				const queryFnContext2 = {
					client: this.#client,
					queryKey: this.queryKey,
					meta: this.meta
				};
				addSignalProperty(queryFnContext2);
				return queryFnContext2;
			};
			const queryFnContext = createQueryFnContext();
			this.#abortSignalConsumed = false;
			if (this.options.persister) return this.options.persister(queryFn, queryFnContext, this);
			return queryFn(queryFnContext);
		};
		const createFetchContext = () => {
			const context2 = {
				fetchOptions,
				options: this.options,
				queryKey: this.queryKey,
				client: this.#client,
				state: this.state,
				fetchFn
			};
			addSignalProperty(context2);
			return context2;
		};
		const context = createFetchContext();
		(this.#queryType === "infinite" ? infiniteQueryBehavior(this.options.pages) : this.options.behavior)?.onFetch(context, this);
		this.#revertState = this.state;
		if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) this.#dispatch({
			type: "fetch",
			meta: context.fetchOptions?.meta
		});
		this.#retryer = createRetryer({
			initialPromise: fetchOptions?.initialPromise,
			fn: context.fetchFn,
			onCancel: (error) => {
				if (error instanceof CancelledError && error.revert) this.setState({
					...this.#revertState,
					fetchStatus: "idle"
				});
				abortController.abort();
			},
			onFail: (failureCount, error) => {
				this.#dispatch({
					type: "failed",
					failureCount,
					error
				});
			},
			onPause: () => {
				this.#dispatch({ type: "pause" });
			},
			onContinue: () => {
				this.#dispatch({ type: "continue" });
			},
			retry: context.options.retry,
			retryDelay: context.options.retryDelay,
			networkMode: context.options.networkMode,
			canRun: () => true
		});
		try {
			const data = await this.#retryer.start();
			if (data === void 0) throw new Error(`${this.queryHash} data is undefined`);
			this.setData(data);
			this.#cache.config.onSuccess?.(data, this);
			this.#cache.config.onSettled?.(data, this.state.error, this);
			return data;
		} catch (error) {
			if (error instanceof CancelledError) {
				if (error.silent) return this.#retryer.promise;
				else if (error.revert) {
					if (this.state.data === void 0) throw error;
					return this.state.data;
				}
			}
			this.#dispatch({
				type: "error",
				error
			});
			this.#cache.config.onError?.(error, this);
			this.#cache.config.onSettled?.(this.state.data, error, this);
			throw error;
		} finally {
			this.scheduleGc();
		}
	}
	#dispatch(action) {
		const reducer = (state) => {
			switch (action.type) {
				case "failed": return {
					...state,
					fetchFailureCount: action.failureCount,
					fetchFailureReason: action.error
				};
				case "pause": return {
					...state,
					fetchStatus: "paused"
				};
				case "continue": return {
					...state,
					fetchStatus: "fetching"
				};
				case "fetch": return {
					...state,
					...fetchState(state.data, this.options),
					fetchMeta: action.meta ?? null
				};
				case "success":
					const newState = {
						...state,
						...successState(action.data, action.dataUpdatedAt),
						dataUpdateCount: state.dataUpdateCount + 1,
						...!action.manual && {
							fetchStatus: "idle",
							fetchFailureCount: 0,
							fetchFailureReason: null
						}
					};
					this.#revertState = action.manual ? newState : void 0;
					return newState;
				case "error":
					const error = action.error;
					return {
						...state,
						error,
						errorUpdateCount: state.errorUpdateCount + 1,
						errorUpdatedAt: Date.now(),
						fetchFailureCount: state.fetchFailureCount + 1,
						fetchFailureReason: error,
						fetchStatus: "idle",
						status: "error",
						isInvalidated: true
					};
				case "invalidate": return {
					...state,
					isInvalidated: true
				};
				case "setState": return {
					...state,
					...action.state
				};
			}
		};
		this.state = reducer(this.state);
		notifyManager.batch(() => {
			this.observers.forEach((observer) => {
				observer.onQueryUpdate();
			});
			this.#cache.notify({
				query: this,
				type: "updated",
				action
			});
		});
	}
};
function fetchState(data, options) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
		...data === void 0 && {
			error: null,
			status: "pending"
		}
	};
}
function successState(data, dataUpdatedAt) {
	return {
		data,
		dataUpdatedAt: dataUpdatedAt ?? Date.now(),
		error: null,
		isInvalidated: false,
		status: "success"
	};
}
function getDefaultState$1(options) {
	const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
	const hasData = data !== void 0;
	const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
	return {
		data,
		dataUpdateCount: 0,
		dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: false,
		status: hasData ? "success" : "pending",
		fetchStatus: "idle"
	};
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/mutation.js
var Mutation = class extends Removable {
	#client;
	#observers;
	#mutationCache;
	#retryer;
	constructor(config) {
		super();
		this.#client = config.client;
		this.mutationId = config.mutationId;
		this.#mutationCache = config.mutationCache;
		this.#observers = [];
		this.state = config.state || getDefaultState();
		this.setOptions(config.options);
		this.scheduleGc();
	}
	setOptions(options) {
		this.options = options;
		this.updateGcTime(this.options.gcTime);
	}
	get meta() {
		return this.options.meta;
	}
	addObserver(observer) {
		if (!this.#observers.includes(observer)) {
			this.#observers.push(observer);
			this.clearGcTimeout();
			this.#mutationCache.notify({
				type: "observerAdded",
				mutation: this,
				observer
			});
		}
	}
	removeObserver(observer) {
		this.#observers = this.#observers.filter((x) => x !== observer);
		this.scheduleGc();
		this.#mutationCache.notify({
			type: "observerRemoved",
			mutation: this,
			observer
		});
	}
	optionalRemove() {
		if (!this.#observers.length) if (this.state.status === "pending") this.scheduleGc();
		else this.#mutationCache.remove(this);
	}
	continue() {
		return this.#retryer?.continue() ?? this.execute(this.state.variables);
	}
	async execute(variables) {
		const onContinue = () => {
			this.#dispatch({ type: "continue" });
		};
		const mutationFnContext = {
			client: this.#client,
			meta: this.options.meta,
			mutationKey: this.options.mutationKey
		};
		this.#retryer = createRetryer({
			fn: () => {
				if (!this.options.mutationFn) return Promise.reject(/* @__PURE__ */ new Error("No mutationFn found"));
				return this.options.mutationFn(variables, mutationFnContext);
			},
			onFail: (failureCount, error) => {
				this.#dispatch({
					type: "failed",
					failureCount,
					error
				});
			},
			onPause: () => {
				this.#dispatch({ type: "pause" });
			},
			onContinue,
			retry: this.options.retry ?? 0,
			retryDelay: this.options.retryDelay,
			networkMode: this.options.networkMode,
			canRun: () => this.#mutationCache.canRun(this)
		});
		const restored = this.state.status === "pending";
		const isPaused = !this.#retryer.canStart();
		try {
			if (restored) onContinue();
			else {
				this.#dispatch({
					type: "pending",
					variables,
					isPaused
				});
				if (this.#mutationCache.config.onMutate) await this.#mutationCache.config.onMutate(variables, this, mutationFnContext);
				const context = await this.options.onMutate?.(variables, mutationFnContext);
				if (context !== this.state.context) this.#dispatch({
					type: "pending",
					context,
					variables,
					isPaused
				});
			}
			const data = await this.#retryer.start();
			await this.#mutationCache.config.onSuccess?.(data, variables, this.state.context, this, mutationFnContext);
			await this.options.onSuccess?.(data, variables, this.state.context, mutationFnContext);
			await this.#mutationCache.config.onSettled?.(data, null, this.state.variables, this.state.context, this, mutationFnContext);
			await this.options.onSettled?.(data, null, variables, this.state.context, mutationFnContext);
			this.#dispatch({
				type: "success",
				data
			});
			return data;
		} catch (error) {
			try {
				await this.#mutationCache.config.onError?.(error, variables, this.state.context, this, mutationFnContext);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onError?.(error, variables, this.state.context, mutationFnContext);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.#mutationCache.config.onSettled?.(void 0, error, this.state.variables, this.state.context, this, mutationFnContext);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onSettled?.(void 0, error, variables, this.state.context, mutationFnContext);
			} catch (e) {
				Promise.reject(e);
			}
			this.#dispatch({
				type: "error",
				error
			});
			throw error;
		} finally {
			this.#mutationCache.runNext(this);
		}
	}
	#dispatch(action) {
		const reducer = (state) => {
			switch (action.type) {
				case "failed": return {
					...state,
					failureCount: action.failureCount,
					failureReason: action.error
				};
				case "pause": return {
					...state,
					isPaused: true
				};
				case "continue": return {
					...state,
					isPaused: false
				};
				case "pending": return {
					...state,
					context: action.context,
					data: void 0,
					failureCount: 0,
					failureReason: null,
					error: null,
					isPaused: action.isPaused,
					status: "pending",
					variables: action.variables,
					submittedAt: Date.now()
				};
				case "success": return {
					...state,
					data: action.data,
					failureCount: 0,
					failureReason: null,
					error: null,
					status: "success",
					isPaused: false
				};
				case "error": return {
					...state,
					data: void 0,
					error: action.error,
					failureCount: state.failureCount + 1,
					failureReason: action.error,
					isPaused: false,
					status: "error"
				};
			}
		};
		this.state = reducer(this.state);
		notifyManager.batch(() => {
			this.#observers.forEach((observer) => {
				observer.onMutationUpdate(action);
			});
			this.#mutationCache.notify({
				mutation: this,
				type: "updated",
				action
			});
		});
	}
};
function getDefaultState() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: false,
		status: "idle",
		variables: void 0,
		submittedAt: 0
	};
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/mutationCache.js
var MutationCache = class extends Subscribable {
	constructor(config = {}) {
		super();
		this.config = config;
		this.#mutations = /* @__PURE__ */ new Set();
		this.#scopes = /* @__PURE__ */ new Map();
		this.#mutationId = 0;
	}
	#mutations;
	#scopes;
	#mutationId;
	build(client, options, state) {
		const mutation = new Mutation({
			client,
			mutationCache: this,
			mutationId: ++this.#mutationId,
			options: client.defaultMutationOptions(options),
			state
		});
		this.add(mutation);
		return mutation;
	}
	add(mutation) {
		this.#mutations.add(mutation);
		const scope = scopeFor(mutation);
		if (typeof scope === "string") {
			const scopedMutations = this.#scopes.get(scope);
			if (scopedMutations) scopedMutations.push(mutation);
			else this.#scopes.set(scope, [mutation]);
		}
		this.notify({
			type: "added",
			mutation
		});
	}
	remove(mutation) {
		if (this.#mutations.delete(mutation)) {
			const scope = scopeFor(mutation);
			if (typeof scope === "string") {
				const scopedMutations = this.#scopes.get(scope);
				if (scopedMutations) {
					if (scopedMutations.length > 1) {
						const index = scopedMutations.indexOf(mutation);
						if (index !== -1) scopedMutations.splice(index, 1);
					} else if (scopedMutations[0] === mutation) this.#scopes.delete(scope);
				}
			}
		}
		this.notify({
			type: "removed",
			mutation
		});
	}
	canRun(mutation) {
		const scope = scopeFor(mutation);
		if (typeof scope === "string") {
			const firstPendingMutation = this.#scopes.get(scope)?.find((m) => m.state.status === "pending");
			return !firstPendingMutation || firstPendingMutation === mutation;
		} else return true;
	}
	runNext(mutation) {
		const scope = scopeFor(mutation);
		if (typeof scope === "string") return (this.#scopes.get(scope)?.find((m) => m !== mutation && m.state.isPaused))?.continue() ?? Promise.resolve();
		else return Promise.resolve();
	}
	clear() {
		notifyManager.batch(() => {
			this.#mutations.forEach((mutation) => {
				this.notify({
					type: "removed",
					mutation
				});
			});
			this.#mutations.clear();
			this.#scopes.clear();
		});
	}
	getAll() {
		return Array.from(this.#mutations);
	}
	find(filters) {
		const defaultedFilters = {
			exact: true,
			...filters
		};
		return this.getAll().find((mutation) => matchMutation(defaultedFilters, mutation));
	}
	findAll(filters = {}) {
		return this.getAll().filter((mutation) => matchMutation(filters, mutation));
	}
	notify(event) {
		notifyManager.batch(() => {
			this.listeners.forEach((listener) => {
				listener(event);
			});
		});
	}
	resumePausedMutations() {
		const pausedMutations = this.getAll().filter((x) => x.state.isPaused);
		return notifyManager.batch(() => Promise.all(pausedMutations.map((mutation) => mutation.continue().catch(noop))));
	}
};
function scopeFor(mutation) {
	return mutation.options.scope?.id;
}
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/queryCache.js
var QueryCache = class extends Subscribable {
	constructor(config = {}) {
		super();
		this.config = config;
		this.#queries = /* @__PURE__ */ new Map();
	}
	#queries;
	build(client, options, state) {
		const queryKey = options.queryKey;
		const queryHash = options.queryHash ?? hashQueryKeyByOptions(queryKey, options);
		let query = this.get(queryHash);
		if (!query) {
			query = new Query({
				client,
				queryKey,
				queryHash,
				options: client.defaultQueryOptions(options),
				state,
				defaultOptions: client.getQueryDefaults(queryKey)
			});
			this.add(query);
		}
		return query;
	}
	add(query) {
		if (!this.#queries.has(query.queryHash)) {
			this.#queries.set(query.queryHash, query);
			this.notify({
				type: "added",
				query
			});
		}
	}
	remove(query) {
		const queryInMap = this.#queries.get(query.queryHash);
		if (queryInMap) {
			query.destroy();
			if (queryInMap === query) this.#queries.delete(query.queryHash);
			this.notify({
				type: "removed",
				query
			});
		}
	}
	clear() {
		notifyManager.batch(() => {
			this.getAll().forEach((query) => {
				this.remove(query);
			});
		});
	}
	get(queryHash) {
		return this.#queries.get(queryHash);
	}
	getAll() {
		return [...this.#queries.values()];
	}
	find(filters) {
		const defaultedFilters = {
			exact: true,
			...filters
		};
		return this.getAll().find((query) => matchQuery(defaultedFilters, query));
	}
	findAll(filters = {}) {
		const queries = this.getAll();
		return Object.keys(filters).length > 0 ? queries.filter((query) => matchQuery(filters, query)) : queries;
	}
	notify(event) {
		notifyManager.batch(() => {
			this.listeners.forEach((listener) => {
				listener(event);
			});
		});
	}
	onFocus() {
		notifyManager.batch(() => {
			this.getAll().forEach((query) => {
				query.onFocus();
			});
		});
	}
	onOnline() {
		notifyManager.batch(() => {
			this.getAll().forEach((query) => {
				query.onOnline();
			});
		});
	}
};
//#endregion
//#region node_modules/@tanstack/query-core/build/modern/queryClient.js
var QueryClient = class {
	#queryCache;
	#mutationCache;
	#defaultOptions;
	#queryDefaults;
	#mutationDefaults;
	#mountCount;
	#unsubscribeFocus;
	#unsubscribeOnline;
	constructor(config = {}) {
		this.#queryCache = config.queryCache || new QueryCache();
		this.#mutationCache = config.mutationCache || new MutationCache();
		this.#defaultOptions = config.defaultOptions || {};
		this.#queryDefaults = /* @__PURE__ */ new Map();
		this.#mutationDefaults = /* @__PURE__ */ new Map();
		this.#mountCount = 0;
	}
	mount() {
		this.#mountCount++;
		if (this.#mountCount !== 1) return;
		this.#unsubscribeFocus = focusManager.subscribe(async (focused) => {
			if (focused) {
				await this.resumePausedMutations();
				this.#queryCache.onFocus();
			}
		});
		this.#unsubscribeOnline = onlineManager.subscribe(async (online) => {
			if (online) {
				await this.resumePausedMutations();
				this.#queryCache.onOnline();
			}
		});
	}
	unmount() {
		this.#mountCount--;
		if (this.#mountCount !== 0) return;
		this.#unsubscribeFocus?.();
		this.#unsubscribeFocus = void 0;
		this.#unsubscribeOnline?.();
		this.#unsubscribeOnline = void 0;
	}
	isFetching(filters) {
		return this.#queryCache.findAll({
			...filters,
			fetchStatus: "fetching"
		}).length;
	}
	isMutating(filters) {
		return this.#mutationCache.findAll({
			...filters,
			status: "pending"
		}).length;
	}
	/**
	* Imperative (non-reactive) way to retrieve data for a QueryKey.
	* Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
	*
	* Hint: Do not use this function inside a component, because it won't receive updates.
	* Use `useQuery` to create a `QueryObserver` that subscribes to changes.
	*/
	getQueryData(queryKey) {
		const options = this.defaultQueryOptions({ queryKey });
		return this.#queryCache.get(options.queryHash)?.state.data;
	}
	ensureQueryData(options) {
		const defaultedOptions = this.defaultQueryOptions(options);
		const query = this.#queryCache.build(this, defaultedOptions);
		const cachedData = query.state.data;
		if (cachedData === void 0) return this.fetchQuery(options);
		if (options.revalidateIfStale && query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query))) this.prefetchQuery(defaultedOptions);
		return Promise.resolve(cachedData);
	}
	getQueriesData(filters) {
		return this.#queryCache.findAll(filters).map(({ queryKey, state }) => {
			return [queryKey, state.data];
		});
	}
	setQueryData(queryKey, updater, options) {
		const defaultedOptions = this.defaultQueryOptions({ queryKey });
		const prevData = this.#queryCache.get(defaultedOptions.queryHash)?.state.data;
		const data = functionalUpdate(updater, prevData);
		if (data === void 0) return;
		return this.#queryCache.build(this, defaultedOptions).setData(data, {
			...options,
			manual: true
		});
	}
	setQueriesData(filters, updater, options) {
		return notifyManager.batch(() => this.#queryCache.findAll(filters).map(({ queryKey }) => [queryKey, this.setQueryData(queryKey, updater, options)]));
	}
	getQueryState(queryKey) {
		const options = this.defaultQueryOptions({ queryKey });
		return this.#queryCache.get(options.queryHash)?.state;
	}
	removeQueries(filters) {
		const queryCache = this.#queryCache;
		notifyManager.batch(() => {
			queryCache.findAll(filters).forEach((query) => {
				queryCache.remove(query);
			});
		});
	}
	resetQueries(filters, options) {
		const queryCache = this.#queryCache;
		return notifyManager.batch(() => {
			queryCache.findAll(filters).forEach((query) => {
				query.reset();
			});
			return this.refetchQueries({
				type: "active",
				...filters
			}, options);
		});
	}
	cancelQueries(filters, cancelOptions = {}) {
		const defaultedCancelOptions = {
			revert: true,
			...cancelOptions
		};
		const promises = notifyManager.batch(() => this.#queryCache.findAll(filters).map((query) => query.cancel(defaultedCancelOptions)));
		return Promise.all(promises).then(noop).catch(noop);
	}
	invalidateQueries(filters, options = {}) {
		return notifyManager.batch(() => {
			this.#queryCache.findAll(filters).forEach((query) => {
				query.invalidate();
			});
			if (filters?.refetchType === "none") return Promise.resolve();
			return this.refetchQueries({
				...filters,
				type: filters?.refetchType ?? filters?.type ?? "active"
			}, options);
		});
	}
	refetchQueries(filters, options = {}) {
		const fetchOptions = {
			...options,
			cancelRefetch: options.cancelRefetch ?? true
		};
		const promises = notifyManager.batch(() => this.#queryCache.findAll(filters).filter((query) => !query.isDisabled() && !query.isStatic()).map((query) => {
			let promise = query.fetch(void 0, fetchOptions);
			if (!fetchOptions.throwOnError) promise = promise.catch(noop);
			return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
		}));
		return Promise.all(promises).then(noop);
	}
	fetchQuery(options) {
		const defaultedOptions = this.defaultQueryOptions(options);
		if (defaultedOptions.retry === void 0) defaultedOptions.retry = false;
		const query = this.#queryCache.build(this, defaultedOptions);
		return query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query)) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
	}
	prefetchQuery(options) {
		return this.fetchQuery(options).then(noop).catch(noop);
	}
	fetchInfiniteQuery(options) {
		options._type = "infinite";
		return this.fetchQuery(options);
	}
	prefetchInfiniteQuery(options) {
		return this.fetchInfiniteQuery(options).then(noop).catch(noop);
	}
	ensureInfiniteQueryData(options) {
		options._type = "infinite";
		return this.ensureQueryData(options);
	}
	resumePausedMutations() {
		if (onlineManager.isOnline()) return this.#mutationCache.resumePausedMutations();
		return Promise.resolve();
	}
	getQueryCache() {
		return this.#queryCache;
	}
	getMutationCache() {
		return this.#mutationCache;
	}
	getDefaultOptions() {
		return this.#defaultOptions;
	}
	setDefaultOptions(options) {
		this.#defaultOptions = options;
	}
	setQueryDefaults(queryKey, options) {
		this.#queryDefaults.set(hashKey(queryKey), {
			queryKey,
			defaultOptions: options
		});
	}
	getQueryDefaults(queryKey) {
		const defaults = [...this.#queryDefaults.values()];
		const result = {};
		defaults.forEach((queryDefault) => {
			if (partialMatchKey(queryKey, queryDefault.queryKey)) Object.assign(result, queryDefault.defaultOptions);
		});
		return result;
	}
	setMutationDefaults(mutationKey, options) {
		this.#mutationDefaults.set(hashKey(mutationKey), {
			mutationKey,
			defaultOptions: options
		});
	}
	getMutationDefaults(mutationKey) {
		const defaults = [...this.#mutationDefaults.values()];
		const result = {};
		defaults.forEach((queryDefault) => {
			if (partialMatchKey(mutationKey, queryDefault.mutationKey)) Object.assign(result, queryDefault.defaultOptions);
		});
		return result;
	}
	defaultQueryOptions(options) {
		if (options._defaulted) return options;
		const defaultedOptions = {
			...this.#defaultOptions.queries,
			...this.getQueryDefaults(options.queryKey),
			...options,
			_defaulted: true
		};
		if (!defaultedOptions.queryHash) defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
		if (defaultedOptions.refetchOnReconnect === void 0) defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
		if (defaultedOptions.throwOnError === void 0) defaultedOptions.throwOnError = !!defaultedOptions.suspense;
		if (!defaultedOptions.networkMode && defaultedOptions.persister) defaultedOptions.networkMode = "offlineFirst";
		if (defaultedOptions.queryFn === skipToken) defaultedOptions.enabled = false;
		return defaultedOptions;
	}
	defaultMutationOptions(options) {
		if (options?._defaulted) return options;
		return {
			...this.#defaultOptions.mutations,
			...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
			...options,
			_defaulted: true
		};
	}
	clear() {
		this.#queryCache.clear();
		this.#mutationCache.clear();
	}
};
//#endregion
//#region node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientContext = import_react.createContext(void 0);
var QueryClientProvider = ({ client, children }) => {
	import_react.useEffect(() => {
		client.mount();
		return () => {
			client.unmount();
		};
	}, [client]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientContext.Provider, {
		value: client,
		children
	});
};
//#endregion
//#region src/styles.css?url
var styles_default = "/assets/styles-DNJMUUFw.css";
//#endregion
//#region src/i18n/translations.ts
var translations = {
	en: {
		dashboard: "Dashboard",
		campaigns: "Campaigns",
		transactions: "Transactions",
		analytics: "Analytics",
		settings: "Settings",
		createCampaign: "Create Campaign",
		walletBalance: "Wallet balance",
		connect: "Connect",
		connected: "Connected",
		network: "Network",
		networkStatus: "Network status",
		operational: "Operational",
		stellarMainnet: "Stellar Mainnet",
		avgConfirmation: "Avg confirmation",
		avgFee: "Avg fee",
		validators: "Validators",
		online: "online",
		scanToSend: "Scan to send XLM to this address",
		totalRaised: "Total Raised",
		activeCampaigns: "Active Campaigns",
		beneficiaries: "Beneficiaries",
		transactionsCount: "Transactions",
		recentActivity: "Recent activity",
		latestOnChain: "Latest on-chain transactions",
		viewAll: "View all",
		donationReceived: "Donation received",
		sent: "Sent",
		disbursement: "Disbursement",
		connectWallet: "Connect Wallet",
		chooseWallet: "Choose a Stellar-compatible wallet",
		byConnecting: "By connecting, you agree to TrustBridge's Terms and Privacy Policy.",
		detected: "Detected",
		install: "Install",
		copy: "Copy",
		copied: "Copied",
		explorer: "Explorer",
		send: "Send",
		receive: "Receive",
		received: "Received",
		campaign: "Campaign",
		overview: "Overview of your wallet, campaigns and recent on-chain activity.",
		ledger: "Ledger",
		confirmationTime: "4.2s",
		fee: "0.00001 XLM",
		statusConfirmed: "confirmed",
		statusPending: "pending",
		statusFailed: "failed",
		disconnectWallet: "Disconnect Wallet",
		profile: "Profile",
		wallet: "Wallet",
		notifications: "Notifications",
		language: "Language",
		security: "Security",
		fullName: "Full name",
		email: "Email",
		newDonations: "New donations to your campaigns",
		campaignUpdates: "Updates from campaigns you donated to",
		weeklyDigest: "Weekly impact digest",
		securityAlerts: "Security & login alerts",
		twoFactor: "Two-factor authentication",
		loginAlerts: "Alert on new device login",
		changePassword: "Change password",
		saveChanges: "Save changes",
		saved: "Saved",
		recipientAddress: "Recipient address",
		amount: "Amount",
		asset: "Asset",
		networkFee: "Network fee",
		total: "Total",
		memo: "Memo",
		broadcasting: "Broadcasting…",
		all: "All",
		foodWater: "Food & Water",
		disasterRelief: "Disaster Relief",
		medical: "Medical",
		education: "Education",
		trending: "Trending",
		urgent: "Urgent",
		nearlyFunded: "Nearly Funded",
		donors: "donors",
		daysLeft: "d left",
		by: "by",
		searchPlaceholder: "Search campaigns or organizations…"
	},
	es: {
		dashboard: "Panel",
		campaigns: "Campañas",
		transactions: "Transacciones",
		analytics: "Analítica",
		settings: "Ajustes",
		createCampaign: "Crear campaña",
		walletBalance: "Saldo de billetera",
		connect: "Conectar",
		connected: "Conectado",
		network: "Red",
		networkStatus: "Estado de red",
		operational: "Operativa",
		stellarMainnet: "Stellar Mainnet",
		avgConfirmation: "Confirmación prom.",
		avgFee: "Comisión prom.",
		validators: "Validadores",
		online: "en línea",
		scanToSend: "Escanea para enviar XLM a esta dirección",
		totalRaised: "Total recaudado",
		activeCampaigns: "Campañas activas",
		beneficiaries: "Beneficiarios",
		transactionsCount: "Transacciones",
		recentActivity: "Actividad reciente",
		latestOnChain: "Últimas transacciones en cadena",
		viewAll: "Ver todo",
		donationReceived: "Donación recibida",
		sent: "Enviado",
		disbursement: "Desembolso",
		connectWallet: "Conectar billetera",
		chooseWallet: "Elige una billetera compatible con Stellar",
		byConnecting: "Al conectar, aceptas los Términos y la Política de Privacidad de TrustBridge.",
		detected: "Detectado",
		install: "Instalar",
		copy: "Copiar",
		copied: "Copiado",
		explorer: "Explorador",
		send: "Enviar",
		receive: "Recibir",
		received: "Recibido",
		campaign: "Campaña",
		overview: "Resumen de tu billetera, campañas y actividad reciente en la cadena.",
		ledger: "Ledger",
		confirmationTime: "4.2s",
		fee: "0.00001 XLM",
		statusConfirmed: "confirmado",
		statusPending: "pendiente",
		statusFailed: "fallido",
		disconnectWallet: "Desconectar billetera",
		profile: "Perfil",
		wallet: "Billetera",
		notifications: "Notificaciones",
		language: "Idioma",
		security: "Seguridad",
		fullName: "Nombre completo",
		email: "Correo electrónico",
		newDonations: "Nuevas donaciones a tus campañas",
		campaignUpdates: "Actualizaciones de campañas a las que donaste",
		weeklyDigest: "Resumen semanal de impacto",
		securityAlerts: "Alertas de seguridad e inicio de sesión",
		twoFactor: "Autenticación de dos factores",
		loginAlerts: "Alerta de inicio de sesión en nuevo dispositivo",
		changePassword: "Cambiar contraseña",
		saveChanges: "Guardar cambios",
		saved: "Guardado",
		all: "Todo",
		foodWater: "Alimentos y Agua",
		disasterRelief: "Auxilio por Desastre",
		medical: "Salud",
		education: "Educación",
		trending: "Tendencias",
		urgent: "Urgente",
		nearlyFunded: "Casi recaudado",
		donors: "donantes",
		daysLeft: "d restantes",
		by: "por",
		searchPlaceholder: "Buscar campañas u organizaciones…"
	},
	fr: {
		dashboard: "Tableau de bord",
		campaigns: "Campagnes",
		transactions: "Transactions",
		analytics: "Analytique",
		settings: "Paramètres",
		createCampaign: "Créer une campagne",
		walletBalance: "Solde du portefeuille",
		connect: "Se connecter",
		connected: "Connecté",
		network: "Réseau",
		networkStatus: "État du réseau",
		operational: "Opérationnel",
		stellarMainnet: "Stellar Mainnet",
		avgConfirmation: "Confirmation moy.",
		avgFee: "Frais moy.",
		validators: "Validateurs",
		online: "en ligne",
		scanToSend: "Scannez pour envoyer des XLM à cette adresse",
		totalRaised: "Total collecté",
		activeCampaigns: "Campagnes actives",
		beneficiaries: "Bénéficiaires",
		transactionsCount: "Transactions",
		recentActivity: "Activité récente",
		latestOnChain: "Dernières transactions on-chain",
		viewAll: "Tout voir",
		donationReceived: "Don reçu",
		sent: "Envoyé",
		disbursement: "Déboursement",
		connectWallet: "Connecter le portefeuille",
		chooseWallet: "Choisissez un portefeuille compatible Stellar",
		byConnecting: "En vous connectant, vous acceptez les Conditions et la Politique de confidentialité de TrustBridge.",
		detected: "Détecté",
		install: "Installer",
		copy: "Copier",
		copied: "Copié",
		explorer: "Explorateur",
		send: "Envoyer",
		receive: "Recevoir",
		received: "Reçu",
		campaign: "Campagne",
		overview: "Aperçu de votre portefeuille, des campagnes et de l'activité récente.",
		ledger: "Registre",
		confirmationTime: "4.2s",
		fee: "0.00001 XLM",
		statusConfirmed: "confirmé",
		statusPending: "en attente",
		statusFailed: "échoué",
		disconnectWallet: "Déconnecter le portefeuille",
		profile: "Profil",
		wallet: "Portefeuille",
		notifications: "Notifications",
		language: "Langue",
		security: "Sécurité",
		fullName: "Nom complet",
		email: "E-mail",
		newDonations: "Nouvelles donations à vos campagnes",
		campaignUpdates: "Mises à jour des campagnes auxquelles vous avez fait un don",
		weeklyDigest: "Résumé hebdomadaire d'impact",
		securityAlerts: "Alertes de sécurité et de connexion",
		twoFactor: "Authentification à deux facteurs",
		loginAlerts: "Alerte de connexion sur un nouvel appareil",
		changePassword: "Changer le mot de passe",
		saveChanges: "Enregistrer les modifications",
		saved: "Enregistré",
		all: "Toutes",
		foodWater: "Alimentation & Eau",
		disasterRelief: "Secours aux catastrophes",
		medical: "Médical",
		education: "Éducation",
		trending: "Tendances",
		urgent: "Urgent",
		nearlyFunded: "Presque financé",
		donors: "donateurs",
		daysLeft: "j restants",
		by: "par",
		searchPlaceholder: "Rechercher des campagnes ou des organisations…"
	},
	ar: {
		dashboard: "لوحة التحكم",
		campaigns: "الحملات",
		transactions: "المعاملات",
		analytics: "التحليلات",
		settings: "الإعدادات",
		createCampaign: "إنشاء حملة",
		walletBalance: "رصيد المحفظة",
		connect: "اتصال",
		connected: "متصل",
		network: "الشبكة",
		networkStatus: "حالة الشبكة",
		operational: "تعمل",
		stellarMainnet: "Stellar Mainnet",
		avgConfirmation: "متوسط التأكيد",
		avgFee: "رسوم متوسطة",
		validators: "التحقق",
		online: "متصل",
		scanToSend: "امسح الرمز لإرسال XLM إلى هذا العنوان",
		totalRaised: "إجمالي المبلغ",
		activeCampaigns: "الحملات النشطة",
		beneficiaries: "المستفيدين",
		transactionsCount: "المعاملات",
		recentActivity: "النشاط الأخير",
		latestOnChain: "أحدث المعاملات على السلسلة",
		viewAll: "عرض الكل",
		donationReceived: "تبرع مستلم",
		sent: "مرسل",
		disbursement: "صرف",
		connectWallet: "اتصال المحفظة",
		chooseWallet: "اختر محفظة متوافقة مع Stellar",
		byConnecting: "بالتوصيل، فإنك توافق على الشروط وسياسة الخصوصية الخاصة بـ TrustBridge.",
		detected: "مكتشف",
		install: "تثبيت",
		copy: "نسخ",
		copied: "تم النسخ",
		explorer: "المستكشف",
		send: "إرسال",
		receive: "استلام",
		received: "مستلم",
		campaign: "حملة",
		overview: "نظرة عامة على محفظتك والحملات والنشاط الأخير على السلسلة.",
		ledger: "السجل",
		confirmationTime: "4.2 ثانية",
		fee: "0.00001 XLM",
		statusConfirmed: "مؤكد",
		statusPending: "قيد الانتظار",
		statusFailed: "فشل",
		disconnectWallet: "قطع اتصال المحفظة",
		profile: "الملف الشخصي",
		wallet: "المحفظة",
		notifications: "الإشعارات",
		language: "اللغة",
		security: "الأمان",
		fullName: "الاسم الكامل",
		email: "البريد الإلكتروني",
		newDonations: "تبرعات جديدة لحملاتك",
		campaignUpdates: "تحديثات الحملات التي تبرعت لها",
		weeklyDigest: "ملخص أسبوعي للتأثير",
		securityAlerts: "تنبيهات الأمان وتسجيل الدخول",
		twoFactor: "المصادقة الثنائية",
		loginAlerts: "تنبيه عند تسجيل دخول من جهاز جديد",
		changePassword: "تغيير كلمة المرور",
		saveChanges: "حفظ التغييرات",
		saved: "تم الحفظ",
		all: "الكل",
		foodWater: "غذاء وماء",
		disasterRelief: "إغاثة الكوارث",
		medical: "طبي",
		education: "تعليم",
		trending: "الأكثر رواجًا",
		urgent: "عاجل",
		nearlyFunded: "تمCollect تقريبًا",
		donors: "متبرعين",
		daysLeft: "يوم متبقي",
		by: "بواسطة",
		searchPlaceholder: "البحث عن حملات أو منظمات…"
	},
	zh: {
		dashboard: "仪表板",
		campaigns: "活动",
		transactions: "交易",
		analytics: "分析",
		settings: "设置",
		createCampaign: "创建活动",
		walletBalance: "钱包余额",
		connect: "连接",
		connected: "已连接",
		network: "网络",
		networkStatus: "网络状态",
		operational: "运行中",
		stellarMainnet: "Stellar 主网",
		avgConfirmation: "平均确认",
		avgFee: "平均费用",
		validators: "验证者",
		online: "在线",
		scanToSend: "扫描以发送 XLM 到此地址",
		totalRaised: "总筹款",
		activeCampaigns: "活跃活动",
		beneficiaries: "受益者",
		transactionsCount: "交易数",
		recentActivity: "最近活动",
		latestOnChain: "最新链上交易",
		viewAll: "查看全部",
		donationReceived: "收到捐赠",
		sent: "已发送",
		disbursement: "拨款",
		connectWallet: "连接钱包",
		chooseWallet: "选择与 Stellar 兼容的钱包",
		byConnecting: "连接即表示您同意 TrustBridge 的服务条款和隐私政策。",
		detected: "已检测到",
		install: "安装",
		copy: "复制",
		copied: "已复制",
		explorer: "浏览器",
		send: "发送",
		receive: "接收",
		received: "已接收",
		campaign: "活动",
		overview: "钱包、活动和近期链上活动概览。",
		ledger: "账本",
		confirmationTime: "4.2秒",
		fee: "0.00001 XLM",
		statusConfirmed: "已确认",
		statusPending: "待处理",
		statusFailed: "失败",
		disconnectWallet: "断开钱包连接",
		profile: "个人资料",
		wallet: "钱包",
		notifications: "通知",
		language: "语言",
		security: "安全",
		fullName: "全名",
		email: "电子邮件",
		newDonations: "您参与的活动收到新捐赠",
		campaignUpdates: "您捐赠过的活动更新",
		weeklyDigest: "每周影响摘要",
		securityAlerts: "安全与登录提醒",
		twoFactor: "双重认证",
		loginAlerts: "新设备登录提醒",
		changePassword: "修改密码",
		saveChanges: "保存更改",
		saved: "已保存",
		all: "全部",
		foodWater: "食物与水",
		disasterRelief: "灾难救援",
		medical: "医疗",
		education: "教育",
		trending: "热门",
		urgent: "紧急",
		nearlyFunded: "即将完成",
		donors: "捐助者",
		daysLeft: "天剩余",
		by: "由",
		searchPlaceholder: "搜索活动或组织…"
	}
};
//#endregion
//#region src/services/api.ts
var API_URL = "https://trustbridge-7dch.onrender.com/api";
var BASE = API_URL;
console.log("📡 TrustBridge API URL:", API_URL);
console.log("📤 Using base:", BASE);
function getToken() {
	return localStorage.getItem("trustbridge_token");
}
async function request(path, options = {}) {
	const token = getToken();
	const headers = {
		"Content-Type": "application/json",
		...options.headers
	};
	if (token) headers["Authorization"] = `Bearer ${token}`;
	const url = `${BASE}${path}`;
	console.log(`📤 API Request: ${options.method || "GET"} ${url}`);
	const res = await fetch(url, {
		...options,
		headers
	});
	if (!res.ok) {
		const body = await res.json().catch(() => ({}));
		throw new Error(body.error || `Request failed: ${res.statusText}`);
	}
	return res.json();
}
function register(data) {
	return request("/auth/register", {
		method: "POST",
		body: JSON.stringify(data)
	});
}
function login(data) {
	return request("/auth/login", {
		method: "POST",
		body: JSON.stringify(data)
	});
}
function getMe() {
	return request("/auth/me");
}
function updateProfile(data) {
	return request("/auth/profile", {
		method: "PUT",
		body: JSON.stringify(data)
	});
}
function changePassword(data) {
	return request("/auth/change-password", {
		method: "PUT",
		body: JSON.stringify(data)
	});
}
function logout() {
	localStorage.removeItem("trustbridge_token");
	return Promise.resolve();
}
function getMyTransactions(params) {
	const query = new URLSearchParams(params).toString();
	return request(`/transactions/me${query ? `?${query}` : ""}`);
}
function getBalance(address) {
	return request(`/transactions/balance/${address}`);
}
//#endregion
//#region src/components/AppContext.tsx
var languages = [
	{
		code: "en",
		label: "English"
	},
	{
		code: "es",
		label: "Español"
	},
	{
		code: "fr",
		label: "Français"
	},
	{
		code: "ar",
		label: "العربية"
	},
	{
		code: "zh",
		label: "中文"
	}
];
var AppCtx = (0, import_react.createContext)(null);
function useApp() {
	const v = (0, import_react.useContext)(AppCtx);
	if (!v) throw new Error("useApp must be used inside AppProvider");
	return v;
}
function AppProvider({ children }) {
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	const [lang, setLang] = (0, import_react.useState)("en");
	const [user, setUser] = (0, import_react.useState)(null);
	const [wallet, setWallet] = (0, import_react.useState)({
		connected: false,
		address: null,
		provider: null,
		detected: false
	});
	const [walletModalOpen, setWalletModalOpen] = (0, import_react.useState)(false);
	const [donateTarget, setDonateTarget] = (0, import_react.useState)(null);
	const [xlmBalance, setXlmBalance] = (0, import_react.useState)(null);
	const isAuthenticated = !!user;
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") try {
			const stored = localStorage.getItem("trustbridge_wallet");
			if (stored) {
				const data = JSON.parse(stored);
				setWallet({
					...data,
					detected: true
				});
				if (data.address) refreshBalanceExternal(data.address);
			}
			if (localStorage.getItem("trustbridge_token")) getMe().then((me) => setUser(me.user)).catch(() => localStorage.removeItem("trustbridge_token"));
		} catch {}
	}, []);
	const refreshBalanceExternal = async (address) => {
		try {
			const bal = await getBalance(address);
			setXlmBalance(bal.balance);
		} catch {}
	};
	const refreshBalance = async () => {
		if (wallet.address) await refreshBalanceExternal(wallet.address);
	};
	const t = (key, fallback) => translations[lang]?.[key] ?? fallback ?? key;
	const connectWallet = async (provider) => {
		try {
			let pubkey = null;
			if (provider === "freighter" && window.getFreighterPublicKey) pubkey = await window.getFreighterPublicKey();
			else if (provider === "albedo" && window.albedo) pubkey = (await window.albedo.publicKey()).pubkey;
			else if (provider === "xbull" && window.xbull) pubkey = await window.xbull.getPublicKey();
			else if (provider === "lobstr" && window.lobstr) pubkey = await window.lobstr.getPublicKey();
			else if (provider === "walletconnect" && window.ethereum) pubkey = (await window.ethereum.request({ method: "eth_requestAccounts" }))[0];
			else pubkey = "G" + Array.from({ length: 55 }, () => "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"[Math.floor(Math.random() * 32)]).join("");
			setWallet({
				connected: true,
				address: pubkey,
				provider,
				detected: true
			});
			setWalletModalOpen(false);
			localStorage.setItem("trustbridge_wallet", JSON.stringify({
				connected: true,
				address: pubkey,
				provider,
				detected: true
			}));
			if (pubkey) refreshBalanceExternal(pubkey);
		} catch {
			setWalletModalOpen(false);
		}
	};
	const connectManual = async (address, memo) => {
		if (!address.startsWith("G") || address.length !== 56) throw new Error("Invalid Stellar address. Must start with 'G' and be 56 characters.");
		try {
			const resp = await fetch(`https://horizon.stellar.org/accounts/${address}`);
			if (!resp.ok) throw new Error("Account not found on Stellar network. Please check the address.");
			const bal = (await resp.json()).balances?.find((b) => b.asset_type === "native")?.balance || "0";
			setWallet({
				connected: true,
				address,
				provider: "manual",
				detected: true
			});
			setWalletModalOpen(false);
			localStorage.setItem("trustbridge_wallet", JSON.stringify({
				connected: true,
				address,
				provider: "manual",
				detected: true
			}));
			setXlmBalance(parseFloat(bal));
			try {
				await updateProfile({
					walletAddress: address,
					walletProvider: "manual"
				});
			} catch {}
		} catch (err) {
			throw new Error(err.message || "Failed to verify Stellar address");
		}
	};
	const disconnectWallet = () => {
		setWallet({
			connected: false,
			address: null,
			provider: null,
			detected: false
		});
		localStorage.removeItem("trustbridge_wallet");
		setXlmBalance(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppCtx.Provider, {
		value: {
			collapsed,
			toggleCollapsed: () => setCollapsed((v) => !v),
			lang,
			setLang,
			t,
			wallet,
			connectWallet,
			connectManual,
			disconnectWallet,
			walletModalOpen,
			openWalletModal: () => setWalletModalOpen(true),
			closeWalletModal: () => setWalletModalOpen(false),
			donateTarget,
			openDonate: (t) => setDonateTarget(t),
			closeDonate: () => setDonateTarget(null),
			xlmBalance,
			refreshBalance,
			user,
			setUser,
			isAuthenticated
		},
		children
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$18 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "TrustBridge — Humanitarian Aid on Stellar" },
			{
				name: "description",
				content: "TrustBridge is a decentralized humanitarian aid platform built on the Stellar network, enabling transparent, low-fee donations to verified campaigns worldwide."
			},
			{
				name: "author",
				content: "TrustBridge Team"
			},
			{
				property: "og:title",
				content: "TrustBridge — Humanitarian Aid on Stellar"
			},
			{
				property: "og:description",
				content: "Decentralized humanitarian aid platform on Stellar"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@TrustBridge"
			},
			{
				name: "twitter:title",
				content: "TrustBridge — Humanitarian Aid on Stellar"
			},
			{
				name: "twitter:description",
				content: "Decentralized humanitarian aid platform on Stellar"
			},
			{
				property: "og:image",
				content: "/favicon.svg"
			},
			{
				name: "twitter:image",
				content: "/favicon.svg"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$18.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
//#endregion
//#region \0vite/preload-helper.js
var scriptRel = "modulepreload";
var assetsURL = function(dep) {
	return "/" + dep;
};
var seen = {};
var __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (deps && deps.length > 0) {
		const links = document.getElementsByTagName("link");
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises) {
			return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
				status: "fulfilled",
				value
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		function importMetaResolve(specifier) {
			if (import.meta.resolve) return import.meta.resolve(specifier);
			return new URL(specifier, new URL("../../../src/node/plugins/importAnalysisBuild.ts", import.meta.url)).href;
		}
		promise = allSettled(deps.map((dep) => {
			dep = assetsURL(dep, importerUrl);
			dep = importMetaResolve(dep);
			if (dep in seen) return;
			seen[dep] = true;
			const isCss = dep.endsWith(".css");
			for (let i = links.length - 1; i >= 0; i--) {
				const link = links[i];
				if (link.href === dep && (!isCss || link.rel === "stylesheet")) return;
			}
			const link = document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err) {
		const e = new Event("vite:preloadError", { cancelable: true });
		e.payload = err;
		window.dispatchEvent(e);
		if (!e.defaultPrevented) throw err;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
//#endregion
//#region src/routes/transactions.tsx
var $$splitComponentImporter$17 = () => __vitePreload(() => import("./transactions-CD8SMCwt.js"), __vite__mapDeps([0,1,2,3,4,5,6,7]));
var Route$17 = createFileRoute("/transactions")({
	head: () => ({ meta: [{ title: "Transactions — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
//#endregion
//#region src/routes/signup.tsx
var $$splitComponentImporter$16 = () => __vitePreload(() => import("./signup-DpXOtkse.js"), __vite__mapDeps([8,2,9,10,11,3]));
var Route$16 = createFileRoute("/signup")({
	head: () => ({ meta: [{ title: "Sign Up — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
//#endregion
//#region src/routes/settings.tsx
var $$splitComponentImporter$15 = () => __vitePreload(() => import("./settings-BmJnZ1JM.js"), __vite__mapDeps([12,1,2,3,9,10,5,6]));
var Route$15 = createFileRoute("/settings")({
	head: () => ({ meta: [{ title: "Settings — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
//#endregion
//#region src/routes/send.tsx
var $$splitComponentImporter$14 = () => __vitePreload(() => import("./send-B3OFdjdH.js"), __vite__mapDeps([13,1,2,3,14,5]));
var Route$14 = createFileRoute("/send")({
	head: () => ({ meta: [{ title: "Send — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
//#endregion
//#region src/routes/receive.tsx
var $$splitComponentImporter$13 = () => __vitePreload(() => import("./receive-CFjaeFKi.js"), __vite__mapDeps([15,1,2,3,5]));
var Route$13 = createFileRoute("/receive")({
	head: () => ({ meta: [{ title: "Receive — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
//#endregion
//#region src/routes/profile.tsx
var $$splitComponentImporter$12 = () => __vitePreload(() => import("./profile-Cez2q_it.js"), __vite__mapDeps([16,1,2,3,5]));
var Route$12 = createFileRoute("/profile")({
	head: () => ({ meta: [{ title: "Profile — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
//#endregion
//#region src/routes/login.tsx
var $$splitComponentImporter$11 = () => __vitePreload(() => import("./login-CpCoWf57.js"), __vite__mapDeps([17,2,9,10,11]));
var Route$11 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Sign In — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
//#endregion
//#region src/routes/dashboard.tsx
var $$splitComponentImporter$10 = () => __vitePreload(() => import("./dashboard-BxXOMxYe.js"), __vite__mapDeps([18,1,2,3,19,14,5,6,7]));
var Route$10 = createFileRoute("/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
//#endregion
//#region src/routes/create-campaign.tsx
var $$splitComponentImporter$9 = () => __vitePreload(() => import("./create-campaign-CzIgPqy7.js"), __vite__mapDeps([20,1,2,3,21,5,6]));
var Route$9 = createFileRoute("/create-campaign")({
	head: () => ({ meta: [{ title: "Create Campaign — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
//#endregion
//#region src/routes/campaigns.tsx
var $$splitComponentImporter$8 = () => __vitePreload(() => import("./campaigns-lEa2ktCi.js"), __vite__mapDeps([22,1,2,3,4,5,6,7]));
var Route$8 = createFileRoute("/campaigns")({
	head: () => ({ meta: [{ title: "Campaigns — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/analytics.tsx
var $$splitComponentImporter$7 = () => __vitePreload(() => import("./analytics-rlnsGwQs.js"), __vite__mapDeps([23,1,2,3,5,6,7]));
var Route$7 = createFileRoute("/analytics")({
	head: () => ({ meta: [{ title: "Analytics — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$6 = () => __vitePreload(() => import("./routes-BBi5o6pa.js"), __vite__mapDeps([24,1,2,3,10,25,19,14,21]));
var Route$6 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "TrustBridge — Transparent Humanitarian Aid on Stellar" },
			{
				name: "description",
				content: "TrustBridge brings end-to-end transparency to humanitarian aid. Every donation tracked on the Stellar blockchain. Instant, trustless, accountable."
			},
			{
				property: "og:title",
				content: "TrustBridge — Humanitarian Aid on Stellar"
			},
			{
				property: "og:description",
				content: "Transparent, on-chain humanitarian aid. Connect your Stellar wallet to launch or fund verified campaigns."
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/community/updates.tsx
var $$splitComponentImporter$5 = () => __vitePreload(() => import("./updates-B4mgw_L9.js"), __vite__mapDeps([26,27,1,2,3,25,14,5]));
var Route$5 = createFileRoute("/community/updates")({
	head: () => ({ meta: [{ title: "Campaign Updates — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/community/support.tsx
var $$splitComponentImporter$4 = () => __vitePreload(() => import("./support-DQE9AhFq.js"), __vite__mapDeps([28,27,1,2,3,25,14,5]));
var Route$4 = createFileRoute("/community/support")({
	head: () => ({ meta: [{ title: "Support Tickets — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/community/general.tsx
var $$splitComponentImporter$3 = () => __vitePreload(() => import("./general-D2Vh6Nz2.js"), __vite__mapDeps([29,27,1,2,3,25,14,5]));
var Route$3 = createFileRoute("/community/general")({
	head: () => ({ meta: [{ title: "General Discussion — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/community/features.tsx
var $$splitComponentImporter$2 = () => __vitePreload(() => import("./features-B679-tjK.js"), __vite__mapDeps([30,27,1,2,3,25,14,5]));
var Route$2 = createFileRoute("/community/features")({
	head: () => ({ meta: [{ title: "Feature Requests — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/community/bugs.tsx
var $$splitComponentImporter$1 = () => __vitePreload(() => import("./bugs-DJhB1-kk.js"), __vite__mapDeps([31,27,1,2,3,25,14,5]));
var Route$1 = createFileRoute("/community/bugs")({
	head: () => ({ meta: [{ title: "Bug Reports — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/community/announcements.tsx
var $$splitComponentImporter = () => __vitePreload(() => import("./announcements-11FmRZ88.js"), __vite__mapDeps([32,27,1,2,3,25,14,5]));
var Route = createFileRoute("/community/announcements")({
	head: () => ({ meta: [{ title: "Announcements — TrustBridge" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var TransactionsRoute = Route$17.update({
	id: "/transactions",
	path: "/transactions",
	getParentRoute: () => Route$18
});
var SignupRoute = Route$16.update({
	id: "/signup",
	path: "/signup",
	getParentRoute: () => Route$18
});
var SettingsRoute = Route$15.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => Route$18
});
var SendRoute = Route$14.update({
	id: "/send",
	path: "/send",
	getParentRoute: () => Route$18
});
var ReceiveRoute = Route$13.update({
	id: "/receive",
	path: "/receive",
	getParentRoute: () => Route$18
});
var ProfileRoute = Route$12.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => Route$18
});
var LoginRoute = Route$11.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$18
});
var DashboardRoute = Route$10.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$18
});
var CreateCampaignRoute = Route$9.update({
	id: "/create-campaign",
	path: "/create-campaign",
	getParentRoute: () => Route$18
});
var CampaignsRoute = Route$8.update({
	id: "/campaigns",
	path: "/campaigns",
	getParentRoute: () => Route$18
});
var AnalyticsRoute = Route$7.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => Route$18
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$18
});
var CommunityUpdatesRoute = Route$5.update({
	id: "/community/updates",
	path: "/community/updates",
	getParentRoute: () => Route$18
});
var CommunitySupportRoute = Route$4.update({
	id: "/community/support",
	path: "/community/support",
	getParentRoute: () => Route$18
});
var CommunityGeneralRoute = Route$3.update({
	id: "/community/general",
	path: "/community/general",
	getParentRoute: () => Route$18
});
var CommunityFeaturesRoute = Route$2.update({
	id: "/community/features",
	path: "/community/features",
	getParentRoute: () => Route$18
});
var CommunityBugsRoute = Route$1.update({
	id: "/community/bugs",
	path: "/community/bugs",
	getParentRoute: () => Route$18
});
var rootRouteChildren = {
	IndexRoute,
	AnalyticsRoute,
	CampaignsRoute,
	CreateCampaignRoute,
	DashboardRoute,
	LoginRoute,
	ProfileRoute,
	ReceiveRoute,
	SendRoute,
	SettingsRoute,
	SignupRoute,
	TransactionsRoute,
	CommunityAnnouncementsRoute: Route.update({
		id: "/community/announcements",
		path: "/community/announcements",
		getParentRoute: () => Route$18
	}),
	CommunityBugsRoute,
	CommunityFeaturesRoute,
	CommunityGeneralRoute,
	CommunitySupportRoute,
	CommunityUpdatesRoute
};
var routeTree = Route$18._addFileChildren(rootRouteChildren);
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
//#region node_modules/@tanstack/start-client-core/dist/esm/client/hydrateStart.js
async function hydrateStart() {
	const router = await getRouter();
	let serializationAdapters;
	if (startInstance) {
		const startOptions = await startInstance.getOptions();
		startOptions.serializationAdapters = startOptions.serializationAdapters ?? [];
		window.__TSS_START_OPTIONS__ = startOptions;
		serializationAdapters = startOptions.serializationAdapters;
		router.options.defaultSsr = startOptions.defaultSsr;
	} else {
		serializationAdapters = [];
		window.__TSS_START_OPTIONS__ = { serializationAdapters };
	}
	serializationAdapters.push(ServerFunctionSerializationAdapter);
	if (router.options.serializationAdapters) serializationAdapters.push(...router.options.serializationAdapters);
	router.update({
		basepath: "",
		serializationAdapters
	});
	if (!router.stores.matchesId.get().length) await hydrate(router);
	return router;
}
var exportedHydrateStart = hydrateStart;
//#endregion
//#region node_modules/@tanstack/react-start-client/dist/esm/hydrateStart.js
/**
* React-specific wrapper for hydrateStart that signals hydration completion
*/
async function hydrateStart$1() {
	const router = await exportedHydrateStart();
	window.$_TSR?.h();
	return router;
}
//#endregion
//#region node_modules/@tanstack/react-start-client/dist/esm/StartClient.js
var hydrationPromise;
function StartClient() {
	if (!hydrationPromise) hydrationPromise = hydrateStart$1();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Await, {
		promise: hydrationPromise,
		children: (router) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouterProvider, { router })
	});
}
//#endregion
//#region node_modules/@tanstack/react-start/dist/plugin/default-entry/client.tsx
var import_client = require_client();
(0, import_react.startTransition)(() => {
	(0, import_client.hydrateRoot)(document, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StartClient, {}) }));
});
//#endregion
export { __toESM as _, getMyTransactions as a, register as c, useStructuralSharing as d, useStore as f, __commonJSMin as g, require_react as h, getMe as i, Link as l, require_jsx_runtime as m, useApp as n, login as o, useRouter as p, changePassword as r, logout as s, languages as t, useNavigate as u };
