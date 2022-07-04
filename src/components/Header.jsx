import React, { useState } from 'react'
import Button from './Button';
import Tasks from './Tasks';

const Header = ({ addTask }) => {
    const [show, setShow] = useState(true);
    const editShow = () => {
        setShow(!show);
    };

    return (
        <div className='header'>
            <h1>Task Tracker</h1>
            <Button editShow={editShow} />
            {show && <Tasks addTask={addTask} />}
        </div>
    )
}

export default Header