import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzer/WinsAnalysis";
import { ConsoleReport } from "./reporters/ConsoleReport";

const matchReader = new MatchReader(new CsvFileReader('football.csv'));

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);