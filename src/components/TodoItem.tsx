import { Check, Trash } from "phosphor-react"
import styles from "./TodoItem.module.css"
import { iTodoItem } from "../interfaces/iTodoItens"
import { SyntheticEvent } from "react";

interface TodoItemProps {
    task: iTodoItem;
    onChangeStatusTask: (taskId: number) => void;
    onDeleteTask: (taskId: number) => void;
}

export function TodoItem({ task, onChangeStatusTask, onDeleteTask }: TodoItemProps) {
    function handleChangeTaskStatus(event: SyntheticEvent): void {
        event.stopPropagation();
        onChangeStatusTask(task.id);
    }

    function handleDeleteTask(event: SyntheticEvent): void {
        event.stopPropagation();
        onDeleteTask(task.id);
    }

    return (
        <div className={styles.todoItem} onClick={handleChangeTaskStatus}>
            <button className={styles.buttonChecked} onClick={handleChangeTaskStatus}>
                {task.checked ? <Check weight="bold" /> : <div />}
            </button>

            <p className={task.checked ? styles.isChecked : ''}>{task.task}</p>
            
            <button title='Deletar comentário' onClick={handleDeleteTask}>
                <Trash size={20} />
            </button>
        </div>
    )
}