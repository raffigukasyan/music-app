import { Music } from "@/entities/Music";

export interface IPlayingMusic extends Partial<Music.IMusic> {
  isPlay: boolean;
}

export interface IPlayer {
  playingMusic: IPlayingMusic;
  duration: number;
  timeProgress: number;
  isPlaying: boolean | null;
}
