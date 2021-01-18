import React, { useState, useEffect } from 'react';

import './App.css';

function App() {

  const [data, setData] = useState({});

  const api = "https://api.coindesk.com/v1/bpi/currentprice.json"
  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setData(result);
        }
      )
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {JSON.stringify(data)}
        </p>
      </header>
    </div>
  );
}

export default App;
