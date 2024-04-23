import React, { useState } from 'react';

import './App.css';

function App() {

  const [data, setData] = useState({});

  const api = "https://api.coindesk.com/v1/bpi/currentprice.json"
  React.useEffect(async () => {
    const fetchData = await fetch(api)
    const fetchJson = await fetchData.json();
    setData(fetchJson)
    console.log(fetchJson)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {data && data.bpi && Object.keys(data.bpi).map((item) => data.bpi[item].description)}
        </p>
      </header>
    </div>
  );
}

export default App;
