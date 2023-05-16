import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const incrementCountByTen = () => {
        setCount(count + 10);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incrementCountByTen}>Increment by 10</button>
            <button onClick={incrementCount}>Increment by 1</button>
        </div>
    );
}

export default Counter;