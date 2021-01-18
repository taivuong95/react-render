import React,{useState} from 'react';

const initialState = {
    fname: 'Bruce',
    lname: 'Wayne'
}

function ObjectUseState(props) {
    const [person, setPerson] = useState(initialState)
    
    const changeName = () => {
        const newPerson = { ...person };
        newPerson.fname = 'Clark';
        newPerson.lname = 'Kent'
        setPerson(newPerson);
    }
    console.log('ObjectUseState Render');
    return (
        <div>
            <button onClick={changeName }>{person.fname} {person.lname }</button>
        </div>
    );
}

export default ObjectUseState;