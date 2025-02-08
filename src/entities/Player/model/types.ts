import {Music} from "@/entities/Music";

export interface IPlayer {
    playingMusic: IPlayingMusic,
    duration: number,
    timeProgress: number,
    isPlaying: boolean | null
}

export interface IPlayingMusic extends Partial<Music.IMusic> {
    isPlay: boolean
}

