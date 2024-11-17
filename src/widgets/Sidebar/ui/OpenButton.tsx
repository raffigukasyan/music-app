import {EventHandler, FC} from "react";

interface OpenButtonProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: EventHandler<HTMLButtonElement>;
}

export const OpenButton:FC<OpenButtonProps> = ({className, onClick, children}) => {
    return (
        <button className={`py-3 bg-[#37393F] text-myWhite flex items-center justify-center gap-x-3 rounded-3xl ${className}`} onClick={onClick}>{children}</button>
    )
}