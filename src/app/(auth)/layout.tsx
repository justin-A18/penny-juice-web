import { NavLogo } from '@/modules/global/components/Navbar/NavLogo';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='p-4'>
			<NavLogo />
			<section className='flex flex-col items-center justify-center h-[calc(100vh-5rem)] max-w-md w-full mx-auto gap-8'>
				{children}
			</section>
		</main>
	);
};

export default AuthLayout;
