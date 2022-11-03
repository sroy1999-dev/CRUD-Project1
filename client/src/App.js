import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import './App.css';
import Register from './Components/Register';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
      </Routes>
    </>
  );
}

export default App;
