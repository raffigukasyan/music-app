import {Icon} from "@/shared";
import {Pause, playerSelector} from "@/entities/Player"
import {FC, RefObject, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setDuration} from "@/entities/Player/model/PlayerSlice.tsx";


interface IPlayerControlProps {
    src: string,
    playerRef: RefObject<HTMLAudioElement>
}
export const PlayerControl:FC<IPlayerControlProps> = ({playerRef, src}):JSX.Element => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const {duration}: {duration: number} = useSelector(playerSelector)
    const dispatch = useDispatch();

    const startAnimation = useCallback(() => {

    }, [duration])


    useEffect(() => {
        if(isPlaying) {
            playerRef.current?.play();
        }
        else {
            playerRef.current?.pause();
        }
    }, [isPlaying]);

    const handleOnLoad = ():void => {
        const seconds:number = playerRef.current?.duration as number;
        dispatch(setDuration(seconds))
    }
    return (
        <div className={'flex items-center gap-x-6'}>
            <Icon className={'w-5 h-5 text-myWhite hover:text-myGreen cursor-pointer transition-colors'} type={'prev'} />
            <audio ref={playerRef} src={src} className={'hidden'} onLoadedMetadata={handleOnLoad} controls></audio>
            <Pause isPlaying={isPlaying} onClick={() => setIsPlaying((prev) => !prev)} />
            <Icon className={'w-5 h-5 text-myWhite hover:text-myGreen cursor-pointer transition-colors'} type={'next'} />
        </div>
    )
}