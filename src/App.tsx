import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { TodoItemCount } from './components/TodoItemCount';
import { Search } from './components/Search';
import { useState } from 'react';
import { iTodoItem } from './interfaces/iTodoItens';
import { TodoItem } from './components/TodoItem';
import clipboard from './assets/clipboard.svg';

export function App() {
  const [items, setItems] = useState<iTodoItem[]>([]);
  const [taskCount, setTaskCount] = useState(2);

  function addNewTask(newTask: string): void {
    setTaskCount(taskCount + 1);

    const newTaskItem: iTodoItem = {
      id: taskCount,
      task: newTask,
      checked: false
    }    

    setItems([...items, newTaskItem]);
  }

  function handleChangeTaskStatus(taskId: number): void {
    const itemsUpdated = items.map(item => {
      if(item.id == taskId) {
        item.checked = !item.checked;
      }
      return item;
    })
    setItems(itemsUpdated);
  }

  function handleDeleteTask(taskId: number): void {
    const itemsWithoutDeletedTask = items.filter(item => item.id != taskId);
    setItems(itemsWithoutDeletedTask);
  }

  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
          <div className={styles.search}>
            <Search onAddNewTask={addNewTask} />
          </div>
          <TodoItemCount 
            numberOfTasksCreated={items.length} 
            numberOfTasksCompleted={items.reduce((acc, item) => item.checked ? ++acc : acc, 0)}
          />
          <div className={items.length == 0 ? styles.onIsEmpty : styles.hide}>
              <img src={clipboard} alt="Ícone de Clipboard" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
          <div className={styles.todoList}>
              { items.map(item => <TodoItem key={item.id} task={item} onChangeStatusTask={handleChangeTaskStatus} onDeleteTask={handleDeleteTask} />)}
          </div>
      </main>
    </div>
  )
  
}