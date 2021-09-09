
import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import DisplayNum from './components/DisplayNum';
import DisplayHello from './components/DisplayHello';
import DisplayColor from './components/DisplayColor';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <DisplayNum path="/:number"/>
        <DisplayHello path="/hello/:word"/>
        <DisplayColor path="/hello/:color/:bgColor/:word"/>
      </Router>
      
    </div>
  );
}

export default App;