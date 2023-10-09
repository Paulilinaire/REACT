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
  <TaskContext.Provider value={{tasks, setTasks}}>
    <div className="container mt-5">
      <div className="App">
        <ToDoList />
        <h2>Todo</h2>
        {tasks.map(task => (
        <TaskDisplay key={task.id} taskId={task.id}/>
        ))}
      </div>
    </div>
    </TaskContext.Provider>
  );
}

export default App;
