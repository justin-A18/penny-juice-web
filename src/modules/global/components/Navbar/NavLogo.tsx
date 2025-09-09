import Link from 'next/link';

export const NavLogo = () => {
	return (
		<Link
			href='/'
			className='inline-flex items-center gap-3 w-fit'>
			<img
				src='/logo.svg'
				alt='Logo'
				className='size-10'
			/>

			<span className='font-semibold hidden md:block'>Penny Juice</span>
		</Link>
	);
};
