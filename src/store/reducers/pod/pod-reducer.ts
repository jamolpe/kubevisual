import { createSlice } from '@reduxjs/toolkit';
import { PodInfo } from '../../../services/pod';
import { RootState } from '../../store';
import { loadAllPods } from './pod-actions';

export interface PodState {
  pods: PodInfo[];
  loading: boolean;
  refreshTime: number;
}

const initialState: PodState = {
  pods: [],
  loading: false,
  refreshTime: 15
};

export const podSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    setRefreshTime: (state, action) => {
      state.refreshTime = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadAllPods.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadAllPods.fulfilled, (state, action) => {
      state.loading = false;
      state.pods = action.payload;
    });
    builder.addCase(loadAllPods.rejected, (state) => {
      state.loading = false;
    });
  }
});

export const { setRefreshTime } = podSlice.actions;

export const podSelector = (state: RootState) => state.pod;

export default podSlice.reducer;
