import {useContext} from 'react';
import {TransactionContext} from '../../../context/TransactionContext';

const Title = () => {
	const {connectWallet, currentAccount} = useContext(TransactionContext);

	return (
		<>
			<h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world.
			</h1>
			<p className="text-white text-left mt-5 font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Easily buy &amp; sell cryptocurrencies with Krypto.
			</p>
			{!currentAccount && <button
				type="button"
				onClick={connectWallet}
				className="w-full flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] text-white text-base font-semibold"
			>Connect Wallet</button>}
		</>
	);
};

export default Title;
