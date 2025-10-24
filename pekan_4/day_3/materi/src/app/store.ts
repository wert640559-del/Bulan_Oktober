// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../features/users/usersSlice'; // Import usersReducer

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState> // wajib ada di typescript, dan kodenya ga akan berubah
export type AppDispatch = typeof store.dispatch

