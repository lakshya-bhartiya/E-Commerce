import { createBrowserRouter } from "react-router-dom";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Auth from "./components/Auth";
import Home from "./screens/Home";

const router = createBrowserRouter([{
    path: "/",
    children: [
        {
            path: "/",
            element:<Register /> 
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "home",
            element: <Home />
        }
    ]
}])

export default router;