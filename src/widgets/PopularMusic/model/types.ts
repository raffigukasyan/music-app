import {IMusic} from "@/entities/Music";


export interface IPopularListProps {
    chart: IMusic[],
    loading: boolean
}

export interface IItemTrackProps {
    track: IMusic,
    isActive: boolean,
    isPlaying: boolean
}