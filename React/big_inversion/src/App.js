import logo from './logo.svg';
import './App.css';
import PersonCard from './Components/PersonCard'

function App() {
  return (
    <div className="App">
        
        <PersonCard firstName="Jou" lastName="Dou" age={22} hairColor="Black" />
        <PersonCard firstName="Essa" lastName="Mohammad" age={29} hairColor="Brown" />
      
        <PersonCard firstName="shareef" lastName="Aws" age={88} hairColor="Yellow" />
    </div>
  );
}

export default App;
