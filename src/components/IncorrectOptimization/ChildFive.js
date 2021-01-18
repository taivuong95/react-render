import React from 'react';


function ChildFive({ name }) {
    console.log('ChildFive Render');
    return (
        <div>
            Hello {name} 
        </div>
    );
}

export default React.memo(ChildFive);