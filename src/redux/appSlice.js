import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  open: false,
  emails: null,
  selectedEmail: null,
  searchText:""
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setEmails: (state, action) => {
        state.emails = action.payload;
    },
    setSelectedEmail: (state, action) => {
        state.selectedEmail = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload
    }
  },
});

export const { setOpen, setEmails, setSelectedEmail, setSearchText } = appSlice.actions;
export default appSlice;
