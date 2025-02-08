import { FC } from "react";

import { useSelector } from "react-redux";

import { selectPlayingMusic } from "@/entities/Player";

import { Music } from "../../model/types";

import { MusicItem } from "./MusicItem";

interface MusicListProps {
  music: Music.IMusic[];
}

export const MusicList: FC<MusicListProps> = ({ music }): JSX.Element => {
  const playingMusic = useSelector(selectPlayingMusic);
  return (
    <div className="flex flex-col gap-y-3">
      {music.map((item: Music.IMusic) => (
        <MusicItem
          key={item.id}
          music={item}
          isActive={playingMusic.musicId === item.musicId}
          isPlaying={
            playingMusic.musicId === item.musicId && playingMusic.isPlay
          }
        />
      ))}
    </div>
  );
};
