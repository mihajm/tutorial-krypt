import {useContext, useState} from 'react';
import {TransactionContext} from '../../../../context/TransactionContext';

import FormInput from './FormInput';
import {Loader} from '../../../';

const Form = () => {
	const {handleChange, formData, sendTransaction, isLoading} = useContext(TransactionContext);

	const handleSubmit = e => {
		e.preventDefault();
		const {addressTo, amount, keyword, message} = formData;

		if (addressTo?.length && amount?.length && keyword?.length && message?.length) {
			sendTransaction();
		}
	};

	return (

		<div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
			<FormInput placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} value={formData.addressTo} />
			<FormInput placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} value={formData.ammount} />
			<FormInput placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} value={formData.keyword} />
			<FormInput placeholder="Enter Message" name="message" type="text" handleChange={handleChange} value={formData.message} />

			<div className="h-[1px] w-full bg-gray-400 my-2" />

			{isLoading
				? (<Loader />)
				: (<button
					type="button"
					onClick={handleSubmit}
					className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
				>Send Now</button>)}

		</div>
	);
};

export default Form;
