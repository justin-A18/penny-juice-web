import { Carrousel } from '@/modules/global/components/carousel/Carrousel';
import { Footer } from '@/modules/global/components/Footer/Footer';
import { Navbar } from '@/modules/global/components/Navbar/Navbar';
import { AmazingInfoSection } from '@/modules/main/components/Sections/AmazingInfoSection';
import { FacebookFeedSection } from '@/modules/main/components/Sections/FacebookFeedSection';
import { HeroSection } from '@/modules/main/components/Sections/HeroSection';
import { NutritionalSection } from '@/modules/main/components/Sections/NutritionalSection';
import { ReasonsSection } from '@/modules/main/components/Sections/ReasonsSection';

export default function Home() {
	return (
		<div className='max-w-7xl mx-auto w-full min-h-dvh'>
			<Navbar />

			<main className='p-4'>
				<HeroSection />
				<ReasonsSection />
				<AmazingInfoSection />
				<NutritionalSection />
				<FacebookFeedSection />
			</main>

			<Footer />
		</div>
	);
}
