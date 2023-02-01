import { createSlice } from "@reduxjs/toolkit";
import { ROOMS } from "../../app/shared/ROOMS";

const initialState = {
    roomsArray: ROOMS
}

const roomsSlice = createSlice({
    name: 'rooms',
    initialState
})

export const roomsReducer = roomsSlice.reducer;
