import React, { useState } from 'react';


const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [personAge, setPersonAge] = useState (age);

const ageClickHandler = (event) => {
    let newAge = personAge + 1;
    setPersonAge (newAge);
}

    return(
        <div className = "personCard">
            <h2>{lastName} , {firstName}</h2>
            <p>Age: {personAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick = {(event) => ageClickHandler (event)}>Birthday Button for {lastName} {firstName}</button>
        </div>
    )
}

export default PersonCard;