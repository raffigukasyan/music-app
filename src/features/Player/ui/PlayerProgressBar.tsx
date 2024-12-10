import {formatTime, playerSelector, ProgressBar} from "@/entities/Player";
import {useSelector} from "react-redux";

export const PlayerProgressBar = ({progressRef, playerRef}:{progressRef: any, playerRef: any}):JSX.Element => {
    const {duration,timeProgress }:{duration: number, timeProgress: number} = useSelector(playerSelector);
    return (
        <div className={'w-full flex gap-x-4 items-center justify-center max-w-[800px]'}>
            <span className={'text-gray-300 text-base'}>{formatTime(timeProgress)}</span>
            <ProgressBar playerRef={playerRef} progressRef={progressRef}/>
            <span className={'text-gray-300 text-base'}>{formatTime(duration)}</span>
        </div>
    )
}