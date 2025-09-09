import Link from 'next/link';
import { NAVBAR_LINKS } from '../../constants/NavbarLinks.const';
import { FacebookIcon } from '../../icons/FacebookIcon';
import { TwitterIcon } from '../../icons/TwitterIcon';
import Image from 'next/image';

export const Footer = () => {
	return (
		<footer className='space-y-4 py-6 px-8 mt-8'>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				<div className='space-y-4 mb-8'>
					<h4 className='text-xl sm:text-3xl font-semibold'>Explore</h4>
					<ul className='space-y-2'>
						{NAVBAR_LINKS.map((link, i) => (
							<li
								key={i}
								className='text-sm w-fit sm:text-base text-neutral-600
								relative before:content-[""] before:w-full before:h-1 before:bg-primary before:absolute before:-bottom-1 before:left-0 hover:text-primary before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:origin-left'>
								<Link href={link.href}>{link.name}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='lg:col-span-2 space-y-4'>
					<h4 className='text-xl sm:text-3xl font-semibold'>Contact</h4>
					<div className='space-y-2'>
						<p className='text-sm sm:text-base text-neutral-600'>
							915 40th Ave, Bettendorf, IA, United States, Iowa
						</p>
						<p className='text-sm sm:text-base text-neutral-600'>
							pennyjuice@hotmail.com
						</p>
						<p className='text-sm sm:text-base text-neutral-600'>
							+1 563-386-1999
						</p>
					</div>
				</div>
				<div className='hidden md:flex items-center justify-center'>
					<Image
						src='/img/footer-logo.png'
						alt='Logo'
						width={150}
						height={150}
					/>
				</div>
			</div>

			<hr className='w-full border-neutral-700 border-2' />

			<div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
				<p className='text-sm sm:text-base text-neutral-600'>
					© 2025 Penny Juice. Freshness in Every Drop
				</p>
				<div className='flex items-center gap-4'>
					<Link
						href='https://www.facebook.com/PENNYJUICE/?ref=embed_page'
						rel='noopener noreferrer'
						target='_blank'>
						<FacebookIcon
							className='size-7'
							fill='#000000'
						/>
					</Link>

					<Link
						href='https://x.com/1PENNYJUICE'
						rel='noopener noreferrer'
						target='_blank'>
						<TwitterIcon
							className='size-5'
							fill='#000000'
						/>
					</Link>
				</div>
			</div>
		</footer>
	);
};
