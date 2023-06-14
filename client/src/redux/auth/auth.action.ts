import { Dispatch } from "redux";
import { IUser } from "../../types";
import * as Types  from "./auth.actionTypes";
import axios from "axios";
import { NavigateFunction } from "react-router-dom";


// action creator for register user
export const signup = (cred:IUser,navigate:NavigateFunction)=>async(dispatch:Dispatch<any>) =>{
    dispatch({type:Types.SIGNUP_LOADING});
    try {
        const res = await axios.post("/auth/signup",cred);
        dispatch({type:Types.SIGNUP_SUCCESS})
        alert(res.data?.message  || "User registered succesfully");
        navigate("/signin");
    } catch (error:any) {
        console.log(error);
        dispatch({type:Types.SIGNUP_ERROR});
        alert(error?.response?.data?.error || "Something went wrong");
    }
}

// action creator for login user
export const login = (cred:IUser,navigate:NavigateFunction)=>async(dispatch:Dispatch<any>) =>{
    dispatch({type:Types.SIGNIN_LOADING});
    try {
        const res = await axios.post("/auth/signin",cred);
        const {token,user} = res.data;
        const payload = {...user,token};

        dispatch({type:Types.SIGNIN_SUCCESS, payload})
        alert(res.data?.message  || "User registered succesfully");
        navigate("/")
    } catch (error:any) {
        console.log(error);
        dispatch({type:Types.SIGNIN_ERROR});
        alert(error?.response?.data?.error || "Something went wrong");
    }
}