import { r as useApp } from "./AppContext-Cyd9VWQY.js";
import { useEffect } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Fragment, jsx } from "react/jsx-runtime";
//#region src/components/RequireAuth.tsx
function RequireAuth({ children }) {
	const { isAuthenticated } = useApp();
	useRouterState();
	const navigate = useNavigate();
	useEffect(() => {
		if (!isAuthenticated) navigate({ to: "/login" });
	}, [isAuthenticated, navigate]);
	if (!isAuthenticated) return null;
	return /* @__PURE__ */ jsx(Fragment, { children });
}
//#endregion
export { RequireAuth as t };
