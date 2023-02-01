import { GAMES } from "../../app/shared/GAMES";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gamesArray: GAMES
}

const gamesSlice = createSlice({
    name: 'games',
    initialState
})

export const gamesReducer = gamesSlice.reducer;


export const firstGames = () => {
    return GAMES.filter((e) => e.type === 1 || e.type === 2);
}
