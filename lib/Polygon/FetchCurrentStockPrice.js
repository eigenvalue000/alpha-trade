const { get } = require("axios").default;
require("dotenv").config();

const FetchCurrentStockPrice = async (ticker) => {
    const baseUrlV2 = "https://api.polygon.io/v2";
    const url = `${baseUrlV2}/snapshot/locale/us/markets/stocks/tickers/${ticker}?apiKey=${process.env.POLYGON_API_KEY}`;
    try {
        const response = await get(url);
        return response.data.ticker.day.c;
    } catch (e) {
        console.error(`Error fetching current stock price for ${ticker}.`);
        return null;
    }
}

module.exports = FetchCurrentStockPrice;