import { PRODUCT_COLOR } from '@/modules/global/constants/products';
import { XIcon } from 'lucide-react';
import { Product } from '../interfaces/product.interface';

interface Props {
	product: Product;
	preview: boolean;
	togglePreview: () => void;
}

export const ProductDetail = ({ product, preview, togglePreview }: Props) => {
	return (
		<div
			className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/20 backdrop-blur-sm z-[9999] transition-all duration-300 p-4 ${
				preview ? 'opacity-100 visible' : 'opacity-0 invisible'
			}`}>
			<div
				className={`relative p-8 ${
					PRODUCT_COLOR[product.color]
				} rounded-2xl w-full max-w-xl flex items-center justify-center overflow-hidden transition-all duration-300 transform ${
					preview
						? 'scale-100 translate-y-0 opacity-100'
						: 'scale-95 translate-y-4 opacity-0'
				}`}>
				<button
					onClick={togglePreview}
					className='absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors cursor-pointer'>
					<XIcon className='size-7 text-gray-700' />
				</button>

				<img
					src={product.image}
					alt={product.name}
					className='sm:size-96 object-cover'
				/>
			</div>
		</div>
	);
};
