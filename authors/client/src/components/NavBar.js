import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const NavBar = (props) => {
    return (
        <div>
            <h1>Favorite Authors</h1>
            <ul style={{ display: "flex", alignItems: "flex-start", listStyle: "none" }}>
                <li><Link style={{ textDecoration: "none", fontSize: "14pt", paddingRight: "50px" }} to="/">Home</Link></li>
                <li><Link style={{ textDecoration: "none", fontSize: "14pt" }} to="/new">Add new author</Link></li>
            </ul>
            <hr />
        </div>
    );
}

export default NavBar;