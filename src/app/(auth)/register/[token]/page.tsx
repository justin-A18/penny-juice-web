'use client';

import { useValidateAccount } from '@/modules/auth/hooks/useValidateAccount';
import { Spinner } from '@/modules/global/components/ui/spinner';
import { MoveRightIcon } from 'lucide-react';

const ValidateAccountPage = () => {
	const { goToLogin, isFetching } = useValidateAccount();

	return (
		<>
			<article className='text-center space-y-2'>
				<h1 className='text-2xl md:text-3xl font-regular'>
					{isFetching ? 'Verifying your account...' : 'Account verified'}
				</h1>
				<p className='text-sm md:text-base text-zinc-500'>
					{isFetching
						? 'Please wait while we confirm your information.'
						: 'Thank you for joining Penny Juice!'}
				</p>
			</article>

			{isFetching ? (
				<Spinner className='size-10' />
			) : (
				<button
					className='w-full p-4 inline-flex justify-center items-center gap-2 bg-primary text-white rounded-md hover:bg-primary/90 transition cursor-pointer'
					onClick={goToLogin}>
					Go to Login
					<MoveRightIcon className='size-4' />
				</button>
			)}
		</>
	);
};

export default ValidateAccountPage;
