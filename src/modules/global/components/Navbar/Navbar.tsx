'use client';

import { MenuIcon, ShoppingCartIcon, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import { NAVBAR_LINKS } from '@/modules/global/constants/NavbarLinks.const';
import { NavLogo } from './NavLogo';
import { NavItem } from './NavItem';

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (!isOpen) return;

		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	return (
		<header className='p-4'>
			<nav className='w-full flex justify-between items-center'>
				<NavLogo />

				<ul
					className={`fixed w-full sm:w-fit h-full top-0 left-0 z-50 bg-white flex-col sm:flex-row justify-center sm:relative flex items-center gap-8 transition-all duration-300 sm:opacity-100 sm:visible ${
						isOpen ? 'opacity-100 visible z-10' : 'opacity-0 invisible'
					}`}>
					<button
						className='sm:hidden absolute top-4 right-4 cursor-pointer'
						onClick={toggleMenu}>
						<XIcon className='size-8' />
					</button>

					{NAVBAR_LINKS.map((item, i) => (
						<NavItem
							key={i}
							href={item.href}
							label={item.name}
						/>
					))}
				</ul>

				<div className='hidden sm:flex items-center gap-4'>
					<Link href='/'>
						<ShoppingCartIcon />
					</Link>
				</div>

				<button
					className='block sm:hidden cursor-pointer'
					onClick={toggleMenu}>
					<MenuIcon className='size-8' />
				</button>
			</nav>
		</header>
	);
};
