import React from 'react';

const DisplayHello = (props) => {

    return (
        <div>
            <p>The word is: {props.word}</p>
        </div>
    )
}
export default DisplayHello;