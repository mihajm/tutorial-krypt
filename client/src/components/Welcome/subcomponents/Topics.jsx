import {Topic} from '.';

const Topics = () => (
	<div className="grid sm:grid-cols-3 grid-cols 2 w-full mt-10">
		<Topic title="Reliability" classProps="rounded-tl-2xl" />
		<Topic title="Security"/>
		<Topic title="Ethereum" classProps="rounded-tr-2xl" />
		<Topic title="Web 3.0" classProps="rounded-bl-2xl" />
		<Topic title="Low fees" />
		<Topic title="Blockchain" classProps="rounded-br-2xl" />
	</div>
);

export default Topics;
