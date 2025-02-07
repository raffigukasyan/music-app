import {FC} from "react";

import {AlbumPreview} from "@/entities/Album/ui/AlbumPreview.tsx";
import {IImage} from "@/shared/types/ImgType.ts";

interface IAlbumCardProps {
    name: string,
    artist: string,
    preview: IImage,
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void,
}

export const AlbumCard:FC<IAlbumCardProps> = ({name, artist, preview, onClick}):JSX.Element => {
    return (
        <div className={'cursor-pointer max-w-[280px]'}>
            <AlbumPreview onClick={onClick} image={preview} />
            <div className={'mt-2 flex flex-col gap-y-2'}>
                <p className={'text-myWhite text-lg'}>{name}</p>
                <p className={'text-gray-300 text-base'}>{artist}</p>
            </div>
        </div>
    )
}