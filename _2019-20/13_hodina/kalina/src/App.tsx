import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component<{}, {coins:any}> {
  constructor(props: any) {
    super(props)

    this.state = {coins: []}

    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
    .then((response) =>{
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then((dataCoins) => {
          this.setState({coins: dataCoins});
        });
      });
  }

  render() {
    return (
      <div className="App">
        <table>
          {this.state.coins.map((coin: any)=>{
            return <tr><td>{coin.name}</td><td>{coin.price_usd}</td></tr>
          })}
        </table>
      </div>
    );
  }
}

export default App;
