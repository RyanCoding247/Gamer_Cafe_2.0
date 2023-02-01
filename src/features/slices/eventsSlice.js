import { createSlice } from "@reduxjs/toolkit";
import { EVENTS } from "../../app/shared/EVENTS";

const initialState = {
    eventsArray: EVENTS
};

const eventSlice = createSlice({
    name: 'events', 
    initialState,
})

export const eventsReducer = eventSlice.reducer;

// export const selectFeaturedEvent = (state) => {
//     return state.events.eventsArray.find((featured) => featured);
// }

// Converted above function to inline function in FeaturedEvent.js for demonstration purposes. 

export const selectAllEvents = (state) => {
    return state.events.eventsArray;
}

export const selectEventsById = (id) => {
    return EVENTS.filter(
        (event) => event.id === parseInt(id)
    );
}
