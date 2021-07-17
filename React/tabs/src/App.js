import React from 'react';
 import Tabs from "./Tabs"; 
 import {  useState} from "react";
import "./App.css";
function App() {
  const [alltabs,setAlltabs] = useState(
    {
      data :[
        "Tab 1   content is showing here",
        "Tab 2   content is showing here",
        "Tab 3   content is showing here"
      ],
      numberofTabs:0,

    }
  )
  return (
  
    <div>
      <h1>Tabs Demo</h1>
     <Tabs alltabs={alltabs} setAlltabs={setAlltabs} >
        </Tabs> 
        
    </div>
    
  );
}

export default App;
