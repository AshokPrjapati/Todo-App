import TodoContainer from "./TodoContainer"
import TodoInput from "./TodoInput"

import styles from "../../styles/Todo.module.css"

const Todo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>Todo Application</div>
            <TodoInput placeholder="Enter Task Name" />
            <TodoInput placeholder="Enter Description" />
            <TodoContainer />
        </div>

    )
}

export default Todo