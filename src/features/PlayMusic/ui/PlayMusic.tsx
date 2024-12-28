import {FC} from "react";
import {PreviewImage} from "@/entities/Music/ui/PreviewImage.tsx";
import {useDispatch} from "react-redux";
import {setActiveMusic} from "@/entities/Player/model/PlayerSlice.tsx";
import {memo} from "react";
import {IItemTrackProps} from "@/widgets/PopularTracks/model/types.ts";

export const PlayMusic:FC<IItemTrackProps> = memo(({track, isActive, isPlaying}) => {

   const dispatch = useDispatch();

    const handlePlay = () => {
            dispatch(setActiveMusic({...track, isPlay: isPlaying !== null ? !isPlaying : true}));
    }

    console.log('RENDERRRRR PREWWW', isPlaying);

    return (
        <PreviewImage isActive={isActive} isPlaying={isPlaying} onClick={handlePlay} src={track.image} className={'max-w-10 2xl:max-w-14'} />
    )
})