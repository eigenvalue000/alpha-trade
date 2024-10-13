# alpha-trade

`alpha-trade` is a npm package with a purpose of simplifying all financial RESTful APIs. Currently,
only the Polygon.IO API is supported. Find out more about Polygon.IO here: https://polygon.io/.

[![npm version](https://badge.fury.io/js/alpha-trade.svg)](https://badge.fury.io/js/alpha-trade)
![Node.js version](https://img.shields.io/badge/node-%3E%3D%2014.0.0-brightgreen)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Installation

Install the package using npm:

```bash
npm install alpha-trade
```

## Usage
Note: In your .env file, you must declare POLYGON_API_KEY=your_api_key_here
```
// .env file
POLYGON_API_KEY=asdf1234asdf1234
```
By setting your Polygon API key in your .env file, alpha-trade can automatically grab your API key from your .env file.
We do not store or save your API key. Examine the package to verify this. Your API key is local only to your project and not to the alpha-trade package.

---

### FetchAggregates(ticker, multiplier, timespan, from, to, adjusted, sort, limit)
#### Example usage:
```
const a = require("alpha-trade");

const main = async () => {
    console.log(await a.FetchAggregates("O:SPY251219C00650000", 1, "day", "2000-01-01", "2024-09-25", true, "desc", 50000));
}
main()

```

Or:

```
const { FetchAggregates } = require("alpha-trade");

const main = async () => {
    console.log(await FetchAggregates("O:SPY251219C00650000", 1, "day", "2000-01-01", "2024-09-25", true, "desc", 50000));
}
main()
```
---

### OptionContractSnapshot(underlyingSymbol, optionTicker)
#### Example usage:
```
const a = require("alpha-trade");

const main = async () => {
    console.log(await a.OptionContractSnapshot("SPY", "O:SPY251219C00650000"));
}
main()

```

Or:

```
const { OptionContractSnapshot } = require("alpha-trade");

const main = async () => {
    console.log(await OptionContractSnapshot("SPY", "O:SPY251219C00650000"));
}
main()
```

---

### FetchOptionTickers(symbol)
#### Example usage:
```
const a = require("alpha-trade");

const main = async () => {
    console.log(await a.FetchOptionTickers("SPY"));
}
main()

```

Or:

```
const { FetchOptionTickers } = require("alpha-trade");

const main = async () => {
    console.log(await FetchOptionTickers("SPY"));
}
main()
```

### FetchStockTickers()
#### Example usage:
```
const a = require("alpha-trade");

const main = async () => {
    console.log(await a.FetchOptionTickers());
}
main()

```

Or:

```
const { FetchOptionTickers } = require("alpha-trade");

const main = async () => {
    console.log(await FetchOptionTickers());
}
main()
```