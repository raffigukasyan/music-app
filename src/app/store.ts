import { configureStore } from '@reduxjs/toolkit';

import { albumsReducer } from '@/entities/Album';
import { playerSlice } from '@/entities/Player';
import { selectedPlaylistReducer } from '@/widgets/SelectPlaylist';
import { authReducer } from '@/features/Auth/index';
export const store = configureStore({
  reducer: {
    albums: albumsReducer,
    player: playerSlice,
    selectedPlaylist: selectedPlaylistReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
