import {Copyright} from '.';

const FooterBottom = () => (
	<>
		<div className="flex justify-center items-center flex-col mt-5">
			<p className="text-white text-sm text-center">Come join us</p>
			<a className="text-white text-sm text-center hover:text-[#37c7da]" href="mailto:example@mail.com">example@mail.com</a>
		</div>

		<div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />

		<Copyright />
	</>
);

export default FooterBottom;
