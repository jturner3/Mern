import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

const Main = () => {
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
                setAuthor([...author, res.data])
            })
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            { loaded && <AuthorList author={author} removeFromDom={removeFromDom}/>}
        </div>
    )
}
export default Main;