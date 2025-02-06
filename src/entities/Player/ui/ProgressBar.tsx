import {
  FC,
  PointerEvent,
  PointerEventHandler,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";

import { getToProcent } from "../lib/getToProcent";
import { applyConstraints } from "../lib/applyConstraints";

interface IProgressBar {
  progressRef: RefObject<HTMLDivElement>;
  playerRef: RefObject<HTMLAudioElement>;
  playAnimationRef: any;
  duration: number;
  startAnimation: () => void;
  changeTime: (value: number) => void;
  changePlay: (value: boolean) => void;
}

export const ProgressBar: FC<IProgressBar> = ({
  progressRef,
  playerRef,
  playAnimationRef,
  startAnimation,
  duration,
  changeTime,
  changePlay,
}): JSX.Element => {
  const [isProcces, setIsProcces] = useState<boolean>();
  const [cordinate, setCordinate] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const translateRef = useRef<number>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isProcces) return;
    const listener = () => {
      if (isProcces && translateRef.current !== null) {
        playerRef.current.currentTime = translateRef.current;
        startAnimation();
        changePlay(false);
      }
      setIsProcces(false);
    };
    document.body.addEventListener("pointerup", listener);
    return () => document.body.removeEventListener("pointerup", listener);
  }, [isProcces]);

  useEffect(() => {
    const pointerListener: PointerEventHandler<HTMLBodyElement> = (
      eve: PointerEvent
    ) => {
      eve.stopPropagation();
      if (progressBarRef.current && progressRef.current) {
        // playerRef.current.pause();
        cancelAnimationFrame(playAnimationRef.current);
        const translate: number = width + (eve.clientX - cordinate);
        const procent: number = getToProcent(
          progressBarRef.current?.clientWidth as number,
          applyConstraints(
            progressBarRef.current?.clientWidth as number,
            translate
          )
        );
        progressRef.current.style.width = procent + "%";
        translateRef.current = (duration / 100) * procent;
        console.log((duration / 100) * procent, "dddd");
        changeTime(translateRef.current);
      }
    };
    if (isProcces) {
      document.body.addEventListener("pointermove", pointerListener);
      return (): void => {
        document.body.removeEventListener("pointermove", pointerListener);
      };
    }
  }, [isProcces]);

  const onMouseDown = (event: MouseEvent): void => {
    const procent: number = getToProcent(
      progressBarRef.current?.clientWidth as number,
      event.nativeEvent.offsetX
    );
    setIsProcces(true);

    translateRef.current = (duration / 100) * procent;
    changeTime(translateRef.current);
    setCordinate(event.clientX);
    setWidth(event.nativeEvent.offsetX);
    cancelAnimationFrame(playAnimationRef.current);
    progressRef.current.style.width = procent + "%";
  };
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
