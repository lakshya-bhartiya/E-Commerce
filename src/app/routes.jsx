import { createBrowserRouter } from "react-router-dom";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Electronics from "./screens/categories/Electronics";
import Jewellary from "./screens/categories/Jewellary";
import MenClothing from "./screens/categories/MenClothing";
import WomenClothing from "./screens/categories/WomenClothing";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: (
            <Home />
        ),
      },
      {
        path: "login",
        element: (
            <Login />
        ),
      },
      {
        path: "register",
        element: (
            <Register />
        ),
      },
      {
        path: "category",
        children: [
          {
            path: "electronics",
            element: <Electronics />,
          },
          {
            path: "jewelery",
            element: <Jewellary />,
          },
          {
            path: "men's clothing",
            element: <MenClothing />,
          },
          {
            path: "women's clothing",
            element: <WomenClothing />,
          },
        ],
      },
      {
        path: "product",
        children: [
          {
            path: ":id",
            element: <ProductDetails />,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
