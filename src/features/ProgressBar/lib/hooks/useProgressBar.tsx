import {
  useState,
  useEffect,
  RefObject,
  useRef,
  PointerEventHandler,
} from "react";

import { applyConstraints } from "@/entities/Player/lib/applyConstraints";
import { getToProcent } from "@/entities/Player/lib/getToProcent";

interface IUseProgressBar {
  playerRef: RefObject<HTMLAudioElement>;
  progressRef: RefObject<HTMLDivElement>;
  playAnimationRef: RefObject<number>;
  changeTime: (value: number) => void;
  changePlay: (value: boolean | null) => void;
  duration: number;
}

export const useProgressBar = ({
  playerRef,
  progressRef,
  playAnimationRef,
  duration,
  changePlay,
  changeTime,
}: IUseProgressBar): {
  progressBarRef: RefObject<HTMLDivElement>;
  onMouseDown: () => void;
} => {
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
        changePlay(null);
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

  return { progressBarRef, onMouseDown };
};
