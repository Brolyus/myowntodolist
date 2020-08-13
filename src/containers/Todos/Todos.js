import React, { useState} from 'react';
import Todo from '../../components/Todo/Todo'

import classes from './Todos.module.scss'

const Todos = (props) => {
    const list = [
        {text: "faire la vaisselle", done: false},
        {text: "faire la cusine", done: true},
        {text: "jouer", done: false},
    ]

    const [todos, setTodos] = useState(null)

    return(
        <ul className={classes.Todos}>
            {list.map( (item, index) => {
                return(
                    <Todo key={index} text={item.text} status={item.done}/>
                )
            })}
        </ul>
    )
}

export default Todos