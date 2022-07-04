
const Task = ({ task1, date1 }) => {
    // let taskDate = localStorage.getItem()


    return (
        <ul className='task-ul'>
            <li>
                <p>
                    {task1}
                </p>
                <p>
                    {date1 && date1.slice(0, 10)}  {date1 && ("& " + date1.slice(11))}
                </p>

            </li>
        </ul>
    )
}

export default Task