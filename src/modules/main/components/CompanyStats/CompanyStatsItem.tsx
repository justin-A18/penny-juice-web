import React from 'react';

interface Props {
	name: string;
	value: number;
}

export const CompanyStatsItem = ({ name, value }: Props) => {
	return (
		<div className='px-2 sm:px-4'>
			<span className='block text-xl sm:text-2xl font-semibold'>+{value}</span>
			<span className='text-neutral-700 text-xs sm:text-sm font-medium'>
				{name}
			</span>
		</div>
	);
};
