import React from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
const ProductList = (props) => {
    const { deleteProductFromList } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            // console.log(productId)
            .then(res => deleteProductFromList(productId))
            .catch(err => console.log(err))
    }
    return (
        <div>
            {props.products.map((products, idx) => {
                // <Link to={"/people/" + products._id + "/edit"}>Edit</Link>
                // return <p key={idx}>{products.title}</p>
                return <p key={idx}>
                    <Link to={"/products/" + products._id}>
                        {products.title}
                    </Link>
                    |
                    <Link to={"/products/" + products._id + "/edit"}>
                        Edit
                    </Link>
                    |
                    <button onClick={(e) => { deleteProduct(products._id) }}>
                        Delete
                    </button>
                </p>
            })}

        </div>
    )
}
export default ProductList;