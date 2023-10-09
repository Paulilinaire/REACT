import { useContext, useRef } from "react"
import { TaskContext } from "../contexts/TaskContext"
import Task from "../models/Task"

const status = ['A faire', 'En cours', 'Fini']

const ToDoList = () => {
    const {tasks, setTasks } = useContext(TaskContext)
    
    const textRef = useRef()
    const deadlineRef = useRef()
    const isCompleteedRef = useRef()

    const submitTaskHandler = (event) => {
        event.preventDefault()
            
        const text = textRef.current.value
        const deadline = deadlineRef.current.value
        const isCompleteed = isCompleteedRef.current.value
        console.log(text);
        console.table(isCompleteed);

        const newTask = new Task(text, deadline, isCompleteed)
        setTasks((previousTasks => [...previousTasks, newTask]))
        console.table(tasks);

    }

return (
    <>
        <h1 className="display-4">To do List</h1>
        <form action="#" onSubmit={submitTaskHandler}>
        <div className="input-group mb-3">
            <input type="text" ref={textRef}className="form-control" placeholder="Ajouter une nouvelle tâche" required/>
            <div className="input-group-append">
                <input type="date" className="form-control" ref={deadlineRef} required />
                < select id="task" className="form-control" ref={isCompleteedRef} required>
                <option value="">Choisir une option</option>
                    {status.map((s) => (
                        <option value={s}>{s}</option>
                        ))}
                </select>
            </div>
                <button className="btn btn-primary">Ajouter</button>
        </div>
        </form>
    </>
)

}

export default ToDoList