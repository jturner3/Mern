import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form.js';
import ProductList from '../components/ProductList.js';


const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data)
                setProducts(res.data.products);
                setLoaded(true);

            })
            .catch(err => console.log(err))
    }, [])
    const deleteProductFromList = productId => {
        setProducts(products.filter(products => products._id != productId));
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Product Manager</h2>
            <Form />
            <hr />
            {loaded && <ProductList products={products} deleteProductFromList={deleteProductFromList} />}
        </div>
    )
}
export default Main;