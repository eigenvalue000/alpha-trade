const { get } = require("axios");
const { Delay } = require("time-pack");

const headers = {
    headers: {
        accept: "application/json",
        'APCA-API-KEY-ID': process.env.ALPACA_API_KEY,
        'APCA-API-SECRET-KEY': process.env.ALPACA_SECRET_KEY
    }
};

const FetchMarketStatus = async () => {
    let valid = false;
    const url = "https://api.alpaca.markets/v2/clock";
    do {
        try {
            const marketStatus = await get(url, headers);
            return marketStatus.data;
        } catch {
            console.error("Error fetching market status.");
            await Delay(1000);
        }
    } while (!valid);
}

module.exports = FetchMarketStatus;