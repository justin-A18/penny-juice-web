'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavItemProps {
	href: string;
	label: string;
}

export const NavItem = ({ href, label }: NavItemProps) => {
	const pathname = usePathname();
	const isActive = pathname === href && (href !== '/' || pathname === '/');

	return (
		<li
			className={`font-medium text-2xl sm:text-sm md:text-base relative sm:before:content-[''] sm:before:size-2 sm:before:bg-primary sm:before:absolute sm:before:-bottom-3 sm:before:left-1/2 sm:before:rounded-full hover:text-primary sm:hover:sm:before:bg-primary sm:hover:sm:before:opacity-100 sm:hover:sm:before:visible transition-colors duration-300 sm:before:transition-opacity sm:before:duration-300 ${
				isActive
					? 'text-primary before:opacity-100 before:visible'
					: 'text-neutral-600 before:opacity-0 before:invisible'
			}`}>
			<Link href={href}>{label}</Link>
		</li>
	);
};
