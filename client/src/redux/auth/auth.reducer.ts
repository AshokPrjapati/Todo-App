import { AuthInitialStateProps, SafeUser } from "../../types";
import * as Types from "./auth.actionTypes";

const initialState: AuthInitialStateProps = {
  signup_loading: false,
  signup_error: false,
  signin_loading: false,
  signin_error: false,
  user: null,
  isAuth: false,
};

export const reducer = (
  state = initialState,
  { type, payload }: { type: string; payload: SafeUser }
) => {
  switch (type) {
    case Types.SIGNUP_LOADING:
      return { ...state, signup_loading: true };
    case Types.SIGNUP_SUCCESS:
      return { ...state, signup_loading: false };
    case Types.SIGNUP_ERROR:
      return { ...state, signup_error: true, signup_loading: false };
    case Types.SIGNIN_LOADING:
      return { ...state, signin_loading: true };
    case Types.SIGNIN_SUCCESS:
      return { ...state, signin_loading: false, user: payload, isAuth:true };
    case Types.SIGNIN_ERROR:
      return { ...state, signin_error: true, signin_loading: false };
    default:
      return state;
  }
};
