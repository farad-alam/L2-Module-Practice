import App from "@/App";
import { Hero } from "@/layout/Hero";
import Tasks from "@/layout/pages/Tasks";
import Root from "@/layout/Root";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        children : [
            {
                index: true,
                Component : Hero
            },
            {
                path : "/task",
                Component : Tasks
            }
        ]
    }
])

export default router