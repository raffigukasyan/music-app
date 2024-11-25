import {FC} from "react";

interface IPreviewImage {
    src: string,
    className?: string
}

export const PreviewImage:FC<IPreviewImage> = ({src, className}):JSX.Element => {
    return (
        <div className={`mxa-w-20 max-h-20  ${className}`}>
            <img src={src} className={'object-cover w-full h-auto'} alt=""/>
        </div>
    )
}