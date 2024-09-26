const { get } = require("axios").default;
require("dotenv").config();
/**
 * 
 * @param {*} ticker - either a stock symbol or an option symbol; example, "MSFT" or "O:SPY251219C00650000"
 * @param {*} multiplier - the size of the timespan, must be an integer; example, "5 days" has a multiplier 5
 * @param {*} timespan - possible value are "second", "minute", "hour", "day", "week", "month", "quarter", "year"
 * @param {*} from - must be "YYYY-MM-DD" format and less than "to" parameter
 * @param {*} to - must be "YYYY-MM-DD" format and greater than "from" parameter
 * @param {*} adjusted - must be either true or false; if null, defaults to true
 * @param {*} sort - either "asc" or "desc"; if null, defaults to "asc" (oldest at the top)
 * @param {*} limit - default is 5000, max is 50000
 */
const FetchAggregates = async (ticker, multiplier, timespan, from, to, adjusted, sort, limit) => {
    const baseUrlV2 = "https://api.polygon.io/v2";
    const url = `${baseUrlV2}/aggs/ticker/${ticker}/range/${multiplier}/` +
               `${timespan}/${from}/${to}?adjusted=${adjusted}&` +
               `sort=${sort}&limit=${limit}&apiKey=${process.env.POLYGON_API_KEY}`;
    try {
        const response = await get(url);
        if (response.data.resultsCount) {
            return response.data.results;
        }
        return [];
    } catch (e) {
        console.error(`Error fetching aggregate data for ${ticker}.`);
        return [];
    }
    
}

module.exports = FetchAggregates;