import {Outlet} from "react-router-dom";
import {Sidebar} from "@/widgets/Sidebar/index.ts";

const Layout = ():JSX.Element => {
    return (
        <div className={'w-full font-roboto flex justify-between h-dvh bg-myBlack p-3'}>
            <Sidebar />
            <div>
                <header>
                    HEADER
                </header>
                <main>
                    <Outlet/>
                </main>
                <footer>
                    FOOTER
                </footer>
            </div>
        </div>
    )
}


export default Layout;