import axios from 'axios';

const BASE_URL = 'https://power-pulse.onrender.com';

// const BASE_URL = 'http://localhost:3030';

axios.defaults.baseURL = BASE_URL;

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

// user auth

export const signUpUser = async credentials => {
  const res = await axios.post('/api/auth/register', credentials);

  return res.data;
};

export const logInUser = async credentials => {
  
  const res = await axios.post('/api/auth/login', credentials);

  return res.data;
};

export const logOutUser = async () => {
  const res = await axios.post('/api/auth/logout');

  return res.data;
};

export const getCurrentUser = async () => {
  const res = await axios.get('/api/auth/current');

  return res.data;
};

// user params

export const getUserInfo = async () => {
  const res = await axios.get('/api/users/params');

  return res.data;
};

export const updateUserInfo = async userParams => {
  const res = await axios.put('/api/users/params', userParams);

  return res.data;
};

export const updateUserName = async userName => {
  const res = await axios.patch('/api/users/username', userName);

  return res.data;
};

export const updateUserAvatar = async userAvatar => {
  const res = await axios.patch('/api/users/avatars', userAvatar);

  return res.data;
};

// diary

export const getMeals = async date => {
  const res = await axios.get(`/api/diary/meal${date ? `?date=${date}` : ''}`);

  return res.data;
};

export const addMeal = async meal => {
  const res = await axios.post('/api/diary/meal', meal);

  return res.data;
};

export const deleteMeal = async id => {
  const res = await axios.delete(`/api/diary/meal/${id}`);

  return res.data;
};

export const addWorkout = async workout => {
  const res = await axios.post('/api/diary/workout', workout);

  return res.data;
};

export const getWorkouts = async date => {
  const res = await axios.get(
    `/api/diary/workout${date ? `?date=${date}` : ''}`
  );

  return res.data;
};

export const deleteWorkout = async id => {
  const res = await axios.delete(`/api/diary/workout/${id}`);

  return res.data;
};

// products

export const getAllProducts = async () => {
  const res = await axios.get('/api/products/byBloodType');
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
  const res = await axios.get('/api/exercises');

  return res.data;
};

export const getExercisesCategory = async query => {
  const res = await axios.get(`/api/exercises/${query}`);

  return res.data;
};

// statistics

export const getTotalUsers = async () => {
  const res = await axios.get(`/api/statistics/users`);

  return res.data;
};

export const getTotalExercises = async () => {
  const res = await axios.get(`/api/statistics/exercises`);

  return res.data;
};

export const getTotalWorkouts = async () => {
  const res = await axios.get(`/api/statistics/workouts`);

  return res.data;
};

export const getTotalWorkoutsTime = async () => {
  const res = await axios.get(`/api/statistics/time`);

  return res.data;
};

export const getTotalBurnedCalories = async () => {
  const res = await axios.get(`/api/statistics/calories`);

  return res.data;
};
