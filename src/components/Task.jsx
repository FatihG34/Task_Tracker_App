
const Task = ({ localTask }) => {

    console.log(localTask);


    return (
        <div>

            <ul className='task-ul'>
                {localTask || localTask.map((itemTask) => {
                    const { id, task, date, isdone } = itemTask;
                    return (
                        <li key={id} >
                            <p>
                                {task}
                            </p>
                            <p>
                                {date && date.slice(0, 10)}  {date && ("& " + date.slice(11))}
                            </p>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Task