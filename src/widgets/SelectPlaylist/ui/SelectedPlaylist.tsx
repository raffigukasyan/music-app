import {FC} from "react";
import {PlaylistPreview} from "@/entities/Playlist";
import {InfoPlaylist} from "@/widgets/SelectPlaylist/ui/InfoPlaylist.tsx";

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

export const SelectedPlaylist:FC<ISelectedPlaylistProps> = ({playlist}):JSX.Element => {
    return (
        <div className={'[grid-column:_span_2] flex flex-col gap-y-6 rounded-3xl bg-myBlack-200 p-4'}>
            <PlaylistPreview img={'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/af/73/5a/af735a4b-f374-7a1b-61c3-eaac06abbccd/cover.jpg/600x600bf-60.jpg'} />
            <InfoPlaylist name={playlist.name} description={playlist.description} likes={playlist.likes} songs={playlist.songCount}/>
        </div>
    )
}