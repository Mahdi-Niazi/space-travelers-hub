import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const RocketsbaseUrl = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  allRockets: [],
  reserved: false,
  isLoading: false,
};

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(`${RocketsbaseUrl}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    setReserved: (state, action) => {
      state.allRockets = state.allRockets.map((rocket) => (
        rocket.id !== action.payload ? rocket : { ...rocket, reserved: true }));
    },
    cancelReserved: (state, action) => {
      state.allRockets = state.allRockets.map((rocket) => (
        rocket.id !== action.payload ? rocket : { ...rocket, reserved: false }));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      const rockets = Object.entries(action.payload).map((items) => ({
        id: items[0],
        ...items[1],
      }));
      return { ...state, allRockets: rockets, isLoading: false };
    });
    builder.addCase(getRockets.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getRockets.rejected, (state) => {
      state.isLoading = false;
    });
  },

});

export default rocketsSlice.reducer;
export const { setReserved, cancelReserved } = rocketsSlice.actions;
