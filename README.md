# alpha-trade

[![npm version](https://badge.fury.io/js/alpha-trade.svg)](https://badge.fury.io/js/alpha-trade)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

`alpha-trade` is a npm package with a purpose of simplifying all financial RESTful APIs. Currently,
only the Polygon.IO API is supported. Find out more about Polygon.IO here: https://polygon.io/.

---

## Features

 - 

---

## Installation

Install the package using npm:

```bash
npm install alpha-trade
```

## Usage
### Note: In your .env file, you must declare POLYGON_API_KEY=your_api_key_here
```
// .env file
POLYGON_API_KEY=asdf1234asdf1234
```
### By setting your Polygon API key in your .env file, alpha-trade can automatically grab your API key from your .env file.
### We do not store or save your API key. Examine the package to verify this. Your API key is local only to your project and not to the alpha-trade package.
### FetchAggregates(ticker, multiplier, timespan, from, to, adjusted, sort, limit)
#### Output will be an array of objects of the form:
```
 {
    v: 8,
    vw: 6.605,
    o: 6.62,
    c: 6.6,
    h: 6.62,
    l: 6.6,
    t: 1713326400000,
    n: 4
  }
```
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
