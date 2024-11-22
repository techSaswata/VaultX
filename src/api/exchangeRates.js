const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://v6.exchangerate-api.com/v6/";

export const fetchExchangeRates = async (baseCurrency) => {
  try {
    const response = await fetch(
      `${BASE_URL}${API_KEY}/latest/${baseCurrency}`
    );
    const data = await response.json();
    if (data.result === "success") {
      return data.conversion_rates;
    } else {
      throw new Error("Failed to fetch exchange rates");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
