import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Detail = (props) => {
    const [author, setAuthor] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + props.id)
            .then(res => setAuthor({
                ...res.data
            }))
            .catch(()=> {
                alert("Author not found, redirecting to home");
                navigate('/');
            })
    },[])
    return (
        <div>
            <h3>Author details</h3>
        <p>Author name: {author.name}</p>
        </div>
    )
}
export default Detail;