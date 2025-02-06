import { configureStore } from "@reduxjs/toolkit";

import { albumsReducer } from "@/entities/Album";
import { playerSlice } from "@/entities/Player";
import { selectedPlaylistReducer } from "@/widgets/SelectPlaylist";

export const store = configureStore({
  reducer: {
    albums: albumsReducer,
    player: playerSlice,
    selectedPlaylist: selectedPlaylistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
