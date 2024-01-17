
import './App.css';
import { Button, Card } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Todo from './components/Todo';
import { useState } from 'react';

function App() {

  const [text, setText] = useState("")

  const [todos, setTodos] = useState([])

  function addTodo() {
    if (text == "") {
      return
    }

    setTodos((oldTodo) => {
      return [...oldTodo, text];
    })
  }

  function handleDelete(id) {

    setTodos(
      todos.filter((todo, index) => {
        return index !== id
      })
    )
  }

  return (
    <div className="App">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title className='title'>Todo App</Card.Title>
          <Card.Text>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="add todos..." value={text} onChange={(e) => setText(e.target.value)} />

              <div className="input-group-append">
                <button onClick={addTodo} className="btn btn-outline-primary" type="button">
                  <IoMdAdd size={25} />
                </button>
              </div>
            </div>
            <ol>
              {todos.map((input, index) => (
                <li key={index} >
                  <Todo title={input} handleDelete={handleDelete} id={index} />
                </li>
              ))}
            </ol>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
