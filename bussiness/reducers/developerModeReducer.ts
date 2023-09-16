import { createSlice } from "@reduxjs/toolkit";

const developerModeReducer = createSlice({
  name: "developerModeReducer",
  initialState: {
    developerMode: false,
  },
  reducers: {
    setDeveloperMode(state, action) {
      state.developerMode = action.payload;
    },
  },
});

export const { setDeveloperMode } = developerModeReducer.actions;
export default developerModeReducer.reducer;
