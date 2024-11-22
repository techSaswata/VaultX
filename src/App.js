import React, { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(1); // Default amount
  const [fromCurrency, setFromCurrency] = useState("INR"); // Default 'From' currency
  const [toCurrency, setToCurrency] = useState("USD"); // Default 'To' currency
  const [result, setResult] = useState(""); // Stores the conversion result

  // Swap the 'fromCurrency' and 'toCurrency'
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult(""); // Clear result when swapping
  };

  // Handle the conversion logic
  const handleConvert = () => {
    // Mock exchange rates for demo purposes
    const exchangeRates = {
      INR: { USD: 0.012, EUR: 0.011 },
      USD: { INR: 83.0, EUR: 0.91 },
      EUR: { INR: 91.5, USD: 1.10 },
    };

    if (fromCurrency === toCurrency) {
      setResult(`1 ${fromCurrency} = 1 ${toCurrency}`);
      return;
    }

    const rate = exchangeRates[fromCurrency]?.[toCurrency];
    if (rate) {
      const convertedAmount = (amount * rate).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
    } else {
      setResult("Conversion rate not available.");
    }
  };

  return (
    <div className="container">
      <h1>🌍 Welcome to VaultX</h1>
      <div className="converter">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Add more currencies if needed */}
        </select>
        <button onClick={handleSwap}>Swap 🔄</button>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Add more currencies if needed */}
        </select>
        <button className="convert-button" onClick={handleConvert}>
          Convert
        </button>
      </div>

      {/* Conditional rendering of the result */}
      {result && <div className="result">{result}</div>}

      {/* Footer */}
      <footer className="footer">
        Made & Managed by <span className="highlight">techSaswata</span>
      </footer>
    </div>
  );
}

export default App;
