import React, { useState } from 'react';
import axios from 'axios';
const AuthorForm = (props) => {
    
    // preserve inputs using state hooks
    const { initialName, onSubmitProp, errors } = props;
    const [name, setName] = useState(initialName);

    const submitHandler = event => {
        // prevent fields from clearing by default
        event.preventDefault();
        onSubmitProp({ name, errors });
    }

    return (
        <form onSubmit={submitHandler}>
            <p>
                <label>Name:</label>
                <input type="text" value={name} onChange = {(event)=>setName(event.target.value)}/>
                { errors.name ?
                    <p>{errors.name.message}</p>
                    :null
                }
            </p>
            <input type="submit"/>
        </form>
    )
}
export default AuthorForm;