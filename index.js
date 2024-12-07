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
const FetchCompanyInfo = require("./lib/Polygon/FetchCompanyInfo");
const FetchEtfTickers = require("./lib/Polygon/FetchEtfTickers");
const FetchCurrentStockPrice = require("./lib/Polygon/FetchCurrentStockPrice");

module.exports = { FetchAggregates, 
    OptionContractSnapshot, 
    FetchOptionTickers, 
    FetchStockTickers,
    FetchCompanyInfo,
    FetchEtfTickers,
    FetchCurrentStockPrice
};
