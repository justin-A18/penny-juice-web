import { XIcon } from 'lucide-react';
import { ShoppingCartItem } from './ShoppingCartItem';
import { useCartStore } from '../../store/shoppingCartStore';

interface Props {
	isOpenCart: boolean;
	toggleCart: () => void;
}

export const ShoppingCart = ({ isOpenCart, toggleCart }: Props) => {
	const cartItems = useCartStore((state) => state.cart);
	const total = useCartStore((state) => state.getTotal);
	const clearCart = useCartStore((state) => state.clearCart);

	return (
		<div
			className={`fixed top-0 right-0 z-50 w-full h-full bg-black/50 flex items-center justify-end transition-opacity duration-300 ${
				isOpenCart ? 'opacity-100 visible' : 'opacity-0 invisible'
			}`}>
			<div
				className={`w-full sm:w-[500px] h-full bg-white flex flex-col p-4 gap-4 overflow-auto transform transition-all duration-500 ${
					isOpenCart
						? 'translate-x-0 opacity-100 visible'
						: 'translate-x-full opacity-0 invisible'
				}`}>
				<button
					className='self-end cursor-pointer'
					onClick={toggleCart}>
					<XIcon className='size-8' />
				</button>

				<h1 className='text-3xl font-medium'>Shopping Cart</h1>

				<div className='flex-1 flex items-center flex-col mt-5 gap-4 '>
					{cartItems.length > 0 ? (
						cartItems.map((product, i) => (
							<ShoppingCartItem
								key={i}
								product={product}
							/>
						))
					) : (
						<div className='w-full h-full flex items-center justify-center'>
							<p className='text-2xl font-semibold'>Your cart is empty</p>
						</div>
					)}
				</div>

				<div className='flex items-center justify-between'>
					<p className='text-xl font-semibold'>Total:</p>
					<p className='text-xl font-semibold'>${total().toFixed(2)}</p>
				</div>

				<button
					className='bg-primary text-white py-2 rounded-lg w-full hover:bg-primary/70 cursor-pointer active:scale-95 transition duration-300'
					onClick={clearCart}>
					Checkout
				</button>
			</div>
		</div>
	);
};
