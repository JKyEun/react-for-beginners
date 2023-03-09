import { useState, useEffect } from 'react';

function App() {
  function Hello() {
    useEffect(() => {
      console.log('Hi :)');
      return () => {
        console.log('Bye :(');
      };
    }, []);
    return <h1>Hello!</h1>;
  }
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
