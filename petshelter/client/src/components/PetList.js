import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';


export default props => {

    const getEverything = () => {
        Axios.get("http://localhost:8000/api/pets")
            .then(res => setPets(res.data))
            .catch(err => console.log(err));
    };

    const [pets, setPets] = useState([]);
    useEffect( () => {
        getEverything();
    }, []);

    return(
        <div className="container">
            <h1>Pet Shelter</h1>
            <h3>These pets are looking for a home</h3>
            <table className="table table-hover table-striped">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    {
                        pets.map( pet =>
                            <tr key={pet._id}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td><Link to={`/pet/${pet._id}`} className="btn-link"> Details</Link></td>
                                <td><Link to={`/edit/${pet._id}`} className="btn-link" >Edit</Link></td>
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}