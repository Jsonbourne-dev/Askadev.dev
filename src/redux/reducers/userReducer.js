import { 
  SET_USER, 
  CLEAR_USER, 
  SET_SIGN_IN_STATUS, 
  SIGN_IN_WITH_UUID,  // Changed action type to SIGN_IN_WITH_UUID
  SET_PROFILE_PICTURE, 
  UPDATE_USERNAME 
} from '../actions/userActions'; // Import the new action type for updating username

// Initial state for the user reducer
const initialState = {
  username: "",
  email: "",
  password: "",
  userUuid: "",  // Replaced token with userUuid
  profilePic: "",
  isSignedIn: false,
};

// User reducer to handle the actions
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        userUuid: action.payload.userUuid, // Replace token with userUuid
        isSignedIn: true,
      };
    case CLEAR_USER:
      return initialState; 
    case SET_SIGN_IN_STATUS:
      return {
        ...state,
        isSignedIn: action.payload,
      };
    case SIGN_IN_WITH_UUID: // Updated to use userUuid
      return {
        ...state,
        username: action.payload.username,
        userUuid: action.payload.userUuid, // Store userUuid instead of token
        isSignedIn: true,
      };
    case SET_PROFILE_PICTURE:
      return {
        ...state,
        profilePic: action.payload,
      };
    case UPDATE_USERNAME:  // Handle the username update action
      return {
        ...state,
        username: action.payload, // Update username in Redux store
      };
    default:
      return state;
  }
};

export default userReducer;
