import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "@/app/layout/index.ts"
import {Main} from "@/pages/Main/Main.tsx";
export default function AppRouter() {
    const routes = createBrowserRouter([
            {
                path: '/',
                element: <Layout />,
                children: [
                    {
                        path: '/',
                        element: <Main />
                    },
                ]
            },
        ]
    )

    return <RouterProvider router={routes} />
}
