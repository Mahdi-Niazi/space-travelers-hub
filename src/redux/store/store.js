import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from '../slices/RocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;
