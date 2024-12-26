import {FC} from "react";
import {SongName, FiledName, IChartTracks} from "@/entities/Song";
import {Icon} from "@/shared"

interface IItemTrackProps {
    track: IChartTracks
}
export const PopularItem:FC<IItemTrackProps> = ({track}):JSX.Element => {
    return (
        <div className={'grid grid-cols-[50px_2fr_2fr_1fr_50px] items-center'}>
            <p className={'text-gray-400'}>{track.id}</p>
            <SongName imageSrc={track.image} name={track.name} />
            <FiledName name={track.artist}/>
            <Icon className={'w-5 h-5 stroke-2 text-myWhite'} type={'favorite'} />
            <p className={'text-myWhite'}>
                {track.duration}
            </p>
        </div>
    )
}