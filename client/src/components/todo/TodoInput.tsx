
import styles from "../../styles/todoInput.module.css";

interface TodoInputProps {
    placeholder: string
}

const TodoInput = ({ placeholder }: TodoInputProps) => {
    return (
        <div className={styles.container}>
            <input placeholder={placeholder} type="text" />
        </div>
    )
}

export default TodoInput