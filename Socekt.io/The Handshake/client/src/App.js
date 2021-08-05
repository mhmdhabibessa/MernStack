import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';
 
function App() {
  // notice that we pass a callback function to initialize the socket
  // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
  const [socket] = useState(() => io(':8000'));
 
  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    
    socket.on('Welcome', data => console.log(data));
 
    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true);
  }, []);
 
  return (
    <div className="App">
     <header className="App-header"> 
     <h1> Hello Mohammd how are you ? </h1> 
     </header>
    </div>
  );
}
 
export default App;