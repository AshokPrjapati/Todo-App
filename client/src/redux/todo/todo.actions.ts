import axios from "axios";
import {Dispatch} from "redux"

import { ITodo } from "../../types";
import * as Types from "./todo.actionTypes";

// create todo
export const createTodo = (todo:ITodo) => async(dispatch:Dispatch<any>)=>{
    dispatch({type:Types.TODO_ADD_LOADING});
    try {
        await axios.post("/todo/add",todo);
        dispatch({type:Types.TODO_ADD_SUCCESS});
        dispatch(getUserTodos());
        alert("Todo added successfully");
    } catch (error:any) {
        console.log(error);
        dispatch({type:Types.TODO_ADD_ERROR});
    }
}

// get all single user todo
export const getUserTodos = ()=> async(dispatch:Dispatch<any>) =>{
    dispatch({type: Types.TODO_GET_LOADING});
    try {
        const res = await axios("/todo/user");
        const data = res.data;
        dispatch({type:Types.TODO_GET_SUCCESS, payload:data.todos});
    } catch (error) {
        console.log(error);
        dispatch({type:Types.TODO_GET_ERROR})
    }
}

// update todo
export const updateTodo = (id:string, data:ITodo)=> async(dispatch:Dispatch<any>) =>{
    dispatch({type: Types.TODO_EDIT_LOADING});
    try {
        await axios.patch(`/todo/edit/${id}`,data);
        dispatch({type:Types.TODO_EDIT_SUCCESS});
    } catch (error) {
        console.log(error);
        dispatch({type:Types.TODO_EDIT_ERROR})
    }
}

// delete todo
export const deleteTodo = (id:string)=> async(dispatch:Dispatch<any>) =>{
    dispatch({type: Types.TODO_DELETE_LOADING});
    try {
        await axios.delete(`/todo/delete/${id}`);
        dispatch({type:Types.TODO_DELETE_SUCCESS});
    } catch (error) {
        console.log(error);
        dispatch({type:Types.TODO_DELETE_ERROR})
    }
}