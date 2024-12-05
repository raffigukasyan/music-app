import {Icon} from "@/shared";
import {Pause} from "@/entities/Player"
import {useEffect, useRef, useState} from "react";
export const PlayerControl = ({src}: {src: string}):JSX.Element => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const playerRef = useRef<HTMLAudioElement>(null);

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
            <audio ref={playerRef} src='/music/xcho-ty-i-ja.mp3' className={'hidden'} controls></audio>
            <Pause isPlaying={isPlaying} onClick={() => setIsPlaying((prev) => !prev)} />
            <Icon className={'w-5 h-5 text-myWhite hover:text-myGreen cursor-pointer transition-colors'} type={'next'} />
        </div>
    )
}