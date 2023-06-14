import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/todo/TodosContainer.module.css";
import TodoItem from "./TodoItem";
import { RootState } from "../../redux/store";
import { ITodo } from "../../types";
import { Dispatch, useEffect } from "react";
import { getUserTodos } from "../../redux/todo/todo.actions";

const TodosContainer = () => {
    const { todos, isAdding, isFetching, isUpdating, isDeleting } = useSelector(
        (store: RootState) => store.todoManager
    );

    const token = useSelector((store: RootState) => store.authManager.user?.token);

    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        if (token) dispatch(getUserTodos(token))
    }, [token, dispatch]);

    // if todos are not available
    if (!todos?.length) return null;

    return (
        <div
            className={styles.container}
            style={{ opacity: (isAdding || isFetching || isUpdating || isDeleting) ? "0.5" : "1" }}
        >
            {todos?.map((todo: ITodo) => (
                <TodoItem key={todo._id} {...todo} />
            ))}
        </div>
    );
};

export default TodosContainer;
