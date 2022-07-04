import React, { useState } from 'react'

const Button = ({ editShow }) => {
    const [shows, setShows] = useState(true)
    // console.log(show);

    return (
        <div>
            <button onClick={() => {
                editShow();
                setShows(!shows)
            }} >{shows ? "Hide Add Task Bar" : "Show Add Task Bar"}</button>
        </div >
    )
}

export default Button