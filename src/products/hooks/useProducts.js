import { useEffect, useState } from 'react';

import { getProducts } from '../services/products.service';

export const useProducts = (endpoint, id = 0) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts(endpoint, id)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [endpoint, id]);

  return {
    products,
    isLoading,
  };
};
