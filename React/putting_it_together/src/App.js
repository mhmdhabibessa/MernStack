import './App.css';
import React from 'react';
import MyComponent from './Components/MyComponents';
function App() {
  return (
    <div className="App">
      <MyComponent firstName="Doe" lastName="Jan" Age={23} color="Black" /> 
      <MyComponent firstName="Smith" lastName="Jon" Age={88} color="Yellow" /> 
      <MyComponent firstName="Carlla" lastName="Janifer" Age={27} color="brown" />    
    </div>
  );
}

export default App;

