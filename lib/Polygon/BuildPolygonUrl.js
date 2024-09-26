
const BuildPolygonUrl = (inputs) => {
    const baseUrlV1 = "https://api.polygon.io/v1";
    const baseUrlV2 = "https://api.polygon.io/v2";
    const baseUrlV3 = "https://api.polygon.io/v3";
    
    if (!inputs || !inputs.endpoint || inputs.endpoint === "") { console.log("Empty url."); }
    // Stocks
    else if (inputs.endpoint === "aggs") { 
        console.log("Aggregates (Bars)"); 
        return `${baseUrlV2}/${inputs.endpoint}/${inputs.ticker}/range/${inputs.multiplier}/` +
               `${inputs.timespan}/${inputs.from}/${inputs.to}?adjusted=${inputs.adjusted}&` +
               `sort=${inputs.sort}&limit=${inputs.limit}&apiKey=${process.env.POLYGON_API_KEY}`;
    }
    else if (inputs.endpoint === "grouped") { 
        console.log("Grouped Daily (Bars)");
        // https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&include_otc=true&apiKey=
    }
    else if (inputs.endpoint === "") { 
        console.log("Daily Open/Close");
        // https://api.polygon.io/v1/open-close/AAPL/2024-09-23?adjusted=true&apiKey=
    }
    else if (inputs.endpoint === "") { 
        console.log("Previous Close"); 
        // https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=
    }
    else if (inputs.endpoint === "") { 
        console.log("Trades");
        // https://api.polygon.io/v3/trades/AAPL?timestamp=2024-09-23&order=asc&limit=50000&sort=timestamp&apiKey=
     }
    else if (inputs.endpoint === "") { 
        console.log("Last Trade");
        // https://api.polygon.io/v2/last/trade/AAPL?apiKey=
     }
    else if (inputs.endpoint === "") { 
        console.log("Quotes (NBBO)");
        // https://api.polygon.io/v3/quotes/AAPL?timestamp=2024-09-23&order=asc&limit=50000&sort=timestamp&apiKey=
     }
    else if (inputs.endpoint === "") { 
        console.log("Last Quote");
        // https://api.polygon.io/v2/last/nbbo/AAPL?apiKey=
    }
    else if (inputs.endpoint === "") { 
        console.log("Snapshots: All Tickers");
        // https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?tickers=AAPL,TSLA&include_otc=true&apiKey=
        // or
        // https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?include_otc=true&apiKey=
    }
    else if (inputs.endpoint === "") { 
        console.log("Snapshots: Gainers/Losers");
        // https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?include_otc=true&apiKey=
    }
    else if (inputs.endpoint === "") { 
        console.log("Snapshots: Ticker");
        // https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers/AAPL?apiKey=
     }
    else if (inputs.endpoint === "") { 
        console.log("Snapshots: Universal Snapshot");
    }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Simple Moving Average (SMA)"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Exponential Moving Average (EMA)"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Moving Average Convergence/Divergence (MACD)"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Relative Strength Index (RSI)"); }
    // Options
    // else if (inputs.endpoint === "aggs") { console.log("Aggregates (Bars)"); }
    else if (inputs.endpoint === "open-close") { console.log("Daily Open/Close"); }
    else if (inputs.endpoint === "aggs") { console.log("Previous Close"); }
    else if (inputs.endpoint === "") { console.log("Trades"); }
    else if (inputs.endpoint === "") { console.log("Last Trade"); }
    else if (inputs.endpoint === "") { console.log("Quotes"); }
    else if (inputs.endpoint === "") { console.log("Snapshots: Option Contract"); }
    else if (inputs.endpoint === "") { console.log("Snapshots: Options Chain"); }
    else if (inputs.endpoint === "") { console.log("Snapshots: Universal Snapshot"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Simple Moving Average (SMA)"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Exponential Moving Average (EMA)"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Moving Average Convergence/Divergence (MACD)"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Relative Strength Index (RSI)"); }
    else if (inputs.endpoint === "") { console.log("Options Contract"); }
    else if (inputs.endpoint === "") { console.log("Options Contracts"); }
    // Indices
    else if (inputs.endpoint === "") { console.log("Aggregates (Bars)"); }
    else if (inputs.endpoint === "") { console.log("Previous Close"); }
    else if (inputs.endpoint === "") { console.log("Daily Open/Close"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Simple Moving Average (SMA)"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Exponential Moving Average (EMA)"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Moving Average Convergence/Divergence (MACD)"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Relative Strength Index (RSI)"); }
    else if (inputs.endpoint === "") { console.log("Snapshots: Indices Snapshot"); }
    else if (inputs.endpoint === "") { console.log("Snapshots: Universal Snapshot"); }
    // Forex
    else if (inputs.endpoint === "") { console.log("Aggregates (Bars)"); }
    else if (inputs.endpoint === "") { console.log("Grouped Daily (Bars)"); }
    else if (inputs.endpoint === "") { console.log("Previous Close"); }
    else if (inputs.endpoint === "") { console.log("Quotes (BBO)"); }
    else if (inputs.endpoint === "") { console.log("Last Quote For A Currency Pair"); }
    else if (inputs.endpoint === "") { console.log("Real-Time Currency Conversion"); }
    else if (inputs.endpoint === "") { console.log("Snapshots: All Tickers"); }
    else if (inputs.endpoint === "") { console.log("Snapshots: Gainers/Losers"); }
    else if (inputs.endpoint === "") { console.log("Snapshots: Ticker"); }
    else if (inputs.endpoint === "") { console.log("Snapshots: Universal Snapshot"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Simple Moving Average (SMA)"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Exponential Moving Average (EMA)"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Moving Average Convergence/Divergence (MACD)"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Relative Strength Index (RSI)"); }
    // Crypto
    else if (inputs.endpoint === "") { console.log("Aggregates (Bars)"); }
    else if (inputs.endpoint === "") { console.log("Grouped Daily (Bars)"); }
    else if (inputs.endpoint === "") { console.log("Daily Open/Close"); }
    else if (inputs.endpoint === "") { console.log("Previous Close"); }
    else if (inputs.endpoint === "") { console.log("Trades"); }
    else if (inputs.endpoint === "") { console.log("Last Trade for a Crypto Pair"); }
    else if (inputs.endpoint === "") { console.log("Snapshots: All Tickers"); }
    else if (inputs.endpoint === "") { console.log("Snapshots: Gainers/Losers"); }
    else if (inputs.endpoint === "") { console.log("Snapshots: Ticker"); }
    else if (inputs.endpoint === "") { console.log("Snapshots: Ticker Full Book (L2)"); }
    else if (inputs.endpoint === "") { console.log("Snapshots: Universal Snapshot"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Simple Moving Average (SMA)"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Exponential Moving Average (EMA)"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Moving Average Convergence/Divergence (MACD)"); }
    else if (inputs.endpoint === "") { console.log("Technical Indicators: Relative Strength Index (RSI)"); }
    // Reference Data Endpoints
    else if (inputs.endpoint === "") { console.log("Tickers"); }
    else if (inputs.endpoint === "") { console.log("Ticker Details"); }
    else if (inputs.endpoint === "") { console.log("Ticker News"); }
    else if (inputs.endpoint === "") { console.log("Ticker Types"); }
    else if (inputs.endpoint === "") { console.log("Market Holidays"); }
    else if (inputs.endpoint === "") { console.log("Market Status"); }
    else if (inputs.endpoint === "") { console.log("Conditions"); }
    else if (inputs.endpoint === "") { console.log("Exchanges"); }
    return "";
}

module.exports = BuildPolygonUrl;