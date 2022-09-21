import { PlusCircle } from "phosphor-react"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./Search.module.css"

interface PropsSearch {
    onAddNewTask: (newTask: string) => void;
}

export function Search({ onAddNewTask }: PropsSearch) {
    const [newTask, setNewTask] = useState<string>('');

    function handleCreateNewTask(event: FormEvent):void {
        event.preventDefault();

        onAddNewTask(newTask);
        setNewTask('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>): void {
        event.target.setCustomValidity('');
        setNewTask(event.target.value); 
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>):void {
        event.target.setCustomValidity('Este campo é obrigatório');
    }

    const isNewTaskEmpty = newTask.length == 0;

    return (
        <form onSubmit={handleCreateNewTask} className={styles.search} >
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa"
                value={newTask}
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                required
            />
            <button type="submit" disabled={isNewTaskEmpty}>
                <span>Criar</span>
                <PlusCircle size={16} />
            </button>
        </form>
    )
}