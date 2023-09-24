export const selectIsLoggedIn = state => state.auth.token;

export const selectUser = state => state.auth.user;

export const selectUserParams = state => state.auth.user.userParams;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectAuthError = state => state.auth.error;
