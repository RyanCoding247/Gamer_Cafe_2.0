import { configureStore } from '@reduxjs/toolkit';
import { gamesReducer } from '../features/slices/gameSlice';
import { eventsReducer } from '../features/slices/eventsSlice';
import { roomsReducer } from '../features/slices/roomsSlice';
import { storeReducer } from '../features/slices/storeSlice';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    games: gamesReducer,
    rooms: roomsReducer,
    store: storeReducer
  },
});
