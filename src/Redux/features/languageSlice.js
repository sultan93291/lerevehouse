import { createSlice } from "@reduxjs/toolkit";
import i18n from "@/i18n"; 

const initialState = {
  language: localStorage.getItem("i18nextLng") || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: state => {
      state.language = state.language === "en" ? "it" : "en";

      i18n.changeLanguage(state.language || 'en');

      // Sync to localStorage for persistence
      localStorage.setItem("i18nextLng", state.language);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
