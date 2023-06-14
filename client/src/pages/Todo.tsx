import { useState, useCallback } from "react"

import Button from "../components/Button"
import TodosContainer from "../components/todo/TodosContainer"
import TodoInput from "../components/todo/TodoInput"

import styles from "../styles/todo/Todo.module.css"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"
import { createTodo } from "../redux/todo/todo.actions"
import { RootState } from "../redux/store"
import { ITodo } from "../types"

const Todo = () => {
    const [todo, setTodo] = useState<ITodo>({ title: "", description: "" });

    const token = useSelector((store: RootState) => store.authManager.user?.token);

    const dispatch: Dispatch<any> = useDispatch()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setTodo({ ...todo, [e.target.name]: val })
    }

    const handelTodo = () => {

        if (!token) return alert("Please login to continue");

        if (!todo.title) return alert("Please enter task name");

        const { title, description } = todo;

        dispatch(createTodo({ title, description }, token));
    }


    return (
        <div className={styles.container}>
            <div className={styles.heading}>Todo Application</div>
            <TodoInput placeholder="Enter Task Name" value={todo.title} name="title" onChange={onChange} />
            <TodoInput placeholder="Enter Description" value={todo.description} name="description" onChange={onChange} />
            <div style={{ textAlign: "center", margin: "1rem 0" }}>
                <Button label="Add Todo" small action={handelTodo} />
            </div>
            <TodosContainer />
        </div>

    )
}

export default Todo