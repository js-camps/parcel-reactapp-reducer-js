import React, { useReducer } from "react";
import g from '../state/reducers/incDecReducer';
import "../styles.css";

export function App() {
  const initialState = { count: 0 };
  const [state, f] = useReducer(g, initialState);

  const incClick = () => {
    f({ type: 'increment' }); 
  };

  return (
    <div className="App">
      <textarea rows="1" value={state.count} id="total" type="text" name="ans" readOnly />
      <br />
      <button type="button" className="btn" onClick={incClick}>
        + 1
      </button>
      <button type="button" className="btn" onClick={() => f({ type: 'decrement' })}>
        - 1
      </button>
    </div>
  );
}