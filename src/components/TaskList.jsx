import React, { useState } from 'react';
import TaskItem from './TaskItem';


export default function TaskList() {

 const [tasks, setTasks] = useState([]); // Список задач
  const [input, setInput] = useState(''); // Текст в инпуте

  // Добавление задачи
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput(''); // Очищаем поле
    }
  };

  // Удаление задачи
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
     <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Список задач 📝</h1>
      
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Что нужно сделать?" 
      />
      <button onClick={addTask}>Добавить</button>

      <ul>
        {tasks.map(task => (
          <TaskItem id = {task.id} 
          text = {task.text} 
          deleteTask = {deleteTask} />
        ))}
      </ul>
    </div>

  );

}