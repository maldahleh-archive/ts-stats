import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";

const matchReader = new MatchReader(new CsvFileReader('football.csv'));

console.log(matchReader.matches);