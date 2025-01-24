interface IInfoPlaylistProps {
    name: string,
    description: string,
    likes: number,
    songs: number
}

export const InfoPlaylist =  ({name, description, likes, songs}):JSX.Element => {
    return (
        <div className={'flex flex-col max-w-[250px] gap-y-6'}>
            <p className={'text-3xl text-myWhite font-bold'}>{name}</p>
            <p className={'text-gray-300'}>{description}</p>
            <div className={'flex gap-x-2 items-center'}>
                <span className={'text-gray-200 text-base font-bold'}>{likes} Лайков</span>
                <span className={'text-gray-200 text-2xl leading-5 font-bold'}>.</span>
                <span className={'text-coolGray-600 text-base font-bold'}> {songs} Прослушиваний</span>
            </div>
        </div>
    )
}