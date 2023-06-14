import axios from "axios";
import {Dispatch} from "redux"

import { ITodo } from "../../types";
import * as Types from "./todo.actionTypes";

// create todo
export const createTodo = (todo:ITodo, token:string) => async(dispatch:Dispatch<any>)=>{
    dispatch({type:Types.TODO_ADD_LOADING});
    
    // request header
    const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json", 
    };

    try {
        await axios.post("/todo/add",todo, {headers});
        dispatch({type:Types.TODO_ADD_SUCCESS});
        dispatch(getUserTodos(token));
        alert("Todo added successfully");
    } catch (error:any) {
        console.log(error);
        dispatch({type:Types.TODO_ADD_ERROR});
    }
}

// get all single user todo
export const getUserTodos = (token :string)=> async(dispatch:Dispatch<any>) =>{
    dispatch({type: Types.TODO_GET_LOADING});

    // request header
    const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json", 
    };

    try {
        const res = await axios("/todo/user", {headers});
        const data = res.data;
        dispatch({type:Types.TODO_GET_SUCCESS, payload:data.todos});
    } catch (error) {
        console.log(error);
        dispatch({type:Types.TODO_GET_ERROR})
    }
}

// update todo
export const updateTodo = (id:string, data:ITodo, token:string)=> async(dispatch:Dispatch<any>) =>{
    dispatch({type: Types.TODO_EDIT_LOADING});

     // request header
     const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json", 
    };

    try {
        await axios.patch(`/todo/edit/${id}`,data, {headers});
        dispatch({type:Types.TODO_EDIT_SUCCESS});
        dispatch(getUserTodos(token));
    } catch (error) {
        console.log(error);
        dispatch({type:Types.TODO_EDIT_ERROR});
        dispatch(getUserTodos(token));
    }
}

// delete todo
export const deleteTodo = (id:string, token:string)=> async(dispatch:Dispatch<any>) =>{
    dispatch({type: Types.TODO_DELETE_LOADING});

     // request header
     const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json", 
    };

    try {
        await axios.delete(`/todo/delete/${id}`, {headers});
        dispatch({type:Types.TODO_DELETE_SUCCESS});
        dispatch(getUserTodos(token));
    } catch (error) {
        console.log(error);
        dispatch({type:Types.TODO_DELETE_ERROR})
    }
}