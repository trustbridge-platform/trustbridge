import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import {
  StellarWalletsKit,
  WalletNetwork,
  allowAllModules,
} from '@creit.tech/stellar-wallets-kit';

const WalletContext = createContext(null);

const kit = new StellarWalletsKit({
  network: WalletNetwork.PUBLIC,
  selectedWalletId: undefined,
  modules: allowAllModules(),
});

const HORIZON_URL = 'https://horizon.stellar.org';

export function WalletProvider({ children }) {
  const [wallet, setWallet] = useState(null);
  const [address, setAddress] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [network] = useState('mainnet');
  const [balance, setBalance] = useState('0');
  const [transactions, setTransactions] = useState([]);
  const [detectedWallets, setDetectedWallets] = useState([]);

  useEffect(() => {
    let cancelled = false;
    kit.getSupportedWallets().then((wallets) => {
      if (!cancelled) setDetectedWallets(wallets);
    }).catch((err) => {
      console.error('Wallet detection error:', err);
    });
    return () => { cancelled = true; };
  }, []);

  const fetchRealBalance = useCallback(async (addr) => {
    try {
      const res = await fetch(`${HORIZON_URL}/accounts/${addr}`);
      if (!res.ok) {
        if (res.status === 404) {
          setBalance('0');
          return;
        }
        throw new Error(`Horizon returned ${res.status}`);
      }
      const data = await res.json();
      const native = data.balances.find((b) => b.asset_type === 'native');
      setBalance(native ? native.balance : '0');
    } catch (err) {
      console.error('Balance fetch error:', err);
      toast.error('Could not fetch wallet balance from Stellar network');
      setBalance('0');
    }
  }, []);

  const addTransaction = useCallback((tx) => {
    const newTx = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...tx,
    };
    setTransactions((prev) => [newTx, ...prev].slice(0, 50));
  }, []);

  const connectWallet = useCallback(async () => {
    setIsConnecting(true);
    try {
      await kit.openModal({
        onWalletSelected: async (option) => {
          kit.setWallet(option.id);
          const { address: addr } = await kit.getAddress();

          setWallet(option.id);
          setAddress(addr);
          await fetchRealBalance(addr);

          toast.success(`Connected to ${option.name}`);
          addTransaction({
            type: 'connect',
            status: 'success',
            message: `Wallet connected: ${addr.slice(0, 6)}...${addr.slice(-4)}`,
          });
        },
      });
    } catch (err) {
      console.error('Wallet connection error:', err);
      toast.error('Failed to connect wallet');
    } finally {
      setIsConnecting(false);
    }
  }, [fetchRealBalance, addTransaction]);

  const disconnectWallet = useCallback(async () => {
    try {
      await kit.disconnect();
    } catch (err) {
      console.error('Disconnect error:', err);
    }
    setWallet(null);
    setAddress(null);
    setBalance('0');
    toast.info('Wallet disconnected');
    addTransaction({ type: 'disconnect', status: 'info', message: 'Wallet disconnected' });
  }, [addTransaction]);

  const shortenAddress = useCallback((addr) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  }, []);

  const value = {
    wallet,
    address,
    isConnecting,
    network,
    balance,
    transactions,
    detectedWallets,
    connectWallet,
    disconnectWallet,
    addTransaction,
    shortenAddress,
    isConnected: !!address,
  };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) throw new Error('useWallet must be used within a WalletProvider');
  return context;
}

export default WalletContext;
