import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { TanStackQueryProvider } from '@/modules/global/providers/TanstackProvider';
import { Toaster } from '@/modules/global/components/ui/sonner';

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
			<body className={`${poppins.variable} antialiased`}>
				<TanStackQueryProvider>
					{children}
					<Toaster />
				</TanStackQueryProvider>
			</body>
		</html>
	);
}
