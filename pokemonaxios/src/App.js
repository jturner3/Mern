import './App.css';
import React, {useState, useEffect} from 'react';


function App() {
  const [monster, setMonster] = useState([]);

    useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(response => response.json())
    .then(response => setMonster(response.results))
    }, []);
  


  return (
    <div style={{width:"100%" ,height:"100%", margin:"auto", textAlign:"center"}}>
    <button>Fetch Pokemon</button>  
    {monster.length > 0 && monster.map((monster)=>{
        return (<div >{monster.name}</div>)
    })}
    {monster.length > 0 && monster.map((monster)=>{
        return (<div >{monster.weight}</div>)
    })}
    </div>
  );
}

export default App;