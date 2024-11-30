import {Filter} from "@/features/FilterPopularSongs";
import {SectionHead} from "@/shared/index.ts";
import {PopularList} from "@/pages/Main/ui/PopularSongs/PopularList.tsx";

export const PopularSongs = ():JSX.Element => {
    return (
        <section>
            <SectionHead className={'mb-10'} head={'Популярное'} />
            <Filter />
            <PopularList />
        </section>
    )
}