import { cn } from '@/modules/global/lib/utils';
import Link from 'next/link';

interface FormSecondaryActionProps {
	label: string;
	actionText: string;
	href: string;
	className?: string;
}

export default function FormSecondaryAction({
	label,
	actionText,
	href,
	className = '',
}: FormSecondaryActionProps) {
	return (
		<p className={cn('w-full text-sm text-zinc-600', className)}>
			{label}{' '}
			<Link
				href={href}
				className='text-black font-semibold hover:underline'>
				{actionText}
			</Link>
		</p>
	);
}
