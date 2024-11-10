import { 
  SET_USER, 
  CLEAR_USER, 
  SET_SIGN_IN_STATUS, 
  SIGN_IN_WITH_UUID,  
  SET_PROFILE_PICTURE, 
  UPDATE_USERNAME 
} from '../actions/userActions'; 

const initialState = {
  username: "",
  email: "",
  password: "",
  userUuid: "", 
  profilePic: "",
  isSignedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        userUuid: action.payload.userUuid, 
        isSignedIn: true,
      };
    case CLEAR_USER:
      return initialState; 
    case SET_SIGN_IN_STATUS:
      return {
        ...state,
        isSignedIn: action.payload,
      };
    case SIGN_IN_WITH_UUID: 
      return {
        ...state,
        username: action.payload.username,
        userUuid: action.payload.userUuid, 
        isSignedIn: true,
      };
    case SET_PROFILE_PICTURE:
      return {
        ...state,
        profilePic: action.payload,
      };
    case UPDATE_USERNAME: 
      return {
        ...state,
        username: action.payload, 
      };
    default:
      return state;
  }
};

export default userReducer;
