import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';
 
                
function App() {
  return (
    <div className="app">
        <Header />
        <Navigation />
        <Main>
  <div className="aws">
            <SubContents />
            <SubContents />
            <SubContents />
</div>
      <div>
            <Advertisement/>
    </div>
        </Main>
    </div>
  );
}
                
export default App;
