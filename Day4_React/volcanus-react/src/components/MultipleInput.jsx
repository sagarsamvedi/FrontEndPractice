import { useState } from "react";

const MultipleInput = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })

    const handleSubmit = (e) => {
        setFormData({...formData,[e.target.name]:[e.target.value]})
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        alert("Your Form is Submitted");
        setFormData({
            name:'',
            email:'',
            password:''
        })
    }
    // console.log(formData.name);
    // console.log(formData.email);
    // console.log(formData.password);
  return (
    <>

      <div className="multiple-input">
      <div className="title">
          <h2>
            Learn <span> Multiple Form Handling</span> In React
          </h2>
        </div>
        <form onSubmit={submitHandler}>

        <input  name = 'name'type="text" value={formData.name}placeholder="Enter Name" onChange={handleSubmit}/>


        <input  name = 'email' type="email" value={formData.email}placeholder="Enter Email" onChange={handleSubmit}/>
        
        
        <input name = 'password' type="password" value={formData.age} placeholder="Enter Password" onChange={handleSubmit}/>

        <button>Submit</button>
        </form>
      </div>
        
      
    </>
  );
};

export default MultipleInput;
