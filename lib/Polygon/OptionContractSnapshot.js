const { get } = require("axios");
require("dotenv").config();
/**
 * 
 * @param {*} underlyingSymbol - the stock symbol of the asset; example, "SPY"
 * @param {*} optionTicker - the option ticker; example, "O:SPY251219C00650000"
 * @returns 
 */
const OptionContractSnapshot = async (underlyingSymbol, optionTicker) => {
    const baseUrlV3 = "https://api.polygon.io/v3";
    const url = `${baseUrlV3}/snapshot/options/${underlyingSymbol}/${optionTicker}?apiKey=${process.env.POLYGON_API_KEY}`;
    try {
        const response = await get(url);
        return response.data.results;
    } catch (e) {
        console.error(`Error fetching snapshot data for ${optionTicker}.`);
        return {};
    }
}

module.exports = OptionContractSnapshot;