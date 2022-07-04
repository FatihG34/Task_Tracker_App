import React from 'react'

const Task = ({ makeObj }) => {
    const { addtask, adddate } = makeObj;
    console.log(addtask);
    console.log(adddate);
    return (
        <ul>
            <div>
                <li>{addtask}</li>
                <li>{adddate}</li>
            </div>
        </ul>
    )
}

export default Task