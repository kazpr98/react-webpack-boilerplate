import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

const Warning = React.lazy(() => import('./Warning'));

function App() {
  const [count, setCount] = useState(0);
  return (
    <main role="main">
      <h1>Hello world!!</h1>
      <h2 className={count > 5 ? 'warning' : null}>Count {count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      {count > 5 ? (
        <React.Suspense fallback={null}>
          <Warning />
        </React.Suspense>
      ) : null}
    </main>
  );
}

export default hot(module)(App);
