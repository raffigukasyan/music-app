import { FC } from "react";

import { useSelector } from "react-redux";

import { selectedMusic } from "@/entities/Player";

import { Music } from "../../model/types";

import { MusicItem } from "./MusicItem";

interface MusicListProps {
  music: Music.IMusic[];
}

export const MusicList: FC<MusicListProps> = ({ music }): JSX.Element => {
  //const activeMusic = useSelector(selectedMusic);

  console.log( 'Music List')
  return (
    <div className="flex flex-col gap-y-3">
      {music.map((item: Music.IMusic) => (
        <MusicItem key={item.id} music={item} />
      ))}
    </div>
  );
};
