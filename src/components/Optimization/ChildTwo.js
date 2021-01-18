import React from 'react';


function ChildTwo(props) {
    console.log('ChildTwo Render');
    return (
        <div>
            ChildTwo Component
        </div>
    );
}

export default React.memo(ChildTwo);