import {PreviewImage} from "@/entities/Music/ui/PreviewImage.tsx";
import {batch, useDispatch} from "react-redux";
import {setActiveMusic, setIsPlaying} from "@/entities/Player/model/PlayerSlice.tsx";
import {IChartTracks} from "@/entities/Music";
import {memo} from "react";

export const PlayMusic = memo(({track, isActive}:{track: IChartTracks, isActive: boolean}) => {

   const dispatch = useDispatch();

    const handlePlay = () => {
        batch(() => {
            dispatch(setActiveMusic(track));
            dispatch(setIsPlaying(true))
        })
        // dispatch(setActiveMusic(track));
    }

    console.log('RENDERRRRR PREWWW');

    return (
        <PreviewImage isActive={isActive}  onClick={handlePlay} src={track.image} className={'max-w-10 2xl:max-w-14'} />
    )
})