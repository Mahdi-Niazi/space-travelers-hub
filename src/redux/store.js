import { configureStore } from '@reduxjs/toolkit';

import missionReducer from './slices/MissionsSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
});

export default store;
