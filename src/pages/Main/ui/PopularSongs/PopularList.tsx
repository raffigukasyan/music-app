import {PopularItem} from "@/pages/Main/ui/PopularSongs/PopularItem.tsx";

export const PopularList = ():JSX.Element => {
    return (
        <div className={'flex flex-col gap-y-5'}>
            <PopularItem song={{
                name: 'Giri',
                image: 'https://images.genius.com/96648db5938144e8bac5b9c822c8558f.1000x1000x1.jpg',
                time: '3:39',
                artist: 'MACAN'
            }}/>
            <PopularItem song={{
                name: 'Giri',
                image: 'https://images.genius.com/96648db5938144e8bac5b9c822c8558f.1000x1000x1.jpg',
                time: '3:39',
                artist: 'MACAN'
            }}/>
            <PopularItem song={{
                name: 'Giri',
                image: 'https://images.genius.com/96648db5938144e8bac5b9c822c8558f.1000x1000x1.jpg',
                time: '3:39',
                artist: 'MACAN'
            }}/>
        </div>
    )
}
