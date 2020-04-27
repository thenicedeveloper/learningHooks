import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

//Screen case to represent a global variable
const TASK_STORAGE_KEY = "TASK_STORAGE_KEY"

//we have the params as an objects, to make clear that there are being stored together.
const storeTasks = (taskMap) => {
    localStorage.setItem(
        TASK_STORAGE_KEY,
        JSON.stringify(taskMap)
    )
}

const readStoredTask = () => {
    const tasksMap = JSON.parse(localStorage.getItem(TASK_STORAGE_KEY))
    return tasksMap ? tasksMap : { tasks: [] };
}

function Tasks() {

    const storedTasks = readStoredTask();//read from local storage

    const [taskText, setTaskText] = useState('')
    const [tasks, setTasks] = useState(storedTasks.tasks)
    const [completedTasks, setCompletedTasks] = useState(storedTasks.completedTasks)

    useEffect(()=> {
        storeTasks({tasks, completedTasks})
    })

    let updateTaskText = (e) => {
        setTaskText(e.target.value)
    }

    let addTask = (e) => {
        e.preventDefault()        
        setTasks([...tasks, {id: uuidv4(), taskText}])
        setTaskText("")        
    }

    let completeTask = completedTask => () =>{
        setCompletedTasks([...completedTasks, completedTask])
        setTasks(tasks.filter(task => task.id !== completedTask.id))
    }

    let deleteTask = task => () => {
        setCompletedTasks(completedTasks.filter(t => t.id !== task.id))
    }


    return(
        <div>
            <h3>Tasks</h3>
            <div className="form">
                <input value={taskText}  onChange={updateTaskText}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="task-list">
                {
                    tasks.map(task=> {
                        const {id, taskText} = task;
                        return (
                            <div key={id} onClick={completeTask(task)}> {taskText} </div>
                        )
                    })
                }
            </div>
            <div className="completed-list">
                {
                    completedTasks.map(completedTask => {
                        const {id, taskText} = completedTask;
                        return (
                            <div key={id} > 
                                {taskText} {' '}
                                <span className="delete-task" onClick={deleteTask(completedTask)}>x</span> 
                            </div>
                        )
                    })
                }
            </div>
            {/* span classname is delete-tast */}
        </div>
    )

}

export default Tasks;