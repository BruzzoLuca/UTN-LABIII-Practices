import { useState } from 'react'
import TaskList from './components/taskList/TaskList';
import AddTask from './components/addTask/AddTask';
import './App.css';


function App() {
  
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const taskCompletada = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      if (i !== index) {
        newTasks.push(tasks[i]);
      }
    }
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Mis tareas </h1>
      <AddTask addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        taskCompletada={taskCompletada} 
        deleteTask={deleteTask} 
      />
    </div>
  );
}

export default App;