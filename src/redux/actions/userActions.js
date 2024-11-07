export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";
export const SET_SIGN_IN_STATUS = "SET_SIGN_IN_STATUS";
export const SIGN_IN_WITH_UUID = "SIGN_IN_WITH_UUID"; // Changed action type to use userUuid
export const SET_PROFILE_PICTURE = "SET_PROFILE_PICTURE";
export const UPDATE_USERNAME = "UPDATE_USERNAME"; // New action type

export const setUser = (username, email, password, userUuid, profilePic = "") => {
  return {
    type: SET_USER,
    payload: { username, email, password, userUuid, profilePic }, // Replaced token with userUuid
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

export const signInWithUuid = (username, userUuid) => { // Renamed to use userUuid instead of token
  return {
    type: SIGN_IN_WITH_UUID,
    payload: { username, userUuid }, // Replaced token with userUuid
  };
};

export const setProfilePicture = (profilePic) => {
  return {
    type: SET_PROFILE_PICTURE,
    payload: profilePic,
  };
};

// Action to update username
export const updateUsername = (username) => {
  return {
    type: UPDATE_USERNAME,
    payload: username,
  };
};
