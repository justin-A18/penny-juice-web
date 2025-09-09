import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
	title: 'Penny Juice',
	description:
		'Delicious, natural, and affordable juices for children and families',
	icons: {
		icon: '/logo.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.variable} antialiased`}>{children}</body>
		</html>
	);
}
