import AddTaskForm from "./AddTask";
import ShowTasks from './ShowTask';
import { useState } from "react";

const Header = ({ tasks, setTasks }) => {
    const [show, setShow] = useState(false);
    const [btnStyle, setBtnStyle] = useState({
        name: "Show Add Task Bar",
        bgColor: "purple",
        color: 'white'
    });

    const handleShow = () => {
        if (show) {
            setBtnStyle({
                name: "Show Add Task Bar",
                bgColor: "purple",
                color: 'white'
            })
        } else {
            setBtnStyle({
                name: "Close Add Task Bar",
                bgColor: "orange",
                color: 'black'
            })
        }
        setShow(!show)
    };

    return <header className="header">
        <h1>Task Tracker</h1>
        <button onClick={handleShow} className="btn" style={{ backgroundColor: btnStyle.bgColor, color: btnStyle.color }}>{btnStyle.name}</button>
        {show && <AddTaskForm tasks={tasks} setTasks={setTasks} />}
        {show && <ShowTasks tasks={tasks} setTasks={setTasks} />}
    </header>;
};

export default Header;
