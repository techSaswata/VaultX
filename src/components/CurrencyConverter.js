import React, { useState, useEffect } from "react";
import CurrencyDropdown from "./CurrencyDropdown";
import { fetchExchangeRates } from "../api/exchangeRates";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const getRates = async () => {
      const rates = await fetchExchangeRates(baseCurrency);
      if (rates) {
        setExchangeRate(rates[targetCurrency]);
      }
    };
    getRates();
  }, [baseCurrency, targetCurrency]);

  useEffect(() => {
    if (exchangeRate) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  const swapCurrencies = () => {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);
  };

  return (
    <div className="converter">
      <div className="input-group">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
        />
        <CurrencyDropdown
          selectedCurrency={baseCurrency}
          onCurrencyChange={setBaseCurrency}
        />
      </div>
      <button onClick={swapCurrencies}>Swap 🔄</button>
      <div className="output-group">
        <h3>{convertedAmount || "..."}</h3>
        <CurrencyDropdown
          selectedCurrency={targetCurrency}
          onCurrencyChange={setTargetCurrency}
        />
      </div>
    </div>
  );
};

export default CurrencyConverter;
