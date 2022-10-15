import React, {Component, useState} from "react";


import '../styles/App.css';
import ProjectList from '../components/ProjectList';

function App() {
  return (
    <div className="App">
     <ProjectList name="html" description="html project with e-commerce"/>
     <ProjectList name="css" description="css project with e-commerce"/>
     <ProjectList name="javsacript" description="javascript project with e-commerce"/>
     <ProjectList name="reactjs" description="reactjs project with e-commerce"/>
    </div>
  );
}

export default App;
