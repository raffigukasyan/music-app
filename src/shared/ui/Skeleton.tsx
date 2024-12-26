import {FC} from "react";

interface ISkeletonProps {
    className?: string,
    children?: JSX.Element | JSX.Element[]
}
export const Skeleton:FC<ISkeletonProps> = ({className, children}):JSX.Element => {
    return (
        <div className={`animate-pulse ${className}`}>
            {children}
        </div>
    )
}