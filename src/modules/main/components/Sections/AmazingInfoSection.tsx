import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const AmazingInfoSection = () => {
	return (
		<section className='w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4 py-4 sm:py-16 space-y-6'>
			<figure>
				<Image
					src='/img/juice-info.png'
					alt='Juice Info'
					width={450}
					height={450}
				/>
			</figure>

			<article className='max-w-lg w-full text-center lg:text-left space-y-6 flex flex-col justify-center lg:justify-start items-center lg:items-start'>
				<h2 className='text-3xl sm:text-4xl font-semibold mb-4'>
					<span className='text-primary'>Rainbow</span> of amazing flovaours
				</h2>

				<p className='text-sm sm:text-base md:text-lg font-medium text-neutral-700'>
					Discover a vibrant selection of juices, each bursting with natural
					taste and crafted to delight every child’s palate.
				</p>

				<Link
					href='/'
					className='bg-transparent border-primary border-2 text-primary w-fit px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-primary/90 hover:text-white transition text-sm sm:text-base'>
					Learn more
				</Link>
			</article>
		</section>
	);
};
