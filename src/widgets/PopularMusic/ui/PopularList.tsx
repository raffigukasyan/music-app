import { FC } from "react";

import { useSelector } from "react-redux";
import { IMusic } from "src/entities/Music";

import { IPopularListProps } from "@/widgets/PopularMusic/model/types.ts";
import { PopularItem } from "@/widgets/PopularMusic/ui/PopularItem.tsx";
import { SkeletonList } from "@/widgets/PopularMusic/ui/SkeletonList.tsx";

export const PopularList: FC<IPopularListProps> = ({
  chart,
  loading,
}): JSX.Element => {
  const activeMusic = useSelector((state) => state?.player?.activeMusic);

  return loading ? (
    <SkeletonList />
  ) : (
    <div className={"flex flex-col gap-y-5"}>
      {chart.map((music: IMusic) => (
        <PopularItem
          key={music.id}
          track={music}
          isPlaying={activeMusic.id === music.id ? activeMusic.isPlay : false}
          isActive={activeMusic.id === music.id}
        />
      ))}
    </div>
  );
};
