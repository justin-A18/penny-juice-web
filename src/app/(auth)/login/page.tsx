'use client';

import FormSecondaryAction from '@/modules/auth/components/FormSecondaryAction';
import { useLoginUser } from '@/modules/auth/hooks/useLoginUser';
import { CustomInput } from '@/modules/global/components/custom-input/CustomInput';
import { Form } from '@/modules/global/components/ui/form';
import GoogleIcon from '@/modules/global/icons/GoogleIcon';
import { LockIcon, MailIcon, MoveRightIcon } from 'lucide-react';

const LoginPage = () => {
	const { form, handleSubmit, isPending } = useLoginUser();

	return (
		<>
			<div className='space-y-8 flex flex-col items-center'>
				<article className='text-center space-y-2'>
					<h1 className='text-2xl md:text-3xl font-regular'>Welcome back</h1>
					<p className='text-zinc-500 text-sm md:text-base'>
						Login to your account to continue shopping, review your orders, and
						enjoy exclusive benefits.
					</p>
				</article>

				<div className='border w-full p-3 rounded-md gap-2 cursor-pointer border-zinc-400 inline-flex justify-center items-center'>
					<GoogleIcon /> <span>Continue with Google</span>
				</div>

				<span className='w-full flex items-center justify-center gap-2 before:content-[""] before:flex-1 before:border-t before:border-zinc-500 after:content-[""] after:flex-1 after:border-t after:border-zinc-500 text-zinc-500'>
					or start with
				</span>
			</div>

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

					<CustomInput
						control={form.control}
						name='password'
						label='Password'
						placeholder='*****'
						type='password'
						icon={<LockIcon className='size-4' />}
					/>

					<FormSecondaryAction
						label='Forgot your password?'
						actionText='Reset it here.'
						href='/recover-password'
						className='text-right'
					/>

					<button
						className='w-full p-4 inline-flex justify-center items-center gap-2 bg-primary text-white rounded-md hover:bg-primary/90 transition cursor-pointer'
						disabled={isPending}>
						Login
						<MoveRightIcon className='size-4' />
					</button>

					<FormSecondaryAction
						label="Don't have an account yet?"
						actionText='Sign up here.'
						href='/register'
						className='text-center'
					/>
				</form>
			</Form>
		</>
	);
};

export default LoginPage;
