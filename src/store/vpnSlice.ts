import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VPNState {
  isConnected: boolean;
  status: 'idle' | 'connecting' | 'connected' | 'disconnecting' | 'error';
  error: string | null;
}

const initialState: VPNState = {
  isConnected: false,
  status: 'idle',
  error: null,
};

export const vpnSlice = createSlice({
  name: 'vpn',
  initialState,
  reducers: {
    setConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
      state.status = action.payload ? 'connected' : 'idle';
    },
    setStatus: (state, action: PayloadAction<VPNState['status']>) => {
      state.status = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.status = action.payload ? 'error' : 'idle';
    },
  },
});

export const { setConnected, setStatus, setError } = vpnSlice.actions;
export default vpnSlice.reducer; 