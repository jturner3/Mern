import UserForms from './components/UserForms.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <UserForms 
          firstName = {""}
          lastName = {""}
          email = {""}
          password = {""}
          confirmPassword = {""}/>
    </div>
  );
};

export default App;