import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';

const WalletContext = createContext(null);

const WALLET_TYPES = {
  FREIGHTER: 'freighter',
  LOBSTR: 'lobstr',
  METAMASK: 'metamask',
  WALLETCONNECT: 'walletconnect',
  ALBEDO: 'albedo',
  PHANTOM: 'phantom',
};

const WALLET_INFO = {
  [WALLET_TYPES.FREIGHTER]: {
    name: 'Freighter',
    icon: '🔶',
    color: '#fc7e2b',
    description: 'Stellar wallet extension',
    downloadUrl: 'https://www.freighter.app/',
  },
  [WALLET_TYPES.LOBSTR]: {
    name: 'Lobstr',
    icon: '🌐',
    color: '#00b4d8',
    description: 'Stellar wallet',
    downloadUrl: 'https://lobstr.co/',
  },
  [WALLET_TYPES.METAMASK]: {
    name: 'MetaMask',
    icon: '🦊',
    color: '#e07612',
    description: 'Ethereum wallet extension',
    downloadUrl: 'https://metamask.io/',
  },
  [WALLET_TYPES.WALLETCONNECT]: {
    name: 'WalletConnect',
    icon: '🔗',
    color: '#3b99fc',
    description: 'QR code wallet connection',
    downloadUrl: 'https://walletconnect.com/',
  },
  [WALLET_TYPES.ALBEDO]: {
    name: 'Albedo',
    icon: '✨',
    color: '#7c3aed',
    description: 'Stellar wallet',
    downloadUrl: 'https://albedo.link/',
  },
  [WALLET_TYPES.PHANTOM]: {
    name: 'Phantom',
    icon: '👻',
    color: '#ab9ff2',
    description: 'Multi-chain wallet',
    downloadUrl: 'https://phantom.app/',
  },
};

