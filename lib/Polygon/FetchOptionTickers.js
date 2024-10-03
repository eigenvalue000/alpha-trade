const { get } = require("axios").default;
require("dotenv").config();
/**
 * @param {*} symbol - the underlying stock symbol; example, "MSFT"
 */
const FetchOptionTickers = async (symbol) => {
    const baseUrlV3 = "https://api.polygon.io/v3";
    const url = `${baseUrlV3}/reference/options/contracts?` +
                `underlying_ticker=${symbol}&limit=1000&` +
                `sort=expiration_date&apiKey=${process.env.POLYGON_API_KEY}`;

    const tickers = [];
    try {
        let nextUrl = url;
        let response;

        while (nextUrl) {
            response = await get(nextUrl);
            const results = response.data.results || [];
            results.forEach(result => {
                tickers.push({
                    optionType: result.contract_type,
                    ticker: result.ticker,
                    underlyingSymbol: symbol,
                    strike: result.strike_price,
                    expiration: result.expiration_date
                });
            });
            nextUrl = response.data.next_url ? response.data.next_url + `&apiKey=${process.env.POLYGON_API_KEY}` : null;
        }
    } catch (e) {
        console.error(e);
    }
    return tickers;
}

module.exports = FetchOptionTickers;