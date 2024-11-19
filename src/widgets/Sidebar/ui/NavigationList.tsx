import {INavigationMenu} from "@/shared/consts/navMenu.ts";
import {NavLink} from "react-router-dom";
import {FC} from "react";
import {NavigationItem} from "@/widgets/Sidebar/ui/NavigationItem.tsx";
import { Variants} from "framer-motion";

interface NavigationListProps {
    routes: INavigationMenu[],
    title?: string,
    isOpen?: boolean,
    variantsElement?: Variants
}
export const NavigationList:FC<NavigationListProps> = ({routes}):JSX.Element => {
    return (
            <div className={'flex flex-col gap-y-2'}>
                {/*<motion.p variants={variantsElement} className={'pl-4 text-xl text-myWhite'}>{title}</motion.p>*/}
                {routes.map((route: INavigationMenu) => (
                    <NavLink key={route.link} to={route.link}>
                        {({isActive}) => (
                           <NavigationItem  route={route} isActive={isActive} />
                        )}
                    </NavLink>
                ))}
            </div>
        )
}