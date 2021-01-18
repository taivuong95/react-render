import React,{ useState} from 'react';
import ChildFour from './ChildFour';
import ChildThree from './ChildThree';

export const ParentThree = ({ children }) => {
    const [count, setCount] = useState(0);
    const [name,setName] = useState('Tai')

    console.log('ParentThree Render');
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Codevolution')}>Change Name</button>

            <ChildFour name={name}/>
           {/*  <ChildThree name={name}>
               <strong> Hello</strong>
            </ChildThree>*/}
        </div>
    );
}

export default ParentThree;