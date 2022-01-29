import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';

const CardTitle = () => (
	<div className="flex justify-between items-start">
		<div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
			<SiEthereum fontSize={21} color="white" />
		</div>
		<BsInfoCircle fontSize={17} color="white" />
	</div>
);

export default CardTitle;
