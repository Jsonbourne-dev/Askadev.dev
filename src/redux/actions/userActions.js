export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";
export const SET_SIGN_IN_STATUS = "SET_SIGN_IN_STATUS";
export const SIGN_IN_WITH_TOKEN = "SIGN_IN_WITH_TOKEN";

export const setUser = (username, email, password, token) => {
  return {
    type: SET_USER,
    payload: { username, email, password, token },
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};

export const setSignInStatus = (isSignedIn) => {
  return {
    type: SET_SIGN_IN_STATUS,
    payload: isSignedIn,
  };
};

export const signInWithToken = (username, token) => {
  return {
    type: SIGN_IN_WITH_TOKEN,
    payload: { username, token },
  };
};
