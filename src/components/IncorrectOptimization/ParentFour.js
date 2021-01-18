import React,{ useState, useMemo, useCallback} from 'react';
import ChildFive from './ChildFive';

export const ParentFour = ({ children }) => {
    const [count, setCount] = useState(0);
    const [name,setName] = useState('Tai')
    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    }

    const memoizedPerson = useMemo(() => person, [])

    console.log('ParentFour Render');
    const handleClick = () => {

    }

    const memoizedHandleClick = useCallback(() => handleClick,[])
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Codevolution')}>Change Name</button>

            <ChildFive name={name} person={memoizedPerson} handleClick={ memoizedHandleClick}/>
           {/*  <ChildThree name={name}>
               <strong> Hello</strong>
            </ChildThree>*/}
        </div>
    );
}

export default ParentFour;