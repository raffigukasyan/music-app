import {PopularItem} from "@/widgets/PopularTracks/ui/PopularItem.tsx";
import {ITrack} from "src/entities/Music";
import {FC} from "react";
import {SkeletonList} from "@/widgets/PopularTracks/ui/SkeletonList.tsx";
import {useSelector} from "react-redux";
interface ITrackProps {
    chartTracks: ITrack[],
    loading: boolean
}

export const PopularList: FC<ITrackProps> = ({chartTracks, loading}): JSX.Element => {

    const activeTrack = useSelector((state) => state?.player?.activeMusic);


    return (
        loading ? <SkeletonList />
            : <div className={'flex flex-col gap-y-5'}>
            {chartTracks.map((track: ITrack) => (
                <PopularItem key={track.id} track={track} isPlaying={activeTrack.id === track.id ? activeTrack.isPlay : false} isActive={activeTrack.id === track.id} />
            ))}
        </div>
    )
}
