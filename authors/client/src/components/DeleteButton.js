import React from 'react';
import axios from 'axios';
const DeleteButton = (props) => {
    const { authorId, successCallback } = props;
    const deleteProduct = event => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res=>{
                console.log(res);
                successCallback();
            })
            .catch(err=>{
                console.log(err);
            })
    }
    return(
        <button className="btn btn-danger" onClick={ deleteProduct }>Delete</button>
    )
}
export default DeleteButton;