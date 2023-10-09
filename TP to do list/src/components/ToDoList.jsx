import { useContext, useRef } from "react"
import { TaskContext } from "../contexts/TaskContext"
import Task from "../models/Task"

const ToDoList = () => {
    const {tasks, setTasks } = useContext(TaskContext)
    
    const taskInput = useRef()

    const submitTaskHandler = (event) => {
        event.preventDefault()
            
        const text = taskInput.current.value
        console.log(text);

        const newTask = new Task(text)
        setTasks((previousTasks => [...previousTasks, newTask]))
        console.table(tasks);

    }

return (
    <>
        <h1 className="display-4">To do List</h1>
        <form action="#" onSubmit={submitTaskHandler}>
        <div className="input-group mb-3">
            <input type="text" ref={taskInput}className="form-control" placeholder="Ajouter une nouvelle tâche"/>
            <div className="input-group-append">
                <button className="btn btn-primary">Ajouter</button>
            </div>
        </div>
        </form>
    </>
)

}

export default ToDoList