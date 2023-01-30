import { configureStore } from '@reduxjs/toolkit';
import { eventsReducer } from '../features/slices/homeSlice';

export const store = configureStore({
  reducer: {
    events: eventsReducer
  },
});
