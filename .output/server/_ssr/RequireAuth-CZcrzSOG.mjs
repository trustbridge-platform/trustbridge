import { i as __toESM } from "../_runtime.mjs";
import { _ as useNavigate, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { l as useApp } from "./AppContext-DkQX8ryp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RequireAuth-CZcrzSOG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RequireAuth({ children }) {
	const { isAuthenticated } = useApp();
	useRouterState();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!isAuthenticated) navigate({ to: "/login" });
	}, [isAuthenticated, navigate]);
	if (!isAuthenticated) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
//#endregion
export { RequireAuth as t };
