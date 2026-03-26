import TaskItem from './TaskItem';

export default function TaskList({ tasks, deleteTask, doneTask }) {
  if (tasks.length === 0) {
    return <div className="empty-state">Пока задач нет. Добавь первую 👌</div>;
  }

  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          index={index}
          deleteTask={deleteTask}
          doneTask={doneTask}
        />
      ))}
    </ul>
  );
}