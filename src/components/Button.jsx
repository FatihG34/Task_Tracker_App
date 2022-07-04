import React, { useState } from 'react'

const Button = () => {
    const [show, setShow] = useState(true)
    console.log(show);

    return (
        <div>
            <button onClick={() => setShow(!show)}>Show Add Task Bar</button>
        </div>
    )
}

export default Button