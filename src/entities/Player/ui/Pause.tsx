import {Icon} from "@/shared";
import { AnimatePresence } from "motion/react";

export const Pause = ({isPlaying, onClick}: {isPlaying?: boolean, onClick: React.MouseEventHandler}):JSX.Element => {
    return (
        <button onClick={onClick} className={'flex items-center justify-center focus:border-none w-10 h-10 rounded-full bg-myWhite cursor-pointer hover:bg-myGreen transition-colors'}>
            <AnimatePresence>
                <Icon type={isPlaying ? 'pause' : 'play'} className={'max-w-7 text-myBlack'} />
            </AnimatePresence>
        </button>
    )
}