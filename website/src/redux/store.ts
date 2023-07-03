import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slicers/userData"
import  gameDataReducer  from "./slicers/gameData";

export const store = configureStore({
  reducer: {
    userData:userDataReducer,
    gameData:gameDataReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
