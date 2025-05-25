import { createSlice } from "@reduxjs/toolkit";

const initialState =
  JSON.parse(localStorage.getItem("selectedItineraries")) || [];

const itinerariesSlice = createSlice({
  name: "itineraries",
  initialState,
  reducers: {
    addItinerary: (state, action) => {
      const newItem = action.payload;
      const existingIndex = state.findIndex(item => item.id === newItem.id);

      if (existingIndex >= 0) {
        // If itinerary already exists, increase dayCount
        state[existingIndex].dayCount =
          (state[existingIndex].dayCount || 1) + 1;
      } else {
        // Otherwise add new itinerary with dayCount 1
        state.push({ ...newItem, dayCount: 1 });
      }

      localStorage.setItem("selectedItineraries", JSON.stringify(state));
    },

    removeItinerary: (state, action) => {
      const id = action.payload;
      const existingIndex = state.findIndex(item => item.id === id);

      if (existingIndex >= 0) {
        if (state[existingIndex].dayCount > 1) {
          // Decrement dayCount if more than 1
          state[existingIndex].dayCount -= 1;
        } else {
          // Remove itinerary if dayCount is 1
          state.splice(existingIndex, 1);
        }
      }

      localStorage.setItem("selectedItineraries", JSON.stringify(state));
    },

    clearItineraries: state => {
      localStorage.removeItem("selectedItineraries");
      return [];
    },
  },
});

export const { addItinerary, removeItinerary, clearItineraries } =
  itinerariesSlice.actions;

export default itinerariesSlice.reducer;
