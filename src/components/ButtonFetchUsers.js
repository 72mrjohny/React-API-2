import React from 'react';

const ButtonFetchUsers = props => {
    return (
        <button style={{
            padding: '10px 20px',
            border: '2px solid black',
            backgroundColor: 'white',
            margin: 20,
            textTransform: 'uppercase'
        }} onClick={props.click}>Wczytaj 5 użytkowników</button>
    );
}
export default ButtonFetchUsers;