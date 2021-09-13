import React, { useState } from 'react';
import './App.css';
import Form from './components/Form.js';


function App() {
  const [ todoList, setTodoList ] = useState([])

  return (
    <div className="App">
      <Form todoList = { todoList } setTodoList = { setTodoList }/>

    </div>
  );
}

export default App;