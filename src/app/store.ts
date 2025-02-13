import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import dataReducer from '../features/game/gameSlice';
import { api } from '../serviecs/api';

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Register reducers here
    data: dataReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
