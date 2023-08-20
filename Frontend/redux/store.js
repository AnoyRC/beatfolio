"use client";

import { configureStore } from "@reduxjs/toolkit";

import crossmintSlice from "./crossmintSlice";
import modalSlice from "./modalSlice";
import currentUserSlice from "./currentUserSlice";

export const store = configureStore({
  reducer: {
    crossmint: crossmintSlice,
    modalSlice,
    currentUserSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
