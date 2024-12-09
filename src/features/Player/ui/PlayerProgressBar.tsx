import {formatTime, playerSelector, ProgressBar} from "@/entities/Player";
import {useSelector} from "react-redux";

export const PlayerProgressBar = ():JSX.Element => {
    const {duration}:{duration: number} = useSelector(playerSelector);
    return (
        <div className={'w-full flex gap-x-4 items-center justify-center max-w-[800px]'}>
            <span className={'text-gray-300 text-base'}>0:00</span>
            <ProgressBar />
            <span className={'text-gray-300 text-base'}>{formatTime(duration)}</span>
        </div>
    )
}