import {useState} from "react";

export const ProgressBar = ():JSX.Element => {
    const [isProcces, setIsProcces] = useState<boolean>()
    return (
        <div className="w-full bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
            <div onMouseDown={() => {
                setIsProcces(true);
            }} onMouseUp={() => setIsProcces(false)} onMouseMove={() => {
                if(isProcces) {
                    console.log('MOUSE MOVE');
                } }} className="bg-green-600 h-1.5 rounded-full dark:bg-green-500 w-[40%]"></div>
        </div>
    )
}