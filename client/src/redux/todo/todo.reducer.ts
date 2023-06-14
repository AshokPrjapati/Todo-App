import { TodoInitialStateProps } from "../../types"
import * as Types from "./todo.actionTypes"


const initialState:TodoInitialStateProps = {
    isAdding : false,
    isFetching : false,
    isUpdating : false,
    isDeleting : false,
    todos: []
}

// todo reducer
export const reducer = (state=initialState,{type,payload}:any)=>{
    switch(type){
        // get todos state
        case Types.TODO_GET_LOADING : 
            return { ...state, isFetching: true}
        case Types.TODO_GET_SUCCESS : 
            return { ...state, isFetching: false, todos:payload}
        case Types.TODO_GET_ERROR : 
            return { ...state, isFetching: false}

        // add todos state
        case Types.TODO_ADD_LOADING : 
            return { ...state, isAdding: true}
        case Types.TODO_ADD_SUCCESS : 
            return { ...state, isAdding: false}
        case Types.TODO_ADD_ERROR : 
            return { ...state, isAdding: false}
        
        // edit todos state
        case Types.TODO_EDIT_LOADING : 
            return { ...state, isUpdating: true}
        case Types.TODO_EDIT_SUCCESS : 
            return { ...state, isUpdating: false}
        case Types.TODO_EDIT_ERROR : 
            return { ...state, isUpdating: false}
        
        // delete todos state
        case Types.TODO_DELETE_LOADING : 
            return { ...state, isDeleting: true}
        case Types.TODO_DELETE_SUCCESS : 
            return { ...state, isDeleting: false}
        case Types.TODO_DELETE_ERROR : 
            return { ...state, isDeleting: false}
        
        // search todos
        case Types.TODO_SEARCH_LOADING : 
            return { ...state, isFetching: true}
        case Types.TODO_SEARCH_SUCCESS : 
            return { ...state, isFetching: false, todos:payload}
        case Types.TODO_SEARCH_ERROR : 
            return { ...state, isFetching: false}

        default: return state
    }
}