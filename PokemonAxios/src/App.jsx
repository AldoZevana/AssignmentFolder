import React, { useState } from 'react';
import './App.css';
import FetchPokemon from "./components/FetchPokemon"
import DisplayPokemon from './components/DisplayPokemon';


function App() {
  const [pokemon, setPokemon] = useState([])

  return (
    <div>
      <FetchPokemon pokemon={ pokemon } setPokemon={ setPokemon } />
      <DisplayPokemon pokemon={ pokemon }/>
    </div>
  );
}

export default App;