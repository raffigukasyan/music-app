import { User } from '@/entities/User/index';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  user: User | {};
  isAuth: boolean,
  isLoading: boolean,
  errors: {}
}

const initialState: AuthState = {
  user: {},
  isAuth: false,
  isLoading: false,
  errors: {}

};


const authSlice = createSlice({
  name: "auth/registration",
  initialState,
  reducers: {},

})