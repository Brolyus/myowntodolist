import React, { useState, useEffect} from 'react';
import Todo from '../../components/Todo/Todo'

import classes from './Todos.module.scss'
import Axios from 'axios';

const Todos = (props) => {
    const [todos, setTodos] = useState(null)
    
    useEffect(() => {
        Axios.get('https://myowntodos-b801b.firebaseio.com/todos.json')
            .then(response => {
                const dataToStore = Object.values(response.data)
                if (todos === null || todos.length !== dataToStore.length){
                    setTodos(dataToStore)
                }
            })
    }, [todos])


    return(
        <ul className={classes.Todos}>
            {todos ? todos.map( (item, index) => {
                return(
                    <Todo key={index} text={item.todo} status={item.status}/>
                )
            })
            :
            <p>Loading ...</p>}
        </ul>
    )
}

export default Todos