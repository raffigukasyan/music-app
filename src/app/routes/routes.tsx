import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "@/pages/Main/Main.tsx";

export default function AppRouter() {
    const routes = createBrowserRouter([
            { path: '/', element: <Main />, },
        ]
    )

    return <RouterProvider router={routes} />
}
