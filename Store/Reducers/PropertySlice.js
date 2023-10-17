import { createSlice } from '@reduxjs/toolkit';

const propertySlice = createSlice({
    name: 'properties',
    initialState: {
      commercialData: [],
      residentialData: [],
    },
    reducers: {
      setCommercialData: (state, action) => {
        state.commercialData = action.payload;
      },
      setResidentialData: (state, action) => { 
        state.residentialData = action.payload;
      },
    },
  });

export const setCommercialData = propertySlice.actions.setCommercialData;
export const setResidentialData  = propertySlice.actions.setResidentialData;
export default propertySlice.reducer;
