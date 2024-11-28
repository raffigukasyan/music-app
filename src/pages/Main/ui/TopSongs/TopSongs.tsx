import {TopList} from "@/pages/Main/ui/TopSongs/TopList.tsx";
import {SectionHead} from "@/shared/index.ts";

export const TopSongs = ():JSX.Element => {
    return (
        <section>
            <SectionHead head={'Популярное'} />
            <TopList />
        </section>
    )
}