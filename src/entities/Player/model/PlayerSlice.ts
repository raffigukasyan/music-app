import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPlayer, IActiveMusic} from "@/entities/Player/model/types.ts";


export const initialState:IPlayer = {
    activeMusic: {
        id: 0,
        name: 'Ты и я',
        artist: 'XCHO',
        album: 'QQQ',
        image: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F96f8bb4a817965cb857c1009d076d721.1000x1000x1.png',
        audio: '/music/xcho-ty-i-ja.mp3',
        isPlay: false
    },
    timeProgress: 0,
    isPlaying: false,
    duration: 0
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setTimeProgress: (state, action: PayloadAction<number>) => {
            state.timeProgress = action.payload;
        },
        setDuration: (state, action: PayloadAction<number>) => {
            state.duration = action.payload;
        },
        setIsPlaying: (state, action:PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        },
        setActiveMusic: (state, action:PayloadAction<IActiveMusic>) => {
                state.activeMusic = { ...action.payload };

        }

    }
})

export const playerReducer = playerSlice.reducer
export const {setIsPlaying, setTimeProgress, setDuration, setActiveMusic} = playerSlice.actions;
export const playerSelector = (state) => state.player

export const selectedMusic = (state) => state.player.activeMusic
export const isPlaying = (state) => state.player.isPlaying