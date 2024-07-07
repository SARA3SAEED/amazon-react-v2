import React from 'react';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Singup from '../pages/Singup';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Cart from '../pages/Cart';





export default function Router() {
    const router = createBrowserRouter ([
        { path: "/home", element: <Home />,},
        { path: "/", element: <Singup />,},
        { path: "/log", element: <Login />,},
        { path: "/det/:id", element: <Details />,},
        { path: "/cart", element: <Cart />,},

    ])

  return (
    <RouterProvider router={router} />
      
  )
}
