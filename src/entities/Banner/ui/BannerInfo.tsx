import {FC} from "react";

interface IBannerInfoProps {
    title: string,
    description: string,
}
export const BannerInfo:FC<IBannerInfoProps> = ({title, description}):JSX.Element => {
    return  (
        <div className={'flex flex-col gap-y-1 absolute bottom-10 left-10'}>
            <h3 className={'text-6xl font-bold text-gray-200'}>{title}</h3>
            <p className={'text-gray-200'}>{description}</p>
        </div>
    )
}