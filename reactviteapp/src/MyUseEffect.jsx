import React, { useEffect, useState } from "react";

function MyUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return <h1>Count: {count}</h1>;
}

export default MyUseEffect;
