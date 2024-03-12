import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";

const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
);


function App() {
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;


//1 npm install, install react-router-dom, import react-router-dom (1-6), and add html (10-31)
//2 create pages folder and home folder with files, products folder and product folder. 
//3 import (here) Outlet, create components folder with navbar and footer
 