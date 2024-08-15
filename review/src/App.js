import React, { useState } from "react";
import reducer, { initialState} from './reducers/calcReducer';
import {addAction, clearAction, subAction} from './actions/calcActions';
import "./styles.css";

let currentState = initialState;
console.log("currentState: ", currentState);

currentState = reducer(currentState, addAction(3));
console.log("currentState: ", currentState);

currentState = reducer(currentState, addAction(4));
console.log("currentState: ", currentState);

currentState = reducer(currentState, clearAction());
console.log("currentState: ", currentState);

currentState = reducer(currentState, subAction(10));
console.log("currentState: ", currentState);

currentState = reducer(currentState, {type:"ADD", payload: 5});
console.log("currentState: ", currentState);

currentState = reducer(currentState, {type:"SUBTRACT", payload: 6});
console.log("currentState: ", currentState);

currentState = reducer(currentState, {type:"ADD_TO_MEMORY"});
console.log("currentState: ", currentState);

currentState = reducer(currentState, {type:"CLEAR"});
console.log("currentState: ", currentState);

export function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Add your logic here to update the count
    setCount(count + 1); // This example increments the count by 1
  };

  return (
    <div className="App">
      <textarea rows="1" value={count} id="total" type="text" name="ans" readOnly />
      <br />
      <button type="button" className="btn" onClick={handleClick}>
        +
      </button>
    </div>
  );
}