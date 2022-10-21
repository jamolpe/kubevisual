import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo, login, UserData } from '../../../services/auth';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (user: UserData) => {
    try {
      await login(user);
      const userResponse = await getUserInfo();
      return userResponse.body;
    } catch (error) {
      console.log(`error ${error}`);
      throw error;
    }
  }
);

export const loadUserInfo = createAsyncThunk('auth/userinfo', async () => {
  try {
    const userResponse = await getUserInfo();
    return userResponse.body;
  } catch (error) {
    console.log(`error ${error}`);
    throw error;
  }
});
