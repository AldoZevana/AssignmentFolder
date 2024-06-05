import React, {useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import axios from 'axios';

const PlayerForm = (props) => {
    const {playerList, setPlayerList, stat, name, setName, position, setPosition} = props;
    const navigate = useNavigate();
    
    
    const [errors, setErrors] = useState([]);
    const handleAdd = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players/addplayer', {
            playerName: name,
            preferredPosition: position,
            playerStatus: stat
        })
        .then((res)=> {
            setPlayerList([...playerList, res.data])
            navigate('/players/list')
        })
        .catch((err)=> {
            console.log(err)
            setErrors(err.response.data.errors)
            console.log(err.response.data.errors)
            
        })
    }


    return (
        <div>
            <div>
                <h3>
                    <NavLink to = '/players/list'>List</NavLink>
                    |
                    <NavLink to = '/players/addplayer'>Add Player</NavLink>
                </h3>

                <h3 >Add Player</h3>
                <form onSubmit = {handleAdd}>
                    <div>

                        <label>Player Name: </label>
                        

                        <input type='text' value = {name} onChange = {(e)=>{setName(e.target.value)}}></input>
                        {
                            errors.playerName ? <p>{errors.playerName.message}</p>: null
                        }
                        
                    </div>
                    <div>

                        <label>Preferred Position: </label>
                        <input type='text' value = {position} onChange = {(e)=> {setPosition(e.target.value)}}/>
                    </div>
                    <button>Add</button>
                </form>
            </div>
        </div>
    );
}

export default PlayerForm;