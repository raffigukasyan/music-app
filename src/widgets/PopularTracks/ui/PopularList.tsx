import {PopularItem} from "@/widgets/PopularTracks/ui/PopularItem.tsx";
import {IChartTracks} from "@/entities/Song";
import {FC} from "react";
import {Skeleton} from "@/shared";


interface IChartTracksProps {
    chartTracks: IChartTracks[],
    loading: boolean
}

export const PopularList: FC<IChartTracksProps> = ({chartTracks, loading}): JSX.Element => {
    return (
        loading ? <Skeleton className={'w-24 h-5'}></Skeleton> : <div className={'flex flex-col gap-y-5'}>
            {chartTracks.map((track: IChartTracks) => (
                <PopularItem track={track}/>
            ))}
        </div>
    )
}
