const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function getToken(): string | null {
  return localStorage.getItem("trustbridge_token");
}

async function request(path: string, options: RequestInit = {}): Promise<any> {
  const token = getToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const res = await fetch(`${BASE}${path}`, { ...options, headers });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed: ${res.statusText}`);
  }
  return res.json();
}

// Auth
export function register(data: { firstName: string; lastName: string; email: string; password: string; confirmPassword: string }) {
  return request("/auth/register", { method: "POST", body: JSON.stringify(data) });
}
export function login(data: { email: string; password: string }) {
  return request("/auth/login", { method: "POST", body: JSON.stringify(data) });
}
export function getMe() {
  return request("/auth/me");
}
export function updateProfile(data: Record<string, any>) {
  return request("/auth/profile", { method: "PUT", body: JSON.stringify(data) });
}
export function changePassword(data: { oldPassword: string; newPassword: string; confirmPassword: string }) {
  return request("/auth/change-password", { method: "PUT", body: JSON.stringify(data) });
}
export function logout() {
  localStorage.removeItem("trustbridge_token");
  return Promise.resolve();
}

// Campaigns
export function getCampaigns(params?: { category?: string; status?: string; q?: string }) {
  const query = new URLSearchParams(params as any).toString();
  return request(`/campaigns${query ? `?${query}` : ""}`);
}
export function getCampaign(id: string) {
  return request(`/campaigns/${id}`);
}
export function createCampaign(data: any) {
  return request("/campaigns", { method: "POST", body: JSON.stringify(data) });
}
export function donateToCampaign(id: string, data: { xdr: string; amount: number; memo?: string }) {
  return request(`/campaigns/${id}/donate`, { method: "POST", body: JSON.stringify(data) });
}

// Transactions
export function getMyTransactions(params?: { type?: string; q?: string }) {
  const query = new URLSearchParams(params as any).toString();
  return request(`/transactions/me${query ? `?${query}` : ""}`);
}
export function sendTransaction(data: { xdr: string; to: string; amount: number; memo?: string; asset?: string }) {
  return request("/transactions/send", { method: "POST", body: JSON.stringify(data) });
}
export function getBalance(address: string) {
  return request(`/transactions/balance/${address}`);
}

// Wallet
export function connectWallet(data: { address: string; provider: string }) {
  return updateProfile({ walletAddress: data.address, walletProvider: data.provider });
}