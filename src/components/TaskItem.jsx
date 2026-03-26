export default function TaskItem({ task, index, deleteTask, doneTask }) {
  return (
    <li className="todo-item">
      <span className="todo-item-text">
        {index + 1}. {task.value}
      </span>
      <button   className={`todo-status-btn ${task.done ? "done" : "pending"}`}
            aria-label={`Изменить статус задачи ${task.value}`}
            onClick={() => doneTask(task.id)}>
        {task.done ? "Готово" : "В работе" }
     </button>


      <button
        className="todo-delete-btn"
        onClick={() => deleteTask(task.id)}
        aria-label={`Удалить задачу ${task.value}`}
      >
        ×
      </button>
    </li>
  );
}
