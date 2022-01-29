import {TransactionCardContent, TransactionCardGif} from '.';

const TransactionCard = ({addressTo, addressFrom, timestamp, message, keyword, amount, url}) => (
	<div className="bg-[#181918] m-4 flex flex-1 flex-col p-3 rounded-md hover:shadow-2xl 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px]">
		<div className="flex flex-col items-center w-full mb-6 p-2">

			<TransactionCardContent addressFrom={addressFrom} addressTo={addressTo} message={message} amount={amount} />

			<TransactionCardGif timestamp={timestamp} keyword={keyword} url={url} />

		</div>
	</div>
);

export default TransactionCard;
