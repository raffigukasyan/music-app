import {Icon} from "@/shared";

export const Pause = ():JSX.Element => {
    return (
        <div className={'flex items-center justify-center w-10 h-10 rounded-full bg-myWhite cursor-pointer hover:bg-myGreen transition-colors'}>
            <Icon type={'pause'} className={'max-w-7 stroke-[3] text-myBlack'} />
        </div>
    )
}