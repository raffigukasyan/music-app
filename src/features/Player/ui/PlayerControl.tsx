import {Icon} from "@/shared";
import {Pause, playerSelector} from "@/entities/Player"
import {FC, RefObject, useCallback, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setDuration, setTimeProgress} from "@/entities/Player/model/PlayerSlice.tsx";


interface IPlayerControlProps {
    src: string,
    playerRef: RefObject<HTMLAudioElement>,
    progressRef: RefObject<HTMLDivElement>
}
export const PlayerControl:FC<IPlayerControlProps> = ({playerRef, progressRef, src}):JSX.Element => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const {duration}: {duration: number} = useSelector(playerSelector)
    const playAnimationRef = useRef<number | undefined>(null);
    const dispatch = useDispatch();

    console.log('RENDERRR');

    const updateProgress = useCallback(() => {
        console.log('PROGRESS FUNC');
        if(playerRef.current && duration) {
            const currentTime:number = playerRef.current.currentTime;
            dispatch(setTimeProgress(currentTime))
            progressRef.current.style.width = `${(currentTime / duration) * 100}%`
        }

    }, [duration, playerRef])


    const startAnimation = useCallback(() => {
        if(playerRef.current && duration) {
            const animate = () => {
               // вызываем функцию обновления прогресс бара
                updateProgress();
                playAnimationRef.current = requestAnimationFrame(animate)
            }
            playAnimationRef.current = requestAnimationFrame(animate);

        }
    }, [duration, playerRef, updateProgress])


    useEffect(() => {
        console.log('QQQQQ');
        if(isPlaying) {
            playerRef.current?.play();
            startAnimation();
        }
        else {
            playerRef.current?.pause();
            console.log(playAnimationRef.current, 'STOP PLAY');
            if(playAnimationRef.current !== null) {
                cancelAnimationFrame(playAnimationRef.current);
                playAnimationRef.current = null
            }
            updateProgress();
        }
        return () => {
            if(playAnimationRef.current !== null) {
                cancelAnimationFrame(playAnimationRef.current);
            }
        }
    }, [isPlaying, playerRef, startAnimation, updateProgress]);

    const handleOnLoad = ():void => {
        const seconds:number = playerRef.current?.duration as number;
        dispatch(setDuration(seconds))
    }
    return (
        <div className={'flex items-center gap-x-6'}>
            <Icon className={'w-5 h-5 text-myWhite hover:text-myGreen cursor-pointer transition-colors'} type={'prev'} />
            <audio ref={playerRef}  src={src}  className={'hidden'} onLoadedMetadata={handleOnLoad} controls></audio>
            <Pause isPlaying={isPlaying} onClick={() => setIsPlaying((prev) => !prev)} />
            <Icon className={'w-5 h-5 text-myWhite hover:text-myGreen cursor-pointer transition-colors'} type={'next'} />
        </div>
    )
}