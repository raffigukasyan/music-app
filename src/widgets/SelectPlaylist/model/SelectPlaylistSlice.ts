import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IAlbum} from "@/entities/Album/model/types.ts";

const initialState = {
    selectedPlaylist: {}
}


export const selectedPlaylistSlice = createSlice({
    name: 'selectedPlaylist',
    initialState,
    reducers: {
        setSelectedPlaylist: (state, action:PayloadAction<IAlbum>) => {
            state.selectedPlaylist = {...action.payload}
        }
    }
})


export const {setSelectedPlaylist} = selectedPlaylistSlice.actions;

export const selectedPlaylistReducer = selectedPlaylistSlice.reducer;

export const selectedPlaylist = (state) => state.selectedPlaylist.selectedPlaylist

