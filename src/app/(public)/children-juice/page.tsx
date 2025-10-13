import { PRODUCTS } from '@/modules/global/constants/products';
import { ProductItem } from '@/modules/products/components/ProductItem';

const ChildrenJuicePage = () => {
	return (
		<section className='flex flex-col items-center gap-8 pt-8'>
			<h1 className='text-3xl sm:text-4xl animate-fade-down'>
				/ Children Juice
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{PRODUCTS.map((product, i) => (
					<ProductItem
						key={i}
						product={product}
					/>
				))}
			</div>
		</section>
	);
};

export default ChildrenJuicePage;
