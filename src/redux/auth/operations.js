import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  setAuthHeader,
  clearAuthHeader,
  signUpUser,
  logInUser,
  logOutUser,
  getCurrentUser,
  getUserInfo,
  updateUserInfo,
  updateUserName,
  updateUserAvatar,
} from '../../services/powerPulseApi';

// AUTH

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      const data = await signUpUser(credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const data = await logInUser(credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await logOutUser();
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const data = await getCurrentUser();

      return data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signUpWithToken = createAsyncThunk(
  'auth/signUpWithToken',
  async (credentials, thunkAPI) => {
    try {
      setAuthHeader(credentials);
      const data = await getCurrentUser();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// PARAMS

export const getUserParams = createAsyncThunk(
  'auth/getInfo',
  async (credentials, thunkAPI) => {
    try {
      const { user, bmr } = await getUserInfo(credentials);

      return { ...user, bmr };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserParams = createAsyncThunk(
  'auth/updateInfo',
  async (credentials, thunkAPI) => {
    try {
      const data = await updateUserInfo(credentials);

      return {
        userParams: data.user.userParams,
        bmr: data.bmr,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateName = createAsyncThunk(
  'auth/updateUsername',
  async (credentials, thunkAPI) => {
    try {
      const data = await updateUserName(credentials);

      return data.user.name;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (credentials, thunkAPI) => {
    try {
      const data = await updateUserAvatar(credentials);

      return data.user.avatar;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
