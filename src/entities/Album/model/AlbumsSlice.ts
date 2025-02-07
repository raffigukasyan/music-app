
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {fetchAlbums} from "@/entities/Album/api/fetchAlbums.ts";

const initialState = {
    albums: [],
    loading: true,
    status: 'idle'
}

export const getAlbums = createAsyncThunk(
    'albums/fetchAlbums',
    async () => {
        try {
            const data = await fetchAlbums();
            return data;
        }
        catch (e) {
            console.log(e)
        }
    }
)

export const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAlbums.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(getAlbums.fulfilled, (state, action) => {
                state.loading = false;
                state.albums = action.payload
                console.log('fulf')
            })
    }
})

export const albumsReducer = albumsSlice.reducer;
export const selectAlbums = (state) => state.albums.albums

export const selectLoading = (state) => state.albums.loading