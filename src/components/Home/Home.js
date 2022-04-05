import React, { useState } from 'react';

const Home = () => {
    const [count , setCOunt] = useState(0)
    const number = 15;
    const increseCount = ()=>{
        setCOunt(count + 1)
    }
    return (
        <div>
            <button onClick={increseCount}>Click Me</button>
            <p>Number Count: {count}</p>
            <p>Number: {number}</p>
        </div>
    );
};

export default Home;