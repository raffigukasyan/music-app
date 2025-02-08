import { Music } from '@/entities/Music';



export interface IAlbum {
    id: number,
    name: string,
    description: string,
    artist: string,
    image: string,
    duration: string,
    tracks: Music.IMusic[],
}

export interface IAlbumList extends Omit<IAlbum, "tracks | duration | description">