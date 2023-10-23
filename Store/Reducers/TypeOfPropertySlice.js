import { createSlice } from '@reduxjs/toolkit';

const TypeOfPropertySlice = createSlice({
    name: 'TypeOfProperty',
    initialState: {
      Office: {},
      Retail: {},
      Warehouse: {},

    },
    reducers: {
      setOffice: (state, action) => {
        state.commercialData = action.payload;
      },
      setRetail: (state, action) => { 
        state.residentialData = action.payload;
      },
      setWarehouse: (state, action) => { 
        state.residentialData = action.payload;
      },
    },
  });

// export const setOffice = TypeOfPropertySlice.actions.setOffice;
// export const setRetail  = TypeOfPropertySlice.actions.setRetail;
// export const setWarehouse  = TypeOfPropertySlice.actions.setWarehouse;
export const { setOffice, setRetail, setWarehouse } = TypeOfPropertySlice.actions;
export default TypeOfPropertySlice.reducer;