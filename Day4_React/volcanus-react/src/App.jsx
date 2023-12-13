// import React from 'react';
import "./App.css";

// import Person from './components/Person';
// import DriveCheck from './components/DriveCheck';
// import Props from "./components/Props";

// import Counter from "./components/Counter";
// import AutoType from "./components/AutoType";

// import Information from "./components/Information";

import Products from "./components/Products";
// import Use_effect from "./components/Use_effect";

// import Fetch_data from "./components/Fetch_data";

// import Form from "./components/Form";
// import MultipleInput from "./components/MultipleInput";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Router/Home";
// import Home from './Router/Home'
import About from "./Router/About";
import Contact from "./Router/Contact";
import Career from "./Router/Career";
import Routing from "./components/Routing";
import ProductDetail from "./components/ProductDetail"
// import IndianGov from "./components/IndianGov";
import TestCounter from "./test/TestCounter";

const App = () => {
  return (
    <>
      <Router>
        {/* nav bar component */}
        {/* <IndianGov /> */}
        <TestCounter></TestCounter>
        <Routing/>
        
        <Routes>
          <Route path={'/'} element={<Products/>} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/career"} element={<Career />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/product/:id"} element={<ProductDetail />} />
          {/* <div> */}
        {/* <DriveCheck></DriveCheck> */}
          {/* <Person></Person> */}

          {/* Renders the Props component and passes the prop name={'amit'} to demonstrate the use of props */}
          {/* The App component renders the Props component, showcasing how props can be passed from a parent component. */}
          {/* <Props name={'amit'}/> */}

          {/* It shows usage of useState */}
          {/* <Counter/> */}

          

          {/* <Information/> */}

          {/* <Products/> */}

          {/* <Use_effect/> */}

          {/* <Fetch_data/> */}
          {/* <Form/> */}
          {/* <MultipleInput/> */}
      {/* </div> */}
        </Routes>
        
      </Router>

    </>
  );
};

export default App;
