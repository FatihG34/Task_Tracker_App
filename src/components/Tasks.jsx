import Task from './Task'

const Tasks = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="">Task</label>
                <input type="text" />
                <label htmlFor="">Day & Time</label>
                <input type="datetime" name="" id="" />
                <button>Save Task</button>
            </form>
            <Task />
        </div>
    )
}

export default Tasks