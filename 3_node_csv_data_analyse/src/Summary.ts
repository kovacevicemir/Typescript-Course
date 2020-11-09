import { MatchData } from './MatchData'

export interface Analyzer {
    run(matches: MatchData[]) : string;
}

export interface OutputTarget {
    print(report: string):void;
}

export class Summary{
    constructor(public analayzer: Analyzer, public outputTarget: OutputTarget){}

    buildAndPrintReport(matches:MatchData[]):void{
        const output = this.analayzer.run(matches);
        this.outputTarget.print(output);
    }
}