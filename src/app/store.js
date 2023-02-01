import { configureStore } from '@reduxjs/toolkit';
import { gamesReducer } from '../features/slices/gameSlice';
import { eventsReducer } from '../features/slices/eventsSlice';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    games: gamesReducer
  },
});
