import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx"
import Login from "./pages/Log in/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
    {
      path:'Home',
      element:<Home/>
    }
    ,

    {

      path:'cart',
      element:<Cart/>
    }
    ,
    {

      path:'login',
      element:<Login/>
    }

    ]


    

    
  },
]);
export default router;