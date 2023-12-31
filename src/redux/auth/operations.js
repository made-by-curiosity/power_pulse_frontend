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

import { Notify } from 'notiflix';

// AUTH

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      const data = await signUpUser(credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      Notify.failure(
        'Ops... Something went wrong. Maybe your email is already used. Please try again.'
      );
      return thunkAPI.rejectWithValue(
        'Ops... Something went wrong. Maybe your email is already used. Please try again.'
      );
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
      Notify.failure(
        'Ops... Your email or password is incorrect. Please try again.'
      );
      return thunkAPI.rejectWithValue(
        'Ops... Your email or password is incorrect. Please try again.'
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await logOutUser();
    clearAuthHeader();
  } catch (error) {
    if (error.response && error.response.status === 401) {
      thunkAPI.dispatch(resetStore());
    }
    Notify.failure('Ops...Something went wrong. Please try again.');
    return thunkAPI.rejectWithValue(
      'Ops...Something went wrong. Please try again.'
    );
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
      if (error.response && error.response.status === 401) {
        Notify.failure('Ops...Something went wrong. Please try again.');
        thunkAPI.dispatch(resetStore());
      }
      Notify.failure('Ops...Something went wrong. Please try again.');
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
      console.log(data);

      return data;
    } catch (error) {
      Notify.failure('Ops...Something went wrong. Please try again.');
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
      if (error.response && error.response.status === 401) {
        Notify.failure('Ops...Something went wrong. Please try again.');
        thunkAPI.dispatch(resetStore());
      }
      Notify.failure('Ops...Something went wrong. Please try again.');
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
      if (error.response && error.response.status === 401) {
        Notify.failure('Ops...Something went wrong. Please try again.');
        thunkAPI.dispatch(resetStore());
      }
      Notify.failure('Ops...Something went wrong. Please try again.');
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
      if (error.response && error.response.status === 401) {
        Notify.failure('Ops...Something went wrong. Please try again.');
        thunkAPI.dispatch(resetStore());
      }
      Notify.failure('Ops...Something went wrong. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (credentials, thunkAPI) => {
    try {
      const data = await updateUserAvatar(credentials);

      return data.user.avatarUrls;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Notify.failure('Ops...Something went wrong. Please try again.');
        thunkAPI.dispatch(resetStore());
      }
      Notify.failure('Ops...Something went wrong. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetStore = createAsyncThunk(
  'auth/resetStore',
  async (_, thunkAPI) => {
    try {
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
