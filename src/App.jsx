import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/register" element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  );
};

export default App;
