import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import developerModeReducer from "./reducers/developerModeReducer";

export const store = configureStore({
  reducer: {
    developerModeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
