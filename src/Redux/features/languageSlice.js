import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: localStorage.getItem("lan") || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: state => {
      if (!state.language) {
        state.language = "en";
      } else if (state.language === "en") {
        state.language = "it";
      } else if (state.language === "it") {
        state.language = "en";
      }
      window.location.reload();
      localStorage.setItem("lan", state.language);
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
