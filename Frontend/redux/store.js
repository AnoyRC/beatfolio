"use client";

import { defaultSlice } from "./defaultSlice";
import { crossmintSlice } from "./crossmintSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    default: defaultSlice.reducer,
    crossmint: crossmintSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
