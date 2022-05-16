import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "text",
  initialState: {
    text: "",
    entireScreen: false,
    isHelpActive: false,
  },
  reducers: {
    changeText: (state, action) => {
      state.text = action.payload;
    },
    changeEntireScreen: (state, action) => {
      state.entireScreen = action.payload;
    },
    changeIsHelpActive: (state, action) => {
      state.isHelpActive = action.payload;
    },
  },
});

export const { changeText, changeEntireScreen, changeIsHelpActive } =
  textSlice.actions;
export default textSlice.reducer;
