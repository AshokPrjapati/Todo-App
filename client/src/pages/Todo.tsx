import TodoContainer from "../components/todo/TodoContainer"
import TodoInput from "../components/todo/TodoInput"

import styles from "../styles/todo/Todo.module.css"

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