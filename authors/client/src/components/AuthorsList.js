import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    const [author, setAuthor] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => setAuthor(res.data));
    },[])

    const { removeFromDom } = props;
    
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId);
            })
    }

    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
            {props.author.map((author, idx) => {
                return (
                    <tr key={idx}>
                        <td><Link to={"/" + author._id} style={{ paddingRight: "10px" }}>{author.name}</Link></td>
                        <td><button type="button" class="btn btn-info" ><Link to={"/" + author._id + "/edit"} style={{ color: "white", textDecoration: "none" }}>Edit</Link></button>
                        &nbsp;&nbsp;<DeleteButton authorId={ author._id } successCallback={()=>removeFromDom(author._id)}/></td>
                    </tr>
            )})}
            </tbody>
            </table>
        </div>
    )
}

export default AuthorList;