const AboutUsPage = () => {
	return (
		<section className='flex items-center flex-col gap-8 max-w-2xl mx-auto'>
			<h1 className='text-3xl sm:text-4xl animate-fade-down'>/ About Us</h1>

			<img
				src='/img/about-us.webp'
				alt='About Us'
				className='w-full rounded-md animate-fade'
			/>

			<p className='text-justify leading-relaxed text-base sm:text-lg '>
				At <span className='font-semibold'>Penny Juice</span>, we believe that
				life tastes better when it’s colorful. Our mission is to bring pure
				fruit energy into every cup — vibrant, natural, and refreshing. We craft
				our juices using real fruits, balancing bold flavor with honest
				ingredients to create a drink that not only quenches your thirst but
				uplifts your mood. Every bottle is a celebration of simplicity,
				freshness, and good vibes.
			</p>

			<p className='text-justify leading-relaxed text-base sm:text-lg '>
				What started as a small idea to make better juice has grown into a
				passion for spreading positivity through taste and color. We’re inspired
				by the people who choose real over artificial, flavor over filler, and
				joy over routine. With{' '}
				<span className='font-semibold'>Penny Juice</span>, you don’t just drink
				juice — you sip creativity, energy, and life itself.
			</p>
		</section>
	);
};

export default AboutUsPage;
