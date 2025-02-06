import { FC, RefObject } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Pause } from "@/entities/Player";
import {
  setDuration,
  setIsPlaying,
} from "@/entities/Player/model/PlayerSlice.ts";
import { selectisPlaying } from "@/entities/Player/model/selectors";
import { Icon } from "@/shared";

interface IPlayerControlProps {
  src: string;
  playerRef: RefObject<HTMLAudioElement>;
}
export const PlayerControl: FC<IPlayerControlProps> = ({
  playerRef,
  src,
}): JSX.Element => {
  const isPlayingState = useSelector(selectisPlaying);
  //const activeTrack = useSelector((state) => state.player.activeMusic);
  const dispatch = useDispatch();

  //
  //useEffect(() => {
  //  dispatch(setIsPlaying(activeTrack.isPlay));
  //}, [activeTrack]);

  const handleOnLoad = (): void => {
    const seconds: number = playerRef.current?.duration as number;
    dispatch(setDuration(seconds));
  };

  const handleOnEnded = () => {
    dispatch(setIsPlaying(false));
  };
  console.log("CONTROL REMDER");
  return (
    <div className={"flex items-center gap-x-6"}>
      <Icon
        className={
          "w-5 h-5 text-myWhite hover:text-myGreen cursor-pointer transition-colors"
        }
        type={"prev"}
      />
      <audio
        crossOrigin="anonymous"
        ref={playerRef}
        src={src}
        className={"hidden"}
        onLoadedMetadata={handleOnLoad}
        onEnded={handleOnEnded}
        controls
      ></audio>
      <Pause
        isPlaying={isPlayingState}
        onClick={() => dispatch(setIsPlaying(!isPlayingState))}
      />
      <Icon
        className={
          "w-5 h-5 text-myWhite hover:text-myGreen cursor-pointer transition-colors"
        }
        type={"next"}
      />
    </div>
  );
};
