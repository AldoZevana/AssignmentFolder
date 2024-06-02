
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const AuthorList = (props) => {
    const {authorList, setAuthorList} = props;
    const navigate = useNavigate();

    const removeItem = (itemId) => {
        axios.delete(`http://localhost:8000/api/authors/${itemId}`)
        .then((res)=> {
            console.log(res)
            const newList = authorList.filter((item)=> {
                return item._id !== itemId
            })
            setAuthorList(newList)
        })
        .catch((err)=> {
            console.log(err)
        })
    }




    //each item in map is object with _id, name, etc.
    return (
        <div>
            <div>

                <h1>Favorite authors</h1>
                <Link to = '/new'>Add an author</Link>
                <p>We have quotes by:</p>
            </div>
            <div>

                <table>
                    <thead>
                        <tr>
            
                            <th>Author</th>
                            <th>Actions available</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        authorList.map((item, index)=> {
                            return <tr key = {item._id}>
                    
                                <td>{item.name}</td>
                                <td>
                                    <button onClick = {()=> navigate(`/authors/edit/${item._id}`)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick = {()=> removeItem(item._id)}>Delete</button>
                                </td>
                                {console.log(item._id)}
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>


        </div>
    );
}

export default AuthorList;
