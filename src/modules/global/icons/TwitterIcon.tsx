import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
	className?: string;
}

export const TwitterIcon = ({ className, ...props }: Props) => {
	return (
		<svg
			className={`r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk ${className}`}
			fill={props.fill || '#000000'}
			stroke={props.fill || '#000000'}
			{...props}
			viewBox='0 0 24 24'>
			<path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
		</svg>
	);
};
