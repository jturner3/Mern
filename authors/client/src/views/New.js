import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import { navigate } from '@reach/router';

const New = () => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState([false]);
    const [errors, setErrors] = useState({});

    useEffect(()=>{
        axios.get('http://localhost:8000/api/author')
            .then(res=>{
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    },[])

    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId));
    }

    const createAuthor = newAuthor => {
        axios.post('http://localhost:8000/api/author', newAuthor)
            .then(res=>{
                setAuthor([...author, res.data]);
                navigate("/");
            })
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <h2>Enter a favorite author</h2>
            <AuthorForm onSubmitProp={createAuthor} initialName="" errors={errors}/>
            <hr/>
        </div>
    )
}
export default New;