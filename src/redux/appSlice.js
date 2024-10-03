import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  open: false,
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = appSlice.actions;
export default appSlice;
