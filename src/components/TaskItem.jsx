export default function TaskItem( { id, text, deleteTask }) {
  
  return (  <li key={id}>
            {text} {' '}
            <button onClick={() => deleteTask(id)}>❌</button>
          </li>
          )

}