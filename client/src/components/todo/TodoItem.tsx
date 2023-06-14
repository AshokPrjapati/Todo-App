import { ITodo } from "../../types"

import styles from "../../styles/todo/TodoItem.module.css"
import Button from "../Button"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"
import { deleteTodo, updateTodo } from "../../redux/todo/todo.actions"
import { RootState } from "../../redux/store"
import { useState } from "react"
import Modal from "../Modal"

const TodoItem = ({ title, description, status, _id }: ITodo) => {
    const dispatch: Dispatch<any> = useDispatch()
    const token = useSelector((store: RootState) => store.authManager.user?.token);
    const { isUpdating } = useSelector((store: RootState) => store.todoManager);

    // modal open state
    const [isOpen, setIsOpen] = useState(false);

    // modal open and close function
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);

    // edit form data
    const [formData, setFormData] = useState<ITodo>({ title, description, status });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: name === "status" ? checked : value,
        }));
    }

    const onSubmit = () => {
        const id = _id;
        if (token && id) {
            dispatch(updateTodo(id, formData, token,))
        }
        onClose();
    }

    // modal body
    const body = (
        <div className={styles.form_container}>
            <form>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" value={formData.title} name="title" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="title">Description</label>
                    <input type="text" value={formData.description} name="description" onChange={handleChange} />
                </div>

                <div>
                    <div>
                        <label htmlFor="status">Is completed</label>
                        <input type="checkbox" name="status" checked={formData.status} onChange={handleChange} />
                    </div>
                </div>
            </form>
        </div>
    )


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
                <Button label="Edit" small action={onOpen} />
                <Button label="Delete" small action={handleDelete} />
            </div>
            {isOpen &&
                <Modal
                    body={body}
                    isOpen={isOpen}
                    onClose={onClose}
                    onSubmit={onSubmit}
                    actionLabel="Edit Todo"
                    title="Edit Todo"
                    disabled={isUpdating}
                />}
        </div>
    )
}

export default TodoItem