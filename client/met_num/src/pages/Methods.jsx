import {useState} from 'react'

function Methods() {
    const [state, setState] = useState(0);
    return (
        <h1 className='text-3xl font-bold'>
            Methods Page
        </h1>
    );
}

export default Methods;