'use client';

import { configureStore } from '@reduxjs/toolkit';

import { defaultSlice } from './defaultSlice';
import { crossmintSlice } from './crossmintSlice';
import { signupModalSlice } from './SignupModalSlice';

export const store = configureStore({
  reducer: {
    default: defaultSlice.reducer,
    crossmint: crossmintSlice.reducer,
    signup: signupModalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
