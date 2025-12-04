'use client';

import { useResetPassword } from '@/modules/auth/hooks/useResetPassword';
import { CustomInput } from '@/modules/global/components/custom-input/CustomInput';
import { Form } from '@/modules/global/components/ui/form';
import { LockIcon, MoveRightIcon } from 'lucide-react';

const ChangePasswordPage = () => {
	const { form, handleSubmit, isPending } = useResetPassword();

	return (
		<>
			<article className='text-center space-y-2'>
				<h1 className='text-2xl md:text-3xl font-regular'>
					Create a new password
				</h1>
				<p className='text-zinc-500 text-sm md:text-base'>
					Choose a secure password to continue shopping without interruption.
				</p>
			</article>

			<Form {...form}>
				<form
					onSubmit={handleSubmit}
					className='space-y-8 w-full'>
					<CustomInput
						control={form.control}
						name='password'
						label='Password'
						placeholder='*****'
						type='password'
						icon={<LockIcon className='size-4' />}
					/>

					<CustomInput
						control={form.control}
						name='confirmPassword'
						label='Confirm your password'
						placeholder='*****'
						type='password'
						icon={<LockIcon className='size-4' />}
					/>

					<button className='w-full p-4 inline-flex justify-center items-center gap-2 bg-primary text-white rounded-md hover:bg-primary/90 transition cursor-pointer' disabled={isPending}>
						Save password
						<MoveRightIcon className='size-4' />
					</button>
				</form>
			</Form>
		</>
	);
};

export default ChangePasswordPage;
