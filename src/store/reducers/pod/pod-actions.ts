import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPods } from '../../../services/pod';

export const loadAllPods = createAsyncThunk('pod/loadAllPods', async () => {
  try {
    const result = await getAllPods();
    return result.body;
  } catch (error) {
    console.log(`error ${error}`);
    throw error;
  }
});
