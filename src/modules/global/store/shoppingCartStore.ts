import { create } from 'zustand';
import { Product } from '@/modules/products/interfaces/product.interface';

export interface CartItem extends Product {
	quantity: number;
}

interface CartState {
	cart: CartItem[];
	addToCart: (product: Product) => void;
	removeFromCart: (id: number) => void;
	clearCart: () => void;
	getTotal: () => number;
	getCount: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
	cart: [],

	addToCart: (product) =>
		set((state) => {
			const existing = state.cart.find((item) => item.id === product.id);
			if (existing) {
				return {
					cart: state.cart.map((item) =>
						item.id === product.id
							? { ...item, quantity: item.quantity + 1 }
							: item
					),
				};
			}
			return {
				cart: [...state.cart, { ...product, quantity: 1 }],
			};
		}),

	removeFromCart: (id) =>
		set((state) => {
			const item = state.cart.find((i) => i.id === id);
			if (!item) return state;
			if (item.quantity > 1) {
				return {
					cart: state.cart.map((i) =>
						i.id === id ? { ...i, quantity: i.quantity - 1 } : i
					),
				};
			}
			return {
				cart: state.cart.filter((i) => i.id !== id),
			};
		}),

	clearCart: () => set({ cart: [] }),

	getTotal: () =>
		get().cart.reduce((total, item) => total + item.price * item.quantity, 0),

	getCount: () =>
		get().cart.reduce((count, item) => count + item.quantity, 0),
}));
