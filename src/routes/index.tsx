import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../Pages/Home";

export const router=createBrowserRouter([
    {
        id:"root",
        path:"/",
        Component:Layout,
        children:[
            {
                index:true,
                Component:Home
            }
        ]
    }
])