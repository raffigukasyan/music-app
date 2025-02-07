import {Filter} from "@/features/FilterPopularSongs";
import {SectionHead} from "@/shared";
import {useGetPopularTracks} from "@/widgets/PopularMusic/lib/hooks/useGetPopularTracks.ts";
import {PopularList} from "@/widgets/PopularMusic/ui/PopularList.tsx";


export const Popular = (): JSX.Element => {
    const {data, loading} = useGetPopularTracks();

    return (
        <section className={'mb-20'}>
            <SectionHead className={'mb-5'} head={'Популярное'} />
            <Filter/>
            <PopularList chart={data} loading={loading}/>
        </section>
    )
}