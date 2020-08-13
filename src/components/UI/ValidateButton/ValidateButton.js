import React from 'react';
import classes from './ValidateButton.module.scss'

const ValidateButton = ({newTodo}) => (
    <button className={classes.Button} onClick={newTodo}>Valider</button>
);

export default ValidateButton;