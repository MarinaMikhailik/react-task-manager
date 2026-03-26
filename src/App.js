import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";

const STORAGE_KEY = "my_tasks";

function App() {
   const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  });  
  const [inputValue, setInputValue] = useState("");

  useEffect(()=> {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } ,[tasks]);
     

  const addTask = () => {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;
    setTasks((prev) => [...prev, {id: Date.now() , value: trimmedValue, done: false}]);
    setInputValue("");
  };

  const deleteTask = (idToDelete) => {
    setTasks((prev) => prev.filter((task) => task.id !== idToDelete));
  };

  const doneTask = (idTask) => {
    setTasks((prev)=> 
    prev.map((task) => 
    task.id === idTask ? {...task, done: !task.done} : task));
  }

  return (
    <div className="app">
      <div className="todo-card">
        <div className="todo-header">
          <div>
            <h1 className="todo-title">Список задач</h1>
            <p className="todo-subtitle">Простой и аккуратный todo на React</p>
          </div>
          <span className="todo-icon">📝</span>
        </div>

        <Header
          inputValue={inputValue}
          setInputValue={setInputValue}
          addTask={addTask}
        />

        <TaskList tasks={tasks} deleteTask={deleteTask}  doneTask={doneTask}/>

        <div className="tasks-counter">Всего задач: {tasks.length}</div>
      </div>
    </div>
  );
}

export default App;