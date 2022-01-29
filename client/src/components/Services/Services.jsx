import {ServiceCards} from './subcomponents';
import ServicesTitle from './subcomponents/ServicesTitle';

const Services = () => (
	<div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">

		<ServicesTitle />

		<ServiceCards />

	</div>
);

export default Services;
