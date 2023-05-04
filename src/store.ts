import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import reigsterReducer from "./slices/registerSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: reigsterReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDisptach = typeof store.dispatch;
