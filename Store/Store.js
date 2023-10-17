
import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './Reducers/PropertySlice';

const store = configureStore({
  reducer: {
    properties: propertyReducer,
  },
});

export default store;
