import {IImage} from "@/shared/types/ImgType.ts";
import {FC} from "react";
import {AlbumPreview} from "@/entities/Album/ui/AlbumPreview.tsx";

interface IAlbumCardProps {
    name: string,
    artist: string,
    preview: IImage
}

export const AlbumCard:FC<IAlbumCardProps> = ({name, artist, preview}):JSX.Element => {
    return (
        <div className={'max-w-[280px]'}>
            <AlbumPreview image={preview} />
            <div className={'mt-2 flex flex-col gap-y-2'}>
                <p className={'text-myWhite text-lg'}>{name}</p>
                <p className={'text-gray-300 text-base'}>{artist}</p>
            </div>
        </div>
    )
}