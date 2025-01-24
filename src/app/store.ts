import {configureStore} from "@reduxjs/toolkit";
import {playerReducer} from "@/entities/Player";
import {albumsReducer} from "@/entities/Album";
import {selectedPlaylistReducer} from "@/widgets/SelectPlaylist";

export default configureStore({
    reducer: {
        albums: albumsReducer,
        player: playerReducer,
        selectedPlaylist: selectedPlaylistReducer
    }
})