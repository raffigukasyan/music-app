import {FC} from "react";
import {PreviewImage} from "@/entities/Music/ui/PreviewImage.tsx";
import {useDispatch} from "react-redux";
import {setActiveMusic} from "@/entities/Player/model/PlayerSlice.ts";
import {IItemTrackProps} from "@/widgets/PopularMusic/model/types.ts";

export const PlayMusic:FC<IItemTrackProps> = ({track, isActive, isPlaying}) => {

   const dispatch = useDispatch();

    const handlePlay = () => {
            dispatch(setActiveMusic({...track, isPlay: isPlaying !== null ? !isPlaying : true}));
    }

    return (
        <PreviewImage isActive={isActive} isPlaying={isPlaying} onClick={handlePlay} src={track.image} className={'max-w-10 2xl:max-w-14'} />
    )
}