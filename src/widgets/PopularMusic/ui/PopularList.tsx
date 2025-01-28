import {PopularItem} from "@/widgets/PopularMusic/ui/PopularItem.tsx";
import {IMusic} from "src/entities/Music";
import {FC} from "react";
import {SkeletonList} from "@/widgets/PopularMusic/ui/SkeletonList.tsx";
import {useSelector} from "react-redux";
import {IPopularListProps} from "@/widgets/PopularMusic/model/types.ts";


export const PopularList: FC<IPopularListProps> = ({chart, loading}): JSX.Element => {

    const activeMusic = useSelector((state) => state?.player?.activeMusic);


    return (
        loading ? <SkeletonList />
            : <div className={'flex flex-col gap-y-5'}>
            {chart.map((music: IMusic) => (
                <PopularItem key={music.id} track={music} isPlaying={activeMusic.id === music.id ? activeMusic.isPlay : false} isActive={activeMusic.id === music.id} />
            ))}
        </div>
    )
}
