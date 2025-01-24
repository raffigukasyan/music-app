import {FC} from "react";
import {PlaylistPreview} from "@/entities/Playlist";
import {InfoPlaylist} from "@/widgets/SelectPlaylist/ui/InfoPlaylist.tsx";
import {useSelector} from "react-redux";
import {selectedPlaylist} from "@/widgets/SelectPlaylist";

interface ISelectedPlaylistProps {
    name: string;
    preview: string,
    description: string,
    likes: number,
    songCount: number,
    tracks?: ITracks[]
}
interface ITracks {
    name: string;
    artist: string;
    time: string,
    preview: string,
}

export const SelectedPlaylist:FC<ISelectedPlaylistProps> = ():JSX.Element => {

    const playlist = useSelector(selectedPlaylist);

    console.log(playlist)
    return (
       <>
           {
               Object.values(playlist).length ? <div className={'[grid-column:_span_2] flex flex-col gap-y-6 rounded-3xl bg-myBlack-200 p-4'}>
                   <PlaylistPreview img={playlist.image} />
                   <InfoPlaylist name={playlist.name} description={playlist.description} likes={playlist.likes} songs={playlist.duration}/>
               </div> : null
           }
           </>
    )
}