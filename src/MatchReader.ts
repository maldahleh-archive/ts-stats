import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";
import { dateStringToDate } from './utils';

interface DataReader {
    data: string[][];

    read(): void;
}

export class MatchReader {
    matches: MatchData[] = [];

    constructor(private readonly reader: DataReader) {
        this.load();
    }

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6]
            ];
        });
    }
}