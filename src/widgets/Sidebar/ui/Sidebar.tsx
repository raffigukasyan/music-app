
import {NavigationList} from "@/widgets/Sidebar/ui/NavigationList.tsx";
import {AUTH_NAVIGATION_MENU, NAVIGATION_MENU} from "@/shared/consts/navMenu.ts";
import {OpenButton} from "@/widgets/Sidebar/ui/OpenButton.tsx";
import {Icon} from "@/shared/index.ts";
import {NavigationItem} from "@/widgets/Sidebar/ui/NavigationItem.tsx";
import {motion, Variants} from "framer-motion";
import {createContext, useState} from "react";

export interface ISidebarContext {
    variantsElement: Variants,
    variantsItem: Variants
}

export const SidebarContext = createContext<ISidebarContext | undefined>(undefined);
export const Sidebar = ():JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const variantsElement:Variants = {
        visibility: {opacity: 1, display: 'flex'},
        hidden: {opacity: 0, display: 'none'}
    }
    const variantsItem:Variants = {
        visibility: {width: '12rem',     transition: {
                when: "beforeChildren",
            }},
        hidden:  {width: '3.5rem',    transition: {
                when: "afterChildren",
            }}
    }



    return (
        <SidebarContext.Provider value={{variantsElement, variantsItem}}>
            <motion.div animate={isOpen ? 'visibility' : 'hidden'}
                        className={'[grid-row:_span_3]  flex flex-col justify-between gap-y-7 h-full bg-[#22252B] py-8 px-4 rounded-2xl'}>
                {/*<motion.div>*/}
                {/*    <Logo isOpen={isOpen} />*/}
                {/*</motion.div>*/}
                <nav className={'flex flex-col gap-y-10'}>
                    <NavigationList   routes={NAVIGATION_MENU}/>
                    <NavigationList title={'Мои музыки'} routes={AUTH_NAVIGATION_MENU}/>
                </nav>
                <OpenButton variants={variantsItem}  onClick={() => setIsOpen(!isOpen)}>
                    <Icon type={isOpen ? 'arrowLeft' : 'arrowRight'} className={'max-w-6 max-h-6 text-myWhite'}/>
                    <motion.span transition={{duration: 0.2, ease: "easeInOut"}} variants={variantsElement}>Свернуть
                    </motion.span>
                </OpenButton>
                <NavigationItem  route={{
                    link: '/logout',
                    title: 'Выйти',
                    icon: 'logout'
                }}/>
            </motion.div>
        </SidebarContext.Provider>
    )
}

