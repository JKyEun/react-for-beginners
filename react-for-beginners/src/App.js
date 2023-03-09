import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  useEffect(() => {
    console.log(`Keyword Changes! ${keyword}`);
  }, [keyword]);
  useEffect(() => {
    console.log(`Counter Changes! ${counter}`);
  }, [counter]);
  useEffect(() => {
    console.log(`Keyword or Counter Changes!`);
  }, [keyword, counter]);

  return (
    <div>
      <input type='text' onChange={onChange} />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default App;
