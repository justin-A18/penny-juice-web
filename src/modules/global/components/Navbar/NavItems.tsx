import { XIcon } from 'lucide-react';

import { NAVBAR_LINKS } from '../../constants/NavbarLinks.const';
import { NavItem } from './NavItem';

interface Props {
	isOpen: boolean;
	toggleMenu: () => void;
}

export const NavItems = ({ isOpen, toggleMenu }: Props) => {
	return (
		<ul
			className={`fixed w-full sm:w-fit top-0 left-0 z-50 bg-white flex-col sm:flex-row justify-center sm:relative flex items-center gap-8 transition-all duration-500 sm:opacity-100 sm:visible sm:h-full sm:translate-y-0 ${
				isOpen
					? 'opacity-100 visible z-10 translate-y-0 h-full'
					: 'opacity-0 invisible -translate-y-80 h-0'
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
					onClick={toggleMenu}
				/>
			))}
		</ul>
	);
};
