import { configureStore } from '@reduxjs/toolkit';

import missionReducer from './slices/MissionsSlice';
import RocketsReducer from './slices/RocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: RocketsReducer,
  },
});

export default store;
