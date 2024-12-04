import {configureStore} from "@reduxjs/toolkit";
import {playerReducer} from "@/entities/Player";


export default configureStore({
    reducer: {player: playerReducer}
})