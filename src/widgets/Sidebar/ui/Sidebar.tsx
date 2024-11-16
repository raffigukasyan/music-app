import {Logo} from "@/shared/ui/Logo.tsx";
import {NavigationList} from "@/widgets/Sidebar/ui/NavigationList.tsx";
import {AUTH_NAVIGATION_MENU, NAVIGATION_MENU} from "@/shared/consts/navMenu.ts";
export const Sidebar = ():JSX.Element => {
    return (
        <div className={'flex flex-col gap-y-10 h-full bg-[#22252B] py-8 px-4 rounded-2xl'}>
            <Logo/>
            <nav className={'flex flex-col gap-y-10'}>
                <NavigationList routes={NAVIGATION_MENU} />
                <NavigationList title={'Мои музыки'} routes={AUTH_NAVIGATION_MENU} />
            </nav>
        </div>
)
}

