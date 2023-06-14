import { ITodo } from "../../types"

import styles from "../../styles/todo/TodoItem.module.css"
import Button from "../Button"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"
import { deleteTodo } from "../../redux/todo/todo.actions"
import { RootState } from "../../redux/store"

const TodoItem = ({ title, description, status, _id }: ITodo) => {
    const dispatch: Dispatch<any> = useDispatch()
    const token = useSelector((store: RootState) => store.authManager.user?.token)

    const handleDelete = () => {
        const id = _id;
        if (id && token) dispatch(deleteTodo(id, token));
    }

    return (
        <div className={styles.container}>
            <div>
                <div>{title}</div>
                <div style={{ color: "grey" }}>{description}</div>
            </div>

            <div style={{ color: status ? "var(--c-green)" : "var(--c-orange)" }}>{status ? "Completed" : "Not Completed"}</div>

            <div>
                <Button label="Edit" small />
                <Button label="Delete" small action={handleDelete} />
            </div>

        </div>
    )
}

export default TodoItem