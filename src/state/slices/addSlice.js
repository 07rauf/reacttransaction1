import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  from: '',
  to: '',
  amount: ''
};

export const addSlice = createSlice({
  name: 'add',
  initialState,
  reducers: {
    From: (state, action) => {
      state.from = action.payload;
    },
    To: (state, action) => {
      state.to = action.payload;
    },
    Amount: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const { From, To, Amount } = addSlice.actions;

export default addSlice.reducer;
