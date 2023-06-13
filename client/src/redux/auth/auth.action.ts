import { Dispatch } from "redux";
import { IUser } from "../../types";
import * as Types  from "./auth.actionTypes";
import axios from "axios";


// action creator for register user
export const signup = (cred:IUser)=>async(dispatch:Dispatch<any>) =>{
    dispatch({type:Types.SIGNUP_LOADING});
    try {
        const res = await axios.post("/auth/signup",cred);
        dispatch({type:Types.SIGNUP_SUCCESS})
        alert(res.data?.message  || "User registered succesfully");
    } catch (error:any) {
        console.log(error);
        dispatch({type:Types.SIGNUP_ERROR});
        alert(error?.response?.data?.error || "Something went wrong");
    }
}

// action creator for login user
export const login = (cred:IUser)=>async(dispatch:Dispatch<any>) =>{
    dispatch({type:Types.SIGNIN_LOADING});
    try {
        const res = await axios.post("/auth/signin",cred);
        dispatch({type:Types.SIGNIN_SUCCESS, paylaod:res.data})
        alert(res.data?.message  || "User registered succesfully");
    } catch (error:any) {
        console.log(error);
        dispatch({type:Types.SIGNIN_ERROR});
        alert(error?.response?.data?.error || "Something went wrong");
    }
}