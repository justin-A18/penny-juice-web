import { BottleWineIcon, MoveRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { CompanyStatsContainer } from '../CompanyStats/CompanyStatsContainer';

export const HeroSection = () => {
	return (
		<section className='w-full flex flex-col lg:flex-row items-center justify-between gap-8 px-4 py-4 sm:py-16 space-y-6'>
			<article className='max-w-lg w-full text-center lg:text-left space-y-6 flex flex-col justify-center lg:justify-start items-center lg:items-start animate-fade-right'>
				<span className='inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full font-semibold text-sm sm:text-base'>
					Best Juicer <BottleWineIcon />
				</span>

				<h1 className='text-4xl sm:text-7xl font-bold mb-4'>
					100% Blended Fruit <span className='text-primary'>Juice</span>
				</h1>

				<p className='text-sm sm:text-base md:text-lg font-medium text-neutral-700'>
					Explore a world of fun and educational activities designed to inspire
					creativity and curiosity in children.
				</p>

				<Link
					href='/children-juice'
					className='bg-primary text-white w-fit px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-primary/90 transition text-sm sm:text-base'>
					Order Now <MoveRightIcon />
				</Link>

				<CompanyStatsContainer />
			</article>
			<figure className='animate-fade-left'>
				<Image
					src='/img/children.png'
					alt='Hero Image'
					width={500}
					height={500}
				/>
			</figure>
		</section>
	);
};
