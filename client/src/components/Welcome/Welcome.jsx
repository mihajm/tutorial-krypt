import {Title, Topics, Card, Form} from './subcomponents';

const Welcome = () => (
	<div className="flex w-full justify-center items-center">
		<div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
			<div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
				<Title/>
				<Topics />
			</div>
			<div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
				<Card />
				<Form/>
			</div>
		</div>
	</div>
);

export default Welcome;
