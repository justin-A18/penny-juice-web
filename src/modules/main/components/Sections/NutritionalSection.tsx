import Image from 'next/image';
import React from 'react';

export const NutritionalSection = () => {
	return (
		<section className='w-full flex items-center flex-col gap-10 px-4 py-4 sm:py-16 space-y-6'>
			<h2 className='text-3xl sm:text-4xl font-semibold mb-4 max-w-5xl w-full text-center'>
				Penny juice products comply with all requirements for CACFP, Subsidy,
				and Nutrion set forth by the <span className='text-primary'>FDA</span>
			</h2>

			<div className='max-w-[600px] w-full rounded-3xl relative before:content-[""] before:w-[calc(100%+2rem)] before:h-[calc(100%+2rem)] before:z-20 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:rounded-3xl before:border before:border-neutral-700 after:content-[""] after:w-[calc(100%+2rem)] after:h-[calc(100%+2rem)] after:z-20 after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:rounded-3xl after:border after:rotate-3 after:border-neutral-700'>
				<Image
					src='/img/nutritional.png'
					width={600}
					height={600}
					alt='Nutritional Info'
					className='rounded-3xl'
				/>
			</div>
		</section>
	);
};
