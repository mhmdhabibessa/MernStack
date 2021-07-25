import React from 'react';
import { Router } from '@reach/router';
import Home from './Home';
import HomeNumber from './HomeNumber';
import { HomewithText } from './HomewithText';
import HomeWithstyle from './HomeWithstyle';

function App() {
  return (
    <div className="App">
        <Router>
            <Home path="/home"/>
            <HomeNumber path=":id"/>
            <HomewithText path="/:word"/>
            <HomeWithstyle path="/:word/:color/:backgraund"/>
        </Router>
    </div>
  );
}
export default App;
