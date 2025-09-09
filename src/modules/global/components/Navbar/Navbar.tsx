import { MenuIcon, SearchIcon, ShoppingBagIcon } from 'lucide-react';
import Link from 'next/link';

import { NAVBAR_LINKS } from '@/modules/global/constants/NavbarLinks.const';
import { NavLogo } from './NavLogo';
import { NavItem } from './NavItem';

export const Navbar = () => {
	return (
		<header className='p-4'>
			<nav className='w-full flex justify-between items-center'>
				<NavLogo />

				<ul className='hidden sm:flex items-center gap-8'>
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
						<SearchIcon />
					</Link>
					<Link href='/'>
						<ShoppingBagIcon />
					</Link>
				</div>

				<button className='block sm:hidden'>
					<MenuIcon className='size-8' />
				</button>
			</nav>
		</header>
	);
};
