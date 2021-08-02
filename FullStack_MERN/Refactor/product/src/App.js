import React from 'react';
import './App.css';
import  Main from './Views/Main'
import { Router } from '@reach/router';
import { useState } from 'react';
import Details from './components/Details';
import Update from './Views/Update';
import DeleteButton from './components/DeleteButton';
function App() {
 
  return (
    <div className="App">

    <header className="App-header">

    <Router>
          <Main  path="/" />
          <Details   path="people/:id"  />

        <Update path="people/:id/edit"/>
   </Router>
      
     
     
       


    </header>
    </div>
  );
}
export default App;
