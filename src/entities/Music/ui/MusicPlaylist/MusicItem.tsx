import { FC } from "react";

import { Music } from "../../model/types";
import { PreviewImage } from "../PreviewImage";

interface MusicItemProps {
  music: Music.IMusic;
}

export const MusicItem: FC<MusicItemProps> = ({ music }): JSX.Element => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        <PreviewImage className="w-12 h-12" src={music.image} />
        <div className="flex flex-col items-start">
          <span className="text-sm text-myWhite">{music.name}</span>
          <span className="text-sm text-myWhite/50">{music.artist}</span>
        </div>
      </div>
      <span className="text-sm text-myWhite/50">2:00</span>
    </div>
  );
};
