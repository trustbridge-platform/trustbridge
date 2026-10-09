/**
 * Detects which browser-extension wallets are currently available.
 *
 * Freighter and Lobstr are checked via their official npm packages'
 * `isConnected()` — the correct, current way to detect either of them.
 * Both extensions communicate with the page over `window.postMessage`
 * rather than synchronously injecting a plain object onto `window`, so a
 * raw `!!window.freighterApi` / `!!window.lobstr` check can fail even when
 * the extension is installed and enabled (see #1, #33).
 *
 * The remaining wallets below don't publish an equivalent official
 * detection package, so they're still checked via the raw globals they're
 * documented to inject. Callers should still expect these checks to
 * occasionally miss a wallet on the very first call — all browser-extension
 * content scripts inject asynchronously and can still be mid-injection when
 * this runs, so callers that care about a reliable initial result should
 * poll a few times a short interval apart (see `pollWalletDetection` below)
 * rather than trusting a single call.
 */
export async function detectWallets(): Promise<Record<string, boolean>> {
  const has = (prop: string) => {
    if (typeof window === "undefined") return false;
    return (window as any)[prop] !== undefined && (window as any)[prop] !== null;
  };

  let freighter = false;
  try {
    // Imported dynamically because @stellar/freighter-api is CommonJS-only and
    // a static ESM named import of it breaks this app's SSR prerender step.
    // Detection only ever matters in the browser anyway.
    const { isConnected } = await import("@stellar/freighter-api");
    const result = await isConnected();
    freighter = !result.error && result.isConnected;
  } catch {
    freighter = false;
  }

  let lobstr = false;
  try {
    // Same reasoning as Freighter above: official package, dynamic import to
    // avoid breaking SSR (also CommonJS-only), isConnected() is the real
    // detection mechanism rather than the window.lobstr global.
    const { isConnected } = await import("@lobstrco/signer-extension-api");
    lobstr = await isConnected();
  } catch {
    lobstr = false;
  }

  return {
    freighter,
    lobstr,
    xbull: has("xBull") || has("xbull") || has("xbullWallet"),
    albedo: has("albedo") || has("albedoWallet"),
    walletconnect: true,
    metamask: has("ethereum"),
  };
}

/**
 * Runs `detectWallets` immediately, then again a few times over the next
 * couple of seconds, invoking `onUpdate` each time the result changes.
 * This is the fix for #1: extensions inject asynchronously, so a single
 * synchronous (or even single async) check made the instant a component
 * mounts can run before the extension is ready and permanently report
 * "not detected" even though the user has it installed and enabled.
 *
 * Returns a cleanup function that stops any pending polling — callers
 * should call it on unmount / when the polling is no longer relevant
 * (e.g. the wallet-connect modal closing).
 */
export function pollWalletDetection(
  onUpdate: (status: Record<string, boolean>) => void,
  { attempts = 6, intervalMs = 400 }: { attempts?: number; intervalMs?: number } = {},
): () => void {
  let cancelled = false;
  let previous = "";

  const runOnce = async () => {
    const status = await detectWallets();
    if (cancelled) return;
    const serialized = JSON.stringify(status);
    if (serialized !== previous) {
      previous = serialized;
      onUpdate(status);
    }
  };

  runOnce();
  const interval = setInterval(() => {
    attempts -= 1;
    if (attempts <= 0) {
      clearInterval(interval);
      return;
    }
    runOnce();
  }, intervalMs);

  return () => {
    cancelled = true;
    clearInterval(interval);
  };
}
