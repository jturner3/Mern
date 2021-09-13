import UserForm from './components/UserForm.js'
import UserDisplay from './components/UserDisplay.js'
import './App.css';
import { useState } from 'react';

function App() {
  const [ results, setResults] = useState({});
  return (
    <div className="App">
      <UserForm 
        results = {results} setResults = {setResults}/>
      <UserDisplay
        setReslts = {setResults} results = {results}/>
    </div>
  );
}

export default App;