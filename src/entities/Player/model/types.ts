import {IChartTracks} from "@/entities/Music";

export interface IPlayer {
    activeMusic: IActiveMusic,
    duration: number,
    timeProgress: number,
    isPlaying: boolean
}

export interface IActiveMusic extends Partial<IChartTracks> {
    isPlay: boolean
}