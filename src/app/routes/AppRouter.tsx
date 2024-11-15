import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "@/app/layout/index.ts"
export default function AppRouter() {
    const routes = createBrowserRouter([
            {
                path: '/',
                element: <Layout />
            },
        ]
    )

    return <RouterProvider router={routes} />
}
