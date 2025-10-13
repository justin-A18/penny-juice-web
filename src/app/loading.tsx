import Image from 'next/image';

const Loading = () => {
	return (
		<div className='w-full min-h-dvh flex items-center justify-center'>
			<Image
				src='/img/footer-logo.png'
				alt='Logo'
				width={150}
				height={150}
				priority
			/>
		</div>
	);
};

export default Loading;
