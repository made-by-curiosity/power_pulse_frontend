import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, signUp } from './operations';

const initialState = {
  user: { name: null, email: null, userParams: null, avatarUrl: null },
  token: null,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(signUp.pending, (state, action) => {});
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(logIn.pending, state => {
      state.error = null;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(logOut.pending, state => {
      state.user = { name: null, email: null, userParams: null };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.user = { name: null, email: null, userParams: null };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.rejected, state => {
      state.isRefreshing = false;
    });
  },
});

export const authReducer = authSlice.reducer;
