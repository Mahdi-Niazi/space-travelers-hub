import { createSlice } from '@reduxjs/toolkit';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    setRockets: (state, action) => action.payload,
  },

});

export const { setRockets } = rocketsSlice.actions;
export default rocketsSlice.reducer;
