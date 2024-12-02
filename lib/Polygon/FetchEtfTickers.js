const { get } = require("axios").default;
require("dotenv").config();
/**
 * 
 */
const FetchEtfTickers = async () => {
    const baseUrlV3 = "https://api.polygon.io/v3";
    const url = `${baseUrlV3}/reference/tickers?` +
                `type=ETF&active=true&` +
                `limit=1000&apiKey=${process.env.POLYGON_API_KEY}`;

    const tickers = [];
    try {
        let nextUrl = url;
        let response;

        while (nextUrl) {
            response = await get(nextUrl);
            const results = response.data.results || [];
            results.forEach(result => {
                tickers.push(result.ticker);
            });
            nextUrl = response.data.next_url ? response.data.next_url + `&apiKey=${process.env.POLYGON_API_KEY}` : null;
        }
    } catch (e) {
        console.error(e);
    }
    return tickers;
}

module.exports = FetchEtfTickers;