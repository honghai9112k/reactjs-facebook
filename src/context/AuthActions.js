export const LoginStart = (userCredentials) => ({
    tyoe:"LOGIN_START",
});

export const LoginSuccess = (user) => ({
    tyoe:"LOGIN_SUCCESS",
    payload: user,
});

export const LoginFailure = (error) => ({
    tyoe:"LOGIN_FAILURE",
    payload: error,
});

export const Follow = (userId) => ({
    type: "FOLLOW",
    payload: userId,
});
export const Unfollow = (userId) => ({
    type: "UNFOLLOW",
    payload: userId,
});