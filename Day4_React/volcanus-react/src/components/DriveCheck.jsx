
import { useState } from 'react';
const DriveCheck = () => {
  const [message, setMessage] = useState('');
  function displayMessage(){
    let age = document.querySelector('#age').value;
    (age > 18) ? (setMessage('You are Eligible to Drive')) : (setMessage('You are not Eligible to Drive'))
  }
  return (
    <>
      <div>
      <h1>Hello, Welcome to Drive Eligibility Test</h1>
      <h2>Enter Your Age Below</h2>
      <input type="text" placeholder='Enter age here' id = 'age'/>
      <button onClick= {displayMessage}>Submit</button>
      <h3>{message}</h3>
       </div>
    </>
  )
}

export default DriveCheck


// The DriveCheck component is a simple React component designed to perform a drive eligibility test based on the user's age. Users can input their age, click a "Submit" button, and receive a message indicating whether they are eligible to drive.

// Key Features
// Input and Submit Button:

// Users can input their age into a text field.
// A "Submit" button triggers the eligibility test.
// Eligibility Test:

// The component evaluates the entered age to determine eligibility for driving.
// If the age is greater than 18, a message is displayed indicating eligibility; otherwise, a message indicates ineligibility.
// Dynamic Message Display:

// The component utilizes state (message) to dynamically display the eligibility message based on the test results.