import { RefObject, useCallback } from "react";

interface IAniamtion {
  duration: number;
  playerRef: RefObject<HTMLAudioElement>;
  progressRef: RefObject<HTMLDivElement>;
  playAnimationRef: RefObject<number>;
  onChangeTime: (value: number) => void;
}

export const useAnimation = ({
  duration,
  playerRef,
  progressRef,
  playAnimationRef,
  onChangeTime,
}: IAniamtion) => {
  const updateProgress = useCallback(() => {
    if (playerRef?.current && duration) {
      const currentTime: number = playerRef.current.currentTime;
      onChangeTime(currentTime);
      progressRef.current.style.width = `${(currentTime / duration) * 100}%`;
    }
  }, [duration]);

  const startAnimation = useCallback(() => {
    if (playerRef?.current && duration) {
      const animate = () => {
        // вызываем функцию обновления прогресс бара
        updateProgress();
        playAnimationRef.current = requestAnimationFrame(animate);
      };
      playAnimationRef.current = requestAnimationFrame(animate);
    }
  }, [duration, updateProgress]);

  return { updateProgress, startAnimation };
};
