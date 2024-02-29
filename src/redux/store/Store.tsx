import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice'; // Assuming you have a counterSlice.js file

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // You can add other reducers here if needed
  },
});

export default store;