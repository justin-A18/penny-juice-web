'use client';

import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import { CAROUSEL_ITEMS } from '../../constants/CarrouselImages.const';

export const Carrousel = () => {
	const [emblaRef] = useEmblaCarousel();

	return (
		<div
			className='overflow-hidden w-full'
			ref={emblaRef}>
			<div className='flex gap-8 items-center'>
				{CAROUSEL_ITEMS.map((item, i) => (
					<div
						className='flex-[0_0_20rem] min-w-0 rounded-2xl'
						key={i}>
						<img
							src={item.src}
							alt={item.label}
							loading='lazy'
							className='rounded-2xl object-cover w-full h-full'
						/>
					</div>
				))}
			</div>
		</div>
	);
};
