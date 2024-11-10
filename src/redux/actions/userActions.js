export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";
export const SET_SIGN_IN_STATUS = "SET_SIGN_IN_STATUS";
export const SIGN_IN_WITH_UUID = "SIGN_IN_WITH_UUID"; 
export const SET_PROFILE_PICTURE = "SET_PROFILE_PICTURE";
export const UPDATE_USERNAME = "UPDATE_USERNAME";

export const setUser = (username, email, password, userUuid, profilePic = "") => {
  return {
    type: SET_USER,
    payload: { username, email, password, userUuid, profilePic }, 
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

export const signInWithUuid = (username, userUuid) => { 
  return {
    type: SIGN_IN_WITH_UUID,
    payload: { username, userUuid }, 
  };
};

export const setProfilePicture = (profilePic) => {
  return {
    type: SET_PROFILE_PICTURE,
    payload: profilePic,
  };
};

export const updateUsername = (username) => {
  return {
    type: UPDATE_USERNAME,
    payload: username,
  };
};
