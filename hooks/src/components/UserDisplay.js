import React from 'react';

const UserDisplay = (props) =>{
    const {results} = props;
    return( 
        <div className="UserDisplay">
            <h2>Your Form Data</h2>
            <p>First Name: { results.firstName }</p>
            <p>Last Name: { results.lastName }</p>
            <p>Email: { results.email }</p>
            <p>Password: { results.password }</p>
            <p>Confirm Passwlrd: { results.confirmPassword }</p>   
        </div>
    );
};
export default UserDisplay;