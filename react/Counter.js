import { useState } from "react";


function Counter() {
  //state variables are immutable
  //hooks has to be at the start of your components

  const [counter, setCounter] = useState(0);
  
//   function increaseValue(name) {
//     // setCounter(counter + 1);
//     console.log(name)
//   }

//   function decreaseValue(name) {
//     // setCounter(counter - 1);
//     console.log(name)
//   }

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </>
  );
}


// Controlled Components


export default Counter;
