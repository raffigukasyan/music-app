import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSignUp } from '../../api/requests';

export const onSignUpThunk = createAsyncThunk(
  'auth/signUpSumbit',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetchSignUp(payload);
      return response.data;
    } catch (e) {
      console.log(e, 'Error');
      return rejectWithValue(e.response?.data?.message || 'Register failed');
    }
  }
);
