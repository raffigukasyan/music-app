import {Icon} from "@/shared";
import {Pause, playerSelector} from "@/entities/Player"
import {FC, RefObject, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setDuration, setIsPlaying, setActiveMusic} from "@/entities/Player/model/PlayerSlice.tsx";


interface IPlayerControlProps {
    src: string,
    playerRef: RefObject<HTMLAudioElement>,
    progressRef: RefObject<HTMLDivElement>,
    playAnimationRef: RefObject<number | undefined>,
    updateProgress: () => void,
    startAnimation: () => void;
}
export const PlayerControl:FC<IPlayerControlProps> = ({playerRef, src, playAnimationRef, updateProgress, startAnimation}):JSX.Element => {
    const {isPlaying}: {isPlaying:boolean} = useSelector(playerSelector);
    const activeTrack = useSelector((state) => state.player.activeMusic);
    const dispatch = useDispatch();

    //
    useEffect(() => {
        console.log('EDITTT');
        console.log(activeTrack);
       dispatch(setIsPlaying(activeTrack.isPlay))
    }, [activeTrack]);

    useEffect(() => {


        if(isPlaying === null) return

        if(isPlaying) {
            console.log('QQWEWE');
            playerRef.current?.play();
            startAnimation();
            dispatch(setActiveMusic({...activeTrack, isPlay: true}))
        }
        else {
            console.log('AHAH');
            playerRef.current?.pause();
            if(playAnimationRef.current !== null) {
                cancelAnimationFrame(playAnimationRef.current);
                playAnimationRef.current = null
            }
            updateProgress();
            dispatch(setActiveMusic({...activeTrack, isPlay: false}))
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

    const handleOnEnded = () => {
        dispatch(setIsPlaying(false))
    }
    console.log('RENDER PLAYER CONTROL');
    return (
        <div className={'flex items-center gap-x-6'}>
            <Icon className={'w-5 h-5 text-myWhite hover:text-myGreen cursor-pointer transition-colors'} type={'prev'} />
            <audio crossOrigin="anonymous" ref={playerRef}  src={src}  className={'hidden'} onLoadedMetadata={handleOnLoad} onEnded={handleOnEnded} controls></audio>
            <Pause isPlaying={isPlaying} onClick={() => dispatch(setIsPlaying(!isPlaying))} />
            <Icon className={'w-5 h-5 text-myWhite hover:text-myGreen cursor-pointer transition-colors'} type={'next'} />
        </div>
    )
}