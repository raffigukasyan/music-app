import {Outlet} from "react-router-dom";
import {Sidebar} from "@/widgets/Sidebar/index.ts";
import {Header} from "@/widgets/Header/index.ts";

const Layout = ():JSX.Element => {
    return (
        <div className={'w-full font-roboto flex gap-x-3 h-[100vh] bg-myBlack p-3'}>
            <Sidebar />
            <div className={'h-full w-full'}>
                <Header />
                <main className={'flex mt-4 w-full h-full  gap-x-3'}>
                    <Outlet />
                    <aside className={'flex rounded-3xl w-full h-full bg-myBlack-200'}></aside>
                </main>
            </div>
        </div>
    )
}


export default Layout;