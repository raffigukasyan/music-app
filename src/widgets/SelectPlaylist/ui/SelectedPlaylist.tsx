import { FC } from "react";

import { useSelector } from "react-redux";

import { MusicList } from "@/entities/Music/index";
import { PlaylistPreview } from "@/entities/Playlist";
import { selectedPlaylist } from "@/widgets/SelectPlaylist";
import { InfoPlaylist } from "@/widgets/SelectPlaylist/ui/InfoPlaylist.tsx";

interface ISelectedPlaylistProps {
  name: string;
  preview: string;
  description: string;
  likes: number;
  songCount: number;
  tracks?: ITracks[];
}
interface ITracks {
  name: string;
  artist: string;
  time: string;
  preview: string;
}

export const SelectedPlaylist: FC<ISelectedPlaylistProps> = (): JSX.Element => {
  const playlist = useSelector(selectedPlaylist);

  return (
    <>
      {Object.values(playlist).length ? (
        <div
          className={
            "[grid-column:_span_2] flex flex-col gap-y-6 rounded-3xl bg-myBlack-200 p-4"
          }
        >
          <PlaylistPreview img={playlist.image} />
          <InfoPlaylist
            name={playlist.name}
            description={playlist.description}
            likes={playlist.likes}
            songs={playlist.duration}
          />
          <MusicList music={playlist.tracks} />
        </div>
      ) : null}
    </>
  );
};
