import { CompanyReasons } from '../CompanyReasons/CompanyReasons';

export const ReasonsSection = () => {
	return (
		<section className='flex items-center flex-col py-16 gap-4 w-full animate-fade-up'>
			<h2 className='text-3xl sm:text-4xl font-semibold mb-4'>
				<span className='text-primary'>Why</span> Penny Juice
			</h2>

			<CompanyReasons />
		</section>
	);
};
