
import { useState } from 'react'

const Counter = () => {
    // Declare a state variable 'Number' with an initial value of 0, and a function 'setNumber' to update its value
    const [Number, setNumber] = useState(0);
    // Define the 'Add' function, which increments the 'Number' state by 1 when called
    function Add() {
        setNumber(Number + 1);
    }
    // Define the 'Subtract' function, which decrements the 'Number' state by 1 when called
    function Subtract() {
        setNumber(Number - 1);
    }
  
  return (
    <>
    <div className="container">
        <h2>{Number}</h2>
         {/* Button that, when clicked, invokes the 'Add' function to update the state */}
        <button onClick= {Add}>Add 1</button>
        <button onClick= {Subtract}>Subtract 1</button>
    </div>
    </>
  )
}

export default Counter