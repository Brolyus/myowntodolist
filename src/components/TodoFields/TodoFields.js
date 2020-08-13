import React from 'react';
import classes from './TodoFields.module.scss'

const TodoFields = ({todo, handleTodo}) => (
    <input className={classes.Input} type="text" placeholder='Ajouter un Todo ...' value={todo} onChange={handleTodo}></input>
)

export default TodoFields;