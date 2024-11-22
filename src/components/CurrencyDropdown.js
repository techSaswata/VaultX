import React from "react";

const CurrencyDropdown = ({ selectedCurrency, onCurrencyChange }) => {
  const currencies = [
    "USD",
    "EUR",
    "GBP",
    "INR",
    "AUD",
    "CAD",
    "JPY",
    "CNY",
    "KRW",
    // Add more currencies here
  ];

  return (
    <select
      value={selectedCurrency}
      onChange={(e) => onCurrencyChange(e.target.value)}
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default CurrencyDropdown;
