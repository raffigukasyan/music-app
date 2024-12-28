import {PopularItem} from "@/widgets/PopularTracks/ui/PopularItem.tsx";
import {IChartTracks} from "src/entities/Music";
import {FC} from "react";
import {SkeletonList} from "@/widgets/PopularTracks/ui/SkeletonList.tsx";
import {useSelector} from "react-redux";
interface IChartTracksProps {
    chartTracks: IChartTracks[],
    loading: boolean
}

export const PopularList: FC<IChartTracksProps> = ({chartTracks, loading}): JSX.Element => {

    const activeTrack = useSelector((state) => state?.player?.activeMusic);
    console.log("Rendering PopularList");

    return (
        loading ? <SkeletonList />
            : <div className={'flex flex-col gap-y-5'}>
            {chartTracks.map((track: IChartTracks) => (
                <PopularItem key={track.id} track={track} isPlaying={activeTrack.id === track.id ? activeTrack.isPlay : false} isActive={activeTrack.id === track.id} />
            ))}
        </div>
    )
}
