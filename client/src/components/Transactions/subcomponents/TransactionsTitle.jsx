import {useContext} from 'react';
import {TransactionContext} from '../../../context/TransactionContext';

const TransactionsTitle = ({currentAccount}) => (
	<div className="flex flex-col md:p-12 py-12 px-4">
		<h3 className="text-white text-3xl text-center my-2">
			{currentAccount ? 'Latest Transactions' : 'Connect your account to see the latest transactions'}
		</h3>
	</div>
);

export default TransactionsTitle;
