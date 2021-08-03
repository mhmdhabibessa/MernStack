import React from 'react';
import './App.css';
import  Main from './Views/Main'
import { Router } from '@reach/router';
import TabelsAuthor from './components/TabelsAuthor';
import UpdateAuthor from './components/UpdateAuthor' 
function App() {

  

  return (
    <div className="App">

    <header className="App-header">

    <Router>
          <Main  path="/new" />
          <TabelsAuthor path="/"/>
          <UpdateAuthor path='/update/:id'/>


   </Router>
      
     
     
       


    </header>
    </div>
  );
}
export default App;
