import './App.css';
import React from 'react';
import MyComponent from './Components/MyComponent';
function App() {
  return (
    <div className="App">
      <MyComponent firstName="Doe" lastName="Jan" Age={23} color="Black" /> 
      <MyComponent firstName="Smith" lastName="Jon" Age={88} color="Yellow" /> 
      <MyComponent firstName="Filimmor" lastName="fokooo" Age={33} color="Red" /> 
      <MyComponent firstName="Carlla" lastName="Janifer" Age={27} color="brown" />    
    </div>
  );
}

export default App;

