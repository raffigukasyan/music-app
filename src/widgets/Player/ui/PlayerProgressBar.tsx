import { RefObject, useCallback, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { formatTime, ProgressBar } from "@/entities/Player";
import {
  setTimeProgress,
  setActiveMusic,
} from "@/entities/Player/model/PlayerSlice.ts";
import {
  selectDuration,
  selectisPlaying,
  selectPlayingMusic,
  selectTimeProgress,
} from "@/entities/Player/model/selectors";
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

  const updateProgress = useCallback(() => {
    if (playerRef.current && duration) {
      const currentTime: number = playerRef.current.currentTime;
      dispatch(setTimeProgress(currentTime));
      progressRef.current.style.width = `${(currentTime / duration) * 100}%`;
    }
  }, [duration]);

  const startAnimation = useCallback(() => {
    if (playerRef.current && duration) {
      const animate = () => {
        // вызываем функцию обновления прогресс бара
        updateProgress();
        playAnimationRef.current = requestAnimationFrame(animate);
      };
      playAnimationRef.current = requestAnimationFrame(animate);
    }
  }, [duration, updateProgress]);

  useEffect(() => {
    if (isPlaying === null) return;

    if (isPlaying) {
      playerRef.current?.play();
      startAnimation();
      dispatch(setActiveMusic({ ...activeMusic, isPlay: true }));
    } else {
      playerRef.current?.pause();
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
        playAnimationRef.current = null;
      }
      updateProgress();
      dispatch(setActiveMusic({ ...activeMusic, isPlay: false }));
    }
    return () => {
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
      }
    };
  }, [isPlaying, startAnimation, updateProgress]);

  console.log("RENDER PLAYBAR");

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
      />
      <span className={"text-gray-300 text-base"}>{formatTime(duration)}</span>
    </div>
  );
};