export function WalletProvider({ children }) {
  const [wallet, setWallet] = useState(null);
  const [address, setAddress] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [network, setNetwork] = useState('testnet');
  const [balance, setBalance] = useState('0');
  const [transactions, setTransactions] = useState([]);
  const [detectedWallets, setDetectedWallets] = useState([]);

  // Auto-detect installed wallets on mount
  useEffect(() => {
    const detected = [];
    if (typeof window !== 'undefined') {
      if (window.freighter) detected.push(WALLET_TYPES.FREIGHTER);
      if (window.lobstr) detected.push(WALLET_TYPES.LOBSTR);
      if (window.ethereum) detected.push(WALLET_TYPES.METAMASK);
      if (window.albedo) detected.push(WALLET_TYPES.ALBEDO);
      if (window.phantom) detected.push(WALLET_TYPES.PHANTOM);
      // WalletConnect is always available via QR
      detected.push(WALLET_TYPES.WALLETCONNECT);
    }
    setDetectedWallets(detected);
  }, []);

  const connectFreighter = useCallback(async () => {
    try {
      if (!window.freighter) {
        toast.error('Freighter extension not found. Please install Freighter.');
        window.open(WALLET_INFO[WALLET_TYPES.FREIGHTER].downloadUrl, '_blank');
        return null;
      }
      const { isConnected } = await window.freighter.isConnected();
      if (!isConnected) {
        const { address: addr } = await window.freighter.connect();
        return addr;
      }
      const { address: addr } = await window.freighter.getAddress();
      return addr;
    } catch (err) {
      console.error('Freighter connection error:', err);
      toast.error('Failed to connect to Freighter');
      return null;
    }
  }, []);

  const connectLobstr = useCallback(async () => {
    try {
      if (!window.lobstr) {
        toast.error('Lobstr wallet not found. Please install Lobstr.');
        window.open(WALLET_INFO[WALLET_TYPES.LOBSTR].downloadUrl, '_blank');
        return null;
      }
      const { address: addr } = await window.lobstr.connect();
      return addr;
    } catch (err) {
      console.error('Lobstr connection error:', err);
      toast.error('Failed to connect to Lobstr');
      return null;
    }
  }, []);

  const connectMetaMask = useCallback(async () => {
    try {
      if (!window.ethereum) {
        toast.error('MetaMask not found. Please install MetaMask.');
        window.open(WALLET_INFO[WALLET_TYPES.METAMASK].downloadUrl, '_blank');
        return null;
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return accounts[0];
    } catch (err) {
      console.error('MetaMask connection error:', err);
      toast.error('Failed to connect to MetaMask');
      return null;
    }
  }, []);

  const connectWalletConnect = useCallback(async () => {
    try {
      toast.info('WalletConnect QR code will appear. Please scan with your wallet app.');
      // WalletConnect implementation would go here
      // For now, simulate a connection
      await new Promise(resolve => setTimeout(resolve, 2000));
      return '0x' + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    } catch (err) {
      console.error('WalletConnect error:', err);
      toast.error('Failed to connect via WalletConnect');
      return null;
    }
  }, []);

  const connectAlbedo = useCallback(async () => {
    try {
      if (!window.albedo) {
        toast.error('Albedo not found. Please install Albedo.');
        window.open(WALLET_INFO[WALLET_TYPES.ALBEDO].downloadUrl, '_blank');
        return null;
      }
      const { address: addr } = await window.albedo.connect();
      return addr;
    } catch (err) {
      console.error('Albedo connection error:', err);
      toast.error('Failed to connect to Albedo');
      return null;
    }
  }, []);

  const connectPhantom = useCallback(async () => {
    try {
      if (!window.phantom) {
        toast.error('Phantom wallet not found. Please install Phantom.');
        window.open(WALLET_INFO[WALLET_TYPES.PHANTOM].downloadUrl, '_blank');
        return null;
      }
      const { publicKey } = await window.phantom.connect();
      return publicKey;
    } catch (err) {
      console.error('Phantom connection error:', err);
      toast.error('Failed to connect to Phantom');
      return null;
    }
  }, []);

  const connectWallet = useCallback(async (walletType) => {
    setIsConnecting(true);
    let addr = null;

    try {
      switch (walletType) {
        case WALLET_TYPES.FREIGHTER:
          addr = await connectFreighter();
          break;
        case WALLET_TYPES.LOBSTR:
          addr = await connectLobstr();
          break;
        case WALLET_TYPES.METAMASK:
          addr = await connectMetaMask();
          break;
        case WALLET_TYPES.WALLETCONNECT:
          addr = await connectWalletConnect();
          break;
        case WALLET_TYPES.ALBEDO:
          addr = await connectAlbedo();
          break;
        case WALLET_TYPES.PHANTOM:
          addr = await connectPhantom();
          break;
        default:
          toast.error('Unknown wallet type');
      }

      if (addr) {
        setWallet(walletType);
        setAddress(addr);
        setNetwork('testnet');
        setBalance('1000');
        toast.success(`Connected to ${WALLET_INFO[walletType].name}`);
        addTransaction({
          type: 'connect',
          status: 'success',
          message: `Wallet connected: ${addr.slice(0, 6)}...${addr.slice(-4)}`,
        });
      }
    } catch (err) {
      console.error('Wallet connection error:', err);
      toast.error('Failed to connect wallet');
    } finally {
      setIsConnecting(false);
    }
  }, [connectFreighter, connectLobstr, connectMetaMask, connectWalletConnect, connectAlbedo, connectPhantom]);

  const disconnectWallet = useCallback(() => {
    setWallet(null);
    setAddress(null);
    setBalance('0');
    toast.info('Wallet disconnected');
    addTransaction({
      type: 'disconnect',
      status: 'info',
      message: 'Wallet disconnected',
    });
  }, []);

  const addTransaction = useCallback((tx) => {
    const newTx = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...tx,
    };
    setTransactions(prev => [newTx, ...prev].slice(0, 50));
  }, []);

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
    WALLET_TYPES,
    WALLET_INFO,
    connectWallet,
    disconnectWallet,
    addTransaction,
    shortenAddress,
    isConnected: !!address,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}

export default WalletContext;