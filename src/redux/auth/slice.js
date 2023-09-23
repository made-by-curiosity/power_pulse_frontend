import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  refreshUser,
  signUp,
  getUserParams,
  updateUserParams,
  updateName,
  updateAvatar,
  signUpWithToken,
} from './operations';

const initialState = {
  user: { name: null, email: null, userParams: null, avatarUrl: null, createdAt: null },
  token: null,
  isRefreshing: false,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.user = {
        name: null,
        email: null,
        userParams: null,
        avatarUrl: null,
      };
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
    builder.addCase(refreshUser.rejected, (state,action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(signUpWithToken.fulfilled,(state,action)=>{
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(signUpWithToken.rejected,(state,action)=>{
      state.error = action.payload;
    });
    builder.addCase(getUserParams.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getUserParams.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(updateUserParams.fulfilled, (state, action) => {
      state.user.userParams = action.payload;
    });
    builder.addCase(updateUserParams.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(updateName.fulfilled, (state, action) => {
      state.user.name = action.payload;
    });
    builder.addCase(updateName.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(updateAvatar.fulfilled, (state, action) => {
      state.user.avatarUrl = action.payload;
    });
    builder.addCase(updateAvatar.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
