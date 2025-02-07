import { RefObject, useEffect } from "react";

interface IUsePlay {
  isPlaying: boolean;
  playerRef: RefObject<HTMLAudioElement>;
  playAnimationRef: RefObject<number>;
  handlePausePlay: () => void;
  handleStartPlay: () => void;
}
export const usePlay = ({
  isPlaying,
  playerRef,
  playAnimationRef,
  handleStartPlay,
  handlePausePlay,
}: IUsePlay) => {
  useEffect(() => {
    if (isPlaying === null) return;

    if (isPlaying) {
      playerRef.current?.play();
      handleStartPlay();
    } else {
      playerRef.current?.pause();
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
        playAnimationRef.current = null;
      }
      handlePausePlay();
    }
    return () => {
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
      }
    };
  }, [isPlaying]);
};
