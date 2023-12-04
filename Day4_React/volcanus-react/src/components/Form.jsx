import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="container">
        <div className="title">
          <h2>
            Let's Learn <span> Form Handling</span> In React
          </h2>
        </div>
        
        <div className="form-container">
          <div className="name">
            <label htmlFor="user-name">Name</label>
            <input
            name="user-name"
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button>Submit</button>
          </div>
          <div className="email">
            <label htmlFor="user-email">Email</label>
            <input
            name="user-email"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>Submit</button>
          </div>
          <div className="password">
            <label htmlFor="user-password">Password</label>
            <input
            name="user-password"
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
