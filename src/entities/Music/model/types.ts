export namespace Music {
  export interface IMusic {
    id: number;
    name: string;
    artist: string;
    image: string;
    album: string;
    audio: string;
    duration: string;
  }

  export interface IMusicInfo {
    name: string;
    artist: string;
    image: string;
  }
}
