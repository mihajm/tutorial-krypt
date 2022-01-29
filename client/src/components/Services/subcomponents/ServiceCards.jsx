import React from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import {BsShieldFillCheck} from 'react-icons/bs';
import {RiHeart2Fill} from 'react-icons/ri';
import {ServiceCard} from '.';

const ServiceCards = () => (
	<div className="flex-1 flex flex-col justify-start items-center">
		<ServiceCard
			color="bg-[#2952e3]"
			title="Security Guaranteed"
			icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
			subtitle="Security is guaranteed. We always maintain privacy &amp; maintain the quality of our products."
		/>
		<ServiceCard
			color="bg-[#8945f8]"
			title="Best exchange rates"
			icon={<BiSearchAlt fontSize={21} className="text-white" />}
			subtitle="Security is guaranteed. We always maintain privacy &amp; maintain the quality of our products."
		/>
		<ServiceCard
			color="bg-[#f84550]"
			title="Quick Transactions"
			icon={<RiHeart2Fill fontSize={21} className="text-white" />}
			subtitle="Security is guaranteed. We always maintain privacy &amp; maintain the quality of our products."
		/>
	</div>
);

export default ServiceCards;
