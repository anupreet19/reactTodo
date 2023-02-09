import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(Array(0).fill(null));

  const addTodo = () => {
    let item = document.getElementById("todoItem").value;
    if(item !== ""){
      setTodos([...todos,item]);
      document.getElementById("todoItem").value = "";
    }
  }

  const deleteItem = (item) => {
    const newTodos = todos.filter((val) => {
      return val !== item;
    });
    setTodos(newTodos);
  }

  return (
    <>
      <div className="main-container">
        <h1>REACT TODO APP</h1>
        <div className="todo-container">
          <span className="inner-container">
            <input type="text" placeholder="Create new todo" id="todoItem"></input>
            <button onClick={addTodo}>Add</button>
          </span>

          {todos?.length > 0 ? (
              <ul className="list">
                {todos.map((item, index) => (
                  <div className="item-list">
                    <li key={index}>
                      {item}
                    </li>
                    <button onClick={() => {deleteItem(item)}}>Delete</button>
                  </div>
                ))}
              </ul>
            ) : (
              <div className="empty">
                <p>No task found</p>
              </div>
            )
            }
        </div>
      </div>
    </>
  );
}

export default App;
