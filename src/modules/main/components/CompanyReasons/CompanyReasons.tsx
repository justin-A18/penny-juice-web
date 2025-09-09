import { REASONS } from '../../constants/home.const';

export const CompanyReasons = () => {
	return (
		<div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] max-w-4xl w-full gap-6'>
			{REASONS.map(({ name, url }, i) => (
				<div
					className='bg-primary p-8 shadow-xl shadow-primary/50 rounded-xl flex flex-col items-center gap-4'
					key={i}>
					<div className='p-4 size-16 bg-warning rounded-full'>
						<img
							src={url}
							alt={name}
						/>
					</div>

					<span className='text-white font-semibold text-base md:text-lg'>
						{name}
					</span>
				</div>
			))}
		</div>
	);
};
