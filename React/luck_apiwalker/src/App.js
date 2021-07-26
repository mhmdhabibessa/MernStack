import './App.css';
import { Router } from '@reach/router';
import Form from './components/Form'
import People from './components/People';
import Planet from './components/Planet';




function App() {
  return (
    <div className="App">
          <Form />

        <Router>
            <People  path="/people/:id" />
            <Planet path='/planet/:id' />
        </Router>
    </div>         
  );
}

export default App;
