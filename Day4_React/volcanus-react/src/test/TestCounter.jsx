import { useState } from "react"


const TestCounter = () => {
    const [counter, setCounter] = useState(0)

  return (
    <>
    <div>
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter+1)}>Increase the Counter</button>
    </div>
    </>
  )
}

export default TestCounter