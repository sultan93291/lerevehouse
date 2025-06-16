import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import itinerariesReducer from "./features/itenariesSlice";
import languageReducer from "./features/languageSlice";

export const store = configureStore({
  reducer: {
    itineraries: itinerariesReducer,
    language: languageReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
