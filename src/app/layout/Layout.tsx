import {Outlet} from "react-router-dom";
import {Sidebar} from "@/widgets/Sidebar/index.ts";
import {Header} from "@/widgets/Header/index.ts";

const Layout = ():JSX.Element => {
    return (
        <div className={'flex gap-x-3 h-screen bg-myBlack p-3'}>
            <Sidebar />
            <main className={'flex-1'}>
                <Header />
                <div className={'flex w-full mt-4 h-full gap-x-3'}>
                        <div className={'w-0 flex-1'}>
                            <Outlet/>
                        </div>
                        <div className={'w-[20%] rounded-3xl h-full bg-myBlack-200'}>
                            hfghfg
                        </div>
                </div>
            </main>
        </div>
    )
}


export default Layout;