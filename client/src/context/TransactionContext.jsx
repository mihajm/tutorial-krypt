import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';
import {CONTRACT_ABI, CONTRACT_ADDRESS} from '../utils/constants';

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();
	return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
};

export const TransactionProvider = ({children}) => {
	const [currentAccount, setCurrentAccount] = useState('');
	const [formData, setFormData] = useState({addressTo: '', amount: '', keyword: '', message: ''});
	const [isLoading, setIsLoading] = useState(false);
	const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
	const [transactions, setTransactions] = useState([]);

	const getAllTransactions = async () => {
		try {
			if (!ethereum) {
				return console.error('Please install metamask');
			}

			const transactionContract = getEthereumContract();
			const availableTransactions = await transactionContract.getAllTransactions();
			const structuredTransactions = availableTransactions.map(transaction => (({
				addressTo: transaction.receiver,
				addressFrom: transaction.sender,
				timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
				message: transaction.message,
				keyword: transaction.keyword,
				amount: parseInt(transaction.amount._hex, 16) / (10 ** 18),
			})));

			setTransactions(structuredTransactions);
		} catch (err) {
			setTransactions([]);
			console.error(err);

			throw new Error('No ethereum object found');
		}
	};

	const checkIfWalletIsConnected = async () => {
		try {
			if (!ethereum) {
				return console.error('Please install metamask');
			}

			const accounts = await ethereum.request({method: 'eth_accounts'});

			if (accounts.length) {
				setCurrentAccount(accounts[0]);

				getAllTransactions();
			} else {
				console.error('No accounts found');
			}
		} catch (error) {
			console.error(error);
		}
	};

	const checkIfTransactionsExist = async () => {
		try {
			const transactionContract = getEthereumContract();
			const transactionCount = await transactionContract.getTransactionCount();

			window.localStorage.setItem('transactionCount', transactionCount);
		} catch (err) {
			console.error(err);

			throw new Error('No ethereum object found');
		}
	};

	const handleChange = (e, name) => {
		setFormData(prevState => ({...prevState, [name]: e.target.value}));
	};

	const connectWallet = async () => {
		try {
			if (!ethereum) {
				console.error('Please install metamask');
			}

			const accounts = await ethereum.request({method: 'eth_requestAccounts'});

			setCurrentAccount(accounts[0]);
		} catch (err) {
			console.error(err);

			throw new Error('No ethereum object found');
		}
	};

	const sendTransaction = async () => {
		try {
			setIsLoading(true);
			if (!ethereum) {
				console.error('Please install metamask');
			}

			const {addressTo, amount, keyword, message} = formData;

			const transactionContract = getEthereumContract();

			const parsedAmmount = ethers.utils.parseEther(amount);

			await ethereum.request({
				method: 'eth_sendTransaction',
				params: [{
					from: currentAccount,
					to: addressTo,
					gas: '0x5208', // 21000 GEWI
					value: parsedAmmount._hex,
				}],
			});

			const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmmount, message, keyword);
			console.log(`Loading - ${transactionHash.hash}`);
			await transactionHash.wait();
			console.log(`Done - ${transactionHash.hash}`);

			const transactionCount = await transactionContract.getTransactionCount();
			setTransactionCount(transactionCount.toNumber());
		} catch (err) {
			console.error(err);
			throw new Error('No ethereum object');
		} finally {
			check();
			setIsLoading(false);
		}
	};

	const check = () => {
		checkIfWalletIsConnected();
		checkIfTransactionsExist();
	};

	ethereum.on('accountsChanged', async accounts => {
		if (!accounts.length) {
			setCurrentAccount(null);
		} else {
			check();
		}
	});

	useEffect(() => check(), []);

	return (
		<TransactionContext.Provider value={{connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction, isLoading, transactions, transactionCount}}>
			{children}
		</TransactionContext.Provider>
	);
};
