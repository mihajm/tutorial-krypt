import {shortenAddress} from '../../../utils/shortenAddress';

const TransactionCardContent = ({addressFrom, addressTo, amount, message}) => (
	<div className="w-full mb-6">

		<a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
			<p className="text-white hover:text-[#37c7da] text-base">From: {shortenAddress(addressFrom)}</p>
		</a>

		<a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
			<p className="text-white hover:text-[#37c7da] text-base">To: {shortenAddress(addressTo)}</p>
		</a>

		<p className="text-white text-base">Ammount: {amount} ETH</p>

		{message && (
			<>
				<br />
				<p className="text-white text-base">Message: {message}</p>
			</>
		)}

	</div>
);

export default TransactionCardContent;
