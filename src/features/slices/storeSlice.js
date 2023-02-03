import { createSlice } from "@reduxjs/toolkit";
import { STORE } from "../../app/shared/STORE";

const initialState = {
    storeArray: STORE
}

const storeSlice = createSlice({
    name: 'store',
    initialState
})

export const storeReducer = storeSlice.reducer;
