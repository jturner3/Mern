import React, { useState } from 'react';


const UserForms = (props) => {
    const {firstName, lastName, email, password, confirmPassword} = props; 
    const [userFirstName, setUserFirstname] = useState(firstName);
    // const [userFirstNameError, setUserFirstNameError] = useState("");
    const [userLastName, setUserLastname] = useState(lastName);
    // const [userLastNameError, setUserLastNameError] = useState("");
    const [userEmail, setUserEmail] = useState(email);
    // const [userEmailError, setUserEmailError] = useState("");
    const [userPassword, setUserPassword] = useState(password);  
    // const [userPasswordError, setUserPasswordError] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState(confirmPassword);  
    // const [userConfirmPasswordError, setUserConfirmPasswordError] = useState("");

    
    const createUser = (e) => {
        e.preventDefault();
        console.log("inside create user function");
        setUserFirstname("");
        // if(e.target.value.length < 2) {
        //     setUserFirstNameError("First name must be at least 2 charactors.");
        // }
        setUserLastname("");
        // if(e.target.value.length < 2) {
        //     setUserLastNameError("Last name must be at least 2 charactors.");
        // }
        setUserEmail("");
        // if(e.target.value.length < 2) {
        //     setUserEmailError("Email must be at least 2 charactors.");
        // }
        setUserPassword("");
        // if(e.target.value.length < 8) {
        //     setUserPasswordError("Password must be at least 2 charactors.");  
        // }  
        setUserConfirmPassword("");
        // if(e.target.value !== userPassword ) {
        //     setUserConfirmPasswordError("Password has to match.");   
        // };
        };

return(
    <div className = "UserForm">
        <form onSubmit={ createUser }>

            <div>
                <label>Firstname: </label> 
                <input type="text" value={userFirstName} name="userFirstName" onChange={ (e) => setUserFirstname(e.target.value) } />
                {
                userFirstName.length > 0?
                    userFirstName.length < 2 ?
                    <p className="error">First Name must be at least 2 charactors.</p>
                    :""
                :""                
                }
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" value={userLastName} onChange={ (e) => setUserLastname(e.target.value) } />
                {
                userLastName.length > 0?    
                    userLastName.length < 2 ?
                    <p className="error">Last Name must be at least 2 charactors.</p>
                    :""
                :""
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={userEmail} onChange={ (e) => setUserEmail(e.target.value) } />
                {         
                userEmail.length > 0?     
                    userEmail.length < 2 ?
                    <p className="error">Email must be at least 2 charactors.</p>
                    :"" 
                :""             
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={userPassword} onChange={ (e) => setUserPassword(e.target.value) } />
                {
                userPassword.length > 0 ?
                    userPassword.length < 8 ?
                    <p className="error">Password must be at least 8 charactors.</p>
                    :""
                :""
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={userConfirmPassword} onChange={ (e) => setUserConfirmPassword(e.target.value) } />
                {
                    userConfirmPassword !== userPassword ?
                    <p className="error">Password has to match.</p>
                    :""
                }
            </div>
            <input type="submit" value="Create User" />
        </form> 
    </div>
);
};

export default UserForms;