import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useState } from 'react';
import { TaskContext } from './contexts/TaskContext';
import TaskDisplay from './components/TaskDiplay';


function App() {
  const [tasks, setTasks] = useState([])
  console.table(tasks);

  return (
    <div className="container mt-5">
      <div className="App">
      <TaskContext.Provider value={{tasks, setTasks}}>
        <ToDoList />
        <h2>Todo</h2>
        {tasks.map(task => (
        <TaskDisplay key={task.id} taskId={task.id}/>
        ))}
        </TaskContext.Provider>
      </div>
    </div>
  );
}

export default App;
