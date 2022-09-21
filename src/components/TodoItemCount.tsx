import styles from "./TodoItemCount.module.css"

interface TodoItemCountProps {
    numberOfTasksCreated: number;
    numberOfTasksCompleted: number;
}

export function TodoItemCount({ numberOfTasksCreated, numberOfTasksCompleted }: TodoItemCountProps) {
    return (
        <div className={styles.todoInfo}>
            <div className={styles.tasks}>
                <span className={styles.title}>Tarefas criadas</span>
                <span className={styles.amount}>{numberOfTasksCreated}</span>
            </div>
            <div className={styles.completedTasks}>
                <span className={styles.title}>Concluídas</span>
                <span className={styles.amount}>{numberOfTasksCreated > 0 ? numberOfTasksCompleted + " de " + numberOfTasksCreated : numberOfTasksCompleted}</span>
            </div>
        </div>
    )
}