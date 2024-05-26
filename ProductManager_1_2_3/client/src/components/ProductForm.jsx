import React, { useState } from 'react'
import axios from 'axios';
import styles from "./Components.module.css"
const ProductForm = () => {
    const [title,setTitle] = useState(""); 
    const [price,setPrice] = useState(0);
    const [description, setDescription]=useState("");
    
    const onSubmitHandler = (e) => {
        
        e.preventDefault();
    
        axios.post('http://localhost:8000/api/product', {
            title,
            price,    
            description
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <div className={styles.dFlex}>
                <label>Title</label><br/>
                <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </div>
            <div className={styles.dFlex}>
                <label>Price</label><br/>
                <input type="number" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </div>
            <div className={styles.dFlex}>
                <label>Description</label><br/>
                <input type="text" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
            </div>
            <button type="submit">Create</button>
        </form>
    )
}
export default ProductForm;

