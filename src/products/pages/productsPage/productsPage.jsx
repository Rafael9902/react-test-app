import { ProductsList } from '../../components/productsList/productsList';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export const ProductsPage = () => {
  const { search } = useLocation();
  const { q = '' } = queryString.parse(search);

  return (
    <>
      <ProductsList endpoint={ q.trim().length > 0 ? `products?search=${q}` : 'products'}/>
    </>
  );
};
