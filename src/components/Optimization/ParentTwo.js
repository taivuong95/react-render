import React,{ useState} from 'react';
import ChildTwo from './ChildTwo';

export const ParentTwo = ({ children }) => {
    const [count, setCount] = useState(0);
    const [name,setName] = useState('Tai')

    console.log('ParentTwo Render');
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Codevolution')}>Change Name</button>
            <ChildTwo name={name}/>
        </div>
    );
}

export default ParentTwo;