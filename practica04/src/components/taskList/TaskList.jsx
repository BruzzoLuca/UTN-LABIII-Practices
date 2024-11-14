import React from 'react';

function TaskList({ tasks, taskCompletada, deleteTask }) {
  
  
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'grey' : 'black' }}>
          
          {task.text}
          
          <button onClick={() => taskCompletada(index)}>
            {task.completed ? 'Desmarcar' : 'Completar'}
          </button>

          <button onClick={() => deleteTask(index)}>Eliminar</button>

        </li>   
      ))}
    </ul>
  );
}

export default TaskList;