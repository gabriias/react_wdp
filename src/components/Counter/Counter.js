import React, { useState, useEffect } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  if (count) {
  }

  useEffect(() => {
    document.title = "Counter";
  });

  return (
    <div className="content">
      <div className="container">
        <p className="counter-description">
          u clicked {count} {count === 0 || count === 1 ? "time" : "times"}
        </p>
        <div className="buttons">
          <button className="button-item" onClick={() => setCount(count + 1)}>+</button>
          <button className="button-item" onClick={() => setCount(0)}>reset</button>
          <button className="button-item"
            onClick={() => {
              count - 1 < 0 ? setCount(0) : setCount(count - 1);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
