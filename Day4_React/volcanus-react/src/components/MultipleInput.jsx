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
    console.log(formData.name);
    console.log(formData.email);
    console.log(formData.password);
  return (
    <>

      <div className="multiple-input">
      <div className="title">
          <h2>
            Let's Learn <span> Multiple Form Handling</span> In React
          </h2>
        </div>
        <input  name = 'name'type="text" value={formData.name}placeholder="Enter Name" onChange={handleSubmit}/>


        <input  name = 'email' type="email" value={formData.email}placeholder="Enter Email" onChange={handleSubmit}/>
        
        
        <input name = 'password' type="password" value={formData.age}placeholder="Enter Password" onChange={handleSubmit}/>
        <button>Submit</button>
      </div>
        
      
    </>
  );
};

export default MultipleInput;
