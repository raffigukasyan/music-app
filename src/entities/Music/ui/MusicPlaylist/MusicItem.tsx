import { FC, memo } from "react";

import { PlayMusic } from "@/features/PlayMusic";

import { Music } from "../../model/types";

interface MusicItemProps {
  music: Music.IMusic;
  isActive: boolean;
  isPlaying: boolean;
}

export const MusicItem: FC<MusicItemProps> = memo(
  ({ music, isActive, isPlaying }): JSX.Element => {
    console.log(isPlaying, "ISPLAYING");
    return (
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <PlayMusic track={music} isPlaying={isPlaying} isActive={isActive} />
          <div className="flex flex-col items-start">
            <span className="text-sm text-myWhite">{music.name}</span>
            <span className="text-sm text-myWhite/50">{music.artist}</span>
          </div>
        </div>
        <span className="text-sm text-myWhite/50">2:00</span>
      </div>
    );
  }
);
