import React from "react";

import "./App.css";
import ROUTES from "./components/ALLROUTES/ROUTES";

import HeaderT from "./components/PAGEONE/HeaderT";


function App() {
  return (
    <div className="App">
     
      <HeaderT />
      <ROUTES />
      
    </div>
  );
}

export default App;
