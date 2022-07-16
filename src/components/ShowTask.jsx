import { useState } from "react";
import { TiTrash } from "react-icons/ti";
import { TiPen } from "react-icons/ti";



const ShowTasks = ({ tasks, setTasks }) => {
    const [done, setDone] = useState(false)
    const handleTaskDel = (uniq) => {
        setTasks(tasks.filter((item) => item.id !== uniq));
    };

    const isDone = (isdone) => {
        tasks?.map((element) => {
            const { isdone } = element
            return (
                setDone(!isdone)

            )
        })
    }
    console.log(done);
    return <div>
        <ul>
            {tasks?.map((item) => {
                const { id, task, day, isdone } = item;
                console.log(task);
                return (
                    <li key={id} className='task'>
                        <TiPen
                            onClick={() => isDone(isdone)}
                            data-bs-toggle="modal"
                            data-bs-target="#edit-modal"
                            size="2em"
                            style={{ cursor: "pointer" }}
                        />
                        <div className="{isdone && done}">
                            <p>{task}</p>
                            <p>{day}</p>
                        </div>
                        <TiTrash size="2em" style={{ cursor: "pointer" }} onClick={() => handleTaskDel(id)} />
                    </li>

                )
            })}
        </ul>
    </div>;
};

export default ShowTasks;
