import React, { useState } from 'react';
import kot from './kot.jpg'
import Books from './Books/Books';

function App() {
  // const [counter, setCounter] = useState(0);
  //
  // const handleClick = function() {
  //   setCounter(counter + 1);
  // };
  // const displayImage = counter % 5 === 0;
  //
  // return (<div>
  //   <button onClick={handleClick}>Click</button>
  //   <p>{counter}</p>
  //   {displayImage && <img src={kot} />}
  // </div>);

  return <Books />
}

export default App;
