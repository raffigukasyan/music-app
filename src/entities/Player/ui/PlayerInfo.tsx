import {FC} from "react";

import {ITrackInfo} from "@/entities/Music";
import {SubTitle, Title} from "@/shared";
import {PreviewImage} from "@/shared/ui/PreviewImage.tsx";


export const PlayerInfo:FC<ITrackInfo> = (
    {name, artist, image}
) => {
    return (
        <div className={'flex gap-x-4 items-center'}>
            <PreviewImage src={image} />
            <div className={'flex flex-col gap-y-1'}>
                <SubTitle className={'text-sm'}>
                    {artist}
                </SubTitle>
                <Title className={'text-lg font-medium'}>{name}</Title>
            </div>
        </div>
    )
}