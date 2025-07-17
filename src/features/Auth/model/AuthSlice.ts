import { User } from '@/entities/User/index';
import { createSlice } from '@reduxjs/toolkit';
import { onSignUpThunk } from './thunks/signUpThunk';

interface AuthState {
  user: User | {};
  isAuth: boolean;
  isLoading: boolean;
  errors: {};
}

const initialState: AuthState = {
  user: {},
  isAuth: false,
  isLoading: false,
  errors: {},
};

const authSlice = createSlice({
  name: 'auth/registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(onSignUpThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(onSignUpThunk.fulfilled, (state, action) => {
      localStorage.setItem('token', action?.payload?.token);
      state.user = action.payload.user;
      state.isAuth = true;
      state.isLoading = false;
    });
    builder.addCase(onSignUpThunk.rejected, (state, action) => {
      state.errors = { message: action.payload };
      state.isLoading = false;
    });
  },
});

export const authReducer = authSlice.reducer;
