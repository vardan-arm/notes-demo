import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { API_HOST } from './configs';

function App() {
  useEffect(() => {
    // TODO: move this to its correct place
    async function fetchData() {
      const res = await fetch(`${API_HOST}/api/getInitialNotes`);
      const data = await res.json();
      
      console.log({data});
    }

    fetchData();

  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
