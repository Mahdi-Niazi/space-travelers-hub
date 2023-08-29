import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  allMissions: [],
  isLoading: false,
};

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(`${baseUrl}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => {
      const mission = Object.entries(action.payload).map((items) => ({
        id: items[0],
        ...items[1],
      }));
      return { ...state, allMissions: mission };
    });
    builder.addCase(getMissions.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
  },
});

export default missionsSlice.reducer;
