import {createSlice} from "@reduxjs/toolkit";
import {IPlayer} from "@/entities/Player/model/types.ts";

export const initialState:IPlayer = {
    name: 'Ты и я',
    artist: 'XCHO',
    preview: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F96f8bb4a817965cb857c1009d076d721.1000x1000x1.png',
    track: '/model/xcho-ty-i-ja.mp3',
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {

    }
})

export const playerReducer = playerSlice.reducer

export const playerSelector = (state) => state.player
