import {FC, ReactNode} from "react";

interface ISubTitleProps {
    className?: string,
    children: ReactNode | string
}

export const SubTitle:FC<ISubTitleProps> = ({className, children}) :JSX.Element => {
    return <p className={`text-gray-400 ${className}`}>{children}</p>
}