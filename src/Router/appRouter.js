import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import App from "../App";
import Error from "../Components/Error";
import Restaurant from "../Components/Restaurant";
import RestaurantMenu from "../Components/RestaurantMenu";
import Cart from "../Components/Cart";
// import { lazy } from "react";

// const RestaurantMenu = lazy(()=> import("../Components/RestaurantMenu"));

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement: <Error/>,
        children: [
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/",
                element: <Restaurant/>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            }, 
            {
                path:"/cart",
                element: <Cart/>
            },               

        ]
    },

]);

export default appRouter;