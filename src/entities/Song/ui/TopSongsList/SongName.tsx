import {FC} from "react";
import {PreviewImage} from "@/entities/Song/ui/PreviewImage.tsx";
import {FiledName} from "@/entities/Song/ui/TopSongsList/FIledName.tsx";

interface ISongNameProps {
    imageSrc: string,
    name: string
}
export const SongName:FC<ISongNameProps> = ({imageSrc, name}):JSX.Element => {
    return  (
        <div className={'flex gap-x-4 items-center'}>
            <PreviewImage className={'max-w-14'} src={imageSrc} />
            <FiledName name={name} />
        </div>
    )
}
