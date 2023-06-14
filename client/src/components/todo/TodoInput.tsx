
import styles from "../../styles/todo/todoInput.module.css";

interface TodoInputProps {
    placeholder: string,
    value?: string,
    name?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TodoInput = ({ placeholder, value, name, onChange }: TodoInputProps) => {

    return (
        <div className={styles.container}>
            <input placeholder={placeholder} type="text" name={name} onChange={onChange} value={value} />
        </div>
    )
}

export default TodoInput