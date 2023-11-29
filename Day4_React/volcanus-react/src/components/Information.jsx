import { useState } from "react"


const Information = () => {
    const [person, setPerson] = useState({name:'Unknown',age:null,email:'user@example.com'})

    function Update(){
        setPerson({name: document.querySelector('#name').value,age: document.querySelector('#age').value, email: document.querySelector('#email').value})
    }
  return (
    <>
    <div className="information">
        <h2>Name: {person.name}</h2>
        <h2>Age: {person.age}</h2>
        <h2>Email: {person.email}</h2>
    </div>
    <div>

    <input type="text" placeholder="Enter Name" id = 'name' />
    <input type="text" placeholder="Enter Age" id = 'age' />
    <input type="email" placeholder="Enter Email" id = 'email' />
    </div>
    <button onClick={Update}>Update</button>
    </>
  )
}

export default Information