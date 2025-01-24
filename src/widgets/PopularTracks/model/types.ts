import {ITrack} from "@/entities/Music";

export interface IItemTrackProps {
    track: ITrack,
    isActive: boolean,
    isPlaying: boolean
}