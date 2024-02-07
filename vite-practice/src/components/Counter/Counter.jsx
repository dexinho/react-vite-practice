import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = (e) => {
    if (e.target.value === "-") setCount((prevC) => ++prevC);
    else if (e.target.value === "+") setCount((prevC) => --prevC);
  };

  return (
    <div>
      <div onClick={handleCount}>-</div>
      <div>{count}</div>
      <div onClick={handleCount}>+</div>
    </div>
  );
};
