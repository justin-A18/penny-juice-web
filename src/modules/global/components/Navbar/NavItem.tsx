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
			className={`font-medium relative before:content-[''] before:size-2 before:bg-primary before:absolute before:-bottom-3 before:left-1/2 before:rounded-full hover:text-primary hover:before:bg-primary hover:before:opacity-100 hover:before:visible transition-colors duration-300 before:transition-opacity before:duration-300 ${
				isActive
					? 'text-primary before:opacity-100 before:visible'
					: 'text-neutral-600 before:opacity-0 before:invisible'
			}`}>
			<Link href={href}>{label}</Link>
		</li>
	);
};
