import {BlockContainer} from "@/shared/ui/BlockContainer.tsx";
import {PlayerName, ProgressBar} from "@/entities/Player";
import {PlayerControl} from "@/features/Player";

export const Player = ():JSX.Element => {
    return (
            <BlockContainer className={'[grid-column:_span_3/5] flex items-center justify-between gap-x-2  px-4 py-4 w-full'}>
                <PlayerName />
                <div className={'flex-1 flex flex-col gap-y-3 items-center justify-center'}>
                    <PlayerControl/>
                    <div className={'w-full flex gap-x-4 items-center justify-center max-w-[800px]'}>
                        <span className={'text-gray-300 text-base'}>2:00</span>
                        <ProgressBar/>
                        <span className={'text-gray-300 text-base'}>2:00</span>
                    </div>
                </div>
            </BlockContainer>
    )
}