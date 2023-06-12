export interface InitialStateProps {
    isFetching:  boolean,
    isUpdating : boolean,
    isAdding : boolean,
    isDeleting : boolean,
    todos : ITodo[]
}

export interface ITodo{
    _id?:string,
    title : string,
    description?: string,
    status?: boolean
}