import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePages from "../pages/home/HomePages";
import Login from "../pages/home/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<HomePages></HomePages>,
                loader:() => fetch('/news.json')
            },
            {
                path:'/news/:id',
                element:<PrivateRoute><News></News></PrivateRoute>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>
            }

        ]
    }
]);
  export default router;