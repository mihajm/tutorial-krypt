import abi from './Transactions.json';

export const CONTRACT_ABI = abi.abi;
export const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

export const NAV_ITEMS = ['Market', 'Exchange', 'Tutorials', 'Wallets'];
