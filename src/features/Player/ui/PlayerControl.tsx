import {Icon} from "@/shared";
import {Pause} from "@/entities/Player"
export const PlayerControl = ():JSX.Element => {
    return (
        <div className={'flex items-center gap-x-6'}>
            <Icon className={'w-5 h-5 text-myWhite hover:text-myGreen cursor-pointer transition-colors'} type={'prev'} />
            <audio className={'hidden'} controls></audio>
            <Pause />
            <Icon className={'w-5 h-5 text-myWhite hover:text-myGreen cursor-pointer transition-colors'} type={'next'} />
        </div>
    )
}