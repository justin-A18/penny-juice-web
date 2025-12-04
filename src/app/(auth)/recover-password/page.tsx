'use client';

import { useRecoverPassword } from '@/modules/auth/hooks/useRecoverPassword';
import { CustomInput } from '@/modules/global/components/custom-input/CustomInput';
import { Form } from '@/modules/global/components/ui/form';
import { MailIcon, MoveRightIcon } from 'lucide-react';

const RecoverPasswordPage = () => {
	const { form, handleSubmit, isPending } = useRecoverPassword();

	return (
		<>
			<article className='text-center space-y-2'>
				<h1 className='text-2xl md:text-3xl font-regular'>
					Regain access to your account
				</h1>
				<p className='text-sm md:text-base text-zinc-500'>
					Enter your email address and we will send you a secure link to reset
					your password.
				</p>
			</article>

			<Form {...form}>
				<form
					onSubmit={handleSubmit}
					className='space-y-8 w-full'>
					<CustomInput
						control={form.control}
						name='email'
						label='Email'
						placeholder='example@gmail.com'
						type='email'
						icon={<MailIcon className='size-4' />}
					/>

					<button
						className='w-full p-4 inline-flex justify-center items-center gap-2 bg-primary text-white rounded-md hover:bg-primary/90 transition cursor-pointer'
						disabled={isPending}>
						Send link
						<MoveRightIcon className='size-4' />
					</button>
				</form>
			</Form>
		</>
	);
};

export default RecoverPasswordPage;
