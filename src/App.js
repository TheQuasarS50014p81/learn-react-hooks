import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0)
  
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)
  const reset = () => setCount(initialize => initialize = 0)
  const multiple = () => setCount(multiplication => multiplication * 2)
  const multipleOnThree = () => setCount(value => value % 3 === 0 ? value / 3 : value)

  return (
    <React.Fragment>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={multiple}>Multiple</button>
        <button onClick={multipleOnThree}>3の倍数</button>
      </div>
    </React.Fragment>
  );
}

export default App;
