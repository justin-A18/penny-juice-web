import { Footer } from '@/modules/global/components/Footer/Footer';
import { Navbar } from '@/modules/global/components/Navbar/Navbar';
import React from 'react';

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='max-w-7xl mx-auto w-full min-h-dvh'>
			<Navbar />
			<main className='p-4'>{children}</main>
			<Footer />
		</div>
	);
}
