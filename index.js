/*!
 * alpha-trade
 * Copyright(c) 2024 Garrett Kegel
 * MIT Licensed
 */

'use strict';
const FetchAggregates = require("./lib/Polygon/FetchAggregates");
const OptionContractSnapshot = require("./lib/Polygon/OptionContractSnapshot");
const FetchOptionTickers = require("./lib/Polygon/FetchOptionTickers");
const FetchStockTickers = require("./lib/Polygon/FetchStockTickers");

module.exports = { FetchAggregates, OptionContractSnapshot, FetchOptionTickers, FetchStockTickers };
