import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import TabelsPlayer from './components/TabelsPlayer';
import PlayerStatus from './components/PlayerStatus';
import PlayerName from './components/PlayerName';
function App() {

  

  return (
    <div className="App">

    <header className="App-header">

    <Router>
           <PlayerName path="/player/addplay" /> 
          <TabelsPlayer path="/player/list"/>
          <PlayerStatus path="/status/game/:id" />


   </Router>
      
     
     
       


    </header>
    </div>
  );
}
export default App;
