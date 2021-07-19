import logo from './logo.svg';
import './App.css';

import ToDoList from './ToDoList'
import { useState } from "react";

function App() {
  const [currentMsg, setCurrentMsg] = useState("");
    
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
  }
  return (
    <div className="App">
      <ToDoList onNewMessage={ youveGotMail }  message={ currentMsg } />
      

    </div>
  );
}

export default App;
