
import {useContext} from 'react';
import {TransactionContext} from '../../context/TransactionContext';

import {TransactionCards, TransactionsTitle} from './subcomponents';

const Transactions = () => {
	const {currentAccount, transactions} = useContext(TransactionContext);

	return (
		<div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
			<TransactionsTitle currentAccount={currentAccount} />
			<TransactionCards currentAccount={currentAccount} transactions={transactions} />
		</div>
	);
};

export default Transactions;
