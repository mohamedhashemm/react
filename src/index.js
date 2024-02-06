import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,


  Form,
} from "react-router-dom";
import App from "./App"; 
import FeaturesPage from "./FeaturesPage/FeaturesPage";
import Download from "./DownloadPage/Download";
import AllProduct from "./ProductPage/AllProduct";
import AllShoping from "./ShopingPage/AllShoping";
import AllCart from "./CartPage/AllCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
      
  },
  {
    path: "features",
    element: <FeaturesPage/>,
  },

  {
    path: "download",
    element: <Download/>,
  },
 
  
  {
    path: "Product",
    element: <AllProduct/>,
  },

  {
    path: "Shoping",
    element: <AllShoping/>,
  },
  {
    path: "Cart",
    element: <AllCart/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( <App />
  
// );