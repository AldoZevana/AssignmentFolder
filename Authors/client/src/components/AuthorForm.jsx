import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Form = (props) => {
    const {authorList, setAuthorList} = props;
    const [name, setName] = useState('');
    const [buttonName, setButtonName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const submitHandler = (button, e) => {
        e.preventDefault();
        console.log(button)
        if (button === 'cancel'){
            navigate('/home')
        }else{
            console.log('hi')
            axios.post(`http://localhost:8000/api/authors`, {
                name
            })
            .then((res)=> {
                setAuthorList([...authorList, res.data])
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
        <div className='w-50 mx-auto d-flex flex-column align-items-start'>
            <h1>Favorite authors</h1>
            <Link to ='/home'>Home</Link>
            <p>Add a new author: </p>
            <div>
                <form onSubmit={(e) => {submitHandler(buttonName, e)}}>
                    <div>

                        <label>Name: </label>
                        <input type = 'text' value = {name} onChange = {(e)=> setName(e.target.value)}/>
                    </div>
                    <div>

                        {
                            error ? 
                            <p danger>{error}</p> : null
                        }
                    </div>
                    <div>

                        <button value='cancel' onClick = {(e)=> {setButtonName(e.target.value)}}>Cancel</button>
                        <button value='submit' onClick = {(e)=> {setButtonName(e.target.value)}}>Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default Form;