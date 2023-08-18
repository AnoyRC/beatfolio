import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const defaultSlice = createSlice({
  name: 'default',
  initialState,
  reducers: {},
});

export const {} = defaultSlice.actions;

export default defaultSlice.reducer;
