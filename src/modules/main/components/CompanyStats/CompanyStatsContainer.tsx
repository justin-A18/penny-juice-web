import React from 'react';
import { COMPANY_STATS } from '../../constants/home.const';
import { CompanyStatsItem } from './CompanyStatsItem';

export const CompanyStatsContainer = () => {
	return (
		<div className='flex items-center gap-8 justify-center md:justify-start text-center text-black'>
			{COMPANY_STATS.map(({ name, value }) => (
				<CompanyStatsItem
					key={name}
					name={name}
					value={value}
				/>
			))}
		</div>
	);
};
