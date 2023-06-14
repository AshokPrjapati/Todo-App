import { useState } from "react";

import TodoInput from "./TodoInput"
import Button from "../Button"

import styles from "../../styles/todo/TodoSearch.module.css";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { searchTodos } from "../../redux/todo/todo.actions";
import { RootState } from "../../redux/store";

const TodoSearch = () => {
    const token = useSelector((store: RootState) => store.authManager.user?.token);
    const { isFetching } = useSelector((store: RootState) => store.todoManager);

    const [query, setQuery] = useState("");

    const dispatch: Dispatch<any> = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    const handelSearch = () => {
        if (token) dispatch(searchTodos(query, token));
    }

    return (
        <div className={styles.search}>
            <TodoInput placeholder="Search" name="query" onChange={handleChange} value={query} />
            <Button label="Search" small isLoading={isFetching} loadingText="Searching" disabled={isFetching} action={handelSearch} />
        </div>
    )
}

export default TodoSearch