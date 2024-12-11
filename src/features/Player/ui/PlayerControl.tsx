import {Icon} from "@/shared";
import {Pause, playerSelector} from "@/entities/Player"
import {FC, RefObject, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setDuration, setTimeProgress, setIsPlaying} from "@/entities/Player/model/PlayerSlice.tsx";


interface IPlayerControlProps {
    src: string,
    playerRef: RefObject<HTMLAudioElement>,
    progressRef: RefObject<HTMLDivElement>,
    playAnimationRef: RefObject<number | undefined>;
}
export const PlayerControl:FC<IPlayerControlProps> = ({playerRef, progressRef, src, playAnimationRef}):JSX.Element => {
    const {duration, isPlaying}: {duration: number, isPlaying:boolean} = useSelector(playerSelector)
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
    }, [duration, updateProgress])


    useEffect(() => {

        if(isPlaying) {
            playerRef.current?.play();
            startAnimation();
        }
        else {
            playerRef.current?.pause();
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
    }, [isPlaying, startAnimation, updateProgress]);

    const handleOnLoad = ():void => {
        const seconds:number = playerRef.current?.duration as number;
        dispatch(setDuration(seconds))
    }
    return (
        <div className={'flex items-center gap-x-6'}>
            <Icon className={'w-5 h-5 text-myWhite hover:text-myGreen cursor-pointer transition-colors'} type={'prev'} />
            <audio ref={playerRef}  src={src}  className={'hidden'} onLoadedMetadata={handleOnLoad} controls></audio>
            <Pause isPlaying={isPlaying} onClick={() => dispatch(setIsPlaying(!isPlaying))} />
            <Icon className={'w-5 h-5 text-myWhite hover:text-myGreen cursor-pointer transition-colors'} type={'next'} />
        </div>
    )
}