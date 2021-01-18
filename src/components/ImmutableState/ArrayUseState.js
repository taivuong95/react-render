import React, { useState } from 'react';

const initialState = ['Bruce', 'Wayne']

function ArrayUseState(props) {
    const [persons, setPersons] = useState(initialState)

    const handleClick = () => {
        // persons.push('Clark');
        // persons.push('Kent')
        // setPersons(persons)
        const newPersons = [...persons];
        newPersons.push('Clark');
        newPersons.push('Kent');
        setPersons(newPersons);
    }

    console.log('ArrayUseState Render');
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            {persons.map(person => {
                return <div key={person}>{ person}</div>
            })}
        </div>
    );
}

export default ArrayUseState;