import { createSlice } from '@reduxjs/toolkit';
import { PodInfo } from '../../../services/pod';
import { RootState } from '../../store';
import { loadAllPods } from './pod-actions';

export interface PodState {
  pods: PodInfo[];
  loading: boolean;
}

const initialState: PodState = {
  pods: [],
  loading: false
};

export const podSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {},
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

export const podSelector = (state: RootState) => state.pod;

export default podSlice.reducer;
