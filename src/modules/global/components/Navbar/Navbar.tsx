'use client';

import { MenuIcon, ShoppingCartIcon } from 'lucide-react';

import { NavLogo } from './NavLogo';
import { NavItems } from './NavItems';
import { useNavbar } from './useNavbar';
import { ShoppingCart } from '../shopping-cart/ShoppingCart';

export const Navbar = () => {
	const { isOpenMenu, toggleMenu, onCloseMenu, isCartOpen, toggleCart } =
		useNavbar();

	return (
		<header className='p-4'>
			<nav className='w-full flex justify-between items-center'>
				<NavLogo />

				<NavItems
					isOpen={isOpenMenu}
					toggleMenu={onCloseMenu}
				/>

				<ShoppingCart
					isOpenCart={isCartOpen}
					toggleCart={toggleCart}
				/>

				<div className='flex items-center gap-4'>
					<button
						className='cursor-pointer'
						onClick={toggleCart}>
						<ShoppingCartIcon />
					</button>
					<button
						className='block sm:hidden cursor-pointer'
						onClick={toggleMenu}>
						<MenuIcon className='size-8' />
					</button>
				</div>
			</nav>
		</header>
	);
};
