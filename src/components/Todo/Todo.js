import React from 'react';
import classes from './Todo.module.scss'

const Todo = ({ status, text }) => (
        <li className={classes.Todo}>
            <p>{text}</p>
            <p>{status}</p>
        </li>
)


export default Todo