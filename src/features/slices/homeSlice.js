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

export const selectFeaturedEvent = () => {
    return EVENTS.find((featured) => featured);
}

export const selectAllEvents = () => {
    return EVENTS;
}

export const selectEventsById = (id) => {
    return EVENTS.filter(
        (event) => event.id === parseInt(id)
    );
}
