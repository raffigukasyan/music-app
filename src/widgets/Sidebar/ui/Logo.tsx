import {motion} from "framer-motion";
export const Logo = ({isOpen}: {isOpen: boolean}):JSX.Element => {
    return (
         <h1 className={'text-3xl text-myGreen font-lucky'}>
             {isOpen ? <motion.span   transition={{ duration: 0.3, delay: 1, ease: "linear" }}  exit={{opacity: 0}} initial={{opacity: 0}}
                                    animate={{opacity: 1}}>for the soul</motion.span>
                 :
                 <motion.span   transition={{ duration: 0.3, delay: 1, ease: "linear" }} exit={{opacity: 0}} initial={{opacity: 0}}
                              animate={{opacity: 1}} >fs</motion.span>}
         </h1>
    )
}