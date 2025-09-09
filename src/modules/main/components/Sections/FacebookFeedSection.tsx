import { Carrousel } from '@/modules/global/components/carousel/Carrousel';
import React from 'react';

export const FacebookFeedSection = () => {
	return (
		<section className='w-full flex items-center flex-col gap-10 py-16 space-y-6 relative before:content-[""] before:w-full before:h-1/3 before:bg-primary before:absolute before:bottom-0 before:left-0 before:-z-10'>
			<h2 className='text-3xl sm:text-4xl font-semibold mb-4 max-w-5xl w-full text-center'>
				Facebook Feed
			</h2>

			<Carrousel />
		</section>
	);
};
