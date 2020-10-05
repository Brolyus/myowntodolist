import React, { useState } from 'react';
import TodoFields from '../../components/TodoFields/TodoFields';
import ValidateButton from '../../components/UI/ValidateButton/ValidateButton'
import axios from 'axios'

import classes from './AddTodos.module.scss';

const AddTodos = () => {

    const [todo,setTodo] = useState("")

    const handleTodo = event => {
        setTodo(
            event.target.value
        )
    }

    const addNewTodo = () => {
        const newTodo = { todo: todo, status: "new" }
        axios.post('https://myowntodos-b801b.firebaseio.com/todos.json', newTodo)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return (
        <div className={classes.AddTodos}>
            <TodoFields todo={todo} handleTodo={(e) => handleTodo(e)}/>
            <ValidateButton newTodo={() => addNewTodo()}/>
        </div>
    )

};

export default AddTodos;