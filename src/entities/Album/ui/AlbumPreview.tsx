import {IImage} from "@/shared/types/ImgType.ts";


export const AlbumPreview  = ({image}: {image: IImage}):JSX.Element => {
    return (
        <div className={'rounded-2xl'}>
            <img className={'rounded-2xl'} src={image.src} alt={image.alt} />
        </div>
    )
}