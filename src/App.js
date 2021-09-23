import { Home } from "./components/Home/home";
import React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Home/>     
      </BrowserRouter>
    </React.Fragment>   
  );
}

export default App;
