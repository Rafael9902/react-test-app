import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../productCard/productCard';

import './productsList.scss';

export const ProductsList = ({ endpoint = 'products' }) => {
  const { products, isLoading } = useProducts(endpoint);

  return (
    <section className='products-list'>
      {
        !isLoading && products.map(product => (
          <ProductCard key={product._id} {...product} />
        ))
      }

      { isLoading && 'Loading...' }
    </section>
  )
}
