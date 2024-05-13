import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import { CommercialProjectsDetails } from "./Data3";
import CommercialProjects from "./CommercialProjects";
import CommercialDeatils from "./CommercialDetails"

// import Projects from "./Components/Projects/Projects";


function App() {
  


  return (
    <div className="App">
      
        <Router>
          <Routes>
            
            <Route path = "/CommercialProjects" element={<CommercialProjects CommercialProjectsDetails={ CommercialProjectsDetails}/>}/>
            <Route path="/CommercialDetails/:id" element={<CommercialDeatils  CommercialProjectsDetails={ CommercialProjectsDetails} />}/>
            
            
          </Routes>
         
        </Router>
    </div>
  );
}

export default App;