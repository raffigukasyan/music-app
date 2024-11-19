import {EventHandler, FC} from "react";
import {motion, Variants} from "framer-motion";
interface OpenButtonProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: EventHandler<HTMLButtonElement>,
    variants: Variants
}

export const OpenButton:FC<OpenButtonProps> = ({className, onClick, children, variants}) => {
    return (
        <motion.button variants={variants} className={`py-3   bg-[#37393F] text-myWhite flex items-center justify-center gap-x-3 rounded-3xl ${className}`} onClick={onClick}>{children}</motion.button>
    )
}