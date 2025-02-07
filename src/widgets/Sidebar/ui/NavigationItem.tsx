import {FC, useContext} from "react";

import {motion} from "framer-motion";

import {INavigationMenu} from "@/shared/consts/navMenu.ts";
import {Icon} from "@/shared/ui/Icon.tsx";
import {ISidebarContext, SidebarContext} from "@/widgets/Sidebar/ui/Sidebar.tsx";

interface NavigationItemProps {
    route: INavigationMenu,
    isActive?: boolean,
}
export const NavigationItem:FC<NavigationItemProps> = ({route, isActive}): JSX.Element => {

    const {variantsElement, variantsItem} = useContext(SidebarContext) as ISidebarContext



    return (
        <motion.div initial={{width: '3.5ren'}}  variants={variantsItem}
            className={`flex gap-x-3 px-4 py-[14px] text-myWhite rounded-full ${isActive ? 'bg-[rgb(39_255_104_/_10%)]' : ''}`}>
            {<Icon className={`w-6 h-6 ${isActive ? 'text-myGreen' : 'text-myWhite '}`}
                   type={route.icon}/>}
            <motion.span initial={{opacity: 0, display: 'none'}}  variants={variantsElement}  transition={{ duration: 0.2, ease: "easeInOut" }}  className={isActive ? 'text-myGreen' : 'text-myWhite'}>{route.title}</motion.span>
        </motion.div>
    )
}