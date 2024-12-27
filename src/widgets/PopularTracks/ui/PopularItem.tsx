import {FC, memo} from "react";
import {FiledName, IChartTracks} from "@/entities/Music";
import {Icon} from "@/shared"
import {PlayMusic} from "@/features/PlayMusic";

interface IItemTrackProps {
    track: IChartTracks,
    isActive: boolean,
    isPlay?: boolean
}
export const PopularItem:FC<IItemTrackProps> = memo(({track, isActive}):JSX.Element => {

    return (
        <div className={'grid grid-cols-[50px_2fr_2fr_1fr_50px] items-center'}>
            <p className={'text-gray-400'}>{track.id}</p>

            <div className={'flex gap-x-4 items-center'}>
                <PlayMusic  isActive={isActive} track={track} />
                <FiledName name={track.name} />
            </div>

            {/*<SongName imageSrc={track.image} name={track.name}/>*/}
            <FiledName name={track.artist}/>
            <Icon className={'w-5 h-5 stroke-2 text-myWhite'} type={'favorite'}/>
            <p className={'text-myWhite'}>
                {track.duration}
            </p>
        </div>
    )
}
)