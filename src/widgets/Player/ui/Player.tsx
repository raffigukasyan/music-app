import {BlockContainer} from "@/shared/ui/BlockContainer.tsx";
import {PlayerName} from "@/entities/Player";
import {PlayerControl, PlayerProgressBar} from "@/features/Player";
import {useSelector} from "react-redux";
import {playerSelector} from "@/entities/Player";
import {IPlayer} from "@/entities/Player/model/types.ts";
import {useCallback, useRef} from "react";

export const Player = ():JSX.Element => {
    const player:IPlayer = useSelector(playerSelector);
    const playerRef = useRef<HTMLAudioElement>(null);
    const progressRef = useRef<HTMLDivElement>(null)
    const playAnimationRef = useRef<number | undefined>(null);
    return (
            <BlockContainer className={'[grid-column:_span_3/5] flex items-center justify-between gap-x-2  px-4 py-4 w-full'}>
                <PlayerName />
                <div className={'flex-1 flex flex-col gap-y-3 items-center justify-center'}>
                    <PlayerControl playAnimationRef={playAnimationRef} progressRef={progressRef} playerRef={playerRef} src={player.activePlayer.track} />
                    <PlayerProgressBar playAnimationRef={playAnimationRef}  playerRef={playerRef} progressRef={progressRef} />
                </div>
            </BlockContainer>
    )
}