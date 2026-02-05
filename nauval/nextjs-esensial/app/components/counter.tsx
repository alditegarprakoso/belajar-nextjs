"use client";

import { useState } from "react";

const CounterComponent = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <p>Counter : {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};

export default CounterComponent;
