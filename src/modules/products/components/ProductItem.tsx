'use client';

import {
	HOVER_PRODUCT_COLOR,
	PRODUCT_COLOR,
} from '@/modules/global/constants/products';
import { ShoppingCartIcon } from 'lucide-react';
import { ProductDetail } from './ProductDetail';
import { useState } from 'react';
import { Product } from '../interfaces/product.interface';
import { useCartStore } from '@/modules/global/store/shoppingCartStore';

interface Props {
	product: Product;
}

export const ProductItem = ({ product }: Props) => {
	const [showDetail, setShowDetail] = useState(false);

	const handleShowDetail = () => {
		setShowDetail(!showDetail);
	};

	const handleAddToCart = useCartStore((state) => state.addToCart);

	return (
		<article className='space-y-4'>
			<div
				className={`p-4 ${
					PRODUCT_COLOR[product.color]
				} rounded-sm group w-full overflow-hidden relative cursor-pointer`}
				onClick={handleShowDetail}>
				<img
					src={product.image}
					alt='juice-1'
					className='size-72 group-hover:scale-105 transition duration-500'
				/>
				<span
					className={`absolute bottom-0 w-full left-0 p-4 opacity-90 block text-center translate-y-40 group-hover:translate-y-0 transition duration-300 font-medium ${
						HOVER_PRODUCT_COLOR[product.color]
					}`}>
					Preview
				</span>
			</div>

			<ProductDetail
				product={product}
				preview={showDetail}
				togglePreview={handleShowDetail}
			/>

			<div className='rounded-sm flex flex-col items-center'>
				<h3 className='text-xl'>{product.name}</h3>
				<p className='font-semibold'>${product.price}</p>
				<button
					className='w-full mt-4 bg-primary text-white py-2 rounded-sm inline-flex items-center justify-center gap-2 hover:bg-primary/70 cursor-pointer active:scale-95 transition duration-300'
					onClick={() => handleAddToCart(product)}>
					<ShoppingCartIcon className='size-5' />
					Add to cart
				</button>
			</div>
		</article>
	);
};
