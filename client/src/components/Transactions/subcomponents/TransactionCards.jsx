import {TransactionCard} from '.';

const TransactionCards = ({currentAccount, transactions}) => {
	if (!currentAccount || !Array.isArray(transactions)) {
		return <></>;
	}

	return (
		<div className="flex flex-wrap justify-center items-center mt-10">
			{transactions.reverse().map((transaction, i) => (
				<TransactionCard key={i} {...transaction} />
			))}
		</div>
	);
};

export default TransactionCards;
