import { useContext, useState } from "react"
import { TaskContext } from "../contexts/TaskContext"
import ButtonComponent from "./ButtonComponent"


const TaskDisplay = (props) => {
    const context = useContext(TaskContext)
    const { taskId } = props
    const {tasks, setTasks} = useContext(TaskContext)

    const foundTask = context.tasks.find(t => t.id === taskId)
    console.log(foundTask);

    const isCompleteed = foundTask.isCompleteed

    const [taskStatus, setTaskStatus] = useState(isCompleteed)

    const deleteTask = () => {
        const updatedList = tasks.filter((task) => task.taskId !== taskId);
        setTasks(updatedList)
        console.table(updatedList);
    
    }

    return (
        <ul className="list-group">
            <li className="mb-3 list-group-item d-flex justify-content-between align-items-center">
                <span>{foundTask.text}</span>
                <span>{foundTask.deadline}</span><ButtonComponent taskStatus={taskStatus} setTaskStatus={setTaskStatus}/>
                <span> {taskStatus === 'Completeed' && (
                         <button className= "btn btn-danger" onClick={deleteTask}>
                           Supprimer</button> )}</span>
            </li>
        </ul>
    )
}

export default TaskDisplay