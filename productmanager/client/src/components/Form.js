import React, { useState } from 'react';
import axios from 'axios';


const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, price, description)
    axios.post("http://localhost:8000/api/products", {
        title : title,
        price : price,
        description : description
    })
        .then(res => {console.log(res)
        setTitle("");
        setPrice(0);
        setDescription("");})
        .catch(err => console.log(err)) 

};

return( 
    <div style ={{textAlign: "center"}}>
        <form onSubmit = {submitHandler}>
            <p><label>Title: </label> 
            <input type="text" value={title} name="title" onChange={ (e) => setTitle(e.target.value) } /></p>
            <p><label>Price: </label> 
            <input type="number" value={price} name="price" onChange={ (e) => setPrice(e.target.value) } /></p>
            <p><label>Description: </label> 
            <input type="text" value={description} name="description" onChange={ (e) => setDescription(e.target.value) } /></p>
            <p><button>Submit</button></p>
        </form>
    </div>
)};

export default Form;