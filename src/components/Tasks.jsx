import { useState, useEffect } from "react";
import Task from "./Task";

const Tasks = ({ addTask }) => {
    const [task1, setTask] = useState();
    const [date1, setDate] = useState();
    const [taskObj, setTaskObj] = useState({});
    const makeObj = () => {
        setTaskObj({ task: task1, date: date1 })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(taskObj)
        setTask("");
        setDate("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Task</label>
                <input
                    type="text"
                    value={task1}
                    onChange={(e) => setTask({ task: e.target.value })}
                />
                <label htmlFor="">Day & Time</label>
                <input type="datetime-local"
                    value={date1}
                    onChange={(e) => setDate({ date: e.target.value })}
                    name="" id="" />
                <button >Save Task</button>
            </form>
            { }
            <Task makeObj={makeObj} />
        </div>
    );
};

export default Tasks;
