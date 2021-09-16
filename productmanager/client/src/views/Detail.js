import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Detail = (props) => {
    const [products, setProducts] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
                console.log(res.data);
                setProducts(res.data.product)
            })
            .catch(err => console.log(err))  
    }, [])
    return (
        <div style = {{textAlign: "center"}}>
            <p>Title: {products.title}</p>
            <p>Price: {products.price}</p>
            <p>Description: {products.description}</p>
        </div>
    )
}
export default Detail;