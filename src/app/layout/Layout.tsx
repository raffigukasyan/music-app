import {Outlet} from "react-router-dom";
import {Sidebar} from "@/widgets/Sidebar/index.ts";
import {Header} from "@/widgets/Header/index.ts";
import {Player} from "@/widgets/Player";

const Layout = (): JSX.Element => {
    return (
        <main className={'font-roboto bg-myBlack h-full grid grid-cols-[max-content_auto_16%_auto] p-3 gap-3'}>
            <Sidebar/>
            <Header/>
            <div className={'[grid-column:_span_1] overflow-x-scroll'}>
                <Outlet/>
            </div>
            <div className={'[grid-column:_span_2] rounded-3xl bg-myBlack-200'}>
                PLAYLIST
            </div>
            <Player />
        </main>
    )
}


export default Layout;