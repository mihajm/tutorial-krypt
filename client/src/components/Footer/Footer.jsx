import {FooterBottom, FooterLinks, FooterLogo} from './subcomponents';

const Footer = () => (
	<div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">

		<div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
			<FooterLogo />
			<FooterLinks />
		</div>

		<FooterBottom />

	</div>
);

export default Footer;
