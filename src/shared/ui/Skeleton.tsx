import {FC} from "react";

interface ISkeletonProps {
    className?: string
}
export const Skeleton:FC<ISkeletonProps> = ({className}):JSX.Element => {
    return (
        <div className={`animate-pulse ${className}`}></div>
    )
}