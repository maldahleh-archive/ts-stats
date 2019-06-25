"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var matchReader = new MatchReader_1.MatchReader(new CsvFileReader_1.CsvFileReader('football.csv'));
console.log(matchReader.matches);
