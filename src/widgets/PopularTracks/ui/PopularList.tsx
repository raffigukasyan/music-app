import {PopularItem} from "@/widgets/PopularTracks/ui/PopularItem.tsx";
import {IChartTracks} from "@/entities/Song";
import {FC} from "react";
import {SkeletonList} from "@/widgets/PopularTracks/ui/SkeletonList.tsx";


interface IChartTracksProps {
    chartTracks: IChartTracks[],
    loading: boolean
}

export const PopularList: FC<IChartTracksProps> = ({chartTracks, loading}): JSX.Element => {
    return (
        loading ? <SkeletonList />
            : <div className={'flex flex-col gap-y-5'}>
            {chartTracks.map((track: IChartTracks) => (
                <PopularItem track={track}/>
            ))}
        </div>
    )
}
