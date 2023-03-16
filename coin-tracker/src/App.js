import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState('');
  const [usd, setUsd] = useState(0);
  const onChange = (e) => {
    setSelectedCoin(e.target.value);
  };
  const onChange2 = (e) => {
    setUsd(e.target.value);
  };
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setSelectedCoin(
          `${json[0].name} (${json[0].symbol}) : $${json[0].quotes.USD.price} USD`
        );
      });
  }, []);
  return (
    <div>
      <h1>The Coins Infomation {loading ? '' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading . . .</strong>
      ) : (
        <select onChange={onChange} value={selectedCoin}>
          {coins.map((el, index) => (
            <option key={index}>
              {el.name} ({el.symbol}) : ${el.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <input
        onChange={onChange2}
        value={usd}
        type='text'
        placeholder='Write USD'
      ></input>
      <div>
        {loading
          ? null
          : 'You can buy' +
            ' ' +
            usd / +selectedCoin.split(' ')[3].replace('$', '') +
            ' ' +
            `${selectedCoin.split(' ')[1]}`}
      </div>
    </div>
  );
}

export default App;
