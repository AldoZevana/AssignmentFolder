import './App.css';
import {BrowserRouter, Routes, Route, Navigate, NavLink} from 'react-router-dom';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm';
import PlayerStatus from './components/PlayerStatus';
import {useState} from 'react';



function App() {
  const [playerList, setPlayerList] = useState([]);
  const [stat, setStat] = useState('Undecided')
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  return (
    <BrowserRouter>
      <div className="App">
        <h1>
          <NavLink to ='/players/list'>Manage Players</NavLink>
          |
          <NavLink to = '/players/status/game/1'>Manage Player Status</NavLink>

        </h1>
        <Routes>
          <Route path = '/players/list' element = {<PlayerList playerList={playerList} setPlayerList={setPlayerList}/>}/>
          <Route path = '/players/addplayer' element = {<PlayerForm playerList = {playerList} setPlayerList={setPlayerList} stat={stat} setStat={setStat}
          name={name} setName={setName} position={position} setPosition={setPosition}/>}/>
          <Route path = '/players/status/game/:num' element = {<PlayerStatus playerList={playerList} setPlayerList={setPlayerList} stat={stat} setStat={setStat}
          name={name} setName={setName} position={position} setPosition={setPosition} />}/>
          <Route path = '/' element = {<Navigate to = '/players/list'/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;