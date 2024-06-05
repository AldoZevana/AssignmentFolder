import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

const PlayerList = (props) => {

    const {playerList, setPlayerList} = props;
    useEffect(()=> {
        axios.get('http://localhost:8000/api/players/list')
        .then((res)=> {
            console.log(res.data)
            setPlayerList(res.data)
        })
        .catch((err)=> {
            console.log(err)
        })
    },[]);

    const removePlayer = (playerId) => {
        
        if (window.confirm(`Are you sure you want to delete this player?`)) {
            axios.delete(`http://localhost:8000/api/players/list/${playerId}`)
            .then((confirm)=> {
                console.log(confirm)
                const updatedList = playerList.filter((player)=> {
                    return player._id !== playerId
                })
                setPlayerList(updatedList)
            })
        }

    }
    //each item in map is object with _id, playerName
    return (
        <div>
            <h3>
                <NavLink to = '/players/list'>List</NavLink>
                |
                <NavLink to = '/players/addplayer'>Add Player</NavLink>
            </h3>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}>Player Name</th>
                        <th colSpan={2}>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        playerList.map((item, index)=> {
                            return <tr key = {item._id}>
                                <td colSpan={2}>{item.playerName}</td>
                                <td colSpan={2}>{item.preferredPosition}</td>
                                <td><button onClick = {()=> {removePlayer(item._id)}}>Delete</button></td>


                            </tr>
                        })
                    }
                </tbody>
            </table>

            
        </div>
    );
}

export default PlayerList;