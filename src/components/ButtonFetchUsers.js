import React from 'react';

const ButtonFetchUsers = props => {
    return (
        <button onClick={props.click}>Wczytaj 5 użytkowników</button>
    );
}

export default ButtonFetchUsers;