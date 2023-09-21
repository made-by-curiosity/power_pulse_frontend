import axios from 'axios';

const BASE_URL = 'https://power-pulse.onrender.com/api';

axios.defaults.baseURL = BASE_URL;

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

// user auth

export const signUpUser = async credentials => {
  const res = await axios.post('/auth/register', credentials);

  return res.data;
};

export const logInUser = async credentials => {
  const res = await axios.post('/auth/login', credentials);

  return res.data;
};

export const logOutUser = async () => {
  const res = await axios.post('/auth/logout');

  return res.data;
};

export const getCurrentUser = async () => {
  const res = await axios.get('auth/current');

  return res.data;
};

// user params

export const getUserInfo = async () => {
  const res = await axios.get('/users/params');

  return res.data;
};

export const updateUserInfo = async userParams => {
  const res = await axios.put('/users/params', userParams);

  return res.data;
};

export const updateUserName = async userName => {
  const res = await axios.patch('/users/username', userName);

  return res.data;
};

export const updateUserAvatar = async userAvatar => {
  const res = await axios.patch('/users/avatars', userAvatar);

  return res.data;
};

// diary

export const getMeals = async date => {
  const res = await axios.get(`/diary/meal${date && `?date=${date}`}`);

  return res.data;
};

export const addMeal = async meal => {
  const res = await axios.post('/diary/meal', meal);

  return res.data;
};

export const deleteMeal = async id => {
  const res = await axios.delete(`/diary/meal/${id}`);

  return res.data;
};

export const addWorkout = async workout => {
  const res = await axios.post('/diary/workout', workout);

  return res.data;
};

export const getWorkouts = async date => {
  const res = await axios.post(`/diary/workout${date && `?date=${date}`}`);

  return res.data;
};

export const deleteWorkout = async id => {
  const res = await axios.delete(`/diary/workout/${id}`);

  return res.data;
};

// products

export const getAllProducts = async () => {
  const res = await axios.get();

  return res.data;
};

export const getRecommendedProducts = async () => {
  const res = await axios.get();

  return res.data;
};

export const getNotRecommendedProducts = async () => {
  const res = await axios.get();

  return res.data;
};

// exercises

export const getAllExercises = async () => {
  const res = await axios.get();

  return res.data;
};

export const getAllBodyParts = async () => {
  const res = await axios.get();

  return res.data;
};

export const getAllMuscles = async () => {
  const res = await axios.get();

  return res.data;
};

export const getAllEquipment = async () => {
  const res = await axios.get();

  return res.data;
};
