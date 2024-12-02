import React, { useState } from "react";

function UseStudentState() {
  const [count, setCount] = useState(20);

  function doIncrement() {
    console.log("Incrementing count");
    setCount(count + 1);
  }

  function doDecrement() {
    console.log("Decrementing count");
    setCount(count - 1);
  }

  return (
    <div
      style={{
        color: "red",
        border: "2px solid red",
        width: "200px",
        height: "400px",
        marginLeft: "500px",
        backgroundColor: "green",
        fontSize: "50px",
        paddingLeft: "20px",
      }}
    >
      {count}
      <div>
        <button onClick={doIncrement} style={{ backgroundColor: 'cyan' }}>
          Increment Counter
        </button>
        <button onClick={doDecrement} style={{ backgroundColor: 'cyan' }}>
          Decrement Counter
        </button>
      </div>
    </div>
  );
}

export default UseStudentState;
