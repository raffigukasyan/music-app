import {TopItem} from "@/pages/Main/ui/TopSongs/TopItem.tsx";

export const TopList = ():JSX.Element => {
    return (
        <div className={''}>

            <TopItem song={{
                name: 'Giri',
                image: 'https://images.genius.com/96648db5938144e8bac5b9c822c8558f.1000x1000x1.jpg',
                time: '3:39',
                artist: 'MACAN'
            }}/>
        </div>
    )
}
