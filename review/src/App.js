import React, { useState } from "react";
import "./styles.css";

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