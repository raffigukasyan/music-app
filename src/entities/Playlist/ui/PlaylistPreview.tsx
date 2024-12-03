
export const PlaylistPreview = ({img}: {img: string}):JSX.Element => {
    return (
        <div className={'rounded-2xl h-[250px]'}>
            <img className={'rounded-2xl w-full h-full object-cover' } src={img} alt=""/>
        </div>
    )
}