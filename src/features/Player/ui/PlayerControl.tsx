import {Icon} from "@/shared";
import {Pause} from "@/entities/Player"
import {FC, RefObject, useEffect, useRef, useState} from "react";


interface IPlayerControlProps {
    src: string,
    playerRef: RefObject<HTMLAudioElement>
}
export const PlayerControl:FC<IPlayerControlProps> = ({playerRef, src}):JSX.Element => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);


    useEffect(() => {
        if(isPlaying) {
            playerRef.current?.play();
        }
        else {
            playerRef.current?.pause();
        }
    }, [isPlaying]);
    return (
        <div className={'flex items-center gap-x-6'}>
            <Icon className={'w-5 h-5 text-myWhite hover:text-myGreen cursor-pointer transition-colors'} type={'prev'} />
            <audio ref={playerRef} src={src} className={'hidden'} onLoadedMetadata={() => {
                console.log(playerRef.current.duration / 60);
            }} controls></audio>
            <Pause isPlaying={isPlaying} onClick={() => setIsPlaying((prev) => !prev)} />
            <Icon className={'w-5 h-5 text-myWhite hover:text-myGreen cursor-pointer transition-colors'} type={'next'} />
        </div>
    )
}