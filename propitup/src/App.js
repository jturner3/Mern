import './App.css';
import PersonCard from './components/PersonCard.js';

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName = {"Jane"}
        lastName = {"Doe"}
        age = {45}
        hairColor = {"Red"}/>
      <PersonCard
        firstName = {"John"}
        lastName = {"Smith"}
        age = {88}
        hairColor = {"Purple"}/>
      <PersonCard
        firstName = {"Runo"}
        lastName = {"Mercedez"}
        age = {25}
        hairColor = {"Silver"}/>
      <PersonCard
        firstName = {"Steve"}
        lastName = {"Jobs"}
        age = {60}
        hairColor = {"Brown"}/>
    </div>
  );
}

export default App;