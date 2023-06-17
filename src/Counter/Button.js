import React, { useState } from "react";
import { Display } from "./Display";

export const Button = () => {
  const [count, setCount] = useState(0);
  const handleOnIncrease = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleOnDecrease = () => {
    setCount(count - 1);
    console.log(count);
  };
  const handleOnTwice = () => {
    setCount(count + 2);
    console.log(count);
  };
  return (
    <div>
      <p>
        <button onClick={handleOnIncrease}>+</button>
        <button onClick={handleOnDecrease}>-</button>
        <button onClick={handleOnTwice}>++</button>
      </p>
      <Display count={count} />
    </div>
  );
};
