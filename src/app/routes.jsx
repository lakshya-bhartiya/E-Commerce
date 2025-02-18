import { createBrowserRouter } from "react-router-dom";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Auth from "./components/auth/Auth";
import Home from "./screens/Home";
import Electronics from "./screens/categories/Electronics";
import Jewellary from "./screens/categories/Jewellary";
import MenClothing from "./screens/categories/MenClothing";
import WomenClothing from "./screens/categories/WomenClothing";
import Withoutlogin from "./components/withoutlogin/Withoutlogin";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: (
          <Auth>
            <Home />
          </Auth>
        ),
      },
      {
        path: "login",
        element: (
          <Withoutlogin>
            <Login />
          </Withoutlogin>
        ),
      },
      {
        path: "register",
        element: (
          <Withoutlogin>
            <Register />
          </Withoutlogin>
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
