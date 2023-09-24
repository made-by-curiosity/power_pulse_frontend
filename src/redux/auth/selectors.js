export const selectIsLoggedIn = state => state.auth.token;

export const selectUser = state => state.auth.user;

export const selectUserParams = state => state.auth.user.userParams;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectAuthError = state => state.auth.error;

export const bodyPartsList = state => state.auth.bodyparts;

export const musclesList = state => state.auth.muscles;

export const equipmentList = state => state.auth.equipment;
