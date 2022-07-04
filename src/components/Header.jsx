import React, { useState } from 'react'
import Button from './Button';
import Tasks from './Tasks';

const Header = () => {
    const [show, setShow] = useState(true);
    const editShow = () => {
        setShow(!show);
    };
    const addTask = (tasks) => {
        let localStr = localStorage.setItem(JSON.parse(tasks));
    };
    return (
        <div>
            <h1>Task Tracker</h1>
            <Button editShow={editShow} />
            {show && <Tasks addTask={addTask} />}
        </div>
    )
}

export default Header