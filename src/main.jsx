import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root';
import Home from './Pages/Home';
import { HelmetProvider } from 'react-helmet-async';
import OurMenu from './Pages/OurMenu';
import Shop from './Pages/Shop';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import UserHome from './Dashboard/UserHome';
import MyCart from './Dashboard/MyCart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/menu",
        element:<OurMenu></OurMenu>
      },
      {
        path:"/shop",
        element:<Shop></Shop>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'userHome',
        element:<UserHome></UserHome>
      },
      {
        path:'myCart',
        element:<MyCart></MyCart>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
