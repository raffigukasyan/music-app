import {Icon} from "@/shared/ui/Icon.tsx";
import {INavigationMenu} from "@/shared/consts/navMenu.ts";
import {FC} from "react";
import {motion, Variants} from "framer-motion";

interface NavigationItemProps {
    route: INavigationMenu,
    isActive?: boolean,
    isOpen: boolean
}
export const NavigationItem:FC<NavigationItemProps> = ({route, isActive, isOpen}): JSX.Element => {
   const variantsElement:Variants = {
       visibility: {opacity: 1, display: 'flex'},
       hidden: {opacity: 0, display: 'none'}
   }

   const variantsItem:Variants = {
       visibility: { width: '100%'},
       hidden: {width: 'fit-content'}
   }
    return (
        <motion.div  variants={variantsItem}
            className={`flex gap-x-3 px-4 py-[14px] text-myWhite rounded-full ${isActive ? 'bg-[rgb(39_255_104_/_10%)]' : ''}`}>
            {<Icon className={`w-6 h-6 ${isActive ? 'text-myGreen' : 'text-myWhite '}`}
                   type={route.icon}/>}
            {isOpen ? <span className={isActive ? 'text-myGreen' : 'text-myWhite'}>{route.title}</span> : ''}
        </motion.div>
    )
}