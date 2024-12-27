import {IChartTracks} from "@/entities/Music";

export interface IPlayer {
    activeMusic: IChartTracks,
    duration: number,
    timeProgress: number,
    isPlaying: boolean
}