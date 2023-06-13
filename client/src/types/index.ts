export interface TodoInitialStateProps {
    isFetching:  boolean,
    isUpdating : boolean,
    isAdding : boolean,
    isDeleting : boolean,
    todos : ITodo[]
}

export interface AuthInitialStateProps {
   signin_loading: boolean,
   signin_error : boolean,
   signup_loading: boolean,
   signup_error : boolean,
   user : SafeUser | null,
   isAuth:boolean
}

export interface SafeUser{
    message?:string,
    user:IUser,
    token:string
}

export interface ITodo{
    _id?:string,
    title : string,
    description?: string,
    status?: boolean
}

export interface IUser{
    _id?: string,
    name?:string,
    email:string,
    pass:string
}