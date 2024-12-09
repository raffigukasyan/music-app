import {ProgressBar} from "@/entities/Player";

export const PlayerProgressBar = ():JSX.Element => {
    return (
        <div className={'w-full flex gap-x-4 items-center justify-center max-w-[800px]'}>
            <span className={'text-gray-300 text-base'}>0:00</span>
            <ProgressBar />
            <span className={'text-gray-300 text-base'}>2:00</span>
        </div>
    )
}