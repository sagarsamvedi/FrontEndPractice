import { useState } from "react";
import { useEffect } from "react";

const Use_effect = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Use effect is running");
  }, [counter]);

  return (
    <>
      <div className="container">
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Change Value</button>
      </div>
    </>
  );
};

export default Use_effect;
