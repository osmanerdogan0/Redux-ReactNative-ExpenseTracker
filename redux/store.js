//import {combineReducers} from 'redux';
import {configureStore, combineReducers} from '@reduxjs/toolkit';

import listReducers from '../redux/reducers/listReducers';
const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    paymentList: listReducers,
  },
});
export default store;
