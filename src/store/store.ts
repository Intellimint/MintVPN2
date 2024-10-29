import { configureStore } from '@reduxjs/toolkit';
import vpnReducer from './vpnSlice';

export const store = configureStore({
  reducer: {
    vpn: vpnReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 