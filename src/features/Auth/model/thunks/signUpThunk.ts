import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSignUp } from '../../api/requests';

export const onSignUpSumbit = createAsyncThunk(
  'auth/signUpSumbit',
  (payload, { rejectWithValue }) => {
    try {
      const reponse = await fetchSignUp(payload.data)
    }
    catch(e) {
      console.log(e);
    }
  }
);
