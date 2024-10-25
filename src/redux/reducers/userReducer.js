export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";
export const SET_SIGN_IN_STATUS = "SET_SIGN_IN_STATUS";
export const SIGN_IN_WITH_TOKEN = "SIGN_IN_WITH_TOKEN"; 

const initialState = {
  username: "",
  email: "",
  password: "",
  token: "",
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
        token: action.payload.token,
        isSignedIn: true, 
      };
    case CLEAR_USER:
      return initialState; 
    case SET_SIGN_IN_STATUS: 
      return {
        ...state,
        isSignedIn: action.payload,
      };
    case SIGN_IN_WITH_TOKEN: 
      return {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
        isSignedIn: true, 
      };
    default:
      return state;
  }
};

export default userReducer;
