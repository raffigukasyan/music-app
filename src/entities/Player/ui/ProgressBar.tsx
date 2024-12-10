import {RefObject, useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {playerSelector} from "@/entities/Player";
import {setTimeProgress} from "@/entities/Player/model/PlayerSlice.tsx";
export const ProgressBar = ({progressRef, playerRef, playAnimationRef}:{progressRef: RefObject<HTMLDivElement>, playerRef:RefObject<HTMLAudioElement>, playAnimationRef:any}):JSX.Element => {
    const [isProcces, setIsProcces] = useState<boolean>();
    const [cordinate, setCordinate] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const dispath = useDispatch();
    const {duration} = useSelector(playerSelector);
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
        const listener = (eve) => {
            setIsProcces(false);
            // if(eve.target === progressBarRef.current) {
            //     console.log('CCCC');
            //     playerRef.current.currentTime = 40;
            //     playerRef.current.play();
            //     dispath(setTimeProgress(40))
            // }
            // playerRef.current.currentTime = 30;
            // playerRef.current.play();
            // dispath(setTimeProgress(120))
        }

        document.body.addEventListener('pointerup', listener);
        document.body.addEventListener('point', () => {console.log('POPOPOPOPO')})
        return () => document.removeEventListener('pointerup', listener)
    }, []);

    useEffect(() => {

        const pointerListener = (eve:PointerEvent) => {
            eve.stopPropagation();
            console.log('sss')
            if(progressBarRef.current && progressRef.current) {
                playerRef.current.pause();
                cancelAnimationFrame(playAnimationRef.current);
                // dispath(setTimeProgress(120))
                const translate:number =  width + (eve.clientX - cordinate);
                const procent:number = getToProcent(progressBarRef.current?.clientWidth as number, applyConstraints(progressBarRef.current?.clientWidth as number, translate));
                progressRef.current.style.width = getToProcent(progressBarRef.current?.clientWidth as number, applyConstraints(progressBarRef.current?.clientWidth as number, translate)) + '%';
                dispath(setTimeProgress((duration / 100) * procent))
            }
        }
        if(isProcces) {
            document.body.addEventListener('pointermove', pointerListener)
            return ():void => {
                document.body.removeEventListener('pointermove', pointerListener)
            }
        }
    }, [isProcces]);

    return (
        <div ref={progressBarRef}  onMouseDown={(event) => {
            console.log('CLICK');
            setIsProcces(true);
            setCordinate(event.clientX)
            setWidth(event.nativeEvent.offsetX)
            progressRef.current.style.width = getToProcent(progressBarRef.current?.clientWidth as number, event.nativeEvent.offsetX) + '%';
        }}   className="w-full bg-gray-200  rounded-xl h-2.5  dark:bg-gray-700 cursor-pointer">
            <motion.div  animate={{
                transition: {
                    width: { ease: "linear", duration: 1 }
                }
            }} ref={progressRef}  className="bg-green-600 rounded-xl w-0 h-2.5 dark:bg-green-500"></motion.div>
        </div>
    )
}