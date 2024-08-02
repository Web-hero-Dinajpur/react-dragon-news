import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePages from "../pages/home/HomePages";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<HomePages></HomePages>,
            }
        ]
    }
]);
  export default router;