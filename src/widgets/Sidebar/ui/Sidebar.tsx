import {Logo} from "./Logo.tsx";
import {NavigationList} from "@/widgets/Sidebar/ui/NavigationList.tsx";
import {AUTH_NAVIGATION_MENU, NAVIGATION_MENU} from "@/shared/consts/navMenu.ts";
import {OpenButton} from "@/widgets/Sidebar/ui/OpenButton.tsx";
import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import {NavigationItem} from "@/widgets/Sidebar/ui/NavigationItem.tsx";
import {motion, Variants} from "framer-motion";
import {useState} from "react";
export const Sidebar = ():JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const variantsElement:Variants = {
        visibility: {opacity: 1, display: 'flex'},
        hidden: {opacity: 0, display: 'none'}
    }
    return (
        <motion.div animate={isOpen ? 'visibility' : 'hidden'}
                    className={'flex flex-col justify-between gap-y-7 h-full bg-[#22252B] py-8 px-4 rounded-2xl'}>
            {/*<motion.div>*/}
            {/*    <Logo isOpen={isOpen} />*/}
            {/*</motion.div>*/}
            <nav className={'flex flex-col gap-y-10'}>
                <NavigationList isOpen={isOpen} routes={NAVIGATION_MENU} />
                <NavigationList isOpen={isOpen} title={'Мои музыки'} routes={AUTH_NAVIGATION_MENU} />
            </nav>
            <OpenButton onClick={() => setIsOpen(!isOpen)}>
                <ArrowLeftIcon className={'max-w-6 max-h-6 text-myWhite'} />
                <motion.span  transition={{ duration: 0.2, ease: "easeInOut" }} variants={variantsElement}>Свернуть</motion.span>
            </OpenButton>
            <NavigationItem route={{
                link: '/logout',
                title: 'Выйти',
                icon: 'logout'
            }} isOpen={isOpen} />
        </motion.div>
)
}

