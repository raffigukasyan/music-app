import {useRef, useState} from "react";
import {motion} from "framer-motion";
export const ProgressBar = ():JSX.Element => {
    const [isProcces, setIsProcces] = useState<boolean>();
    const progressBarRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    const getToProcent = (wParent:number, wElement:number):number => {
        return Math.floor((wElement / wParent) * 100);
    }

    return (
        <div ref={progressBarRef} onMouseDown={() => {
            setIsProcces(true);
            console.log(progressBarRef.current?.getClientRects(), 'DOWN')
        }} onMouseUp={(eve:React.MouseEvent) => {
            setIsProcces(false);
            // console.log(progressRef.current?.clientWidth, 'width element');
            // console.log(progressBarRef.current?.clientWidth, 'width parent');
            progressRef.current.style.width = getToProcent(progressBarRef.current?.clientWidth as number, eve.nativeEvent.offsetX) + '%';
        }} onMouseMove={(eve) => {
            if(isProcces) {
                progressRef.current.style.width = getToProcent(progressBarRef.current?.clientWidth as number, eve.nativeEvent.offsetX) + '%';
            } }} onMouseLeave={(e) => setIsProcces(false)} className="w-full bg-gray-200  rounded-xl h-4  dark:bg-gray-700 cursor-pointer">
            <motion.div  animate={{
                transition: {
                    width: { ease: "linear", duration: 1 }
                }
            }} ref={progressRef}  className="bg-green-600 rounded-xl w-0 h-4 dark:bg-green-500"></motion.div>
        </div>
    )
}