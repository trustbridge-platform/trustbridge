import { createContext, useContext, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
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
var AppCtx = createContext(null);
function useApp() {
	const v = useContext(AppCtx);
	if (!v) throw new Error("useApp must be used inside AppProvider");
	return v;
}
function AppProvider({ children }) {
	const [collapsed, setCollapsed] = useState(false);
	const [lang, setLang] = useState("en");
	const [user, setUser] = useState(null);
	const [wallet, setWallet] = useState({
		connected: false,
		address: null,
		provider: null,
		detected: false
	});
	const [walletModalOpen, setWalletModalOpen] = useState(false);
	const [donateTarget, setDonateTarget] = useState(null);
	const [xlmBalance, setXlmBalance] = useState(null);
	const isAuthenticated = !!user;
	useEffect(() => {
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
	return /* @__PURE__ */ jsx(AppCtx.Provider, {
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
export { getMe as a, logout as c, changePassword as i, register as l, languages as n, getMyTransactions as o, useApp as r, login as s, AppProvider as t };
