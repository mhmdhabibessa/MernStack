import React from 'react';
import './App.css';
import  Main from './Views/Main'
import { Router } from '@reach/router';
import Details from './components/Details';
function App() {
  return (
    <div className="App">

    <header className="App-header">

    <Router>
          <Main  path="/" />
        <Details   path="people/:id" />
   </Router>
      
     
     
       


    </header>
    </div>
  );
}
export default App;
