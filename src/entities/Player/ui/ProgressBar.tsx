import { FC, RefObject } from "react";

import { motion } from "framer-motion";

import { useProgressBar } from "@/features/ProgressBar";

interface IProgressBar {
  progressRef: RefObject<HTMLDivElement>;
  playerRef: RefObject<HTMLAudioElement>;
  playAnimationRef: RefObject<number>;
  duration: number;
  startAnimation: () => void;
  changeTime: (value: number) => void;
  changePlay: (value: boolean | null) => void;
}

export const ProgressBar: FC<IProgressBar> = ({
  progressRef,
  playerRef,
  playAnimationRef,
  duration,
  changeTime,
  changePlay,
}): JSX.Element => {
  const { progressBarRef, onMouseDown } = useProgressBar({
    playerRef,
    progressRef,
    playAnimationRef,
    duration,
    changePlay,
    changeTime,
  });
  return (
    <div
      ref={progressBarRef}
      onMouseDown={onMouseDown}
      className="w-full bg-gray-200  rounded-xl h-2.5  dark:bg-gray-700 cursor-pointer"
    >
      <motion.div
        animate={{
          transition: {
            width: { ease: "linear", duration: 0.2 },
          },
        }}
        ref={progressRef}
        className="bg-green-600 rounded-xl w-0 h-2.5 dark:bg-green-500"
      ></motion.div>
    </div>
  );
};
