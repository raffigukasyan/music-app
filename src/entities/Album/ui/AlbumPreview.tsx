import {IImage} from "@/shared/types/ImgType.ts";


export const AlbumPreview  = ({image, onClick}: {image: IImage, onClick: (e: React.MouseEvent<HTMLDivElement>) => void}):JSX.Element => {
    return (
        <div onClick={onClick} className={'rounded-2xl'}>
            <img className={'rounded-2xl'} src={image.src} alt={image.alt} />
        </div>
    )
}