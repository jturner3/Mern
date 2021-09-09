import React from 'react';

const Detail = props => {
    return (
        <div style={{color: `${props.fcolor}`, backgroundColor: `${props.bcolor}`}}>
        {
            isNaN(props.id)?
            <p>The word is {props.id}</p>
            :<p>The number is {props.id}</p>
        }
        </div>
    )
}

export default Detail;