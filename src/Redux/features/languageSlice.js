import { createSlice } from "@reduxjs/toolkit";
import i18n from "@/i18n";

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

      i18n.changeLanguage(state.language);
      localStorage.setItem("lan", state.language);
      localStorage.setItem("i18nextLng", state.language); 

      window.location.reload();
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";
// import i18n from "@/i18n"; 

// const initialState = {
//   language: localStorage.getItem("lan") || "en",
// };

// const languageSlice = createSlice({
//   name: "language",
//   initialState,

  
//   reducers: {

//     setLanguage: state => {
//       if (!state.language) {
//         state.language = "en";
//       } else if (state.language === "en") {
//         state.language = "it";
//       } else if (state.language === "it") {
//         state.language = "en";
//       }
//       window.location.reload();
   
//     }
//   },
// });

// export const { setLanguage } = languageSlice.actions;
// export default languageSlice.reducer;