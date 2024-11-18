import React, { useState } from "react";

function UseStudentState() {
  const [count, setCount] = useState(20);
function doIncrement(){
  console.log("Hi Inside do increment");
  setCount(count + 1);
}
function doDecrement(){
  console.log("Hi Inside do increment");
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
        <button id='btn' onClick={doIncrement}  style={{backgroundColor:'cyan'}}>Increment Counter</button>
        <button id='btn' onClick={doDecrement}  style={{backgroundColor:'cyan'}}>Decrement Counter</button>
      </div>

    </div>
  );
}
export default UseStudentState;
