import React from 'react';
import './App.css';
import { useState } from 'react';
import { Router } from '@reach/router';
import CreateProject from './components/CreateProject'
import Dashboard from './components/Dashboard'

function App() {



 

  return (
    <div className="App">

    <header className="App-header">

    <Router>
          <CreateProject path="/new" />

          <Dashboard path="/"/> 
         
         

   </Router>
      
     
     
       


    </header>
    </div>
  );
}
export default App;
