import React, {useState} from 'react';
import {hot} from 'react-hot-loader';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Hello world!!</h1>
            <h2 className={count > 5 ? 'warning' : null}>
                Count {count}
            </h2>
            <button onClick={() => setCount(count => count + 1)}>+</button>
            <button onClick={() => setCount(count => count - 1)}>-</button>
        </div>
    )
}

export default hot(module)(App)
