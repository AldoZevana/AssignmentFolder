import React, {useEffect, useState} from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom';
import axios from 'axios';


const Update = () => {
    
    const [newName, setNewName] = useState('');
    const {id} = useParams();
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState('');

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res)=> {
            
            setNewName(res.data.name)
            
            setLoaded(true)
        })
        .catch((err)=> {
            console.log(err)
        })
    },[])
    
    

    const [buttonName, setButtonName] = useState('');
    
    console.log(newName)
    
    const navigate = useNavigate();

    const submitNewName = (buttonName, e) => {
        e.preventDefault();
        if (buttonName === 'cancel'){
            navigate('/home')
        }else{
            axios.put(`http://localhost:8000/api/authors/edit/${id}`, {
                name: newName
            })
            .then((res)=> {
                console.log(res)
                navigate('/home')
            })
            .catch((err)=> {
                //add validation
                setError(err.response.data.errors.name.message)
                console.log(err)
            })
        }
    }
    

    return (
        <div>
            {
                loaded ? 
                <div>
                    <h1>Favorite authors</h1>
                    <Link to ='/home'>Home</Link>
                    <p>Edit this author</p>
                    <div>
                        <form onSubmit={(e) => {submitNewName(buttonName, e)}}>
                            <div>

                                <label>Name: </label>
                                <input type = 'text' value = {newName} onChange = {(e)=> setNewName(e.target.value)}/>
                            </div>
                            <div>

                                {
                                    error ? 
                                    <p>{error}</p> : null
                                }
                            </div>
                            <div>

                                <button value='cancel' onClick = {(e)=> {setButtonName(e.target.value)}}>Cancel</button>
                                <button value='submit' onClick = {(e)=> {setButtonName(e.target.value)}}>Submit</button>
                            </div>
                            
                        </form>
                    </div>
                </div> : null
            }
        </div>
    );
}

export default Update;