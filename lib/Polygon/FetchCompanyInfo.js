const { get } = require("axios");
require("dotenv").config();

/**
 * 
 * @param {*} ticker - must be a stock symbol; example, "MSFT"
 */
const FetchCompanyInfo = async (ticker) => {
    const url = `https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${process.env.POLYGON_API_KEY}`;
    try {
        if (ticker === "") {
            throw Error();
        }
        const response = await get(url);
        return response.data.results;
    } catch (e) {
        if (ticker === "") {
            ticker = "empty ticker";
        }
        console.error(`Error fetching company information for ${ticker}.`);
        return {};
    }
}

module.exports = FetchCompanyInfo;