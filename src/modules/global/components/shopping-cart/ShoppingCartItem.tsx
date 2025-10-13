import { ChevronDownIcon, ChevronUpIcon, TrashIcon } from 'lucide-react';
import { PRODUCT_COLOR } from '../../constants/products';
import { CartItem, useCartStore } from '../../store/shoppingCartStore';

interface Props {
	product: CartItem;
}

export const ShoppingCartItem = ({ product }: Props) => {
	const handleRemoveFromCart = useCartStore((state) => state.removeFromCart);
	const handleAddToCart = useCartStore((state) => state.addToCart);

	return (
		<div className='flex justify-between items-center w-full border border-gray-200 rounded-2xl p-2 transition-all bg-white'>
			<div className='flex items-center gap-4'>
				<img
					src={product.image}
					alt={product.name}
					className={`size-16 rounded-xl  p-2 object-contain ${
						PRODUCT_COLOR[product.color]
					}`}
				/>
				<div>
					<h3 className='text-gray-800 font-medium'>{product.name}</h3>
					<p className='font-semibold'>${product.price}</p>
				</div>
			</div>

			<div className='flex items-center gap-6'>
				<div className='flex items-center bg-gray-100 rounded-lg px-3 py-1'>
					<button
						className='hover:text-green-600 transition cursor-pointer'
						onClick={() => handleRemoveFromCart(product.id)}
						disabled={product.quantity === 1}>
						<ChevronDownIcon className='size-4' />
					</button>
					<p className='text-sm font-semibold mx-2'>{product.quantity}</p>
					<button
						className='hover:text-green-600 transition cursor-pointer'
						onClick={() => handleAddToCart(product)}>
						<ChevronUpIcon className='size-4' />
					</button>
				</div>

				<button
					className='p-2 rounded-full hover:bg-red-50 hover:text-red-600 transition cursor-pointer'
					onClick={() => handleRemoveFromCart(product.id)}>
					<TrashIcon className='size-5' />
				</button>
			</div>
		</div>
	);
};
