import {Outlet} from "react-router-dom";
import {Sidebar} from "@/widgets/Sidebar/index.ts";
import {Header} from "@/widgets/Header/index.ts";
import {Player} from "@/widgets/Player";
import {motion, useScroll, useSpring} from "framer-motion"
import {useRef} from "react";

const Layout = (): JSX.Element => {
    const mainRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({container: mainRef});
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 50,
        restDelta: 0.005
    });

    return (
        <main className={'font-roboto bg-myBlack h-full grid grid-cols-[max-content_auto_16%_auto] p-3 gap-4'}>
            <motion.div className="fixed left-0 origin-[0%] top-0 w-full h-1 bg-myGreen shadow-2xl" style={{scaleX}}/>
            <Sidebar/>
            <Header/>
            <div ref={mainRef}
                 className={'[grid-column:_span_1] overflow-x-hidden overflow-y-scroll hide-scroll'}>
                <Outlet/>
            </div>
            <div className={'[grid-column:_span_2] rounded-3xl bg-myBlack-200'}>
                PLAYLIST
            </div>
            <Player/>
        </main>
    )
}


export default Layout;