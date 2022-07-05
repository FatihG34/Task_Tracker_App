import { useState } from "react";
import Task from "./Task";

const Tasks = ({ setItems, localTask }) => {
    const [task1, setTask] = useState();
    const [date1, setDate] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        let id = new Date().getTime();
        let isDone = false;
        setItems([{ id: id, task: task1, date: date1, idDone: isDone }])
        setTask("");
        setDate("");
    };
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Task</label>
                <input
                    className="task-input"
                    type="text"
                    value={task1}
                    onChange={(e) => setTask(e.target.value)}
                />
                <label htmlFor="">Day & Time</label>
                <input
                    className="date-input"
                    type="datetime-local"
                    value={date1}
                    onChange={(e) => setDate(e.target.value)}
                    name="" id="" />
                <button className="task-save-btn" >Save Task</button>
            </form>
            <Task localTask={localTask} />
        </div>
    );
};

export default Tasks;
