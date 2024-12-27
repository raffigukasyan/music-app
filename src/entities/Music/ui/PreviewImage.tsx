import {FC} from "react";
import {Icon} from "@/shared";

interface IPreviewImage {
    src: string,
    className?: string,
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void,
    isActive: boolean
}

export const PreviewImage: FC<IPreviewImage> = ({src, onClick, isActive, className}): JSX.Element => {
    return (
        <div onClick={onClick} className={`relative max-w-20 max-h-20 group cursor-pointer  ${className}`}>
            <img src={src} className={'rounded-2xl object-cover w-full h-auto'} alt=""/>
            {
                isActive ? <>
                    <div className={'absolute top-0 w-full h-full rounded-2xl bg-black opacity-40'}>
                    </div>
                    <Icon
                        className={'absolute z-[60] opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 text-myGreen'}
                        type={'play'}/>
                </> : <>
                    <div
                        className={'absolute top-0 w-full h-full rounded-2xl bg-black group-hover:opacity-40 opacity-0 transition-opacity'}></div>
                    <Icon
                        className={'absolute z-[60] group-hover:opacity-100 opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 text-myGreen transition-opacity'}
                        type={'play'}/>
                </>
            }
        </div>
    )
}