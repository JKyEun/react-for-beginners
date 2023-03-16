import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === '') {
      return;
    }
    setTodos((currentArr) => [...currentArr, todo]);
    setTodo('');
  };
  const onClick = (index) => {
    setTodos((currentArr) => {
      currentArr.splice(index, 1);
      return [...currentArr];
    });
  };
  return (
    <div>
      <h1>My TODOS! ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type='text'
          placeholder='Write To Do!'
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button onClick={() => onClick(index)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
