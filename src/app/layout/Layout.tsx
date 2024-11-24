import {Outlet} from "react-router-dom";
import {Sidebar} from "@/widgets/Sidebar/index.ts";
import {Header} from "@/widgets/Header/index.ts";

const Layout = ():JSX.Element => {
    return (
        <div className={'w-full font-roboto flex gap-x-3 h-dvh bg-myBlack p-3'}>
            <Sidebar />
            <div className={'w-full'}>
                <Header />
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