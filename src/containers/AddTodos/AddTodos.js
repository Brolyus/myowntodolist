import React, { useState } from 'react';
import TodoFields from '../../components/TodoFields/TodoFields';
import ValidateButton from '../../components/UI/ValidateButton/ValidateButton'
import classes from './AddTodos.module.scss';

const AddTodos = () => {

    return (
        <div className={classes.AddTodos}>
            <TodoFields />
            <ValidateButton />
        </div>
    )

};

export default AddTodos;