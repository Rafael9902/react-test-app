import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { ProductsPage } from '../products/pages/productsPage/productsPage';
import { Navigate } from "react-router-dom";
import { ProductPage } from '../products/pages/productPage/productPage';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error 404</div>,
    children: [
      { index: true, element: <ProductsPage /> },
      { path: '/product/:id', element: <ProductPage />}
    ],
  },
  { path: '*', element: <Navigate to='/' replace={true} />}
]);
