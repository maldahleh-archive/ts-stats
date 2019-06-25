import { MatchData } from "./MatchData";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(private readonly analyzer: Analyzer, private readonly outputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}