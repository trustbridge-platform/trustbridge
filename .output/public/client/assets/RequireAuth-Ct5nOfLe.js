import { w as useRouterState } from "./DonateModal-CvlrMbxO.js";
import { _ as __toESM, h as require_react, m as require_jsx_runtime, n as useApp, u as useNavigate } from "./index-CzLJxDRa.js";
//#region src/components/RequireAuth.tsx
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
