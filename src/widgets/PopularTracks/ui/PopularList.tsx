import {PopularItem} from "@/widgets/PopularTracks/ui/PopularItem.tsx";
import {IChartTracks} from "src/entities/Music";
import {FC, useMemo} from "react";
import {SkeletonList} from "@/widgets/PopularTracks/ui/SkeletonList.tsx";
import {useSelector} from "react-redux";
import {isPlaying} from "@/entities/Player";

interface IChartTracksProps {
    chartTracks: IChartTracks[],
    loading: boolean
}

export const PopularList: FC<IChartTracksProps> = ({chartTracks, loading}): JSX.Element => {

    const activeTrack = useSelector((state) => state.player.activeMusic);
    const isPlay = useSelector(isPlaying)
    console.log("Rendering PopularList");

    const memoChart = useMemo(() => {
        console.log('memo');
        return chartTracks.map((track:IChartTracks) => {
            return {
                ...track,
                isPlay: track.id === activeTrack.id ? isPlay : false
            }
        })
    }, [chartTracks, activeTrack.id])

    console.log(memoChart, 'memoChart');
    return (
        loading ? <SkeletonList />
            : <div className={'flex flex-col gap-y-5'}>
            {chartTracks.map((track: IChartTracks) => (
                <PopularItem key={track.id} track={track} isActive={activeTrack.id === track.id} />
            ))}
        </div>
    )
}
