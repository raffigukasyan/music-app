import {INavigationMenu} from "@/shared/consts/navMenu.ts";
import {NavLink} from "react-router-dom";
import {Icon} from "@/shared/ui/Icon.tsx";
import {FC} from "react";

interface NavigationListProps {
    routes: INavigationMenu[],
    title?: string,
}
export const NavigationList:FC<NavigationListProps> = ({routes, title}):JSX.Element => {
        return (
            <div className={'flex flex-col gap-y-3'}>
                <p className={'pl-4 text-xl text-myWhite'}>{title}</p>
                {routes.map((route: INavigationMenu) => (
                    <NavLink key={route.link} to={route.link}>
                        {({isActive}) => (
                            <div
                                className={`flex gap-x-3 px-4 py-[14px] text-myWhite rounded-full ${isActive ? 'bg-[rgb(39_255_104_/_10%)]' : ''}`}>
                                {<Icon className={`w-6 h-6 ${isActive ? 'text-myGreen' : 'text-myWhite '}`}
                                       type={route.icon}/>}
                                <span className={isActive ? 'text-myGreen' : 'text-myWhite'}>{route.title}</span>
                            </div>
                        )}
                    </NavLink>
                ))}
            </div>
        )
}