import { useState } from "react";
import Task from "./Task";

const Tasks = ({ addTask }) => {
    const [task1, setTask] = useState();
    const [date1, setDate] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ task: task1, date: date1 })
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
            { }
            <Task task1={task1} date1={date1} />
        </div>
    );
};

export default Tasks;
