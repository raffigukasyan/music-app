import {Filter} from "@/features/FilterPopularSongs";
import {SectionHead} from "@/shared";
import {PopularList} from "@/widgets/PopularTracks/ui/PopularList.tsx";

import {useGetPopularTracks} from "@/widgets/PopularTracks/lib/hooks/useGetPopularTracks.ts";

export const PopularSongs = (): JSX.Element => {
    const {data, loading} = useGetPopularTracks();

    console.log(data);
    return (
        <section className={'mb-20'}>
            <SectionHead className={'mb-5'} head={'Популярное'}/>
            <Filter/>
            <PopularList chartTracks={data} loading={loading}/>
        </section>
    )
}