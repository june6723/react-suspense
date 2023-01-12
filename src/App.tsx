import { Suspense, useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import UserLegacy from './UserLegacy';
import UserWithSuspense from './UserWithSuspense';

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="content">
        <Suspense fallback={<h2 className="user-loading suspense">User Loading...</h2>}>
          <UserWithSuspense userId={userId} />
        </Suspense>
        <UserLegacy userId={userId} />
      </div>
      <div className="card">
        <button onClick={() => setUserId(id => id + 1)}>{`click to change userId`}</button>
      </div>
    </div>
  );
}

export default App;
