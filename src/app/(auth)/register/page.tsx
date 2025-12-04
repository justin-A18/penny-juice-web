'use client';

import FormSecondaryAction from '@/modules/auth/components/FormSecondaryAction';
import { useRegisterUser } from '@/modules/auth/hooks/useRegisterUser';
import { CustomInput } from '@/modules/global/components/custom-input/CustomInput';
import { Form } from '@/modules/global/components/ui/form';
import { LockIcon, MailIcon, MoveRightIcon, UserIcon } from 'lucide-react';

const RegisterPage = () => {
	const { form, handleSubmit, isPending } = useRegisterUser();

	return (
		<>
			<article className='text-center space-y-2'>
				<h1 className='text-2xl md:text-3xl font-regular'>
					Create your account and start shopping
				</h1>
				<p className='text-sm md:text-base text-zinc-500'>
					Sign up in seconds and discover a fast, secure, and personalized
					shopping experience.
				</p>
			</article>

			<Form {...form}>
				<form
					onSubmit={handleSubmit}
					className='space-y-8 w-full'>
					<CustomInput
						control={form.control}
						name='name'
						label='Username'
						placeholder='John doe'
						icon={<UserIcon className='size-4' />}
					/>

					<CustomInput
						control={form.control}
						name='email'
						label='Email'
						placeholder='example@gmail.com'
						type='email'
						icon={<MailIcon className='size-4' />}
					/>

					<CustomInput
						control={form.control}
						name='password'
						label='Password'
						placeholder='*****'
						type='password'
						icon={<LockIcon className='size-4' />}
					/>

					<button
						className='w-full p-4 inline-flex justify-center items-center gap-2 bg-primary text-white rounded-md hover:bg-primary/90 transition cursor-pointer'
						disabled={isPending}
						type='submit'>
						Sign Up
						<MoveRightIcon className='size-4' />
					</button>

					<FormSecondaryAction
						label='Already have an account? '
						actionText='Login here.'
						href='/login'
						className='text-center'
					/>
				</form>
			</Form>
		</>
	);
};

export default RegisterPage;
