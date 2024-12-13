import {PointerEvent, PointerEventHandler, RefObject, useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {playerSelector} from "@/entities/Player";
import {setIsPlaying, setTimeProgress} from "@/entities/Player/model/PlayerSlice.tsx";
export const ProgressBar = ({progressRef, playerRef, playAnimationRef, startAnimation, updateProgress}:{progressRef: RefObject<HTMLDivElement>, playerRef:RefObject<HTMLAudioElement>, playAnimationRef:any}):JSX.Element => {
    const [isProcces, setIsProcces] = useState<boolean>();
    const [cordinate, setCordinate] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const dispath = useDispatch();
    const {duration} = useSelector(playerSelector);
    const translateRef = useRef<number>(null)
    const getToProcent = (wParent:number, wElement:number):number => {
        return Math.floor((wElement / wParent) * 100);
    }

    const applyConstraints = (containerWidth:number, draggableWidth:number):number => {
        if(draggableWidth < 0) {
            return 0
        }
        else if(draggableWidth > containerWidth) {
            return containerWidth;
        }
        return draggableWidth
    }
    useEffect(() => {
        if(!isProcces) return
        const listener = () => {
                if(isProcces && translateRef.current !== null) {
                    playerRef.current.currentTime = translateRef.current;
                    startAnimation();
                    // dispath(setIsPlaying(false));
                }
            setIsProcces(false);
        }
        document.body.addEventListener('pointerup', listener);
        return () => document.body.removeEventListener('pointerup', listener)
    }, [isProcces]);

    useEffect(() => {

        const pointerListener:PointerEventHandler<HTMLBodyElement> = (eve:PointerEvent) => {
            eve.stopPropagation();
            if(progressBarRef.current && progressRef.current) {
                // playerRef.current.pause();
                cancelAnimationFrame(playAnimationRef.current);
                // dispath(setTimeProgress(120))
                const translate:number =  width + (eve.clientX - cordinate);
                const procent:number = getToProcent(progressBarRef.current?.clientWidth as number, applyConstraints(progressBarRef.current?.clientWidth as number, translate));
                progressRef.current.style.width = getToProcent(progressBarRef.current?.clientWidth as number, applyConstraints(progressBarRef.current?.clientWidth as number, translate)) + '%';
                translateRef.current = (duration / 100) * procent;
                dispath(setTimeProgress(translateRef.current));
            }
        }
        if(isProcces) {
            document.body.addEventListener('pointermove', pointerListener)
            return ():void => {
                document.body.removeEventListener('pointermove', pointerListener)
            }
        }
    }, [isProcces]);


    const onMouseDown = (event:MouseEvent):void => {
        const procent:number = getToProcent(progressBarRef.current?.clientWidth as number, event.nativeEvent.offsetX);
        setIsProcces(true);

        translateRef.current = (duration / 100) * procent
        dispath(setTimeProgress(translateRef.current));
        setCordinate(event.clientX)
        setWidth(event.nativeEvent.offsetX);
        cancelAnimationFrame(playAnimationRef.current);
        progressRef.current.style.width = procent + '%';
    }
    return (
        <div ref={progressBarRef}  onMouseDown={onMouseDown}  className="w-full bg-gray-200  rounded-xl h-2.5  dark:bg-gray-700 cursor-pointer">
            <motion.div  animate={{
                transition: {
                    width: { ease: "linear", duration: 0.2 }
                }
            }} ref={progressRef}  className="bg-green-600 rounded-xl w-0 h-2.5 dark:bg-green-500"></motion.div>
        </div>
    )
}