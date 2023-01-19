import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/productCard/productCard';
import { useProducts } from '../../hooks/useProducts';

import './productPage.scss';


export const ProductPage = () => {
  const { id } = useParams();
  const { products, isLoading } = useProducts('products', id);

  const { isActive, tags, about } = products;

  

  return (
    <>
      <div className='product-container'>
        { !isLoading && <ProductCard {...products}/>  }
        { isLoading && 'Loading...' }

        <ul className='product-details'>
          { isActive == 'false' &&
           <li><span className='product-details__span'>Out Of Stock</span></li> }
          <li><span className='product-details__span'>Tags: </span>{tags}</li>
          <li><span className='product-details__span'>About:</span> {about}</li>
        </ul>

      </div>
    </>
  )
};
