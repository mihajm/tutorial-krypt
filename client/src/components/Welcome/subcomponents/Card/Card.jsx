import {CardContent, CardTitle} from './subcomponents';

const Card = () => (
	<div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
		<div className="flex justify-between flex-col w-full h-full">
			<CardTitle />
			<CardContent />
		</div>
	</div>
);

export default Card;
