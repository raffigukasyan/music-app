import {FC} from "react";
import {SongName, FiledName} from "@/entities/Song";
import {Icon} from "@/shared/index.ts"
interface IItemSong {
    name: string,
    image: string,
    artist: string,
    time: string
}

interface IItemSongProps {
    song: IItemSong
}
export const PopularItem:FC<IItemSongProps> = ({song}):JSX.Element => {
    return (
        <div className={'grid grid-cols-[50px_2fr_2fr_1fr_50px] items-center'}>
            <p className={'text-gray-400'}>1</p>
            <SongName imageSrc={song.image} name={song.name} />
            <FiledName name={song.artist}/>
            <Icon className={'w-5 h-5 stroke-2 text-myWhite'} type={'favorite'} />
            <p className={'text-myWhite'}>
                {song.time}
            </p>
        </div>
    )
}