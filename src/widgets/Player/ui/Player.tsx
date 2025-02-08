import { useRef } from "react";

import { useSelector } from "react-redux";

import { selectPlayingMusic } from "@/entities/Player/model/selectors";
import { PlayerInfo } from "@/entities/Player/ui/PlayerInfo.tsx";
import { BlockContainer } from "@/shared/ui/BlockContainer.tsx";

import { PlayerControl } from "./PlayerControl";
import { PlayerProgressBar } from "./PlayerProgressBar";

export const Player = (): JSX.Element => {
  const playingMusic = useSelector(selectPlayingMusic);
  const playerRef = useRef<HTMLAudioElement>(null);

  return (
    <BlockContainer
      className={
        "[grid-column:_span_3/5] flex items-center justify-between gap-x-2  px-4 py-4 w-full"
      }
    >
      <PlayerInfo
        name={playingMusic.name}
        artist={playingMusic.artist}
        image={playingMusic.image}
      />
      <div
        className={"flex-1 flex flex-col gap-y-3 items-center justify-center"}
      >
        <PlayerControl playerRef={playerRef} src={playingMusic.audio} />
        <PlayerProgressBar playerRef={playerRef} playingMusic={playingMusic} />
      </div>
    </BlockContainer>
  );
};
