import { RefObject, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { formatTime, ProgressBar } from "@/entities/Player";
import {
  setTimeProgress,
  setActiveMusic,
  setIsPlaying,
} from "@/entities/Player/model/PlayerSlice.ts";
import {
  selectDuration,
  selectisPlaying,
  selectPlayingMusic,
  selectTimeProgress,
} from "@/entities/Player/model/selectors";
import { useAnimation } from "@/features/ProgressBar";
import { usePlay } from "@/features/ProgressBar/lib/hooks/usePlay";
export const PlayerProgressBar = ({
  playerRef,
}: {
  playerRef: RefObject<HTMLAudioElement>;
}): JSX.Element => {
  const activeMusic = useSelector(selectPlayingMusic);
  const duration = useSelector(selectDuration);
  const timeProgress = useSelector(selectTimeProgress);
  const isPlaying = useSelector(selectisPlaying);

  const playAnimationRef = useRef<number>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const onChangeTime = (value: number) => {
    dispatch(setTimeProgress(value));
  };

  const { startAnimation, updateProgress } = useAnimation({
    duration,
    playerRef,
    progressRef,
    playAnimationRef,
    onChangeTime,
  });

  const handleStartPlay = () => {
    startAnimation();
    dispatch(setActiveMusic({ ...activeMusic, isPlay: true }));
  };

  const handlePausePlay = () => {
    updateProgress();
    dispatch(setActiveMusic({ ...activeMusic, isPlay: false }));
  };

  usePlay({
    isPlaying,
    playerRef,
    playAnimationRef,
    handleStartPlay,
    handlePausePlay,
    dependencies: [startAnimation, updateProgress],
  });

  const onChangePlay = (value: boolean) => {
    startAnimation();
    if (value !== null) dispatch(setIsPlaying(value));
  };
  return (
    <div
      className={
        "w-full flex gap-x-4 items-center justify-center max-w-[800px]"
      }
    >
      <span className={"text-gray-300 text-base"}>
        {formatTime(timeProgress)}
      </span>
      <ProgressBar
        playAnimationRef={playAnimationRef}
        playerRef={playerRef}
        progressRef={progressRef}
        startAnimation={startAnimation}
        updateProgress={updateProgress}
        changeTime={onChangeTime}
        changePlay={onChangePlay}
        duration={duration}
      />
      <span className={"text-gray-300 text-base"}>{formatTime(duration)}</span>
    </div>
  );
};
