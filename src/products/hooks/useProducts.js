import { useEffect, useState } from 'react';

import { getProducts } from '../services/products.service';

export const useProducts = (endpoint, id = 0) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const products$ = getProducts(endpoint, id).subscribe({
      next: (res) => setProducts(res),
      error: (err) => console.error(err),
      complete: setIsLoading(false),
    });

    return () => products$.unsubscribe();
  }, [endpoint, id]);

  return {
    products,
    isLoading,
  };
};
