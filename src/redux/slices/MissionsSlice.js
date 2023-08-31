import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  allMissions: [],
  isLoading: false,
};

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (name, thunkAPI) => {
    try {
      const resp = await fetch(`${baseUrl}`);
      const data = await resp.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, action) => ({
      ...state,
      allMissions: state.allMissions.map((items) => {
        if (action.payload !== items.mission_id) {
          return items;
        }
        return { ...items, joined: true };
      }),
    }),
    leaveMission: (state, action) => ({
      ...state,
      allMissions: state.allMissions.map((items) => {
        if (action.payload !== items.mission_id) {
          return items;
        }
        return { ...items, joined: false };
      }),
    }),
  },
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

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
