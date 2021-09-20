import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import NavBar from './components/NavBar';
import New from './views/New';

function App() {
  return (
    <div class="container">
      <NavBar/>
      <Router>
        <Main default/>
        <Detail path="/:id"/>
        <Update path="/:id/edit"/>
        <New path="/new"/>
      </Router>
    </div>
  );
}

export default App;