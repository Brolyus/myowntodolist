import React from 'react';
import Todos from './containers/Todos/Todos'
import './App.css';
import AddTodos from './containers/AddTodos/AddTodos';

function App() {
  return (
    <div className="App">
      <p>Ma todo list</p>
      <AddTodos />
      <Todos />
    </div>
  );
}

export default App;
