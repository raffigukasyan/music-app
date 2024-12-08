import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
export const ProgressBar = ():JSX.Element => {
    const [isProcces, setIsProcces] = useState<boolean>();
    const [cordinate, setCordinate] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

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
        const listener = () => {
            setIsProcces(false);
        }

        document.body.addEventListener('pointerup', listener);
        return () => document.removeEventListener('pointerup', listener)
    }, []);

    useEffect(() => {

        const pointerListener = (eve:PointerEvent) => {
            if(progressBarRef.current && progressRef.current) {
                const translate:number =  width + (eve.clientX - cordinate)
                progressRef.current.style.width = getToProcent(progressBarRef.current?.clientWidth as number, applyConstraints(progressBarRef.current?.clientWidth as number, translate)) + '%';
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
        <div ref={progressBarRef} onMouseDown={(event) => {
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