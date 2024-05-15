import { useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [newToDo, setNewToDo] = useState("");

  function handleAddTodo(){
    if(newToDo.trim() !== ""){
      setTodos([...todos, newToDo.trim()]);
      setNewToDo("");
    }
  };

  function handleRemove(index){
    const updateTodo = todos.filter((_, i) => i !== index);
    setTodos(updateTodo);
  }

  return (
    <div className="app">
      <h2>ToDo List</h2>
      <div className="input-cont">
        <input type="text" placeholder='Enter the value' 
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Task</button>
      </div>
      <ul>
        {todos.map((todo, index)=> (
          <li key={index}>{todo}
          <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default App
