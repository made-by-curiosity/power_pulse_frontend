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
  resetStore,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    userParams: null,
    avatarUrl: null,
    bmr: null,
  },
  token: null,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(resetStore.fulfilled, (state, action) => {
      state.user = {
        name: null,
        email: null,
        userParams: null,
        avatarUrl: null,
        bmr: null,
      };
      state.token = null;
      state.isRefreshing = false;
    });
    builder.addCase(signUp.pending, (state, action) => {
      state.isRefreshing = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isRefreshing = false;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(logIn.pending, (state, action) => {
      state.isRefreshing = true;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isRefreshing = false;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(logOut.pending, (state, action) => {
      state.isRefreshing = true;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.user = {
        name: null,
        email: null,
        userParams: null,
        avatarUrl: null,
        bmr: null,
      };
      state.token = null;
      state.isRefreshing = false;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(signUpWithToken.pending, (state, action) => {
      state.isRefreshing = true;
    });
    builder.addCase(signUpWithToken.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isRefreshing = false;
    });
    builder.addCase(signUpWithToken.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(getUserParams.pending, (state, action) => {
      state.isRefreshing = true;
    });
    builder.addCase(getUserParams.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(getUserParams.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(updateUserParams.pending, (state, action) => {
      state.isRefreshing = true;
    });
    builder.addCase(updateUserParams.fulfilled, (state, action) => {
      state.user.userParams = action.payload.userParams;
      state.user.bmr = action.payload.bmr;
      state.isRefreshing = false;
    });
    builder.addCase(updateUserParams.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(updateName.pending, (state, action) => {
      state.isRefreshing = true;
    });
    builder.addCase(updateName.fulfilled, (state, action) => {
      state.user.name = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(updateName.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(updateAvatar.pending, (state, action) => {
      state.isRefreshing = true;
    });
    builder.addCase(updateAvatar.fulfilled, (state, action) => {
      state.user.avatarUrl = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(updateAvatar.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });
  },
});

export const authReducer = authSlice.reducer;
