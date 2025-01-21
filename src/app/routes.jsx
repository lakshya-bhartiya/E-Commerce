import { createBrowserRouter } from "react-router-dom";
import Register from "./screens/Register";
import Login from "./screens/Login";

const router = createBrowserRouter([{
    path: "/",
    children: [
        {
            path: "/",
            element: <Register />
        },
        {
            path: "login",
            element: <Login />
        }
    ]
}])

export default router;