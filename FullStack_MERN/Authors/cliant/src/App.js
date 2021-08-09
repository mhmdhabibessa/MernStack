import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import TabelsAuthor from './components/TabelsAuthor';
import UpdateAuthor from './components/UpdateAuthor' 
import AuthorForm from './components/AuthorForm'
function App() {

  

  return (
    <div className="App">

    <header className="App-header">

    <Router>
          <AuthorForm path="/new" />
          <TabelsAuthor path="/"/>
          <UpdateAuthor path='/update/:id'/>


   </Router>
      
     
     
       


    </header>
    </div>
  );
}
export default App;
