import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './slice';

const store = configureStore({
  reducer: {
    contactList: contactReducer,
  },
});

export default store;

