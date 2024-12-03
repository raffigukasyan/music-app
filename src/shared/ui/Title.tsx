import {FC, ReactNode} from "react";

interface ITitleProps {
    className?: string,
    children: ReactNode
}
export const Title:FC<ITitleProps> = ({className, children}):JSX.Element => {
    return <p className={` text-myWhite ${className}`}>{children}</p>
}