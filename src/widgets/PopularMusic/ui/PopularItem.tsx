import {FC, memo} from "react";

import {PlayMusic} from "@/features/PlayMusic";
import {Icon} from "@/shared"
import {IItemTrackProps} from "@/widgets/PopularMusic/model/types.ts";


export const PopularItem:FC<IItemTrackProps> = memo(({track, isActive, isPlaying}):JSX.Element => {

    return (
        <div className={'grid grid-cols-[50px_2fr_2fr_1fr_50px] items-center'}>
            <p className={'text-gray-400'}>{track.id}</p>

            <div className={'flex gap-x-4 items-center'}>
                <PlayMusic isPlaying={isPlaying} isActive={isActive} track={track} />
                <p className={'text-base text-myWhite'}>{track.name}</p>
            </div>

            <p className={'text-base text-myWhite'}>{track.artist}</p>
            <Icon className={'w-5 h-5 stroke-2 text-myWhite'} type={'favorite'}/>
            <p className={'text-myWhite'}>
                {track.duration}
            </p>
        </div>
    )
}
)