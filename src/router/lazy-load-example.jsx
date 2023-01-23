const usersRouter = () => import('./users/routes.tsx')

const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: () => fetch(`/api/config`).then((res) => res.json()),
    children: [
      { index: true, element: <Home /> },
      // `router` should be able to accept lazy-loaded routers
      // `router` and `element` are mutually exclusive
      { path: 'users/*', router: usersRouter }, 
    ],
  },
  {
    path: '/login'',
    element: <Login />,
  }
]);
