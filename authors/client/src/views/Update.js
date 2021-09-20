import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(() => {
                alert("Author not found, redirecting to home");
                navigate("/");
            })
}, []);

const updateAuthor = author => {
    // event.preventDefault();
    axios.put('http://localhost:8000/api/author/' + id, author)
        .then(res => {
            console.log(res);
            navigate("/")})
        .catch(err => {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        })
    }

return (
    <div>
        <h3>Update an Author</h3>
        { loaded && (
            <>
            <AuthorForm onSubmitProp={ updateAuthor }
                initialName={ author.name }
                errors={errors}
                />
                <DeleteButton authorId={ author._id } successCallback={()=>navigate("/")}/>
                </>
        )}
    </div>
)
}
export default Update;