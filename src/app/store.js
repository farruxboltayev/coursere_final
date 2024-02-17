import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./isOnlieOrOffline/userOnlineThunk";

export const store = configureStore({
  reducer: {
    userOnline: userInfoSlice,
  },
});
