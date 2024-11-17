import {INavigationMenu} from "@/shared/consts/navMenu.ts";
import {NavLink} from "react-router-dom";
import {FC} from "react";
import {NavigationItem} from "@/widgets/Sidebar/ui/NavigationItem.tsx";

interface NavigationListProps {
    routes: INavigationMenu[],
    title?: string,
    isOpen: boolean,
}
export const NavigationList:FC<NavigationListProps> = ({routes, title, isOpen}):JSX.Element => {
        return (
            <div className={'flex flex-col gap-y-2'}>
                <p className={'pl-4 text-xl text-myWhite'}>{title}</p>
                {routes.map((route: INavigationMenu) => (
                    <NavLink key={route.link} to={route.link}>
                        {({isActive}) => (
                           <NavigationItem isOpen={isOpen} route={route} isActive={isActive} />
                        )}
                    </NavLink>
                ))}
            </div>
        )
}