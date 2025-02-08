import { FC } from "react";

import { useSelector } from "react-redux";
import { Music } from "src/entities/Music";

import { selectPlayingMusic } from "@/entities/Player";
import { IPopularListProps } from "@/widgets/PopularMusic/model/types.ts";
import { PopularItem } from "@/widgets/PopularMusic/ui/PopularItem.tsx";
import { SkeletonList } from "@/widgets/PopularMusic/ui/SkeletonList.tsx";

export const PopularList: FC<IPopularListProps> = ({
  chart,
  loading,
}): JSX.Element => {
  const activeMusic = useSelector(selectPlayingMusic);

  console.log(activeMusic, "active");
  return loading ? (
    <SkeletonList />
  ) : (
    <div className={"flex flex-col gap-y-5"}>
      {chart.map((music: Music.IMusic) => (
        <PopularItem
          key={music.id}
          track={music}
          isPlaying={
            activeMusic.musicId === music.musicId && activeMusic.isPlay
          }
          isActive={activeMusic.musicId === music.musicId}
        />
      ))}
    </div>
  );
};
