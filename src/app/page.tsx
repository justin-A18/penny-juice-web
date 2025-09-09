import { Footer } from '@/modules/global/components/Footer/Footer';
import { Navbar } from '@/modules/global/components/Navbar/Navbar';
import { AmazingInfoSection } from '@/modules/main/components/Sections/AmazingInfoSection';
import { HeroSection } from '@/modules/main/components/Sections/HeroSection';
import { NutritionalSection } from '@/modules/main/components/Sections/NutritionalSection';
import { ReasonsSection } from '@/modules/main/components/Sections/ReasonsSection';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='max-w-7xl mx-auto w-full min-h-dvh'>
			<Navbar />

			<main className='p-4'>
				<HeroSection />
				<ReasonsSection />
				<AmazingInfoSection />
				<NutritionalSection />
			</main>

			<Footer />
		</div>
	);
}
