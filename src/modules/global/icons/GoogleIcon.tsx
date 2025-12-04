interface Props extends React.SVGProps<SVGSVGElement> {
	className?: string;
}

export const GoogleIcon = ({ className, ...props }: Props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='25'
		height='25'
		fill='none'
		viewBox='0 0 25 25'
		className={className}
		{...props}>
		<path
			fill='#4285F4'
			d='M23.28 12.752c0-.744-.06-1.491-.188-2.222H12.717v4.21h5.94a5.06 5.06 0 0 1-2.198 3.324v2.734h3.545c2.081-1.906 3.277-4.718 3.277-8.046'></path>
		<path
			fill='#34A853'
			d='M12.719 23.438c2.965 0 5.467-.97 7.289-2.641l-3.544-2.733c-.986.667-2.26 1.045-3.742 1.045-2.869 0-5.302-1.925-6.175-4.512H2.89v2.817a11.01 11.01 0 0 0 9.828 6.023'></path>
		<path
			fill='#FBBC04'
			d='M6.542 14.597a6.5 6.5 0 0 1 0-4.188V7.592H2.889a10.89 10.89 0 0 0 0 9.822z'></path>
		<path
			fill='#EA4335'
			d='M12.719 5.89a6 6 0 0 1 4.219 1.641l3.14-3.123a10.6 10.6 0 0 0-7.36-2.844 11 11 0 0 0-9.827 6.028l3.65 2.814c.868-2.59 3.306-4.515 6.175-4.515z'></path>
	</svg>
);

export default GoogleIcon;
