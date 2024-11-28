import {FC} from "react";

interface IPreviewImage {
    src: string,
    className?: string
}

export const PreviewImage:FC<IPreviewImage> = ({src, className}):JSX.Element => {
    return (
        <div className={`max-w-20 max-h-20  ${className}`}>
            <img src={src} className={'rounded-2xl object-cover w-full h-auto'} alt=""/>
        </div>
    )
}