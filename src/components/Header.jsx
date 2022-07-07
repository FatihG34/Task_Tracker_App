import AddTaskForm from "./AddTask";
import { useState } from "react";

const Header = ({ tasks, setTasks }) => {
    const [show, setShow] = useState(false);
    const [btnStyle, setBtnStyle] = useState({
        name: "Show Add Task Bar",
        bgColor: "purple"
    });

    const handleShow = () => {
        // setShow(!show)
        //! async çalıştığı için önce show un ilk değerini alıyor if bloğu show un ilk değerine  göre dönüyor bu işlemler sonrasında state güncelleniyor
        if (show) {
            setBtnStyle({
                name: "Show Add Task Bar",
                bgColor: "purple"
            })
        } else {
            setBtnStyle({
                name: "Close Add Task Bar",
                bgColor: "red"
            })
        }
        setShow(!show)
    };

    return <header className="header">
        <h1>Task Tracker</h1>
        <button onClick={handleShow} className="btn" style={{ backgroundColor: btnStyle.bgColor }}>{btnStyle.name}</button>
        {show && <AddTaskForm tasks={tasks} setTasks={setTasks} />}
    </header>;
};

export default Header;
