import { InitialStateProps } from "../../types"


const initialState:InitialStateProps = {
    isAdding : false,
    isFetching : false,
    isUpdating : false,
    isDeleting : false,
    todos: []
}

// todo reducer
export const reducer = (state=initialState,{type,payload}:any)=>{
    switch(type){
        default: return state
    }
}