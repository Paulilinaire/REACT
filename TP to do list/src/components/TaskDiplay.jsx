import { useContext } from "react"
import { TaskContext } from "../contexts/TaskContext"

const TaskDisplay = (props) => {
    const context = useContext(TaskContext)
    const { taskId } = props
    const foundTask = context.tasks.find(t => t.id === taskId)
    console.log(foundTask);

    return (
        <ul className="list-group">
            <li className="mb-3 list-group-item d-flex justify-content-between align-items-center">
                <span>{foundTask.text}</span><button className="btn btn-danger">Supprimer</button>
            </li>
        </ul>
    )
}

export default TaskDisplay