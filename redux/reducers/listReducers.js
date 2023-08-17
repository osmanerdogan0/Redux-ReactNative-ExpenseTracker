import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  entities: [],
};

const paymentListSlice = createSlice({
  name: 'paymentList',
  initialState,
  reducers: {
    todoAdded(state, action) {
      // ✅ This "mutating" code is okay inside of createSlice!
      state.entities.push(action.payload);
    },
    todoDelete(state, action) {
      // ✅ This "mutating" code is okay inside of createSlice!
      state.entities = state.entities.filter(
        prevItem => prevItem.number !== action.payload,
      );
    },
  },
});

export const {todoAdded, todoDelete} = paymentListSlice.actions;

export default paymentListSlice.reducer;
