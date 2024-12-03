import {FC} from "react";
import {SectionHead} from "@/shared";
import {AlbumsSilder} from "@/pages/Main/ui/Albums/AlbumsSilder.tsx";

export const Albums:FC = ():JSX.Element => {
    return (
        <section>
            <SectionHead className={'mb-10'} head={'Албомы'} />
            <AlbumsSilder />
        </section>
    )
}