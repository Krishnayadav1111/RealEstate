
import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './Reducers/PropertySlice';
import TypeOfPropertySlice from './Reducers/TypeOfPropertySlice';

const store = configureStore({
  reducer: {
    properties: propertyReducer,
    TypeOfProperty:TypeOfPropertySlice,
  },
});

export default store;
