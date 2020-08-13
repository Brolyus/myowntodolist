import React from 'react';
import classes from './Todo.module.scss'

const Todo = ({ status, text }) => {
    let test = ""

    return(
        <li className={classes.Todo}>
            <p>{text}</p>
            <p>{status}</p>
        </li>
    )
}


export default Todo