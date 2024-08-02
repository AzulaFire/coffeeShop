import { configureStore } from '@reduxjs/toolkit';
import { coffeeSlice } from '../features/coffeeSlice';

export const store = configureStore({
  reducer: {
    coffees: coffeeSlice.reducer,
  },
});
