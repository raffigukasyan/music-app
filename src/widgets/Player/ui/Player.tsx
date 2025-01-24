import {BlockContainer} from "@/shared/ui/BlockContainer.tsx";
import {PlayerName} from "@/entities/Player";
import {PlayerControl, PlayerProgressBar} from "@/features/Player";
import {useDispatch, useSelector} from "react-redux";
import {playerSelector} from "@/entities/Player";
import {IPlayer} from "@/entities/Player/model/types.ts";
import {useCallback, useRef} from "react";
import {setTimeProgress} from "@/entities/Player/model/PlayerSlice.ts";
import {PlayerInfo} from "@/entities/Player/ui/PlayerInfo.tsx";

export const Player = ():JSX.Element => {
    const player:IPlayer = useSelector(playerSelector);
    const playerRef = useRef<HTMLAudioElement>(null);
    const progressRef = useRef<HTMLDivElement>(null)
    const playAnimationRef = useRef<number | undefined>(null);
    const {duration}: {duration:number} = useSelector(playerSelector)
    const dispatch = useDispatch();

    const updateProgress = useCallback(() => {
        if(playerRef.current && duration) {
            const currentTime:number = playerRef.current.currentTime;
            dispatch(setTimeProgress(currentTime))
            progressRef.current.style.width = `${(currentTime / duration) * 100}%`
        }

    }, [duration])


    const startAnimation = useCallback(() => {
        if(playerRef.current && duration) {
            const animate = () => {
                // вызываем функцию обновления прогресс бара
                updateProgress();
                playAnimationRef.current = requestAnimationFrame(animate)
            }
            playAnimationRef.current = requestAnimationFrame(animate);

        }
    }, [duration, updateProgress]);



    return (
            <BlockContainer className={'[grid-column:_span_3/5] flex items-center justify-between gap-x-2  px-4 py-4 w-full'}>
                <PlayerInfo name={player?.activeMusic.name} artist={player?.activeMusic.artist} image={player?.activeMusic.image} />
                <div className={'flex-1 flex flex-col gap-y-3 items-center justify-center'}>
                    <PlayerControl playAnimationRef={playAnimationRef} playerRef={playerRef} src={player.activeMusic.audio} updateProgress={updateProgress} startAnimation={startAnimation} />
                    <PlayerProgressBar playAnimationRef={playAnimationRef}  playerRef={playerRef} progressRef={progressRef} startAnimation={startAnimation} updateProgress={updateProgress} />
                </div>
            </BlockContainer>
    )
}