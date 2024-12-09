export interface IPlayerActive {
    name: string,
    artist: string,
    track: string,
    preview: string
}

export interface IPlayer {
    activePlayer: IPlayerActive,
    duration: number,
    timeProgress: number
}