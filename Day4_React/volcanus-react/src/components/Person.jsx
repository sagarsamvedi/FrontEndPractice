import { useState } from "react";
import '../assets/Person.css'

const Person = () => {
    
    const persons = [
        { name:'sagar',age:23,gender: 'Male'},
        { name: 'Alice', age: 30, gender: 'Female' },
        { name: 'Bob', age: 25, gender: 'Male' },
        { name: 'Eva', age: 28, gender: 'Female' },
        { name: 'Charlie', age: 22, gender: 'Male' },
        { name: 'Grace', age: 35, gender: 'Female' },
        { name: 'David', age: 29, gender: 'Male' },
        { name: 'Sophie', age: 26, gender: 'Female' },
        { name: 'John', age: 31, gender: 'Male' },
        { name: 'Olivia', age: 27, gender: 'Female' },
    ]
    const [matchedPerson, setMatchedPerson] = useState(null);
    function displayPersonInfo(){
        let personName = document.querySelector('#name').value;
        let matchedPerson = persons.find(person => person.name.toLowerCase() === personName.toLowerCase());
        setMatchedPerson(matchedPerson);
    }
  return (
    <>
        <input type="text" id = 'name' placeholder="enter your name"/>
        <button onClick={displayPersonInfo}>Submit</button>
        {matchedPerson && (
        <div>
          <h3>Person Information:</h3>
          <p>Name: {matchedPerson.name}</p>
          <p>Age: {matchedPerson.age}</p>
          <p>Gender: {matchedPerson.gender}</p>
        </div>
      )}
      {matchedPerson === null && (
        <p>Enter a name to get person information.</p>
      )}

      {matchedPerson === undefined && (
        <p>No data found for the entered name.</p>
      )}

    </>
  )
}

export default Person


// The Person component is a simple React component designed to allow users to enter a name and display information about a person if a match is found in a predefined dataset.

// Key Features
// Input and Submit Button:

// Users can input a name into a text field.
// A "Submit" button triggers the search for a person with the entered name.
// Data Matching:

// The component contains a predefined dataset of persons with properties like name, age, and gender.
// When the user clicks "Submit," the entered name is compared to the dataset, and if a match is found, the person's information is displayed.
// Conditional Rendering:

// The component uses state (matchedPerson) to keep track of the matched person.
// It conditionally renders information about the matched person or messages based on whether a match is found or not.