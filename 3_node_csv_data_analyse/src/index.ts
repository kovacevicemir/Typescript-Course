import {CsvFileReader} from './CsvFileReader'
import {MatchReader} from './MatchReader'
import {Summary} from './Summary';
import {WinsAnalysis} from './analyzers/WinsAnalysis'
import {ConsoleReport} from './reportTargets/ConsoleReport'

// '28/10/2018', 'Burnley', 'Chelsea', '0', '4', 'A', 'C Pawson'
//       0     ,     1    ,     2    ,  3 ,  4  , 5 ,     6

//Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something -> 'dataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport()
)

summary.buildAndPrintReport(matchReader.matches);





